import *as chosenProductsAction from '../../redux/reduxSlice/chosenProducts';
import *as salesAction from '../../redux/reduxSlice/sales';
import *as chosenProdsAction from '../../redux/reduxSlice/chosenProducts';
export const handleDecreaseQuant = (list,chosenProductsRedux,dispatch) => {
    let newQuantity = list.quantity;
    let newList={...list}
    let newLists=[...chosenProductsRedux]
    let index=chosenProductsRedux.findIndex(dt=>
      dt.name===list.name);
      if (newQuantity > 1) {
        newQuantity--;
      }
      newList.quantity=newQuantity
    newLists[index]=newList
    dispatch(chosenProdsAction.modifyChosenProds(newLists))
    console.log(newLists);
  };
  export const handleIncreaseQuant = (list,chosenProductsRedux,dispatch) => {
    let newQuantity = list.quantity;
    newQuantity++;
    let newList={...list}
    let newLists=[...chosenProductsRedux]
    let index=chosenProductsRedux.findIndex(dt=>
      dt.name===list.name);
      newList.quantity=newQuantity
      newLists[index]=newList
      dispatch(chosenProdsAction.modifyChosenProds(newLists))
      console.log();
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
  let index=chosenProductsRedux.findIndex(chosen=>chosen.name===newChosenProd.name)
    newChosenProd.quantity=quantity
    newchosenProductsRedux[index]=newChosenProd
    dispatch(chosenProdsAction.modifyChosenProds(newchosenProductsRedux))
    setmanageQuantmodal(false)
    // console.log(newsales);
    console.log(newChosenProd,index);
  }
  export const handleDelete=(list,dispatch,chosenProdsRedux)=>
  {
let newchosenProd=[...chosenProdsRedux]
let index=chosenProdsRedux.findIndex(dt=>dt.name===list.name)
newchosenProd.splice(index,1)
    // console.log(list,chosenProdsRedux,index,newchosenProd);
    dispatch(chosenProdsAction.modifyChosenProds(newchosenProd))
    // let newChosenProd={...chosenProd}
    // let newsales=[...sales]
    // let index=sales.findIndex(chosen=>chosen.name===newChosenProd.name)
    // newsales.splice(index,1)
    // dispatch(salesAction.modifysales(newsales))
    // // console.log(newsales);
    // setmanageQuantmodal(false)
  }
