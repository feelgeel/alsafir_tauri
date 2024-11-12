import React, { useEffect, useState } from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import AddSales from "../manageSales/AddSales";
import Modal from "react-modal";
import * as chosenProdsAction from "../redux/reduxSlice/chosenProducts";
import Pagination from "../pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import Table from "../component/table/Table";
import _ from "lodash";
import {
  handleUpdate,
  hendleDelete,
  handleIncreaseQuant,
  handleDecreaseQuant,
  handleAddProd,
  handleReset,
  handleModal,
  handleSold,
  handleSort,
} from "./salesFuctions";
import { funcs } from "./manageQuantityFuncs";
import ManageQuantity from "../component/manageQuantity/ManageQuantity";
import NewCard from "../component/card/NewCard";
import CardQuantManager from "../component/card/CardQuantManager";

const Sales = ({
  salesModal,
  setsalesModal,
  returnsModal,
  setreturnsModal,
  purchasesModal,
  setpurchasesModal,
  manageDbModal,
  setmanageDbModal,
  historyModal,
  sethistoryModal,
}) => {
  const dispatch = useDispatch();

  const chosenProdsRedux = useSelector(
    (state) => state.entities.chosenProducts.list
  );
  const salesRedux = useSelector((state) => state.entities.sales.list);
  const salesListRedux = useSelector((state) => state.entities.salesList.list);
  //modals
  const [addToSalesModal, setaddToSalesModal] = useState(false);
  const [manageQuantmodal, setmanageQuantmodal] = useState(false);
  //manage quant
  const [manageQuant, setmanageQuant] = useState(true);
  const [addToChosen, setaddToChosen] = useState(false);
  const [saved, setsaved] = useState(false);
  const [price, setprice] = useState(true);
  const [managePrice, setmanagePrice] = useState(false);
  //
  const [updateChosen, setupdateChosen] = useState(false);
  // let [totalPrice, settotalPrice] = useState(0);
  let [pageSize, setpageSize] = useState(14);
  let [paginateDt, setpaginateDt] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  let totalPrice = 0;
  chosenProdsRedux.map((dt) => {
    totalPrice += dt.quantity * dt.price;
  });
  // console.log(totalPrice);
  
  const handlePageChange = (page) => {
    setcurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    let newTableDt = _(chosenProdsRedux)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setpaginateDt(newTableDt);
    // console.log(startIndex);
  };
  useEffect(() => {
    handlePageChange(currentPage);
  }, [chosenProdsRedux]);
  return (
    <div className="shoppingList">
      <h1 style={{fontSize:"3rem", color:"pink"}}>sales</h1>
      <button onClick={() => handleModal(setaddToSalesModal)} 
      style={{fontSize:"1.5rem",marginRight:"1rem"}}>+</button>
      <button style={{fontSize:"1.5rem"}} onClick={() => handleReset(dispatch, setpaginateDt)}>
      &#8635;
      </button>
      <h2 className="c-white">Items Number:{chosenProdsRedux.length}</h2>
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
            Total:{totalPrice}DA
            <button
              onClick={() =>
                handleSold(
                  salesRedux,
                  chosenProdsRedux,
                  salesListRedux,
                  dispatch
                )
              }
            >
              SOLD
            </button>
          </button>
        </div>
      )}
      {chosenProdsRedux.length === 0 && <h2>Shopping List is empty</h2>}
      {chosenProdsRedux.length !== 0 && (
        <div style={{}}>
          <CardQuantManager tableData={paginateDt} />
        </div>
      )}
      {/* sales modal */}
      <AddSales
        setupdateChosen={setupdateChosen}
        setaddToSalesModal={setaddToSalesModal}
        addToSalesModal={addToSalesModal}
        setaddToChosen={setaddToChosen}
        setmanageQuantmodal={setmanageQuantmodal}
        setsaved={setsaved}
        products={true}
        purchases={false}

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

export default Sales;
