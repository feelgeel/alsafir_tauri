import React, { useState } from "react";
import Modal from "react-modal";
import ProdComponent from "./ProdComponent";
import { useSelector } from "react-redux";
import ManageQuantity from '../component/manageQuantity/ManageQuantity';
import { funcs } from "./manageQuantityFuncs";
export default function AddProdToStock({ addtoSTModal, setaddtoSTModal }) {
  const [prodType, setprodType] = useState("products");
  const [prodType2, setprodType2] = useState("bread");
  const [addToDbModal, setaddtoDbModal] = useState("bread");
  const [updateDbModal, setupdateDbModal] = useState(false);
  const [updateChosen, setupdateChosen] = useState(false);
  const [manageQuantmodal, setmanageQuantmodal] = useState(false);
  const DbBreadRedux = useSelector((state) => state.entities.bread.bread);
  const stBreadRedux = useSelector((state) => state.entities.bread.breadSt);
  const DbpatisserieRedux = useSelector((state) => state.entities.patisserie.list);
  const chosenProdRedux = useSelector((state) => state.entities.chosen.chosenprod);
  // console.log("addprodtostock",DbpatisserieRedux);
  return (
    <Modal isOpen={addtoSTModal}
     onRequestClose={() => setaddtoSTModal(false)}>
      <ProdComponent
        setprodType2={setprodType2}
        prodType2={prodType2}
        setaddtoDbModal={setaddtoSTModal}
        setupdateDbModal={setmanageQuantmodal}
        bread={DbBreadRedux}
        patisserie={DbpatisserieRedux}
      />
        <ManageQuantity
      chosenProduct={chosenProdRedux}
        funcs={funcs}
        updateChosen={updateChosen}
        manageQuantmodal={manageQuantmodal}
        setmanageQuantmodal={setmanageQuantmodal}
        manageQuant={false}
        saved="products"
        price="false"
        managePrice="false"
        perimationDate="true"
        manageStProd="true"
        manageStPurchases="false"
        ing="false"
      />
    </Modal>
  );
}
