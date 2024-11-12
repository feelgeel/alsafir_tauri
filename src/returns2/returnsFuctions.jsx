import AddSales from "../manageSales/AddSales";
import DeleteSales from "../manageSales/DeleteSales";
import UpdateSales from "../manageSales/UpdateSales";
import ProductList from "../productsList/ProductList";
import *as salesActions from '../redux/reduxSlice/sales';
import *as salesListAction from '../redux/reduxSlice/salesList';
import *as returnsListAction from '../redux/reduxSlice/returnsList';
import *as returnsActions from '../redux/reduxSlice/returns';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import { writeTextFile, readTextFile,BaseDirectory } from '@tauri-apps/api/fs'
import { v4 as uuidv4 } from 'uuid';

import moment from 'moment';
export const handleDelete = (dt,dispatch,salesRedux) => {
  let newsales=[...salesRedux]
let index=salesRedux.findIndex(chosen=>chosen.prodName===dt.prodName)
newsales.splice(index,1)
dispatch(chosenProdsAction.modifyChosenProds(newsales))
// console.log(index);
};

export const handleSort=()=>{

}
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

export const handleModal=(setaddToSalesModal)=>{
  setaddToSalesModal(true)
}
export const handleReset=(dispatch)=>{
  dispatch(chosenProdsAction.modifyChosenProds([]))
}


export const handleSold=async(returnsRedux,chosenProdsRedux,returnsListRedux,dispatch,history)=>{
  let newReturns=[...returnsRedux]
  let newreturnsList=[...returnsListRedux]
  let date=moment().format('D/M/YY')
  let fullDate=moment().format('D/M/YY HH:MM:SS')
  let time=moment().format('HH:MM:SS ')
  let type="returns"
//saleList
  let returnsLIst={_id:uuidv4(),name:fullDate}
  newreturnsList.push(returnsLIst)
  //returns
  let  ListId=returnsLIst._id
  let chosenProds=chosenProdsRedux.map(dt=>{
    return {...dt,...{date,time,type, ListId}}
  })
  chosenProds.map(dt=>newReturns.push(dt))
//save to local data
let stringifiedReturns = JSON.stringify(newReturns)
  let striginfiedreturnsLIst = JSON.stringify(newreturnsList)
  // console.log("newreturnsList",striginfiedreturnsLIst);
  try {
    let resreturns=await writeTextFile('returns.json',stringifiedReturns, { dir: BaseDirectory.Desktop });

    
  } catch (error) {
    console.log("error",error);
    
  }
  try {
  let resreturnsList=await writeTextFile('returnsList.json',striginfiedreturnsLIst, { dir: BaseDirectory.Desktop });
    
  } catch (error) {
    console.log("error",error);
    
  }
  //save returnslist in redux
  dispatch(returnsListAction.modifyreturnsList(newreturnsList))
  //save returns in redux
    dispatch(returnsActions.modifyreturns(newReturns))
  
  // //empty it and retart
  dispatch(chosenProdsAction.modifyChosenProds([]))
  // console.log("new sell",data);
  // console.log(returnsLIst,returns,returnsListRedux);

}
export const handleUpdate = (dt,setchosenCompo,setselectedProd) => {
    // console.log(dt);
    setchosenCompo(<UpdateSales updatedSales={dt} />);
    setselectedProd(dt);
  };
export const handleAddProd = (setchosenCompo,dispatch,products) => {
  setchosenCompo(<AddSales  setchosenCompo={setchosenCompo}/>);
  };
  export const hendleDelete = (dt,dispatch,chosenProdRedux) => {
    let newReturns=[...chosenProdRedux]
let index=chosenProdRedux.findIndex(chosen=>chosen.prodName===dt.prodName)
newReturns.splice(index,1)
dispatch(chosenProdsAction.modifyChosenProds(newReturns))
// console.log(dt);
  };
  export const handleIncreaseQuant = (dt,dispatch,chosenProdsRedux) => {
    let newsalesRedux=[...chosenProdsRedux]
    let index=newsalesRedux.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newsalesRedux.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    newChosen.prodQuant=newChosen.prodQuant+1
    newsalesRedux[index]=newChosen
    dispatch(chosenProdsAction.modifyChosenProds(newsalesRedux));
// console.log(newChosen,index);
  };
  export const handleDecreaseQuant = (dt,dispatch,chosenProdsRedux) => {
    let newsalesRedux=[...chosenProdsRedux]
    let index=newsalesRedux.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newsalesRedux.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    if(newChosen.prodQuant>1){
        newChosen.prodQuant=newChosen.prodQuant-1
    }
    newsalesRedux[index]=newChosen
    dispatch(chosenProdsAction.modifyChosenProds(newsalesRedux));
// console.log(dt);
  };