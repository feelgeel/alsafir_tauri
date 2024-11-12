import *as salesAction from '../redux/reduxSlice/sales';
import *as chosenProds from '../redux/reduxSlice/chosenProducts';
import *as chosenPurchaseAction from '../redux/reduxSlice/chosenPurchase';
import *as ingredientAction from '../redux/reduxSlice/ingredient';
import *as chosenAction from '../redux/reduxSlice/chosen';

import { v4 as uuidv4 } from 'uuid';
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
    handleAddIng:async(dt,ing,prod,dispatch,setmanageQuantmodal)=>{
      console.log("hello",dt,ing,prod);
      let pricePerGram=1
      let weight=dt.quantity
      let newIng={
        _id:uuidv4(),
        prodId:prod._id,
        measureIn:ing.measureIn,
        name:ing.name,
        weight:dt.quantity,
        ingId:ing._id,
        image:ing.image,
        price:pricePerGram*weight
      }
      dispatch(ingredientAction.pushToIng(newIng))
      console.log(newIng);
      dispatch(chosenAction.pushTochosenpurchases(newIng))
      let strinfyIng = JSON.stringify(newIng);
            let copied = await writeTextFile(
              "ingredient.json",
              strinfyIng,
              { dir: BaseDirectory.Desktop }//inside desktop i wan t to create a folder
            );
      setmanageQuantmodal(false)

    },
    handleQuit:(setmanageQuantmodal)=>{
      console.log(setmanageQuantmodal);
      setmanageQuantmodal(false)
    },
    handleSave:(setmanageQuantmodal,dispatch,purchaseProd,quantity,ingRedux,chosenProdRedux)=>{
      let newChosenProd={...purchaseProd}
      newChosenProd.quantity=quantity
      let ingredient={
        _id:uuidv4(),
        prodId:chosenProdRedux._id,
        measureIn:purchaseProd.measureIn,
        name:purchaseProd.name,
        quantity:quantity,
        purchaseId:purchaseProd._id,
        image:purchaseProd.image
      }
      let producedQuant={prodId:chosenProdRedux._id,quantity:quantity}
      console.log(ingRedux,chosenProdRedux,purchaseProd,ingredient);
    dispatch(ingredientAction.pushToIng(ingredient))
    dispatch(ingredientAction.pushToIng(producedQuant))
    dispatch(chosenAction.pushTochosenpurchases(ingredient))
    setmanageQuantmodal(false)
  },
  handleUpdate:(setmanageQuantmodal,dispatch,
    chosenProd,quantity,chosenProductsRedux)=>{
    let newChosenProd={...chosenProd}
    let newchosenProductsRedux=[...chosenProductsRedux]
    let index=chosenProductsRedux.findIndex(chosen=>chosen.prodName===newChosenProd.prodName)
      newChosenProd.quantity=quantity
      newchosenProductsRedux[index]=newChosenProd
      dispatch(chosenPurchaseAction.modifyChosenProds(newchosenProductsRedux))
      setmanageQuantmodal(false)
      // console.log(newsales);
      console.log(newChosenProd,index);
    },
    handleDelete:(setmanageQuantmodal,dispatch,chosenProd,quantity,sales)=>{
      let newChosenProd={...chosenProd}
      let newsales=[...sales]
      let index=sales.findIndex(chosen=>chosen.name===newChosenProd.name)
      newsales.splice(index,1)
      dispatch(chosenProds.modifyChosenProds(newsales))
      console.log(newsales);
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
