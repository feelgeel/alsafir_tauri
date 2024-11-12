import React, { useState } from 'react'
import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactModal from 'react-modal'
import NewCard from "../card/Card";
import { useSelector,useDispatch } from 'react-redux';
import Cards from '../card/Cards';
import * as chosenProdAction from "../redux/reduxSlice/chosenProd";
import * as chosenAction from "../redux/reduxSlice/chosen";
import * as ingAction from "../redux/reduxSlice/ingredient";
import * as chosenPurchaseAction from "../redux/reduxSlice/chosenPurchase";
import Card from '../card/Card';
import ManageQuantity from '../component/manageQuantity/ManageQuantity';
import PurchasesBtn from "./PurchasesBtn";
import {funcs} from "./manageQuantFunc"
let customStyles1 = {
    content: {
      zIndex: "99999",
      position: "fixed",
    },
  };
  let classSelected1 = "item item-active";
  let classUnselected1 = "item ";
  let classSelected2 = "item-icon icon-active";
  let classUnselected2 = "item-icon ";
  let classSelected3 = "name-item name-active";
  let classUnselected3 = "name-item ";
export default function ProdModal({selectProdModal,setselectProdModal,ingredient=false}) {
  const[purchaseType,setpurchaseType]=useState("zebda")
  let dispatch=useDispatch()
  const [prodType2, setprodType2] = useState("bread");
  const [manageQuantProdCalcmodal, setmanageQuantProdCalcmodal] = useState(false);
  const breadRedux = useSelector((state) => state.entities.bread.bread);
  const patisserieRedux = useSelector( (state) => state.entities.patisserie.list);
  const purchaseDbRedux = useSelector( (state) => state.entities.purchaseDb.list);
  const chosenPurchaseRedux = useSelector( (state) => state.entities.chosen.chosenpurchase);  
  const ingredientRedux = useSelector( (state) => state.entities.ingredient.list); 
  const producedQuantRedux = useSelector( (state) => state.entities.ingredient.producedQuant); 
  const zebdaRedux = useSelector( (state) => state.entities.zebda.zebdaSt); 
  const smidRedux = useSelector( (state) => state.entities.smid.smidSt); 
  const farineRedux = useSelector( (state) => state.entities.farine.farineSt); 
  const margarineRedux = useSelector( (state) => state.entities.margarine.margarineSt); 
  const eggsRedux = useSelector( (state) => state.entities.eggs.eggsSt); 

  const class1selected=useSelector( state=>state.entities.classActive.class1Selected)
  const class1Unselected=useSelector( state=>state.entities.classActive.class1UnSelected)
  const class2selected=useSelector( state=>state.entities.classActive.class2Selected)
  const class2Unselected=useSelector( state=>state.entities.classActive.class2UnSelected)
  const class3selected=useSelector( state=>state.entities.classActive.class3Selected)
  const class3Unselected=useSelector( state=>state.entities.classActive.class3UnSelected)
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
    const handleAdd=()=>{
    
    }
    const addProduct=(data)=>{
      let newIng=ingredientRedux.filter(dt=>dt.prodId===data._id)
      let chosenProdQuantity=producedQuantRedux.filter(dt=>dt.prodId===data._id)
      dispatch(chosenAction.modifychosenprod(data));
      dispatch(chosenAction.modifychosenprods(newIng));
      // setselectProdModal(false)
      if(chosenProdQuantity.length===0){
        dispatch(chosenAction.modifychosenquantity({prodId:data._id,quantity:1}));
        dispatch(ingAction.pushToproducedQuant({prodId:data._id,quantity:1}));
      }else{
        dispatch(chosenAction.modifychosenquantity(chosenProdQuantity));

      }
      // console.log("prodmodal",chosenProdQuantity)
    }
    // console.log(purchaseDbRedux);
  const addpurchace=(dt)=>{
    console.log(dt);
    dispatch(chosenAction.modifychosenpurchase(dt));
  // dispatch(chosenPurchaseAction.setChosenPurchase(dt));
  setmanageQuantProdCalcmodal(true)
  }
  const handlePurchaseSelected=(dt)=>{
    // console.log(dt);
    switch (dt) {
      case "zebda":
        setpurchaseType("zebda");
        break;
      case "smid":
        setpurchaseType("smid");
        break;
      case "farine":
        setpurchaseType("farine");
        break;
      case "margarine":
        setpurchaseType("margarine");
        break;
      case "eggs":
        setpurchaseType("eggs");
        break;

      default:
        break;
    }
  }
  const onUpdatePurchases=(dt)=>{
    setmanageQuantProdCalcmodal(true)
    dispatch(chosenAction.modifychosenIng(dt))

  }
  return (
    <ReactModal
    isOpen={selectProdModal}
    onRequestClose={() => setselectProdModal(false)}
    style={customStyles1}
    >
          {!ingredient&&<div>
            <div className="d-flex" style={{justifyContent:"flex-start"}}>
              <div 
                onClick={() => {handleSelected2("bread");}}
                className={prodType2 === "bread" ? class1selected : class1Unselected}>
                <FontAwesomeIcon className={ prodType2 === "bread" ? class2selected : class2Unselected }
                  icon={faBarcode} />
                <p  className={  prodType2 === "bread" ? class3selected : class3Unselected  } >
                  bread </p>
              </div>
              <div onClick={() => {handleSelected2("patisserie");}}
                className={prodType2 === "patisserie" ? class1selected : class1Unselected} >
                <FontAwesomeIcon className={prodType2==="patisserie"?class2selected:class2Unselected }
                  icon={faBarcode}/>
                <p className={prodType2 === "patisserie"? class3selected:classUnselected3}>patisserie</p>
              </div>
            </div>
            
            <div className="d-flex">{prodType2==="bread" &&<Cards data={breadRedux} onclick={addProduct} />}</div>
            <div className="d-flex">{prodType2==="patisserie" &&<Cards data={patisserieRedux} onclick={addProduct} />}</div>
          </div>}
          {ingredient&&<div>
            <div style={{display:"flex"}}>

            <PurchasesBtn
            handlePurchaseSelected={handlePurchaseSelected}
            purchaseType={purchaseType}
            name="zebda"
            />
            <PurchasesBtn
            handlePurchaseSelected={handlePurchaseSelected}
            purchaseType={purchaseType}
            name="smid"
            />
            <PurchasesBtn
            handlePurchaseSelected={handlePurchaseSelected}
            purchaseType={purchaseType}
            name="farine"
            />
            <PurchasesBtn
            handlePurchaseSelected={handlePurchaseSelected}
            purchaseType={purchaseType}
            name="margarine"
            />
            <PurchasesBtn
            handlePurchaseSelected={handlePurchaseSelected}
            purchaseType={purchaseType}
            name="eggs"
            />
            </div>
            {purchaseType==="zebda"&&  <Cards data={zebdaRedux} onclick={onUpdatePurchases} />}
            {purchaseType==="farine"&&  <Cards data={farineRedux} onclick={onUpdatePurchases} />}
            {purchaseType==="margarine"&&  <Cards data={margarineRedux} onclick={onUpdatePurchases} />}
            {purchaseType==="eggs"&&  <Cards data={eggsRedux} onclick={onUpdatePurchases} />}
            {purchaseType==="smid"&&  <Cards data={smidRedux} onclick={onUpdatePurchases} />}
            
            {purchaseDbRedux.length!==0&&<div><Cards onclick={addpurchace} data={purchaseDbRedux}/></div>}
          </div>}
          <ManageQuantity
          chosenProduct={chosenPurchaseRedux}
        funcs={funcs}
        manageQuantmodal={manageQuantProdCalcmodal}
        setmanageQuantmodal={setmanageQuantProdCalcmodal}
        manageQuant={false}
        saved="products"
        managePrice={false}
        perimationDate={false}
        submitTitle="save"
        prodCalc={true}
        manageSt={false}
        ing="true"
        // chosenProduct,
        // funcs,
        // manageQuantmodal,
        // setmanageQuantmodal,
        // manageQuant = false,
        // saved = "product",
        // managePrice = false,
        // perimationDate=false,
        // submitTitle="save",
        // prodCalc=false,
        // manageSt=false,
        // ing=false
      />
        {/* chosenProduct,
  funcs,
  manageQuantmodal,
  setmanageQuantmodal,
  manageQuant = true,
  saved = "product",
  managePrice = false,
  perimationDate=false,
  submitTitle="save",
  prodCalc=false,
  manageSt=false,
  ing=false */}
    </ReactModal>
  )
}
