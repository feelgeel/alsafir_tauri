import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import * as chosenAction from "../redux/reduxSlice/chosen"
import * as IngAction from "../redux/reduxSlice/ingredient"
import { useDispatch } from "react-redux";
export default function TableBody({
  tableData,
  selectedObj,
  onDelete,
  onLike,
  onclick,
  handleInc,
  handleDec,
  handleDelete,
  deletes=true,
  quantManager=true,
  image=false,
  quantForm=false
}) {
  const dispatch=useDispatch()
  const DeleteButton = () => tableData.delete;
  const[quantity,setquantity]=useState(1)
  const[tbdata,settbdata]=useState(tableData)
  const[prodPrice,setprodPrice]=useState()

  console.log("tablebody",tableData);
  const handleChange=({e,tdt})=>{
    let newQuant=e.target.value
    let newtbdt=[...tableData]
    let index=newtbdt.findIndex(dt=>dt._id===tdt._id)
    let newObj={...newtbdt[index]}
    newObj.quantity=newQuant
    newtbdt[index]=newObj 
    settbdata(newtbdt)
dispatch(chosenAction.modifychosenpurchases(newtbdt))
dispatch(IngAction.modifyIng(newtbdt))
  // console.log(newtbdt);
  }
  const handleFocus=({e,tdt})=>{
    e.target.select()
    // console.log(tdt);
  
  }
  const handleBlur=(e)=>{
    if(quantity==""){
      setquantity(1)
    }
  }
  let style1={
    width:"45px"
  }
  let totalPrice=0
  return (
    <tbody>
      {tableData.map((tdt) => {
        let selected = selectedObj._id === tdt._id ? "active" : "";
        let selectedBtn = selectedObj._id === tdt._id ? "dec-active" : "";
        
         totalPrice+=tdt.price
        return (

          <tr id={tdt._id} className={selected} key={tdt._id}>

           {tdt.image&&image&& <td onClick={() => onclick(tdt)}> <img width="50px" height="50px" src={tdt.image} alt="" /></td>}
           {tdt.name&& <td onClick={() => onclick(tdt)}>{tdt.name}</td>}
           {tdt.weight&&!quantForm&& <td onClick={() => onclick(tdt)}>{tdt.weight}</td>}
           {tdt.weight&&quantForm&& <td><input style={style1} onBlur={handleBlur}  onFocus={(e)=>handleFocus({e,tdt})} 
           onChange={(e)=>handleChange({e,tdt})} value={tdt.weight} type="text"/>{tdt.measureIn}</td>}
            {tdt.quantity&&quantManager&&<td className=" quant-manager">
              <p onClick={()=>handleDec(tdt)} className="dec dec-active">
                <FontAwesomeIcon className="item-icon " icon={faMinus} />
              </p>
              {tdt.quantity}
              <p onClick={()=>handleInc(tdt)} className="inc inc-active">
                <FontAwesomeIcon className="item-icon " icon={faPlus} />
                {/* <i classname="fa fa-duotone"></i> */}
              </p>
            </td>}
            {tdt.price?<td>{tdt.price}</td>:<h2>no stock exist please add some</h2>}
            {deletes &&<td>
              <p className={"delete "+selectedBtn} onClick={()=>handleDelete(tdt)}> 
                <FontAwesomeIcon className={"btn-delete "+selectedBtn} icon={faXmark} />
              </p>
            </td>}

            {/* <td><button onClick={()=>onLike(tdt)}>like</button></td>
        <td><button onClick={()=>onDelete(tdt)}>delete</button></td> */}
          </tr>
          
        );
      })}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>total:{totalPrice}</td>
      </tr>
    </tbody>
  );
}
