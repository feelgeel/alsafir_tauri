import React, { useEffect, useState } from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import AddSales from "../manageSales/AddSales";
import Modal from 'react-modal';
import *as chosenProdsAction from '../redux/reduxSlice/chosenProducts';
import { useSelector, useDispatch } from "react-redux";
import {
  handleUpdate,
  hendleDelete,
  handleIncreaseQuant,
  handleDecreaseQuant,
  handleAddProd,
  handleReset,
  handleModal,
  handleSold
} from "./returnsFuctions";
import { funcs } from "./manageQuantityFuncs";
import ManageQuantity from "../component/manageQuantity/ManageQuantity";
import Pagination from "../pagination/Pagination";
import CardQuantManager from "../component/card/CardQuantManager";
import _ from "lodash"
const Returns = ({ salesModal,setsalesModal,returnsModal,setreturnsModal,
  purchasesModal,setpurchasesModal,manageDbModal,setmanageDbModal,
  historyModal,sethistoryModal}) => {
  const dispatch = useDispatch();
  const chosenProdsRedux = useSelector((state) => state.entities.chosenProducts.list);
  const salesRedux = useSelector((state) => state.entities.sales.list);
  const returnsRedux = useSelector((state) => state.entities.returns.list);
  const returnsListRedux = useSelector((state) => state.entities.returnsList.list);
  //modals
  const [addToSalesModal, setaddToSalesModal] =useState(false);
  const [manageQuantmodal, setmanageQuantmodal] =useState(false);
  const [addToChosen, setaddToChosen] =useState(false);
  // 
 
  //manage quant
  const [manageQuant, setmanageQuant] = useState(true);
  const [price, setprice] = useState(false);
  const [managePrice, setmanagePrice] = useState(false);
  //add sales
  const [saved, setsaved] = useState(false);
  const [updateChosen, setupdateChosen] = useState(false);
  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  let [pageSize, setpageSize] = useState(14);
  let [paginateDt, setpaginateDt] = useState([]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    let newTableDt = _(chosenProdsRedux)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setpaginateDt(newTableDt);
  };
  let totalPrice = 0;
  chosenProdsRedux.map((dt) => {
    totalPrice += dt.quantity * dt.price;
  });
 useEffect(() => {
    handlePageChange(currentPage);
  }, [chosenProdsRedux]);
  return (
    <div className="shoppingList">
      <div>
    <h1>----returns----</h1>
      </div>
        <button onClick={() =>handleModal(setaddToSalesModal)}>
          {/* <a href="#popup">add</a> */}
          ADD
        </button>
        <button onClick={()=>{console.log("sales",salesRedux,"returns",returnsRedux)}} >state</button>
        <button onClick={()=>handleReset(dispatch)}>RESET</button>
        {chosenProdsRedux.length===0&&<h2>Shopping List is empty</h2>}
       {chosenProdsRedux.length!==0&& <h2>Items Number:{chosenProdsRedux.length}</h2>}
       <Pagination
        itemCounts={chosenProdsRedux.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      {totalPrice !== 0 && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <button style={{ height: "80px", textAlign: "end" }}>
            Total:{totalPrice}
            <button
              onClick={() =>
                handleSold(
                  returnsRedux,
                  chosenProdsRedux,
                  returnsListRedux,
                  dispatch
                )
              }
            >
              SOLD
            </button>
          </button>
        </div>
      )}
       {chosenProdsRedux.length !== 0 && (
        <div style={{}}>
          <CardQuantManager tableData={paginateDt} />
        </div>
      )}
        {/* sales modal */}
        <AddSales 
        setaddToSalesModal={setaddToSalesModal}
         addToSalesModal={addToSalesModal}
        setaddToChosen={setaddToChosen}
         setupdateChosen={setupdateChosen}
        setmanageQuantmodal={setmanageQuantmodal}
        setsaved={setsaved}
         />
     
      {/* addtochosen */}
     
      <ManageQuantity 
      funcs={funcs}
      updateChosen={updateChosen}
      manageQuantmodal={manageQuantmodal}
      setmanageQuantmodal={setmanageQuantmodal}
      manageQuant={manageQuant}
      saved={saved}
      price={price}
      managePrice={managePrice}
       />
    </div>
  );
};

export default Returns;
