import React from 'react'
import "./sidebar.css"
import image from "../../bakeryLogo.jpg"
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import { useSelector, useDispatch } from "react-redux";
export default function Sidebar({sidebarList,setsidebarList,setsalesModal,
  setreturnsModal,setpurchasesModal,setmanageDbModal,sethistoryModal}) {
    let dispatch=useDispatch()
    
    const handleList=(list)=>{
    let newLists=[...sidebarList]
    let newData={...list}
    let index=newLists.findIndex(dt=>dt.name==list.name);
    switch (list.name) { 
      case "sales":
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="active";
          newLists[index]=newData
          // console.log(newLists);
          setsalesModal(true);
          setreturnsModal(false);
          setpurchasesModal(false);
          setmanageDbModal(false);
          sethistoryModal(false);
          dispatch(chosenProdsAction.modifyChosenProds([]))
          
          break;
      case "returns":
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="active";
          newLists[index]=newData
          setsalesModal(false);
          setreturnsModal(true);
          setpurchasesModal(false);
          setmanageDbModal(false);
          sethistoryModal(false);
          dispatch(chosenProdsAction.modifyChosenProds([]))
          break;
      case "purchases":
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="active";
          newLists[index]=newData
          setsalesModal(false);
          setreturnsModal(false);
          setpurchasesModal(true);
          setmanageDbModal(false);
          sethistoryModal(false);
          dispatch(chosenProdsAction.modifyChosenProds([]))
          break;
      case "manageDb":
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="active";
          newLists[index]=newData
          setsalesModal(false);
          setreturnsModal(false);
          setpurchasesModal(false);
          setmanageDbModal(true);
          sethistoryModal(false);
          dispatch(chosenProdsAction.modifyChosenProds([]))
          break;
      case "history":
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="active";
          newLists[index]=newData
          setsalesModal(false);
          setreturnsModal(false);
          setpurchasesModal(false);
          setmanageDbModal(false);
          sethistoryModal(true);
          dispatch(chosenProdsAction.modifyChosenProds([]))
          break;
  
      default:
          newLists=newLists.map(ft=>{
              ft.active=""
              return ft
          })
          newData.active="";
          newLists[index]=newData
          setsalesModal(true);
          setreturnsModal(false);
          setpurchasesModal(false);
          setmanageDbModal(false);
          sethistoryModal(false);
          break;
  }
  setsidebarList(newLists)
  }
    return (
    <div className='sidebar'>
      {/* <div className="first">
        .
      </div> */}
      <div className="second">
      <img width="100%" height="100%" src={image} alt="" />
      </div>
      <div className="third">
        <ul className="list">
          {sidebarList.map(list=>( 
          <li  key={list.name} onClick={()=>handleList(list)}
           className={`${list.active} listItem`}>{list.name}</li>))}
        </ul>
      </div>
    </div>
  )
}
