import React, { useState } from "react";
import "./prodCalc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faRotateLeft,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { handleModal, handleModal1 } from "./prodCalcFuncs";
import ProdModal from "./prodmodal";
import ProdModalPurchace from "./prodmodal";
import NewCard from "../component/card/NewCard";
import * as IngAction from "../redux/reduxSlice/ingredient";
import * as chosenAction from "../redux/reduxSlice/chosen";
import Table from "../table/Table";
import Recipe from "./recipe";
const columns = [
  {
    path: "title",
    label: "# image",
  },
  {
    path: "Name",
    label: "Name",
  },
  {
    path: "quantity",
    label: "quantity",
  },
  {
    path: "Price",
    label: "Price",
  },
];
export default function ProductCalc() {
  let dispatch=useDispatch()
  const [selectProdModal, setselectProdModal] = useState(false);
  const [selectProdModal1, setselectProdModal1] = useState(false);
  const [selectedObj, setselectedObj] = useState({});
  const [prodPrice, setprodPrice] = useState(0);
  const [prodIng, setprodIng] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [ing, seting] = useState([
    {
      _id: "htlmdirte",
      image: "image",
      name: "smid",
      quantity: 200,
      price: 200,
      measureIn: "g",
    },
    {
      _id: "htlmdirte2",
      image: "image",
      name: "zebda",
      quantity: 100,
      price: 300,
      measureIn: "g",
    },
    {
      _id: "htlmdirte2",
      image: "image",
      name: "zebda",
      quantity: 100,
      price: 300,
      measureIn: "g",
    },
    {
      _id: "htlmdirte2",
      image: "image",
      name: "zebda",
      quantity: 100,
      price: 300,
      measureIn: "g",
    },
  ]);
  // const chosenProdsRedux = useSelector((state) => state.entities.chosenProd.list);
  const chosenProdRedux = useSelector((state) => state.entities.chosen.chosenprod);
  const chosenProdsRedux1 = useSelector((state) => state.entities.chosen.chosenprods);
  const ingredient = useSelector((state) => state.entities.ingredient.list);
  const producedQuantRedux = useSelector((state) => state.entities.ingredient.producedQuant);
  const chosenIngs = useSelector((state) => state.entities.chosen.chosenpurchases);
  const chosenprice = useSelector((state) => state.entities.chosen.chosenprice);
  const chosenproducedQuantRedux = useSelector((state) => state.entities.chosen.chosenquantity);
  const chosen = useSelector((state) => state.entities.chosen);
  // console.log("ingredient", ingredient);
  // console.log("chosen", chosenIngs);
  /*
  ing={id:hjfhjfj,prodid:djfhjjkdjkf,quantity:100}
  */
  const handleChange=(e)=>{
    let newQuant=e.target.value
    let newchosenproducedQuantRedux={...chosenproducedQuantRedux}
    newchosenproducedQuantRedux.quantity=newQuant
    let newproducedQuant=[...producedQuantRedux]
    let index=newproducedQuant.findIndex(dt=>dt.prodId===newchosenproducedQuantRedux.prodId)
    newproducedQuant[index]=newchosenproducedQuantRedux
    dispatch(IngAction.modifyproducedQuant(newproducedQuant))
    dispatch(chosenAction.modifychosenquantity(newchosenproducedQuantRedux));
    // console.log("newproduced quant",newchosenproducedQuantRedux,newproducedQuant);
  }
  const handleFocus=(e)=>{
    e.target.select()
  
  }
  const handleBlur=(e)=>{
    if(quantity==""){
      setquantity(1)
    }
  }
  
  return (
    <div className="prodCalc">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div className="up-left">
            <p
              onClick={() => handleModal(setselectProdModal)}
              className="item-plus item-plus-left"
            >
              <FontAwesomeIcon className="item-icon" icon={faPlus} />
            </p>
            <p
              className="item-plus item-plus-left"
              onClick={() => handleReset(dispatch)}
            >
              <FontAwesomeIcon className="item-icon" icon={faRotateLeft} />
            </p>
            <h1>Product</h1>
          </div>
          <div>
            {Object.keys(chosenProdRedux).length !== 0 && (
              <Card data={chosenProdRedux} />
            )}
          </div>
        </div>
        {Object.keys(chosenprice).length !== 0&& (
          <div style={{ width: "350px", position: "relative" }}>
            <h2 style={{ position: "absolute", top: "-34px" }}>
              selling price
            </h2>
            <div style={{ display: "flex", paddingTop: "30px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "20px" }}>prod price</span>
                <span style={{ alignSelf: "center" }}>{chosenprice}</span>
              </div>
              *
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px" }}>intrest rate</span>
                <input
                  style={{ width: "40px", alignSelf: "center" }}
                  type="text"
                />
              </div>
              =
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "20px" }}>selling price</span>
                <input
                  style={{ width: "40px", alignSelf: "center" }}
                  type="text"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/*selected product */}

        <ProdModal
          selectProdModal={selectProdModal}
          setselectProdModal={setselectProdModal}
          ingredient={false}
        />
        <ProdModalPurchace
          selectProdModal={selectProdModal1}
          setselectProdModal={setselectProdModal1}
          ingredient={true}
        />
      
        {Object.keys(chosenProdRedux).length !== 0 &&<Recipe/>}
     {/* {Object.keys(chosenProdRedux).length !== 0 && <div className="up-left">
        <p
          onClick={() => handleModal1(setselectProdModal1)}
          className="item-plus item-plus-left"
        >
          <FontAwesomeIcon className="item-icon" icon={faPlus} />
        </p>
        <p
          className="item-plus item-plus-left"
          onClick={() => handleReset(dispatch)}
        >
          <FontAwesomeIcon className="item-icon" icon={faRotateLeft} />
        </p>
        <h1>Ingredient</h1>
      </div>} */}
      {/* {chosenIngs.length !== 0 &&<div>
        <div>
          <span>to create</span>
          <input onBlur={handleBlur}  
          onFocus={handleFocus} onChange={handleChange} 
          value={chosenproducedQuantRedux.quantity} style={{ width: "40px" }} type="text" />
          <span>pcs you need :</span>
        </div>
        <div>
          <Table
            tableData={chosenIngs}
            columns={columns}
            selectedObj={selectedObj}
            deletes={false}
            quantManager={false}
            image={true}
            quantForm={true}
          />
        </div>
       
      </div>} */}

    </div>
  );
}
