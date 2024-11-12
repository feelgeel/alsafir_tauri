// import "../src/css/natour.css";s
import "./app.css";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { getproducts } from "./api/productApi";
import { writeTextFile, readTextFile,BaseDirectory } from '@tauri-apps/api/fs';
import { historyInit, productsInit, salesInit,returnsInit,purchasesInit } from "./appFunctions";
// import Sales from "./sales/Sales";
import Sales from "./sales2/Sales";
import Returns from "./returns2/Returns";
import Purchases from "./purchases2/Purchases";
import ManageDb from "./manageDb/ManageDb";
import NavBar from "./navBar/NavBar";
import ManageStock from "./manageStock/ManageStock";
import ProductCalc from "./productCalc/ProductCalc";
/*
    position: fixed;
    top: 0px;
    left: 30%;
    z-index: 9999999999999999999999;
    width: 624px;
    height: 548px;
    font-size: 1rem;
*/

function App() {
  const Redux = useSelector((state) => state.entities);
  const navActive = useSelector((state) => state.entities.navActive.list);
  const[salesModal,setsalesModal]=useState(true)
  const[returnsModal,setreturnsModal]=useState(false)
  const[purchasesModal,setpurchasesModal]=useState(false)
  const[manageDbModal,setmanageDbModal]=useState(false)
  const[historyModal,sethistoryModal]=useState(false)
  const[manageStockModal,setmanageStockModal]=useState(false)
  const[prodCalcModal,setprodCalcModal]=useState(false)
  const[sidebarList,setsidebarList]=useState([
    {name:"sales",active:"active"},
    {name:"returns",active:""},
    {name:"purchases",active:""},
    {name:"manageDb",active:""},
    {name:"history",active:""},
  ])
  let dispatch=useDispatch()
   async function data() {
  productsInit(dispatch);
  historyInit(dispatch);
  salesInit(dispatch); 
  returnsInit(dispatch); 
  purchasesInit(dispatch); 
  }
  useEffect(()=>{
    data()

  },[])
  // console.log("Redux",Redux);
  const customStyles1 = {
    content: {
      width:"100%",
      height:"100%",
      top: '0',
      left: '0',
      // right: '100%',
      // bottom: '100%',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
    },
  };
  let lists=[
    {name:"sales",active:"side-nav__item--active"},
    {name:"returns",active:""},
  ]
  // const salesRedux = useSelector((state) => state.entities.sales.list);
  // const returnsRedux = useSelector((state) => state.entities.returns.list);
  // console.log("sales",salesRedux,"returns",returnsRedux);
  // console.log(navActive);
  return (
    <div className="App">
      <NavBar
      setsalesModal={setsalesModal}
      setreturnsModal={setreturnsModal}
      setpurchasesModal={setpurchasesModal}
      setmanageDbModal={setmanageDbModal}
       sethistoryModal={sethistoryModal}
       setmanageStockModal={setmanageStockModal}
       setprodCalcModal={setprodCalcModal}
      />
      {navActive==="sales"&&<Sales/>}
      {navActive==="returns"&&<Returns/>}
      {navActive==="purchases"&&<Purchases/>}
      {navActive==="managedb"&&<ManageDb/>}
      {navActive==="managestock"&&<ManageStock/>}
      {navActive==="prodCalc"&&<ProductCalc/>}

    </div>
//       <div className="App">
//         <Sidebar 
//         sidebarList={sidebarList}
//         setsidebarList={setsidebarList}
//           setsalesModal={setsalesModal}
//           setreturnsModal={setreturnsModal}
//           setpurchasesModal={setpurchasesModal}
//           setmanageDbModal={setmanageDbModal}
//           sethistoryModal={sethistoryModal}
//            />
//           <div style={{ width: "25%",height: "100vh"}} ></div>
//         <Content
//         // className="overlay"
//         //  style={{height:"100vh"}}
//         >
          
//         {salesModal&&<Sales salesModal={salesModal}
//                   setsalesModal={setsalesModal}
//                   returnsModal={returnsModal}
//                   setreturnsModal={setreturnsModal}
//                   purchasesModal={purchasesModal}
//                   setpurchasesModal={setpurchasesModal}
//                   manageDbModal={manageDbModal}
//                   setmanageDbModal={setmanageDbModal}
//                   historyModal={historyModal}
//                   sethistoryModal={sethistoryModal}
//                   customStyles1={customStyles1}
//                   />}
//         {returnsModal&&<Returns salesModal={salesModal}
//                   setsalesModal={setsalesModal} 
//                   returnsModal={returnsModal}
//                   setreturnsModal={setreturnsModal}
//                   purchasesModal={purchasesModal}
//                   setpurchasesModal={setpurchasesModal}
//                   manageDbModal={manageDbModal}
//                   setmanageDbModal={setmanageDbModal}
//                   historyModal={historyModal}
//                   sethistoryModal={sethistoryModal}
//                   customStyles1={customStyles1}
//                   />}
//       {purchasesModal&& <Purchases salesModal={salesModal}
//                   setsalesModal={setsalesModal} 
//                   returnsModal={returnsModal}
//                   setreturnsModal={setreturnsModal}
//                   purchasesModal={purchasesModal}
//                   setpurchasesModal={setpurchasesModal}
//                   manageDbModal={manageDbModal}
//                   setmanageDbModal={setmanageDbModal}
//                   historyModal={historyModal}
//                   sethistoryModal={sethistoryModal}
//                   customStyles1={customStyles1}
//                   />}
//         {manageDbModal&&<ManageDb salesModal={salesModal}
//                   setsalesModal={setsalesModal}
//                   returnsModal={returnsModal}
//                   setreturnsModal={setreturnsModal}
//                   purchasesModal={purchasesModal}
//                   setpurchasesModal={setpurchasesModal}
//                   manageDbModal={manageDbModal}
//                   setmanageDbModal={setmanageDbModal}
//                   historyModal={historyModal}
//                   sethistoryModal={sethistoryModal}
//                   customStyles1={customStyles1}
//                   />}
//         {historyModal&& <History salesModal={salesModal}
//                   setsalesModal={setsalesModal}
//                   returnsModal={returnsModal}
//                   setreturnsModal={setreturnsModal}
//                   purchasesModal={purchasesModal}
//                   setpurchasesModal={setpurchasesModal}
//                   manageDbModal={manageDbModal}
//                   setmanageDbModal={setmanageDbModal}
//                   historyModal={historyModal}
//                   sethistoryModal={sethistoryModal}
//                   customStyles1={customStyles1}
//                   />}
//         </Content>

//        {/* <AlSafirNavBar 
//        lists={sidebarList}
//        setsidebarList={setsidebarList}
//        setsalesModal={setsalesModal}
//        setreturnsModal={setreturnsModal}
//        setpurchasesModal={setpurchasesModal}
//        setmanageDbModal={setmanageDbModal}
//        sethistoryModal={sethistoryModal}
//        /> */}
//        {/* <h1>hello</h1> */}
//         {/* <div
//           // style={{ width: "100vw", height: "100vh" }}
//         > */}
// {/*         
//         {/* </div>  */}
//       </div>
    
  );
}

export default App;
