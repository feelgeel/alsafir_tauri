import AddSales from "../manageSales/AddSales";
import DeleteSales from "../manageSales/DeleteSales";
import UpdateSales from "../manageSales/UpdateSales";
import ProductList from "../productsList/ProductList";
import *as salesActions from '../redux/reduxSlice/sales';
import *as waitActions from '../redux/reduxSlice/wait';
import *as waitListActions from '../redux/reduxSlice/waitList';
import *as salesListAction from '../redux/reduxSlice/salesList';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import { writeTextFile, readTextFile,BaseDirectory } from '@tauri-apps/api/fs'
import { v4 as uuidv4 } from 'uuid';

import moment from 'moment';
//////////////handleWait/////////////////////////
export const handleWait=async(waitRedux,chosenProdsRedux,
  waitListRedux,dispatch)=>{
    let newWait=[...waitRedux]
    let newWaitList=[...waitListRedux]
  let date=moment().format('D/M/YY')
  let fullDate=moment().format('D/M/YY HH:MM:SS')
  let time=moment().format('HH:MM:SS ')
  let type="sales"
  //waitList
  let waitLIst={_id:uuidv4(),name:fullDate}
  newWaitList.push(waitLIst)
   //wait
   let  ListId=waitLIst._id
   let chosenProds=chosenProdsRedux.map(dt=>{
     return {...dt,...{date,time,type,ListId}}
   })
   chosenProds.map(dt=>newWait.push(dt))
  //  console.log(newSales,chosenProds);
  //save to local data
  let stringifiedWait = JSON.stringify(newWait)
  let stringifiedWaitList = JSON.stringify(newWaitList)
  try {
    let resSales=await writeTextFile('wait.json',stringifiedWait, { dir: BaseDirectory.Desktop });

    
  } catch (error) {
    console.log("error",error);
    
  }
  try {
    let resSAlesList=await writeTextFile('waitList.json',stringifiedWaitList, { dir: BaseDirectory.Desktop });
      
    } catch (error) {
      console.log("error",error);
      
    }
     //save saleslist in redux
  dispatch(waitListActions.modifyWaitList(newWaitList))
  // console.log("newsaleslist",newSalesList);
  //save sales in redux
    dispatch(waitActions.modifyWait(newWait))
  
  // //empty it and retart
  dispatch(chosenProdsAction.modifyChosenProds([]))
  // console.log("new sell",data);
  // console.log(salesLIst,sales,salesListRedux);
}
export const handleSort=()=>{

}
export const handleModal=(setaddToSalesModal)=>{
  setaddToSalesModal(true)
}
export const handleReset=(dispatch,setpaginateDt)=>{
  // setpaginateDt([])
  dispatch(chosenProdsAction.modifyChosenProds([]))
}

////////////////////////handlSort///////////////////////////////////////////////
export const handleSold=async(salesRedux,chosenProdsRedux,
  salesListRedux,dispatch,history)=>{
    let newSales=[...salesRedux]
    let newSalesList=[...salesListRedux]
  let date=moment().format('D/M/YY')
  let fullDate=moment().format('D/M/YY HH:MM:SS')
  let time=moment().format('HH:MM:SS ')
  let type="sales"
//saleList
  let salesLIst={_id:uuidv4(),name:fullDate}
  newSalesList.push(salesLIst)
  //sales
  let  ListId=salesLIst._id
  let chosenProds=chosenProdsRedux.map(dt=>{
    return {...dt,...{date,time,type,ListId}
  }
  })
  chosenProds.map(dt=>newSales.push(dt))
  console.log(newSales,chosenProds);
//save to local data
  let stringifiedsales = JSON.stringify(newSales)
  let stringifiedSalesList = JSON.stringify(newSalesList)
  try {
    let resSales=await writeTextFile('sales.json',stringifiedsales, { dir: BaseDirectory.Desktop });

    
  } catch (error) {
    console.log("error",error);
    
  }
  try {
  let resSAlesList=await writeTextFile('salesList.json',stringifiedSalesList, { dir: BaseDirectory.Desktop });
    
  } catch (error) {
    console.log("error",error);
    
  }
  //save saleslist in redux
  dispatch(salesListAction.modifySalesList(newSalesList))
  // console.log("newsaleslist",newSalesList);
  //save sales in redux
    dispatch(salesActions.modifySales(newSales))
  
  // //empty it and retart
  dispatch(chosenProdsAction.modifyChosenProds([]))
  // console.log("new sell",data);
  // console.log(salesLIst,sales,salesListRedux);

}
export const handleUpdate = (dt,setchosenCompo,setselectedProd) => {
    // console.log(dt);
    setchosenCompo(<UpdateSales updatedSales={dt} />);
    setselectedProd(dt);
  };
export const handleAddProd = (setchosenCompo,dispatch,products) => {
  setchosenCompo(<AddSales  setchosenCompo={setchosenCompo}/>);
  };
  export const handleDelete = (dt,dispatch,salesRedux) => {
    let newsales=[...salesRedux]
let index=salesRedux.findIndex(chosen=>chosen.prodName===dt.prodName)
newsales.splice(index,1)
dispatch(chosenProdsAction.modifyChosenProds(newsales))
// console.log(index);
  };
  export const handleIncreaseQuant = (dt,dispatch,salesRedux) => {
    let newsalesRedux=[...salesRedux]
    let index=newsalesRedux.findIndex(chosen=>chosen._id==dt._id)
    let newChosen=newsalesRedux.filter(chosen=>chosen._id==dt._id)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    newChosen.quantity=Number(newChosen.quantity)+1
    newsalesRedux[index]=newChosen
    dispatch(chosenProdsAction.modifyChosenProds(newsalesRedux));
    console.log(dt,salesRedux,newChosen);
  };
  export const handleDecreaseQuant = (dt,dispatch,salesRedux) => {
    let newsalesRedux=[...salesRedux]
    let index=newsalesRedux.findIndex(chosen=>chosen._id==dt._id)
    let newChosen=newsalesRedux.filter(chosen=>chosen._id==dt._id)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    if(newChosen.quantity>1){
        newChosen.quantity=Number(newChosen.quantity)-1
    }
    newsalesRedux[index]=newChosen
    dispatch(chosenProdsAction.modifyChosenProds(newsalesRedux));
console.log(dt,salesRedux);
  };