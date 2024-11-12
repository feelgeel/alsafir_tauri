import React, { useState } from "react";
import "./managequant.css";
import NewCard from "../../card/Card";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import FormQuant from "./FormQuant";
import FormPrice from "./FormPrice";
import * as navAction from "../../redux/reduxSlice/navActive";
import FormProdCalc from "./FormProdCalc";
import FormManageStProd from "./FormManageStockProd";
import FormManageStPurchase from "./FormManageStockPurchase";

export default function ManageQuantity({
  chosenProduct,
  funcs,
  manageQuantmodal,
  setmanageQuantmodal,
  manageQuant = false,
  saved = "product",
  managePrice = false,
  perimationDate=false,
  submitTitle="save",
  prodCalc=false,
  manageStProd=false,
  manageStPurchases=false,
  ing=false
}) {
  const chosenProdRedux = useSelector((state) => state.entities.chosen.chosenprod);
  const chosenProductsRedux = useSelector((state) => state.entities.chosenProducts.list );
  const redux = useSelector((state) => state.entities);
  const ingRedux = useSelector((state) => state.entities.ingredient.ing);
  const producedPriceRedux = useSelector((state) => state.entities.ingredient.prodPrice);
  const chosenpriceRedux = useSelector((state) => state.entities.chosen.chosenprice);
  const zebdaSt = useSelector((state) => state.entities.zebda.zebdaSt);
  const chosenIngRedux = useSelector((state) => state.entities.chosen.chosenIng);
  let quant = chosenProdRedux.quantity || 1;
  let priceRedux = chosenProduct.price;
  const dispatch = useDispatch();
  const [quantityDt, setquantityDt] = useState(quant);
  const [priceDt, setpriceDt] = useState(priceRedux);
  const chosenProds = useSelector((state) => state.entities.chosenProducts.list);
  const {
    handleDecreaseQuant,
    handleDelete,
    handleIncreaseQuant,
    handleQuit,
    handleSavePurchases,
    handleUpdate,
    handleIncreasePrice,
    handleDecreasePrice,
    handleSaveStock,
    handleAddIng,
    handleAddStProd,
    handleAddStPurchase,
  } = funcs;
  // console.log("funcs",producedPriceRedux);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth:"200px",
      minHeight:"300px",
    },
  };

  const handleProdCalc = () => {
    dispatch(navAction.modifyNavActive("prodCalc"))
  };
  const handleQuant = (e) => {
    setquantityDt(e.target.value);
  };
  const handlequant = (e) => {
    // console.log(e);
    setquantityDt(e.quantity);
    // console.log(quantityDt);
    if (saved) {
      handleSave(setmanageQuantmodal, dispatch, chosenProduct, e.quantity,ingRedux,chosenProdRedux);
    }else if(perimationDate){
      handleSaveStock()
    } else {
      handleUpdate(
        setmanageQuantmodal,
        dispatch,
        chosenProduct,
        e.quantity,
        chosenProductsRedux
      );
    }
    // setpriceDt(e.price)
  };
  const handleManagePrice = (values) => {
    setquantityDt(values.quantity);
    setpriceDt(values.price);
    if (saved==="purchase") {
      handleSavePurchases(
        setmanageQuantmodal,
        dispatch,
        chosenProduct,
       values,
       redux

      );
    }else if(saved==="product"){
      handleSaveStock
    } else {
      handleUpdate(
        setmanageQuantmodal,
        dispatch,
        chosenProduct,
        chosenProductsRedux,
        values.quantity,
        values.price
      );
    }
  };
  const handleBtnClick=()=>{
    dispatch(navAction.modifyNavActive("prodCalc"))
  }
  // console.log("chosenIngRedux",chosenpriceRedux);
  return (
    <Modal
      isOpen={manageQuantmodal}
      onRequestClose={() => setmanageQuantmodal(false)}
      style={customStyles}
    >
{ing==="true"&&<div>
  <h2>prodCalculator</h2>
</div>}
{ing==="true"&&<FormProdCalc
              onsubmit={(dt)=>handleAddIng(dt,chosenIngRedux,chosenProdRedux,dispatch,setmanageQuantmodal)}
              title={submitTitle}
              saved={saved}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />}
            {manageStProd==="true"&&<h2>manage stock product</h2>}
{manageStProd==="true"&&Object.keys(chosenpriceRedux).length!=0&&<FormManageStProd
              onsubmit={(dt)=>handleAddStProd(dt,chosenIngRedux,
                chosenProdRedux,dispatch,setmanageQuantmodal)}
              title={submitTitle}
              saved={saved}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />}
{manageStProd==="true"&&Object.keys(chosenpriceRedux).length==0&& 
<div><h1>no reccete pls create</h1><button onClick={handleBtnClick}>prod calculator</button></div>}

            {manageStPurchases==="true"&&<h2>manage stock purchases</h2>}
{manageStPurchases==="true"&&<FormManageStPurchase
              onsubmit={(dt)=>handleAddStPurchase(dt,chosenIngRedux,
                chosenProdRedux,dispatch,setmanageQuantmodal,redux)}
              title={submitTitle}
              saved={saved}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />}
      {/* <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {ing="false"&&<div style={{}} className="manageQuant">
        {Object.keys(chosenProduct).length===0&&<NewCard data={chosenProduct} key={chosenProduct._id} />}
        <div style={{textAlign:"center"}}>
          {manageQuant && (
            <FormQuant
              onsubmit={handlequant}
              title={submitTitle}
              saved={saved}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />
          )}
          {prodCalc&& (
            <FormProdCalc
              onsubmit={handlequant}
              title={submitTitle}
              saved={saved}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />
          )}
          {managePrice && ( 
            <FormPrice
              onsubmit={handleManagePrice}
              title={submitTitle}
              saved={saved}
              perimationDate={perimationDate}
              onDelete={() =>
                handleDelete(
                  setmanageQuantmodal,
                  dispatch,
                  chosenProduct,
                  quantityDt,
                  chosenProductsRedux
                )
              }
              onQuit={() => handleQuit(setmanageQuantmodal)}
            />
          )}
          
        </div>
      </div>}
      {ing="true"&&Object.keys(chosenIngRedux).length===0&&<div 
      style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h2>no Ingredient set </h2>
        <button onClick={handleProdCalc}>product calculator</button>
        </div>}
      </div> */}
    </Modal>
  );
}
