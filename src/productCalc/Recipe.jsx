import { faBarcode, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "../navBar/Nav";

export default function Recipe() {
  const[navactive,setnavactive]=useState("smid")
  const handleSelected=(dt)=>{
    setnavactive(dt)
  }
  return (
    <div>
      <div className="up-left">
        <p
          //   onClick={() => handleModal1(setselectProdModal1)}
          className="item-plus item-plus-left"
        >
          <FontAwesomeIcon className="item-icon" icon={faPlus} />
        </p>
        <h1>add recipe</h1>
      </div>
      <div style={{display:"flex"}}>

      <Nav name="smid" active={navactive}  handleClicked={()=>handleSelected("smid")} icone={faBarcode}/> 
      <Nav name="farine" active={navactive}  handleClicked={()=>handleSelected("farine")} icone={faBarcode}/> 
      <Nav name="margarine" active={navactive}  handleClicked={()=>handleSelected("margarine")} icone={faBarcode}/> 
      <Nav name="zit" active={navactive}  handleClicked={()=>handleSelected("zit")} icone={faBarcode}/> 
      </div>
      
    </div>
  );
}
