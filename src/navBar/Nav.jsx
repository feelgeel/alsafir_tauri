import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import *as navActiveAction from "../redux/reduxSlice/navActive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser,
    faPlus,
    faBarcode,
    faReply,
    faBasketShopping,
    faDatabase,
    faClockRotateLeft,
    faPowerOff,
    faRightFromBracket,
    faClock, } from '@fortawesome/free-solid-svg-icons';
export default function Nav({name="no name",active,handleClicked,icone}) {
    const navActive=useSelector( state=>state.entities.navActive.list)
    const class1selected=useSelector( state=>state.entities.classActive.class1Selected)
    const class1Unselected=useSelector( state=>state.entities.classActive.class1UnSelected)
    const class2selected=useSelector( state=>state.entities.classActive.class2Selected)
    const class2Unselected=useSelector( state=>state.entities.classActive.class2UnSelected)
    const class3selected=useSelector( state=>state.entities.classActive.class3Selected)
    const class3Unselected=useSelector( state=>state.entities.classActive.class3UnSelected)
    // let icone=faBarcode
    // switch (name) {
    //     case "sales":
    //         icone=faBarcode
    //         break;
    //       case "returns":
    //         icone=faReply
    //         break;
    //       case "purchases":
    //         icone=faBasketShopping
    //         break;
    //       case "managedb":
    //         icone=faDatabase
    //         break;
    //       case "managestock":
    //         icone=faClockRotateLeft
    //         break;
    //       case "prodCalc":
    //         icone=faPowerOff
    //         break;
    //       case "history":
    //         icone=faRightFromBracket
    //         break;
    //       case "waitlist":
    //         icone=faClock
    //         break;
    
    //     default:
    //         break;
    // }
    let dispatch=useDispatch()

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
  return (
    <div>
   <div
          onClick={() => handleClicked(name)}
          className={
            active === name ? class1selected : class1Unselected}
            >
          <FontAwesomeIcon
            className={
              active === name ? class2selected : class2Unselected
            }
            icon={icone}
            />
          <p
            className={
              active === name ? class3selected : class3Unselected
            }
          >
           {name}
          </p>
    </div>
              </div>
  )
}
