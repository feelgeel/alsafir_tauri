import *as salesAction from '../redux/reduxSlice/sales';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';

  export let funcs={
    handleDecreasePrice:(priceDt, setpriceDt)=>{
      let newPrice = priceDt;
      if (newPrice > 1) {
        newPrice--;
        setpriceDt(newPrice);
  
      }
    },
    handleDecreaseQuant :(quantity, setquantity) => {
      let newQuantity = quantity;
      if (newQuantity > 1) {
        newQuantity--;
        setquantity(newQuantity);
      }
      // console.log(newQuantity);
    },
    handleIncreaseQuant : (quantity, setquantity) => {
      let newQuantity = quantity;
      newQuantity++;
      setquantity(newQuantity);
      // console.log(newQuantity);
    },
    handleQuit:(setmanageQuantmodal)=>{
      setmanageQuantmodal(false)
    },
    handleSave:(setmanageQuantmodal,dispatch,chosenProd,quantity)=>{
      let newChosenProd={...chosenProd}
      newChosenProd.quantity=quantity
      // console.log(newChosenProd);
    dispatch(chosenProdsAction.pushToChosen(newChosenProd))
    setmanageQuantmodal(false)
  },
  handleUpdate:(setmanageQuantmodal,dispatch,
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
    },
    handleDelete:(setmanageQuantmodal,dispatch,chosenProd,quantity,sales)=>{
      let newChosenProd={...chosenProd}
      let newsales=[...sales]
      let index=sales.findIndex(chosen=>chosen.prodName===newChosenProd.prodName)
      newsales.splice(index,1)
      dispatch(salesAction.modifySales(newsales))
      // console.log(newsales);
      setmanageQuantmodal(false)
    },
    handleIncreasePrice:(priceDt, setpriceDt)=>{
      let newPrice = priceDt;
      newPrice++;
      setpriceDt(newPrice);
    },
    handleDecreasePrice:(priceDt, setpriceDt)=>{
      let newPrice = priceDt;
      if (newPrice > 1) {
        newPrice--;
        setpriceDt(newPrice);
  
      }
    },
  }
