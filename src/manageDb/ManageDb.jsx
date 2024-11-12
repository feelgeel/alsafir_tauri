import React from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import "./manageDb.css";
import * as chosenProdsAction from "../redux/reduxSlice/chosenProducts";
import { useSelector, useDispatch } from "react-redux";
import AddToDb from "../component/addtoDb/AddToDb";
import UpdateDb from "../component/updateDb/UpdateDb";
// import DeleteDB from "./DeleteDB";
import { useState } from "react";
// import Modal from "react-modal";
import Card from "../card/Card";
// import ManageQuantity from "../component/manageQuantity/ManageQuantity";
import * as chosenProdAction from "../redux/reduxSlice/chosenProd";
import { funcs } from "./manageQuantityFuncs";
import AddToPurchases from "../component/addToPurchase/AddToPurchases";
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
import Cards from "../card/Cards";
import UpdatePurchases from "../update purchase/UpdatePurchases";
import PurchasesComp from "./PurchasesComp";
import ProdComponent from "./ProdComponent";
export default function ManageDb({
  salesModal,
  setsalesModal,
  returnsModal,
  setreturnsModal,
  purchasesModal,
  setpurchasesModal,
  manageDbModal,
  setmanageDbModal,
  historyModal,
  sethistoryModal,
}) {
  let dispatch = useDispatch();
  const breadRedux = useSelector((state) => state.entities.bread.bread);
  const purchaseDbRedux = useSelector(
    (state) => state.entities.purchaseDb.list
  );

  const chosenProd = useSelector((state) => state.entities.chosenProd.list);
  let [selectedProd, setselectedProd] = useState({});
  let [addtoDbModal, setaddtoDbModal] = useState(false);
  let [updateDbModal, setupdateDbModal] = useState(false);
  let [addtoPurchasesModal, setaddtoPurchasesModal] = useState(false);
  let [updatetoPurchasesModal, setupdatetoPurchasesModal] = useState(false);
  let [products, setproducts] = useState(true);
  let [purchases, setpurchases] = useState(false);
  let [bread, setbread] = useState(true);
  let [patisserie, setpatisserie] = useState(false);
  const [prodType, setprodType] = useState("products");
  const [prodType2, setprodType2] = useState("bread");
  const [purchaseType, setpurchaseType] = useState("zebda");
  let classSelected1 = "item item-active";
  let classUnselected1 = "item ";
  let classSelected2 = "item-icon icon-active";
  let classUnselected2 = "item-icon ";
  let classSelected3 = "name-item name-active";
  let classUnselected3 = "name-item ";
  const handleSelected = (dt) => {
    switch (dt) {
      case "products":
        setprodType("products");
        break;
      case "purchases":
        setprodType("purchases");
        break;

      default:
        break;
    }
  };

  const handleAddPurchase = () => {
    setaddtoPurchasesModal(true);
  };
  const handleBread = () => {
    setbread(true);
    setpatisserie(false);
  };
  const handlePatiss = () => {
    setbread(false);
    setpatisserie(true);
  };

  const onUpdatePurchases = (data) => {
    console.log(data);
    dispatch(chosenProdAction.setChosenProd(data));
    setupdatetoPurchasesModal(true);
  };

  // console.log("manageDb",purchaseDbRedux)
  return (
    <div>
      <div className="shoppingList">
        {/* <h1>----manage db----</h1> */}
        <div>
          <div className="d-flex" style={{ justifyContent: "flex-start" }}>
            <div onClick={() => {handleSelected("products");}}
              className={prodType === "products" ? classSelected1 : classUnselected1}>
              {" "}
              <FontAwesomeIcon
                className={prodType === "products" ? classSelected2 : classUnselected2 }
                icon={faBarcode}
              />
              <p
                className={prodType === "products" ? classSelected3 : classUnselected3 }>
                products{" "}
              </p>
            </div>
            <div onClick={() => {handleSelected("purchases");}}
              className={prodType === "purchases" ? classSelected1 : classUnselected1}
            >
              <FontAwesomeIcon className={prodType === "purchases" ? classSelected2 : classUnselected2 }
                icon={faBarcode}
              />
              <p className={prodType === "purchases" ? classSelected3 : classUnselected3 }>
                purchases
              </p>
            </div>
          </div>
        </div>

        {prodType === "products" && (
          <ProdComponent
            setprodType2={setprodType2}
            prodType2={prodType2}
            setaddtoDbModal={setaddtoDbModal}
            setupdateDbModal={setupdateDbModal}
          />
        )}

        {prodType === "purchases" && (
          <PurchasesComp
            setpurchaseType={setpurchaseType}
            setaddtoPurchasesModal={setaddtoPurchasesModal}
            purchaseType={purchaseType}
            setupdatetoPurchasesModal={setupdatetoPurchasesModal}
          />
        )}
      </div>
      <AddToDb addtoDbModal={addtoDbModal} setaddtoDbModal={setaddtoDbModal} />
      <AddToPurchases
        addtoPurchasesModal={addtoPurchasesModal}
        setaddtoPurchasesModal={setaddtoPurchasesModal}
      />

      <UpdateDb
        selectedDt={chosenProd}
        updateDbModal={updateDbModal}
        setupdateDbModal={setupdateDbModal}
      />
      <UpdatePurchases
        selectedDt={chosenProd}
        updatetoPurchasesModal={updatetoPurchasesModal}
        setupdatetoPurchasesModal={setupdatetoPurchasesModal}
      />
    </div>
  );
}
