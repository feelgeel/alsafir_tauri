import React from 'react'
import C_Form from '../../forms/C_Form'
import C_FormField from '../../forms/C_FormField'
import C_SubmitButton from '../../forms/C_SubmitButton'
import *as Yup from "yup";

const schema = Yup.object().shape({
    quantity: Yup.number().required(),
  })
export default function FormManageStPurchase({onsubmit,
  onQuit,saved="false",title}) {
  return (
    <C_Form
    validationSchema={schema}
    initialValues={{
      quantity:1,
    }}
    onSubmit={(values)=>{
        onsubmit(values)
        // console.log(values);
       }}
    >
    {/* <button style={{}} className="btn-form">-</button> */}
    <h2>hello </h2>
    <C_FormField
    name="quantity"
    type="number"
    style={{border:"1px solid #5c3890",padding:".3rem .5rem"}}
    />
    <C_FormField
    name="price"
    type="number"
    style={{border:"1px solid #5c3890",padding:".3rem .5rem"}}
    />
    <button style={{}} className="btn-form" onClick={onQuit}>Quit</button>
    {!saved&&<button className="btn-form" onClick={onDelete}>delete</button>}
    <C_SubmitButton style={{margin:".5rem",
    fontWeight:"bold",
    borderRadius:".5rem",
    padding:".3rem .5rem",
    color:"white",
    backgroundColor:"#f89418"}} className="btn-form" title={title}/>
    </C_Form>
  )
}
