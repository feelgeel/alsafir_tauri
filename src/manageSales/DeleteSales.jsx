import React from 'react'
import *as productsAction from '../redux/reduxSlice/bread';
import { useSelector, useDispatch } from "react-redux";
export default function DeleteSales({deletedSales}) {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.entities.products.list)
  const handledelete=()=>{
    let newprod=[...products];
    let index=newprod.findIndex(dt=>dt.prodName===deletedSales.prodName);
    newprod.splice(index,1)
    dispatch(productsAction.modifyProducts(newprod));
    console.log(newprod);
  
  }
  // console.log(deletedSales);
  return (
    <div className="deleteSales">
    <div className="deleteSalesImg">
      <img width="100%" src={deletedSales.prodImg} alt="" />
    </div>
    <div className="deleteSalesInfo">
      <h2>Name:{deletedSales.prodName}</h2>
      <h2>Price:{deletedSales.prodPricePerUnit}</h2>
      <h2>Quantity:{deletedSales.prodQuant}</h2>
      <h1>are u sure u want to delete this prod from ur list</h1>
      <div className="buttons">
      <button onClick={()=>handledelete()}><a href="/">YES</a></button>
      <button><a href="/">NO</a></button>
      </div>
      </div>
  </div>
  )
}
