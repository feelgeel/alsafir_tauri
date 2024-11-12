import *as salesAction from '../redux/reduxSlice/sales';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import *as zebdasAction from '../redux/reduxSlice/zebda';
import *as smidAction from '../redux/reduxSlice/smid';
import *as ingAction from '../redux/reduxSlice/ingredient';
import *as farineAction from '../redux/reduxSlice/farine';
import *as margarineAction from '../redux/reduxSlice/margarine';
import *as eggsAction from '../redux/reduxSlice/eggs';
import { v4 as uuidv4 } from 'uuid';
import { BaseDirectory, copyFile, writeTextFile,createDir } from "@tauri-apps/api/fs";
import _ from 'lodash';
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
    handleSaveStock:()=>{
      console.log("hello");
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
    handleAddStProd:(dt)=>{
      console.log("hello");
    },
    handleAddStPurchase:async(dt,chosenIngRedux,chosenProdRedux,dispatch,setmanageQuantmodal,redux)=>{
      // console.log("hello purch",dt,chosenIngRedux,chosenProdRedux);
      let newStock={...dt,...chosenProdRedux}
      
      switch (chosenProdRedux.subCategory) {
        case "zebda":
          let newZebdast=[...redux.zebda.zebdaSt]
          dispatch(zebdasAction.pushTozebdaSt(newStock))  
            newZebdast.push(newStock)
            let stringifiedzebdaDb = JSON.stringify(newZebdast);
            let copiedZebda = await writeTextFile(
              "zebdaSt.json",
              stringifiedzebdaDb,
              { dir: BaseDirectory.Desktop }//inside desktop i wan t to create a folder
            );

          break;
        case "smid":
          let newsmidst=[...redux.smid.smidSt]
          dispatch(smidAction.pushTosmidSt(newStock))  
            newsmidst.push(newStock)
            let stringifiedsmidDb = JSON.stringify(newsmidst);
            let copiedSmid = await writeTextFile(
              "smidSt.json",
              stringifiedsmidDb,
              { dir: BaseDirectory.Desktop }//inside desktop i wan t to create a folder
            );

          break;
          case "farine":
            let newfarinest=[...redux.farine.farineSt]
            newfarinest.push(newStock)
            dispatch(farineAction.pushTofarineSt(newStock))
            let stringifiedfarineDb = JSON.stringify(newfarinest);
            let copiedfarine = await writeTextFile(
              "farineSt.json",
              stringifiedfarineDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
          case "margarine":
            let newmargarinest=[...redux.margarine.margarineSt]
            newmargarinest.push(newStock)
            dispatch(margarineAction.pushTomargarineSt(newStock))
            let stringifiedmargarineDb = JSON.stringify(newmargarinest);
            let copiedmargarine = await writeTextFile(
              "margarineSt.json",
              stringifiedmargarineDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
          case "eggs":
            let neweggsst=[...redux.eggs.eggsSt]
            neweggsst.push(newStock)
            dispatch(eggsAction.pushToeggsSt(newStock))
            let stringifiedeggsDb = JSON.stringify(neweggsst);
            let copiedeggs = await writeTextFile(
              "eggsSt.json",
              stringifiedeggsDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
      
        default:
          break;
      }
      // console.log(redux.zebda.zebdaSt);
      setmanageQuantmodal(false)
    },
    handleSavePurchases:async(setmanageQuantmodal,dispatch,chosenProd,values,redux)=>{
      let newZebdast=[...redux.zebda.zebdaSt]
      let newsmidst=[...redux.smid.smidSt]
      let newfarinest=[...redux.farine.farineSt]
      let newmargarinest=[...redux.margarine.margarineSt]
      let neweggsst=[...redux.eggs.eggsSt]
      let _id=uuidv4()
      let newChosen=_.omit(chosenProd,["_id"])
      let newStock={
        _id
        ,...newChosen,
        prodId:chosenProd._id,
        ...values
      }
      console.log("handleSavePurchases","newZebdadb",newZebdast);
      if(newStock.category==="purchases"){
        switch (newStock.subCategory) {
          case "zebda":
            dispatch(zebdasAction.pushTozebdaSt(newStock))
            
            newZebdast.push(newStock)
            let stringifiedzebdaDb = JSON.stringify(newZebdast);
            let copied = await writeTextFile(
              "zebdaSt.json",
              stringifiedzebdaDb,
              { dir: BaseDirectory.Desktop }//inside desktop i wan t to create a folder
            );

            break;
          case "smid":
            newsmidst.push(newStock)
            dispatch(smidAction.pushTosmidSt(newStock))
            let stringifiedSmidDb = JSON.stringify(newsmidst);
            let copiedsmid = await writeTextFile(
              "smidSt.json",
              stringifiedSmidDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
          case "farine":
            newfarinest.push(newStock)
            dispatch(farineAction.pushTofarineSt(newStock))
            let stringifiedfarineDb = JSON.stringify(newfarinest);
            let copiedfarine = await writeTextFile(
              "farineSt.json",
              stringifiedfarineDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
          case "margarine":
            newmargarinest.push(newStock)
            dispatch(margarineAction.pushTomargarineSt(newStock))
            let stringifiedmargarineDb = JSON.stringify(newmargarinest);
            let copiedmargarine = await writeTextFile(
              "margarineSt.json",
              stringifiedmargarineDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
          case "eggs":
            neweggsst.push(newStock)
            dispatch(eggsAction.pushToeggsSt(newStock))
            let stringifiedeggsDb = JSON.stringify(neweggsst);
            let copiedeggs = await writeTextFile(
              "eggsSt.json",
              stringifiedeggsDb,
              { dir: BaseDirectory.Desktop }
            );
            break;
        
          default:
            break;
        }


      }else{

      }
      // let newChosenProd={...chosenProd}
      // newChosenProd.quantity=quantity
    setmanageQuantmodal(false)
    // console.log("newStock",newStock);

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
