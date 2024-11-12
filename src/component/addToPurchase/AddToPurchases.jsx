import React, { useState } from "react";
import Modal from "react-modal";
import C_Form from "../../forms/C_Form";
import C_ImagePicker from "../../forms/C_ImagePicker";
import C_FormField from "../../forms/C_FormField";
import C_SubmitButton from "../../forms/C_SubmitButton";
import * as purchaseDbAction from "../../redux/reduxSlice/purchaseDb";
import * as zebdaDbAction from "../../redux/reduxSlice/zebda";
import * as ingAction from "../../redux/reduxSlice/ingredient";
import * as smidDbAction from "../../redux/reduxSlice/smid";
import * as farineDbAction from "../../redux/reduxSlice/farine";
import * as margarineDbAction from "../../redux/reduxSlice/margarine";
import * as eggsDbAction from "../../redux/reduxSlice/eggs";
import { BaseDirectory, copyFile, writeTextFile,createDir } from "@tauri-apps/api/fs";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import C_FormDropDown from "../../forms/C_FormDropDown";

const schema = Yup.object().shape({
  image: Yup.string().required(),
  name: Yup.string().required(),
  weight: Yup.number().required(),
  measureIn: Yup.string().required(),
  subCategory: Yup.string().required(),
});
let lists = [
  { _id: "1", name: "select mesure type", selected: "selected" },
  { _id: "2", name: "ML", selected: "" },
  { _id: "3", name: "G", selected: "" },
];
let lists1 = [
  { _id: "1", name: "select subCategory type", selected: "selected" },
  { _id: "2", name: "zebda", selected: "" },
  { _id: "3", name: "margarine", selected: "" },
  { _id: "4", name: "farine", selected: "" },
  { _id: "5", name: "smid", selected: "" },
  { _id: "5", name: "eggs", selected: "" },
];
export default function AddToPurchases({
  addtoPurchasesModal,
  setaddtoPurchasesModal,
}) {
  //state
  const [exist, setexist] = useState(false);
  //style
  const errorStyle = {
    color: "red",
  };
  //redux
  let dispatch = useDispatch();
  const purchaseDbRedux = useSelector((state) => state.entities.purchaseDb.list);
  const zebdaDbRedux = useSelector((state) => state.entities.zebda.list);
  const producedQuant = useSelector((state) => state.entities.ingredient.producedQuant);
  const margarineDbRedux = useSelector((state) => state.entities.margarine.list);
  const farineDbRedux = useSelector((state) => state.entities.farine.list);
  const smidDbRedux = useSelector((state) => state.entities.smid.list);
  const eggsDbRedux = useSelector((state) => state.entities.eggs.list);
  //funcs
  const saveSubCateg=async({purchaseAction})=>{
    let _id = uuidv4();
    let newVals = { ...values, _id };
    newVals.category="purchases"
   
    // console.log(newzebda); 
  }
  const handleSavePurchases = async (values) => {
    let _id = uuidv4();
    let newVals = { ...values, _id };
    newVals.category="purchases"
//save produced quant//
   let ProducedQuantobj={_id:uuidv4(),prodId:newVals._id,quantity:1}
    let newProducedQuant=[...producedQuant]
    newProducedQuant.push(ProducedQuantobj)
    dispatch(ingAction.pushToproducedQuant(ProducedQuantobj))
    let stringifiedproducedquant = JSON.stringify(newProducedQuant);
    let copied = await writeTextFile("producedQuant.json",stringifiedproducedquant,
      { dir: BaseDirectory.Desktop }
    );
    switch (values.subCategory) {
      case "zebda":
        let newzebdaDbRedux=[...zebdaDbRedux]
        newzebdaDbRedux.push(newVals)
        dispatch(zebdaDbAction.pushTozebda(newVals));
        let stringifiedzebdaDb = JSON.stringify(newzebdaDbRedux);
        let copied = await writeTextFile("zebdaDb.json",stringifiedzebdaDb,
          { dir: BaseDirectory.Desktop }
        );
       
        break;
      case "smid":
        let newsmidDbRedux=[...smidDbRedux]
        newsmidDbRedux.push(newVals)
        dispatch(smidDbAction.pushTosmid(newVals));
        let stringifiedsmidDb = JSON.stringify(newsmidDbRedux);
        let copiedsmid = await writeTextFile("smidDb.json",stringifiedsmidDb,
          { dir: BaseDirectory.Desktop }
        );
        break;
      case "farine":
        let newfarineDbRedux=[...farineDbRedux]
        newfarineDbRedux.push(newVals)
        dispatch(farineDbAction.pushTofarine(newVals));
        let stringifiedfarineDb = JSON.stringify(newfarineDbRedux);
        let copiedfarine = await writeTextFile("farineDb.json",stringifiedfarineDb,
          { dir: BaseDirectory.Desktop }
        );
        break;
      case "margarine":
        let newmargarineDbRedux=[...margarineDbRedux]
        newmargarineDbRedux.push(newVals)
        dispatch(margarineDbAction.pushTomargarine(newVals));
        let stringifiedmargarineDb = JSON.stringify(newmargarineDbRedux);
        let copiedmargarine = await writeTextFile("margarineDb.json",stringifiedmargarineDb,
          { dir: BaseDirectory.Desktop }
        );
        break;
      case "eggs":
        let neweggsDbRedux=[...eggsDbRedux]
        neweggsDbRedux.push(newVals)
        dispatch(eggsDbAction.pushToeggs(newVals));
        let stringifiedeggsDb = JSON.stringify(neweggsDbRedux);
        let copiedeggs = await writeTextFile("eggsDb.json",stringifiedeggsDb,
          { dir: BaseDirectory.Desktop }
        );
        break;
     
      default:
        break;
    }
    // setaddtoPurchasesModal(false);
    // if(values.subCategory==="zebda"){
    //   let newzebda= [...zebdaDbRedux];
    //   console.log(newzebda);
    // }
    // let newPurchaseDb = [...purchaseDbRedux];
    // let _id = uuidv4();

    // let newVals = { ...values, _id };
    // newVals.category="purchases"
    // newPurchaseDb.push(newVals);
    // dispatch(purchaseDbAction.modifyPurchaseDb(newPurchaseDb));
    // let stringifiedPurchasesDb = JSON.stringify(newPurchaseDb);
    // let copied = await writeTextFile(
    //   "purchasesDb.json",
    //   stringifiedPurchasesDb,
    //   { dir: BaseDirectory.Desktop }
    // );
    // setaddtoPurchasesModal(false);

    // console.log(purchaseDbRedux);
  };

  return (
    <Modal
      isOpen={addtoPurchasesModal}
      onRequestClose={() => setaddtoPurchasesModal(false)}
      // style={customStyles1}
    >
      <C_Form
        validationSchema={schema}
        initialValues={{
          image: "",
          name: "",
          weight: "",
          measureIn: "",
          subCategory: "",
        }}
        onSubmit={(values) => {
          // console.log(values);
          let name = values.name
          let checkSubCateg=[]
          // console.log("hanle sub",name)
          switch (values.subCategory) {
            case "zebda":
              checkSubCateg=[...zebdaDbRedux]
              break;
            case "margarine":
              checkSubCateg=[...margarineDbRedux]
              break;
            case "eggs":
              checkSubCateg=[...eggsDbRedux]
              break;
            case "smid":
              checkSubCateg=[...smidDbRedux]
              break;
            case "farine":
              checkSubCateg=[...farineDbRedux]
              break;
          
            default:
              break;
          }
          if(checkSubCateg.length===0){ 
            handleSavePurchases(values); 
          }else{
            let nameExist = checkSubCateg.map((item) => item.name === name);
            nameExist=nameExist[0]
            if (nameExist) {setexist(nameExist)}else{handleSavePurchases(values);setexist(nameExist)}
            // console.log("exist",nameExist);

          }
        }}
      >
        <C_ImagePicker name="image" />
        <C_FormField name="name" type="text" />
        <C_FormField name="weight" type="text" />

        <C_FormDropDown name="measureIn" lists={lists} />
        <C_FormDropDown name="subCategory" lists={lists1} />
        {exist && <h1 style={errorStyle}>the name already exist</h1>}
        <C_SubmitButton />
      </C_Form>
    </Modal>
  );
}
