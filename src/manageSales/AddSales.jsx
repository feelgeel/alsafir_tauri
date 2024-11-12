import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewCard from "../card/Card";
import * as chosenProdAction from "../redux/reduxSlice/chosenProd";
import Modal from "react-modal";
import "./addSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faBarcode,
  faReply,
  faBasketShopping,
  faDatabase,
  faClockRotateLeft,
  faPowerOff,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
export default function AddSales({
  setupdateChosen,
  setaddToSalesModal,
  addToSalesModal,
  setmanageQuantmodal,
  setsaved,
  products = true,
  purchases = false,
}) {
  const dispatch = useDispatch();
  const breadRedux = useSelector((state) => state.entities.bread.bread);
  const pattiseryRedux = useSelector((state) => state.entities.patisserie.list);
  const chosenProdRedux = useSelector(
    (state) => state.entities.chosenProd.list
  );
  const chosenProductsRedux = useSelector(
    (state) => state.entities.chosenProducts.list
  );
  const salesRedux = useSelector((state) => state.entities.sales.list);
  const purchaseDbRedux = useSelector(
    (state) => state.entities.purchaseDb.list
  );
  const [breadDb, setbreadDb] = useState(breadRedux);
  const [patisserieDb, setpatisserieDb] = useState(pattiseryRedux);
  const [bread, setbread] = useState(true);
  const [patisserie, setpatisserie] = useState(false);
  let newProdDb = [...breadDb];
  const [selected, setselected] = useState("bread");
  let classSelected1 = "item item-active";
  let classUnselected1 = "item ";
  let classSelected2 = "item-icon icon-active";
  let classUnselected2 = "item-icon ";
  let classSelected3 = "name-item name-active";
  let classUnselected3 = "name-item ";
  const handleSelected=(dt)=>{
  switch (dt) {
    case "bread":
      setselected("bread")
      setbread(true);
      setpatisserie(false);
      break;
    case "patissery":
      setselected("patissery")
      setbread(false);
      setpatisserie(true);
      break;
  
    default:
      break;
  }
  }
  const handleAddToList = (item) => {
    dispatch(chosenProdAction.setChosenProd(item));
    setmanageQuantmodal(true);
    setupdateChosen(false);
    setsaved(true);
    // handlePageChange()
    // console.log(item);
  };
  const handleUpdateChosen = (item) => {
    dispatch(chosenProdAction.setChosenProd(item));
    setmanageQuantmodal(true);
    setupdateChosen(true);
    setsaved(false);
  };
  const handleExit = () => {
    setaddToSalesModal(false);
    // console.log("exit");
  };
  let customStyles1 = {
    content: {
      zIndex: "99999",
      position: "fixed",
    },
  };
  const handleBread = () => {
    setbread(true);
    setpatisserie(false);
  };
  const handlePatiss = () => {
    setbread(false);
    setpatisserie(true);
  };
  return (
    <Modal
      isOpen={addToSalesModal}
      onRequestClose={() => setaddToSalesModal(false)}
      style={customStyles1}
    >
      <div className="addsales">
        {products && (
          <div className="productList">
            <div className="prod-selection">
              <div onClick={() => {handleSelected("bread")}}
                className={ selected === "bread" ? classSelected1 : classUnselected1}
              >
                <FontAwesomeIcon className={selected === "bread" ? classSelected2 : classUnselected2 }
                  icon={faBarcode}
                />
                <p className={selected === "bread" ? classSelected3 : classUnselected3 }>
                  bread
                </p>
              </div>
              <div onClick={() => {handleSelected("patissery") }}
                className={selected === "patissery" ? classSelected1 : classUnselected1}
              >
                <FontAwesomeIcon className={selected === "patissery" ? classSelected2 : classUnselected2}
                  icon={faBarcode}
                />
                <p className={selected === "patissery" ? classSelected3 : classUnselected3}
                >patissery
                </p>
              </div>
              
              {/* <button
                className={bread ? "btn active" : "btn"}
                onClick={() => handleBread()}
              >
                bread
              </button>
              <button className={patisserie ? "btn active" : "btn"}
                onClick={() => handlePatiss()}> pattisery</button> */}
            </div>
            {/* <h2>Products</h2> */}
            {bread && (
              <div style={{ display: "flex" }}>
                {breadDb.map((item) => {
                  return (
                    <NewCard
                      key={item._id}
                      onclick={() => handleAddToList(item)}
                      data={item}
                    />
                  );
                })}
              </div>
            )}
            {patisserie && (
              <div style={{ display: "flex" }}>
                {patisserieDb.map((item) => {
                  return (
                    <NewCard
                      key={item._id}
                      onclick={() => handleAddToList(item)}
                      data={item}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

        {purchases && (
          <div className="productList">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {purchaseDbRedux.map((item) => {
                return (
                  <NewCard
                    key={item._id}
                    onclick={() => handleAddToList(item)}
                    data={item}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="chosenList">
          <h2 style={{ marginBottom: "0" }}>chosen</h2>
          <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",alignItems:"center" }}>
            {chosenProductsRedux.map((item) => {
              // console.log(item);
              return (
                <NewCard onclick={() => handleUpdateChosen(item)} data={item} />
              );
            })}
          </div>
        </div>
        <p className="chosenExit" onClick={() => handleExit()}>
          x
        </p>
      </div>
    </Modal>
  );
}
