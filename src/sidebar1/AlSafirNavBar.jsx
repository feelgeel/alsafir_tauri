import React, { useState } from 'react'
import  "./style.css";

export default function AlSafirNavBar({
    lists,setsidebarList,setsalesModal,setreturnsModal,
    setpurchasesModal,setmanageDbModal,sethistoryModal
}) {
    // const[activState,setactivState]=useState(false)
    let classState="side-nav__item--active";
    // console.log(classState);
    const handleState=(data)=>{
        console.log("hello",classState);
        setsalesModal(true)
        let newLists=[...lists]
        let newData={...data}
        let index=newLists.findIndex(dt=>dt.name==data.name);
        switch (data.name) { 
            case "sales":
                newLists=newLists.map(ft=>{
                    ft.active=""
                    return ft
                })
                newData.active="side-nav__item--active";
                newLists[index]=newData
                // console.log(newLists);
                setsalesModal(true);
                setreturnsModal(false);
                setpurchasesModal(false);
                setmanageDbModal(false);
                sethistoryModal(false);
                
                break;
            case "returns":
                newLists=newLists.map(ft=>{
                    ft.active=""
                    return ft
                })
                newData.active="side-nav__item--active";
                newLists[index]=newData
                setsalesModal(false);
                setreturnsModal(true);
                setpurchasesModal(false);
                setmanageDbModal(false);
                sethistoryModal(false);
                break;
            case "purchases":
                newLists=newLists.map(ft=>{
                    ft.active=""
                    return ft
                })
                newData.active="side-nav__item--active";
                newLists[index]=newData
                setsalesModal(false);
                setreturnsModal(false);
                setpurchasesModal(true);
                setmanageDbModal(false);
                sethistoryModal(false);
                break;
            case "managedb":
                newLists=newLists.map(ft=>{
                    ft.active=""
                    return ft
                })
                newData.active="side-nav__item--active";
                newLists[index]=newData
                setsalesModal(false);
                setreturnsModal(false);
                setpurchasesModal(false);
                setmanageDbModal(true);
                sethistoryModal(false);
                break;
            case "history":
                newLists=newLists.map(ft=>{
                    ft.active=""
                    return ft
                })
                newData.active="side-nav__item--active";
                newLists[index]=newData
                setsalesModal(false);
                setreturnsModal(false);
                setpurchasesModal(false);
                setmanageDbModal(false);
                sethistoryModal(true);
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
      <nav className="sidebar">
        <ul  className="side-nav">
            {lists.map(dt=>(
            <li onClick={()=>handleState(dt)} className={"side-nav__item "+dt.active}>
                <a href="#" className="side-nav__link">
                    {/* <svg className="side-nav__icon">
                        <use xlink:href="img/sprite.svg#icon-home"></use>
                    </svg> */}
                    <span>{dt.name}</span>
                </a>
            </li>

            ))}
            
        </ul>
    
        <div className="legal">
            &copy; 2017 by trillo. All rights reserved.
        </div>
    </nav>
  )
}
