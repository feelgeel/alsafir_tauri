import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import *as navActiveAction from "../redux/reduxSlice/navActive";
import *as classActiveAction from "../redux/reduxSlice/classActive";
import {
  faUser,
  faPlus,
  faBarcode,
  faReply,
  faBasketShopping,
  faDatabase,
  faClockRotateLeft,
  faPowerOff,
  faRightFromBracket,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import  Nav from "./Nav";

export default function NavBar({
  setsidebarList,
  setsalesModal,
  setreturnsModal,
  setpurchasesModal,
  setmanageDbModal,
  sethistoryModal,
  setmanageStockModal,
  setprodCalcModal
}) {
 const dispatch= useDispatch()
  const [selected, setselected] = useState("sales");
  const class1selected=useSelector( state=>state.entities.classActive.class1Selected)
  const class1Unselected=useSelector( state=>state.entities.classActive.class1UnSelected)
  const class2selected=useSelector( state=>state.entities.classActive.class2Selected)
  const class2Unselected=useSelector( state=>state.entities.classActive.class2UnSelected)
  const class3selected=useSelector( state=>state.entities.classActive.class3Selected)
  const class3Unselected=useSelector( state=>state.entities.classActive.class3UnSelected)
  const navActive=useSelector( state=>state.entities.navActive.list)

  let classSelected1 = "item item-active";
  let classUnselected1 = "item ";
  let classSelected2 = "item-icon icon-active";
  let classUnselected2 = "item-icon ";
  let classSelected3 = "name-item name-active";
  let classUnselected3 = "name-item ";

  const handleSelected = (dt) => {
dispatch(navActiveAction.modifyNavActive(dt))
    // setsidebarList(true)
    switch (dt) {
      case "sales":
        // dispatch(classActiveAction.modifyClass1(classSelected1))
        break;
      case "returns":
        
        break;
      case "purchases":
       
        break;
      case "managedb":
       
        break;
      case "managestock":
        
        break;
      case "prodCalc":
       
        break;
      case "history":
        
        break;
      case "waitlist":
        
        break;

      default:
        break;
    }
    // console.log(selected);
  };
//   handleSelected={handleSelected("sales")}
// handleSelected={handleSelected("returns")}
// handleSelected={handleSelected("purchases")}
// handleSelected={handleSelected("managedb")}
// handleSelected={handleSelected("managestock")}
// handleSelected={handleSelected("prodCalc")}
// handleSelected={handleSelected("history")}
// handleSelected={handleSelected("waitlist")}
  return (
    <div className="navbar">
      <div className="left-nav">
      <Nav name="sales" active={navActive}  handleClicked={()=>handleSelected("sales")} icone={faBarcode}/> 
      <Nav name="returns"   active={navActive} handleClicked={()=>handleSelected("returns")} icone={faReply}/> 
      <Nav name="purchases"   active={navActive} handleClicked={()=>handleSelected("purchases")} icone={faBasketShopping}/> 
      <Nav name="managedb"   active={navActive} handleClicked={()=>handleSelected("managedb")} icone={faDatabase}/> 
      <Nav name="managestock"   active={navActive} handleClicked={()=>handleSelected("managestock")} icone={faClockRotateLeft}/> 
      <Nav name="prodCalc"   active={navActive} handleClicked={()=>handleSelected("prodCalc")} icone={faPowerOff}/> 
       <Nav name="history"   active={navActive} handleClicked={()=>handleSelected("history")} icone={faRightFromBracket}/>
       <Nav name="waitlist"   active={navActive} handleClicked={()=>handleSelected("waitlist")} icone={faClock}/>
        
      </div>
      <div className="right-nav">
      
        <p className="item-plus">
          <FontAwesomeIcon className="item-icon" icon={faPlus} />
        </p>
        <div className="item">
          <FontAwesomeIcon className="item-icon" icon={faUser} />
          <p>amine</p>
        </div>
        <p className="item-plus">
          <FontAwesomeIcon className="item-icon" icon={faRightFromBracket} />
        </p>
        <p className="item-plus">
          <FontAwesomeIcon className="item-icon" icon={faPowerOff} />
        </p>
      </div>
    </div>
  );
}
