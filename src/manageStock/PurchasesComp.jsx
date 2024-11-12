import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Cards from '../card/Cards';
import { useDispatch, useSelector } from 'react-redux';
import PurchasesBtn from './PurchasesBtn';
import *as chosenAction from "../redux/reduxSlice/chosen";
let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";
export default function PurchasesComp({setpurchaseType,setaddtoPurchasesModal,purchaseType,
  setupdatetoPurchasesModal,type="db"}) {
    // console.log(setupdatetoPurchasesModal);
    const dispatch=useDispatch()
    const StpurchaseRedux = useSelector((state) => state.entities.purchaseDb.list);
    const StzebdaRedux = useSelector((state) => state.entities.zebda.zebdaSt);
    const DbzebdaRedux = useSelector((state) => state.entities.zebda.list);
    const StsmidRedux = useSelector((state) => state.entities.smid.smidSt);
    const DbsmidRedux = useSelector((state) => state.entities.smid.list);
    const StfarineRedux = useSelector((state) => state.entities.farine.farineSt);
    const DbfarineRedux = useSelector((state) => state.entities.farine.list);
    const StmargarineRedux = useSelector((state) => state.entities.margarine.margarineSt);
    const DbmargarineRedux = useSelector((state) => state.entities.margarine.list);
    const SteggsRedux = useSelector((state) => state.entities.eggs.eggsSt);
    const DbeggsRedux = useSelector((state) => state.entities.eggs.list);
    let zebda=type==="st"?StzebdaRedux:DbzebdaRedux
    let smid=type==="st"?StsmidRedux:DbsmidRedux
    let farine=type==="st"?StfarineRedux:DbfarineRedux
    let margarine=type==="st"?StmargarineRedux:DbmargarineRedux
    let eggs=type==="st"?SteggsRedux:DbeggsRedux
    // console.log(StzebdaRedux);
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
  const handleAddPurchase = () => {
    setaddtoPurchasesModal(true);
  };
    const onUpdatePurchases = (data) => {
    // console.log(data);
    // dispatch(chosenAction.modifychosenprod(data));
    setupdatetoPurchasesModal(true);
  };

  return (
    <div>
    
    {/*zebda*/ }  
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
   {purchaseType==="zebda"&&  <Cards data={zebda} onclick={onUpdatePurchases} />}
   {purchaseType==="farine"&&  <Cards data={farine} onclick={onUpdatePurchases} />}
   {purchaseType==="margarine"&&  <Cards data={margarine} onclick={onUpdatePurchases} />}
   {purchaseType==="eggs"&&  <Cards data={eggs} onclick={onUpdatePurchases} />}
   {purchaseType==="smid"&&  <Cards data={smid} onclick={onUpdatePurchases} />}
  </div>
  )
  }