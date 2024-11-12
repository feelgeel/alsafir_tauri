import *as chosenProductsAction from '../../redux/reduxSlice/chosenProducts';
import *as salesAction from '../../redux/reduxSlice/sales';
import *as chosenProdsAction from '../../redux/reduxSlice/chosenProducts';

export const handleDecreaseQuant = (quantity, setquantity) => {
    let newQuantity = quantity;
    if (newQuantity > 1) {
      newQuantity--;
      setquantity(newQuantity);
    }
    // console.log(newQuantity);
  };
  export const handleSaveStock=()=>{
  
  }
  export const handleIncreaseQuant = (quantity, setquantity) => {
    let newQuantity = quantity;
    newQuantity++;
    setquantity(newQuantity);
    // console.log(newQuantity);
  };
  export const handleQuit=(setmanageQuantmodal)=>{
    setmanageQuantmodal(false)
  }
  export const handleSave=(setmanageQuantmodal,dispatch,chosenProd,quantity)=>{
    let newChosenProd={...chosenProd}
    newChosenProd.quantity=quantity
    // console.log(newChosenProd);
  dispatch(chosenProdsAction.pushToChosen(newChosenProd))
  setmanageQuantmodal(false)
}
export const handleUpdate=(setmanageQuantmodal,dispatch,
  chosenProd,quantity,chosenProductsRedux)=>{
  let newChosenProd={...chosenProd}
  let newchosenProductsRedux=[...chosenProductsRedux]
  let index=chosenProductsRedux.findIndex(chosen=>chosen.prodName===newChosenProd.prodName)
    newChosenProd.quantity=quantity
    newchosenProductsRedux[index]=newChosenProd
    dispatch(chosenProdsAction.modifyChosenProds(newchosenProductsRedux))
    setmanageQuantmodal(false)
    // console.log(newsales);
    console.log(newChosenProd,index);
  }
  export const handleDelete=(setmanageQuantmodal,dispatch,chosenProd,quantity,sales)=>{
    let newChosenProd={...chosenProd}
    let newsales=[...sales]
    let index=sales.findIndex(chosen=>chosen.prodName===newChosenProd.prodName)
    newsales.splice(index,1)
    dispatch(salesAction.modifysales(newsales))
    // console.log(newsales);
    setmanageQuantmodal(false)
  }
  export const handleIncreasePrice=(priceDt, setpriceDt)=>{
    let newPrice = priceDt;
    newPrice++;
    setpriceDt(newPrice);
  }
  export const handleDecreasePrice=(priceDt, setpriceDt)=>{
    let newPrice = priceDt;
    if (newPrice > 1) {
      newPrice--;
      setpriceDt(newPrice);

    }
  }
export default{handleDecreaseQuant, handleDelete, handleIncreaseQuant,
  handleQuit, handleSave,handleUpdate,handleIncreasePrice,
  handleDecreasePrice}