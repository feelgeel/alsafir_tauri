import React from "react";
import NewCard from "./NewCard";
import { handleDecreaseQuant, handleDelete, handleIncreaseQuant } from "./cardQuantManagFunc";
import { useDispatch, useSelector } from "react-redux";
export default function CardQuantManager({ tableData}) {
  let dispatch = useDispatch();
  const chosenProductsRedux = useSelector(
    (state) => state.entities.chosenProducts.list
  );
  // let quant=tableData.quantity
  // console.log(quant);
  let buttonStyle={
    padding:"0.1rem 0.5rem",
    backgroundColor:"grey",
    borderRadius:"50%",
    color:"white",
    cursor:"pointer"
  }
  let imgStyle={
    width:"6rem",
    height: "4rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
let cardStyle={
  width:"110px",
  display:"flex",
  justifyContent:"center"
}
let totalPrice=0
// console.log(totalPrice);
  return (
    <div  style={{display:"flex",flexWrap:"wrap",
    // overflow:"scroll",
    width:"100%",height:"100%",justifyContent:"center"}}>
      {tableData.map((list) => 
      {
        // totalPrice+=list.quantity*list.prodPricePerUnit
        return( <div key={list.name} style={{ display: "flex",position:"relative",
        flexDirection: "column",margin:"0.1rem",alignItems:"center",
        backgroundColor:"white" }}>
          <NewCard data={list} quant={false} imgStyle={imgStyle}
           cardStyle={cardStyle}/>
          <div style={{display:"flex",color:"#777"}}>
            <p style={buttonStyle}
              onClick={() =>
                handleDecreaseQuant(list, tableData, dispatch)
              }
            >
              -
            </p>
            <p style={{fontSize:"1rem"}}>{list.quantity} </p>
            <p style={buttonStyle}
              onClick={() =>
                handleIncreaseQuant(list, tableData, dispatch)
              }
            >
              +
            </p>
          </div>
          <div style={{color:"#777"}}>Total:{list.quantity*list.price}</div>
          <p onClick={()=>handleDelete(list,dispatch,chosenProductsRedux)} style={{position:"absolute",cursor:"pointer",right: "6px",
    top:"-3px", fontSize:"20px",color:"red"}} >x</p>
        </div>
      )}
      )}
    </div>
  );
}
