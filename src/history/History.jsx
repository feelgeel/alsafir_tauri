import React, { useState } from 'react'
import Modal from 'react-modal';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import { useSelector, useDispatch } from "react-redux";
import Table from '../component/table/Table';
export default function History({ salesModal, setsalesModal, returnsModal, setreturnsModal,
  purchasesModal,setpurchasesModal,manageDbModal,setmanageDbModal,
  historyModal,sethistoryModal,customStyles1}) {
    const[sales,setsales]=useState(true)
    const[returns,setreturns]=useState(false)
    const[purchases,setpurchases]=useState(false)
    const[selectedProd,setselectedProd]=useState([])
    const historyRedux = useSelector((state) => state.entities.history.list);
    const saleLIstRedux = useSelector((state) => state.entities.salesList.list);
    const saleRedux = useSelector((state) => state.entities.sales.list);
    const returnsRedux = useSelector((state) => state.entities.returns.list);
    const returnsLIstRedux = useSelector((state) => state.entities.returnsList.list);
    const purchasesLIstRedux = useSelector((state) => state.entities.purchasesList.list);
    const purchasesRedux = useSelector((state) => state.entities.purchases.list);
    const [selected,setselected]=useState({})
    // console.log(saleLIstRedux);
let columns=[
  {label:"name",path:"name"},
  {label:"id",path:"id"},
]
let columnsProd=[
  {label:"image",path:"image"},
  {label:"name",path:"name"},
  {label:"id",path:"id"},
  {label:"listid",path:"listid"},
  // {label:"quantity",path:"quantity"},
  // {label:"price",path:"price"},
  // {label:"total price",path:"total price"},
  // {label:"date",path:"date"},
  // {label:"time",path:"time"},
]
   const handlesales=()=>{
    setsales(true)
    setreturns(false)
    setpurchases(false)
   }
   const handleReturns=()=>{
    setsales(false)
    setreturns(true)
    setpurchases(false)
   }
   const handlePurchases=()=>{
    setsales(false)
    setreturns(false)
    setpurchases(true)
   }
   const handleclicked=(dt)=>{
    setselected(dt)
    if(sales){
      let newSelectedProd=saleRedux.filter(sale=>sale.ListId===dt._id)
      setselectedProd(newSelectedProd)
      // console.log("newSelectedProd",saleRedux[0].saleListId);
      console.log("newSelectedProd",newSelectedProd);
    }
    if(returns){
      let newSelectedProd=returnsRedux.filter(sale=>sale.ListId===dt._id)
      setselectedProd(newSelectedProd)
      console.log("newSelectedProd",newSelectedProd);
    }
    if(purchases){
      let newSelectedProd=purchasesRedux.filter(sale=>sale.ListId===dt._id)
      setselectedProd(newSelectedProd)
      console.log("newSelectedProd",newSelectedProd);
    }
   console.log(dt);
   }
  //  console.log(selectedProd);
    return (
   
    <div
     style={{height:"auto"}}
     >
      <h1>----history----</h1>
      <div>
        <button className={sales?"active":""} onClick={handlesales} >sales</button>
        <button className={returns?"active":""} onClick={handleReturns}>returns</button>
        <button  className={purchases?"active":""} onClick={handlePurchases}>purchases</button>
      </div>
      <div style={{display:"flex",height:"100%"}}>
        <div style={{width:"30%",height:"100%"}} >
          {sales&&<Table columns={columns} tableData={saleLIstRedux} onclick={handleclicked} selected={selected}/>}
          {returns&&<Table columns={columns} tableData={returnsLIstRedux} onclick={handleclicked} selected={selected}/>}
          {purchases&&<Table columns={columns} tableData={purchasesLIstRedux} onclick={handleclicked} selected={selected}/>}
        </div>
        <div style={{width:"70%"}} >
          {selectedProd.length==0&&"no list selected"}
       {selectedProd.length!==0&&<Table columns={columnsProd} tableData={selectedProd} onclick={handleclicked} selected={selected}/>}
          </div>
      </div>
    </div>
    
  )
}
