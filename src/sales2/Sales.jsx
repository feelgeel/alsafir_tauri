import React, { useState } from "react";
import "./sales.css";
import Card from "../card/Card";
import Search from "../search/Search";
import Table from "../table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  handleUpdate,
  handleDelete,
  handleIncreaseQuant,
  handleDecreaseQuant,
  handleAddProd,
  handleReset,
  handleModal,
  handleSold,
  handleSort,
  handleWait
} from "./salesFuctions";
import { funcs } from "./manageQuantityFuncs";
import { useDispatch, useSelector } from "react-redux";
import AddSales from "../manageSales/AddSales";
import ManageQuantity from "../component/manageQuantity/ManageQuantity";
import { useEffect } from "react";
export default function Sales() {
  const dispatch = useDispatch();
  const salesRedux = useSelector((state) => state.entities.sales.list);
  const salesListRedux = useSelector((state) => state.entities.salesList.list);
  const waitListRedux = useSelector((state) => state.entities.waitList.list);
  const waitRedux = useSelector((state) => state.entities.wait.list);
  const chosenProdsRedux = useSelector((state) => state.entities.chosenProducts.list);
  const [selectedObj, setselectedObj] = useState({});
  const [totalPrice, settotalPrice] = useState(0);
  const [updateChosen, setupdateChosen] = useState(false);
    //modals
    const [addToSalesModal, setaddToSalesModal] = useState(false);
    const [manageQuantmodal, setmanageQuantmodal] = useState(false);
      //manage quant
  const [manageQuant, setmanageQuant] = useState(true);
  const [addToChosen, setaddToChosen] = useState(false);
  const [saved, setsaved] = useState(false);
  const[search,setsearch]=useState("")
  const[chosenprod,setchosenprod]=useState(chosenProdsRedux)
  const [price, setprice] = useState(true);
  const [managePrice, setmanagePrice] = useState(false);
  // const [active, setactive] = useState(false);
  const tableData = [
    {
      _id: "111223",
      name: "sales",
      liked: false,
    },
    {
      _id: "11166523",
      name: "kamezake",
      liked: false,
    },
    {
      _id: "11166523",
      name: "manage db",
      liked: false,
    },
    {
      _id: "11166523",
      name: "ouzounou",
      liked: false,
    },
    {
      _id: "11166523",
      name: "lufy",
      liked: false,
    },
    {
      _id: "11196523",
      name: "nami",
      liked: false,
    },
    {
      _id: "11166526",
      name: "robin",
      liked: false,
    },
    {
      _id: "11156523",
      name: "dragonos",
      liked: false,
    },
    {
      _id: "11167523",
      name: "vintage",
      liked: false,
    },
    {
      _id: "1116656523",
      name: "old",
      liked: false,
    },
    {
      _id: "11164423",
      name: "granny",
      liked: false,
    },
    {
      _id: "111698523",
      name: "shinzoko",
      liked: false,
    },
  ];
  const columns = [
    {
      path: "title",
      label: "# produit",
    },
    {
      path: "QT",
      label: "Qt",
    },
    {
      path: "Price",
      label: "price",
    },
    {
      path: "Delete",
      label: (
        <p className="btn">
          {" "}
          <FontAwesomeIcon className="" icon={faXmark} />
        </p>
      ),
    },
  ];
  let dtArr = [
    {
      _id: "1",
      image: "",
      name: "mounice",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "2",
      image: "",
      name: "zitoune",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "3",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "4",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "5",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "6",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "7",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "8",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "9",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "10",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "11",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "12",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "13",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "14",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "15",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
    {
      _id: "16",
      image: "",
      name: "petit pain",
      quantity: 2,
      price: 25,
      delete: <p className="btn">x</p>,
    },
  ];
  let filtered=search===""?chosenProdsRedux:chosenProdsRedux.filter(prod=>prod.name.toLowerCase().startsWith(search.toLowerCase()))
  // console.log("filtered",filtered);
  const handleCardClicked = (dt) => {
    setselectedObj(dt);
    // console.log(dt);
  };
  const totalPriceFunc=()=>{
    let newTotalPrice=0
    chosenProdsRedux.map(dt=>newTotalPrice+=Number(dt.price)*Number(dt.quantity))
    settotalPrice(newTotalPrice)
  }
  useEffect(()=>{
    totalPriceFunc()
  },[chosenProdsRedux])
const handleAddProd=()=>{
  setaddToSalesModal()
}
// console.log('search',search);
  return (
    <div className="sales">
      <div className="left">
        <div className="up-left">
            <p onClick={()=>handleModal(setaddToSalesModal)} className="item-plus item-plus-left">
              <FontAwesomeIcon className="item-icon" icon={faPlus} />
            </p>
            <p className="item-plus item-plus-left"  onClick={() => handleReset(dispatch)}>
              <FontAwesomeIcon className="item-icon" icon={faRotateLeft} />
            </p>
        </div>
        <div className="down-left">
        {chosenProdsRedux.length === 0 && <h2>sales List is empty</h2>}
          {chosenProdsRedux.length !== 0 && chosenProdsRedux.map((data) => {
            let active = false;
            selectedObj._id == data._id ? (active = true) : (active = false);
            return (
              <Card
                key={chosenProdsRedux.name}
                data={data}
                onclick={handleCardClicked}
                active={active}
              />
            );
          })}
        </div>
      </div>
     {<div className="right">
        <div className="up">
          <Search setsearch={setsearch}/>
        {chosenProdsRedux.length !== 0 && <Table
            tableData={filtered} 
            columns={columns}
            selectedObj={selectedObj}
            onclick={handleCardClicked}
            handleInc={(dt)=>handleIncreaseQuant(dt,dispatch,chosenProdsRedux)}
            handleDec={(dt)=>handleDecreaseQuant(dt,dispatch,chosenProdsRedux)}
            handleDelete={(dt)=>handleDelete(dt,dispatch,chosenProdsRedux)}
          />}
        </div>
        <div className="down-right">
          <p className="quantity">Total Produit:{chosenProdsRedux.length===0?0:chosenProdsRedux.length}</p>
          <p className="total-price">{totalPrice} DA</p>
          <div className="buttons">
            <p className="payment" onClick={()=>handleSold(salesRedux,chosenProdsRedux,
  salesListRedux,dispatch)}>Payment</p>
            <p className="waitlist clicked" onClick={()=>handleWait(waitRedux,chosenProdsRedux,
  waitListRedux,dispatch)}>WaitList</p>
          </div>
        </div>
      </div>}
        {/* sales modal */}
        <AddSales
        setupdateChosen={setupdateChosen}
        setaddToSalesModal={setaddToSalesModal}
        addToSalesModal={addToSalesModal}
        setaddToChosen={setaddToChosen}
        setmanageQuantmodal={setmanageQuantmodal}
        setsaved={setsaved}
        products={true}
        purchases={false}

      />

      {/* addtochosen */}

      <ManageQuantity
      chosenProduct={chosenProdsRedux}
        funcs={funcs}
        updateChosen={updateChosen}
        manageQuantmodal={manageQuantmodal}
        setmanageQuantmodal={setmanageQuantmodal}
        manageQuant={manageQuant}
        saved={saved}
        price={price}
        managePrice={managePrice}
      />
    </div>
  );
}
