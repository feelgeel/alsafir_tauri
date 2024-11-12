import React, { useState } from "react";
import * as Yup from "yup";
import C_FormField from "../../forms/C_FormField";
import C_Form from "../../forms/C_Form";
import C_SubmitButton from "../../forms/C_SubmitButton";
import Modal from "react-modal";
import C_ImagePicker from "../../forms/C_ImagePicker";
import C_FormDropDown from "../../forms/C_FormDropDown";
import { BaseDirectory, copyFile, writeTextFile } from "@tauri-apps/api/fs";
import * as breadAction from "../../redux/reduxSlice/bread";
import * as patisserieAction from "../../redux/reduxSlice/patisserie";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
let double = true;
const schema = Yup.object().shape({
  image: Yup.string().required(),
  name: Yup.string().min(2).required(),
  subCategory: Yup.string().required(),
});
const customStyles1 = {
  content: {
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    // right: '100%',
    // bottom: '100%',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

let lists = [
  { _id: "1", name: "select subCategory", selected: "selected" },
  { _id: "2", name: "bread", selected: "" },
  { _id: "3", name: "patisserie", selected: "" },
];
export default function AddToDb({ addtoDbModal, setaddtoDbModal }) {
  //style
  const errorStyle = {
    color: "red",
  };
  //redux
  let dispatch = useDispatch();
  const breadRedux = useSelector((state) => state.entities.bread.bread);
  const patisserieRedux = useSelector(
    (state) => state.entities.patisserie.list
  );
  const purchaseDbRedux = useSelector(
    (state) => state.entities.purchaseDb.list
  );
  //state
  const [exist, setexist] = useState(false);
  //funcs
  const handleSaveProd = async (values) => {
    values.category="product"
    // console.log(values);

    let newBreadRedux = [...breadRedux];
    let newPatisserieRedux = [...patisserieRedux];
    let _id = uuidv4();
    let newVals = { ...values, _id };
    newVals.category="products"
    if (newVals.subCategory === "bread") {
      newBreadRedux.push(newVals);
      // console.log("bread",newBreadRedux);
      let stringifiedBread = JSON.stringify(newBreadRedux);
      dispatch(breadAction.modifybread(newBreadRedux));
      let copied = await writeTextFile("breadDb.json", stringifiedBread, {
        dir: BaseDirectory.Desktop,
      });
    }
    if (newVals.subCategory === "patisserie") {
      newPatisserieRedux.push(newVals);
      let stringifiedPatisserie = JSON.stringify(newPatisserieRedux);
      dispatch(patisserieAction.modifyPatisserie(newPatisserieRedux));
      let copied = await writeTextFile(
        "patisserieDb.json",
        stringifiedPatisserie,
        { dir: BaseDirectory.Desktop }
      );
    }
    //   newProdRedux.push(newVals)
    // productsArr=JSON.parse(productsArr)
    // console.log("new bread",values,exist);
    setaddtoDbModal(false);
  };
  const handleReturn = () => {
    console.log("hello");
  };

  return (
    <Modal
      isOpen={addtoDbModal}
      onRequestClose={() => setaddtoDbModal(false)}
      // style={customStyles1}
    >
      <C_Form
        validationSchema={schema}
        initialValues={{
          image: "",
          name: "",
          subCategory: "",
        }}
        onSubmit={(values) => {
          let name = values.name;
          if(values.subCategory==="bread"){
            if (breadRedux.length === 0) {
              handleSaveProd(values);
            } else {
              breadRedux.map(async (dt) => {
                if (dt.name === name) {
                  setexist(true);
                } else {
                  setexist(false);
                  handleSaveProd(values);
                }
              });
            }
          }else{
            if (patisserieRedux.length === 0) {
              handleSaveProd(values);
            }else{
              patisserieRedux.map(async (dt) => {
                if (dt.name === name) {
                  setexist(true);
                } else {
                  setexist(false);
                  handleSaveProd(values);
                }
              });
            }
          }
          
          // console.log("hanle sub",values)
        }}
      >
        <C_ImagePicker name="image" />
        {/* <button onClick={handleReturn} >hehe</button> */}
        <C_FormField name="name" type="text" />
        <C_FormDropDown lists={lists} name="subCategory" />

        <C_SubmitButton />
        {exist && <h1 style={errorStyle}>error the name alrady exist</h1>}
      </C_Form>
    </Modal>
  );
}
