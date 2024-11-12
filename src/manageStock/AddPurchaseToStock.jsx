import React from 'react'
import Modal from "react-modal";
import PurchasesComp from './PurchasesComp';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { funcs } from "./manageQuantityFuncs";
import ManageQuantity from '../component/manageQuantity/ManageQuantity';
export default function AddPurchaseToStock({addpurchasetoSTModal,setaddpurchasetoSTModal}) {
  const [purchaseType, setpurchaseType] = useState("zebda");
  const [addtoPurchasesModal, setaddtoPurchasesModal] = useState(false);
  const [updatetoPurchasesModal, setupdatetoPurchasesModal] = useState(false);
  const [updateChosen, setupdateChosen] = useState(false);
  const [manageQuantmodal, setmanageQuantmodal] = useState(false);
  const chosenProdRedux = useSelector((state) => state.entities.chosen.chosenprod);
  // console.log("manageQuantmodal",manageQuantmodal,chosenProdRedux);
  return (
    <Modal
    isOpen={addpurchasetoSTModal}
     onRequestClose={() => setaddpurchasetoSTModal(false)}
     >
    <PurchasesComp
       setpurchaseType={setpurchaseType}
       setaddtoPurchasesModal={setaddtoPurchasesModal}
       purchaseType={purchaseType}
       setupdatetoPurchasesModal={setmanageQuantmodal}
       type="db"
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
        manageStProd="false"
        manageStPurchases="true"
        ing="false"
      />
    </Modal>
  )
}
