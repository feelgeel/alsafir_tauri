import React from 'react'
import * as Yup from "yup"
import C_FormField from '../../forms/C_FormField';
import C_Form from '../../forms/C_Form';
import C_SubmitButton from '../../forms/C_SubmitButton';
import Modal from 'react-modal';
import C_ImagePicker from '../../forms/C_ImagePicker';
import CardManageDb from '../card/CardManageDb';
import { useDispatch, useSelector } from 'react-redux';
import * as breadAction from "../../redux/reduxSlice/bread";
import * as patisserieAction from "../../redux/reduxSlice/patisserie";
import C_FormDropDown from '../../forms/C_FormDropDown';
import { BaseDirectory, copyFile, writeTextFile } from "@tauri-apps/api/fs";
const schema = Yup.object().shape({
  image: Yup.string(),
  name: Yup.string(),
  category: Yup.string(),
})
export default function UpdateDb({selectedDt,updateDbModal,setupdateDbModal}) {
  let dispatch=useDispatch()
  let selectedDbArr=[selectedDt]
  const breadRedux = useSelector((state) => state.entities.bread.list);
  const patisserieRedux = useSelector((state) => state.entities.patisserie.list);
  
  let newPatisserie=[...patisserieRedux]
  // let _id=uuidv4()
  const handleUpdate=async(values)=>{
    let newObj={}
    let img=values.image===""?{image:selectedDt.image}:{image:values.image}
    let name=values.name===""?{name:selectedDt.name}:{name:values.name}
    let price=values.price===""?{price:selectedDt.price}:{price:values.price}
    newObj={_id:selectedDt._id,...img,...name,...price,category:selectedDt.category}
    let newBread=[...breadRedux]
      let index=breadRedux.findIndex(dt=>dt._id==newObj._id)
      newBread[index]=newObj
      dispatch(breadAction.modifyBread(newBread))
    // let stringifiedPurchasesDb = JSON.stringify(newPurchaseDb);
    // let copied = await writeTextFile(
    //   "purchasesDb.json",
    //   stringifiedPurchasesDb,
    //   { dir: BaseDirectory.Desktop }
    // );
    if(newObj.category==="bread"){
      let newBread=[...breadRedux]
      let index=breadRedux.findIndex(dt=>dt._id==newObj._id)
      newBread[index]=newObj
      dispatch(breadAction.modifyBread(newBread))
       let stringifiedbreadDb = JSON.stringify(newBread);
    let copied = await writeTextFile(
      "breadDb.json",
      stringifiedbreadDb,
      { dir: BaseDirectory.Desktop }
    );
      // console.log(newBread);
    }
    if(newObj.category==="patisserie"){
      let newPatisserie=[...patisserieRedux]
      let index=patisserieRedux.findIndex(dt=>dt._id==newObj._id)
      newPatisserie[index]=newObj
      dispatch(patisserieAction.modifyPatisserie(newPatisserie))
      let stringifiedpatisserieDb = JSON.stringify(newPatisserie);
      let copied = await writeTextFile(
        "patisserieDb.json",
        stringifiedpatisserieDb,
        { dir: BaseDirectory.Desktop }
      );
    }
    setupdateDbModal(false)
// console.log(newBread);
  }
  const handleDelete=()=>{
    
  }
  // console.log("updated dt",selectedDbArr);
  let lists = [
    { _id: "1", name: "select category", selected: "selected" },
    { _id: "2", name: "bread", selected: "" },
    { _id: "3", name: "patisserie", selected: "" },
  ];
  return (
    <Modal
    isOpen={updateDbModal}
    onRequestClose={()=>setupdateDbModal(false)}
    // style={customStyles1}
    >
     <C_Form
validationSchema={schema}
onSubmit={(values)=>{
  handleUpdate(values)
   }}
initialValues={{
  image: "",
  name: '',
  category:""
}}
>
  <button onClick={handleDelete} >delete</button>
<CardManageDb data={selectedDbArr} />
<div style={{display:"flex", 
flexDirection:"column",justifyContent:"center",
alignItems:"center"}}>

  
<C_ImagePicker 
name="image"
/>

<C_FormField
name="name"
type="text"
/>
<C_FormDropDown lists={lists} name="category" />
<C_SubmitButton/>
</div>
</C_Form>
    </Modal>
  )
}
