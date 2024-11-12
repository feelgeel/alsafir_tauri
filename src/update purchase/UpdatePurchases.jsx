import React from "react";
import * as Yup from "yup"
import C_FormField from '../forms/C_FormField';
import C_Form from '../forms/C_Form';
import C_SubmitButton from '../forms/C_SubmitButton';
import Modal from 'react-modal';
import C_ImagePicker from '../forms/C_ImagePicker';
import CardManageDb from '../component/card/CardManageDb';
import { useDispatch, useSelector } from 'react-redux';
import * as breadAction from "../redux/reduxSlice/bread";
import * as patisserieAction from "../redux/reduxSlice/patisserie";
import * as purchaseDbAction from "../redux/reduxSlice/purchaseDb";
import { BaseDirectory, copyFile, writeTextFile } from "@tauri-apps/api/fs";
import C_FormDropDown from "../forms/C_FormDropDown";
const schema = Yup.object().shape({
  image: Yup.string(),
  name: Yup.string(),
  measureIn: Yup.string(),
})
export default function UpdatePurchases({selectedDt,updatetoPurchasesModal,setupdatetoPurchasesModal}) {
  let dispatch=useDispatch()
  let selectedDbArr=[selectedDt]
  const breadRedux = useSelector((state) => state.entities.bread.list);
  const patisserieRedux = useSelector((state) => state.entities.patisserie.list);
  const purchaseDbRedux = useSelector((state) => state.entities.purchaseDb.list);
  let newPatisserie=[...patisserieRedux]
  
  const handleUpdate=async(values)=>{
    let newObj={}
    let img=values.image===""?{image:selectedDt.image}:{image:values.image}
    let name=values.name===""?{name:selectedDt.name}:{name:values.name}
    let measureIn=values.measureIn===""?{measureIn:selectedDt.measureIn}:{measureIn:values.measureIn}
    newObj={_id:selectedDt._id,...img,...name,...measureIn}
   
    let newpurchases=[...purchaseDbRedux]
    let index=purchaseDbRedux.findIndex(dt=>dt._id==newObj._id)
    newpurchases[index]=newObj
    dispatch(purchaseDbAction.modifyPurchaseDb(newpurchases));
    let stringifiedPurchasesDb = JSON.stringify(newpurchases);  
    let copied = await writeTextFile("purchasesDb.json",stringifiedPurchasesDb,{ dir: BaseDirectory.Desktop });
    setupdatetoPurchasesModal(false)
console.log(values);
console.log(newObj);
console.log(newpurchases);
}
let lists = [
  { _id: "1", name: "select mesure type", selected: "selected" },
  { _id: "2", name: "ML", selected: "" },
  { _id: "3", name: "G", selected: "" },
];
  const handleDelete=()=>{
  
  }
  return ( 
    <Modal
      isOpen={updatetoPurchasesModal}
      onRequestClose={() => setupdatetoPurchasesModal(false)}
      // style={customStyles1}
    >
      <div>
        <C_Form
          validationSchema={schema}
          onSubmit={(values) => {
            handleUpdate(values);
          }}
          initialValues={{
            image: "",
            name: "",
            measureIn:"",
          }}
        >
          <button onClick={handleDelete}>delete</button>
          <CardManageDb data={selectedDbArr} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <C_ImagePicker name="image" />

            <C_FormField name="name" type="text" />
            <C_FormDropDown lists={lists} name="measureIn" />
            <C_SubmitButton />
          </div>
        </C_Form>
      </div>
    </Modal>
  );
}
