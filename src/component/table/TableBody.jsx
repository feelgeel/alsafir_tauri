import React, { useState } from "react";

export default function TableBody({ tableData,onDelete,onDec,onInc,onclick,selected}) {
  
  // const DeleteButton=()=>tableData.delete
  // console.log(tableData);
  let buttonStyle={
    padding:"0.1rem 0.5rem",
    backgroundColor:"grey",
    borderRadius:"50%",
    color:"white",
    cursor:"pointer"
  }
  let buttonStyle1={
    // padding:"0.1rem 0.5rem",
    // backgroundColor:"green",
    // borderRadius:"50%",
    color:"blue",
    cursor:"pointer"
  }
  // console.log(tableData[0]);
  return (
    
    <tbody>
      {tableData.map(tdt=>  
        (<tr className={selected._id==tdt._id?"active-table":""} onClick={()=>onclick(tdt)}>
        {tdt.image&&<td>
          <img width="100px" height="50px" src={tdt.image} alt="" />
        </td>}
       { tdt.name&&<td>{tdt.name}</td>}
       { tdt._id&&<td>{tdt._id}</td>}
       { tdt.saleListId&&<td>{tdt.saleListId}</td>}
     {tdt.quantity&& <td 
    //  style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1.5rem"}}
     style={{alignItems:"center"}}
     >
          {/* <p style={buttonStyle} onClick={()=>onDec(tdt)}>-</p> */}
            {tdt.quantity}
          {/* <p style={buttonStyle} onClick={()=>onInc(tdt)}>+</p> */}
        </td>}
       {/* {tdt.price&&<td>{tdt.price}</td>}
      { tdt.price&&<td>{tdt.price*tdt.quantity}</td>}
      { tdt.date&&<td>{tdt.date}</td>}
      { tdt.time&&<td>{tdt.time}</td>} */}
       {tdt.delete&&<td>
        <p onClick={()=>onDelete(tdt)} >delete</p>
       </td>}
        </tr>)
        )}
     
       
    
    </tbody>
  );
}
