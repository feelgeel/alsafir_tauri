import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Cards from '../card/Cards';
import { useDispatch, useSelector } from 'react-redux';
import PurchasesBtn from './PurchasesBtn';

let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";
export default function PurchasesComp({setpurchaseType,setaddtoPurchasesModal,purchaseType,
  setupdatetoPurchasesModal}) {
    const dispatch=useDispatch()
    const purchaseDbRedux = useSelector((state) => state.entities.purchaseDb.list);
    const producedQuant = useSelector((state) => state.entities.ingredient.producedQuant);
    const zebdaDbRedux = useSelector((state) => state.entities.zebda.list);
    const smidDbRedux = useSelector((state) => state.entities.smid.list);
    const farineDbRedux = useSelector((state) => state.entities.farine.list);
    const margarineDbRedux = useSelector((state) => state.entities.margarine.list);
    const eggsDbRedux = useSelector((state) => state.entities.eggs.list);
    // console.log("producedQuant",producedQuant);
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
    dispatch(chosenProdAction.setChosenProd(data));
    setupdatetoPurchasesModal(true);
  };

  return (
    <div>
    <p
      style={{ width: "1rem", margin: ".5rem" }}
      onClick={handleAddPurchase}
      className="item-plus item-plus-left"
    >
      <FontAwesomeIcon className="item-icon" icon={faPlus} />
    </p>
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
   {purchaseType==="zebda"&&  <Cards data={zebdaDbRedux} onclick={onUpdatePurchases} />}
   {purchaseType==="farine"&&  <Cards data={farineDbRedux} onclick={onUpdatePurchases} />}
   {purchaseType==="margarine"&&  <Cards data={margarineDbRedux} onclick={onUpdatePurchases} />}
   {purchaseType==="eggs"&&  <Cards data={eggsDbRedux} onclick={onUpdatePurchases} />}
   {purchaseType==="smid"&&  <Cards data={smidDbRedux} onclick={onUpdatePurchases} />}
  </div>
  )
  }