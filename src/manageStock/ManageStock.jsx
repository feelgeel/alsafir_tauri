import React from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import "./manageStock.css"
import * as chosenProdsAction from "../redux/reduxSlice/chosenProducts";
import { useSelector, useDispatch } from "react-redux";
import AddToDb from "../component/addtoDb/AddToDb";
import UpdateDb from "../component/updateDb/UpdateDb";
// import DeleteStock from "./DeleteStock";
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
import AddProdModal from "./AddProdModal";
import ProdComponent from "./ProdComponent";
import PurchasesComp from "./PurchasesComp";
import AddProdToStock from "./AddProdToStock";
import AddPurchaseToStock from "./AddPurchaseToStock";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormUi from "../forms/FormUi";
export default function ManageStock({
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
  const chosenProd = useSelector((state) => state.entities.chosenProd.list);
  const DbBreadRedux = useSelector((state) => state.entities.bread.bread);
  const stBreadRedux = useSelector((state) => state.entities.bread.breadSt);
  const DbpatisserieRedux = useSelector((state) => state.entities.patisserie.list);
  const stpatisserieRedux = useSelector((state) => state.entities.patisserie.patisserieSt);
  // console.log(DbBreadRedux);
  let [selectedProd, setselectedProd] = useState({});
  let [addtoDbModal, setaddtoDbModal] = useState(false);
  let [updateDbModal, setupdateDbModal] = useState(false);
  let [addtoPurchasesModal, setaddtoPurchasesModal] = useState(false);
  let [addtoStockModal, setaddtoStockModal] = useState(false);
  let [updatetoPurchasesModal, setupdatetoPurchasesModal] = useState(false);
  let [addtoSTModal, setaddtoSTModal] = useState(false);
  let [addpurchasetoSTModal,setaddpurchasetoSTModal] = useState(false);
  let [products, setproducts] = useState(true);
  let [purchases, setpurchases] = useState(false);
  let [bread, setbread] = useState(true);
  let [patisserie, setpatisserie] = useState(false);
  const [prodType, setprodType] = useState("products");
  const [prodType2, setprodType2] = useState("bread");
  const [purchaseType, setpurchaseType] = useState("zebda");
  const [startDate, setStartDate] = useState(new Date());
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
  const handleSelected2 = (dt) => {
    switch (dt) {
      case "bread":
        setprodType2("bread");
        break;
      case "patisserie":
        setprodType2("patisserie");
        break;

      default:
        break;
    }
  };
  const handleAdd = () => {
    if(prodType==="products"){

      setaddtoSTModal(true);
    }else{
      
      setaddpurchasetoSTModal(true);
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
  const handleList = (data) => {
    dispatch(chosenProdAction.setChosenProd(data));
    setupdateDbModal(true);
  };

  // console.log("startDate",stBreadRedux)
  return (
    <div>
      <div className="shoppingList">
        {/* <h1>----manage stock----</h1> */}
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
        <div>
        <p
              style={{ width: "1rem", margin: ".5rem" }}
              onClick={handleAdd}
              className="item-plus item-plus-left"
            >
              <FontAwesomeIcon className="item-icon" icon={faPlus} />
            </p>
        </div>
        {prodType === "products" && (
          <ProdComponent
            setprodType2={setprodType2}
            prodType2={prodType2}
            setaddtoDbModal={setaddtoDbModal}
            setupdateDbModal={setupdateDbModal}
            bread={stBreadRedux}
            patisserie={stpatisserieRedux}
          />
        )}

        {prodType === "purchases" && (
          <PurchasesComp
            setpurchaseType={setpurchaseType}
            setaddtoPurchasesModal={setaddtoPurchasesModal}
            purchaseType={purchaseType}
            setupdatetoPurchasesModal={setupdatetoPurchasesModal}
            type="st"
          />
        )}
      </div>
      <AddProdToStock
      addtoSTModal={addtoSTModal}
      setaddtoSTModal={setaddtoSTModal}
      />     
       {/* <AddToDb addtoDbModal={addtoDbModal} setaddtoDbModal={setaddtoDbModal} /> */}
      {/* <AddProdModal
      addtoStockModal={addtoStockModal} setaddtoStockModal={setaddtoStockModal}
      /> */}
      {/* <AddToPurchases
        addtoPurchasesModal={addtoPurchasesModal}
        setaddtoPurchasesModal={setaddtoPurchasesModal}
      /> */}
      <AddPurchaseToStock
      addpurchasetoSTModal={addpurchasetoSTModal}
      setaddpurchasetoSTModal={setaddpurchasetoSTModal}
      />

      <UpdateDb
        selectedDt={chosenProd}
        updateDbModal={updateDbModal}
        setupdateDbModal={setupdateDbModal}
      />
    {/* <div>
      <DatePicker
      showTimeSelect
       selected={startDate} 
      onChange={(date) => setStartDate(date)}
      timeCaption="time"
      showIcon
      isClearable
      dateFormat="Pp"
      // dateFormat="dd-MM-yyyy HH:mm"
      />

    </div> */}
    <FormUi/>
    </div>
  );
}
