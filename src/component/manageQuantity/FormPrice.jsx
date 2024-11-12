import React from 'react'
import C_Form from '../../forms/C_Form'
import C_FormField from '../../forms/C_FormField'
import C_SubmitButton from '../../forms/C_SubmitButton'
import * as Yup from "yup"
import { C_FormDatePicker } from '../../forms/C_FormDatePicker'
import moment from 'moment'
// import C_FormDatePicker from '../../forms/C_FormDatePicker'
// import { Form,DatePicker } from "react-formik-ui";
const schema = Yup.object().shape({
    quantity: Yup.number().required(),
    price: Yup.number().required(),
  })
const schema2 = Yup.object().shape({
    quantity: Yup.number().required(),
    price: Yup.number().required(),
    perimationDate: Yup.date().required(),
  })
export default function FormPrice({onsubmit,title,saved,onDelete,onQuit,perimatioDate=true}) {
  return (
    <>
       {!perimatioDate&&<C_Form
validationSchema={schema}
initialValues={{
  quantity:1,
  price:0,
}}
onSubmit={(values)=>{
    onsubmit(values)
   }}
>

<p>quantity</p>
<C_FormField
name="quantity"
type="text"
/>
<p>price</p>
<C_FormField
name="price"
type="text"
/>
<button onClick={onQuit}>Quit</button>
{!saved&&<button onClick={onDelete}>delete</button>}
<C_SubmitButton title={title}/>
</C_Form>}
{perimatioDate&&<C_Form
validationSchema={schema2}
initialValues={{
  quantity:1,
  price:0,
  perimationDate:new Date(),
}}
onSubmit={(values)=>{
  let perimationDate=values.perimationDate
 let newDate= moment(perimationDate).format('DD-MM-YYYY');
 let newValues={...values}
 newValues.perimationDate=newDate
 newValues.perimation=true
  //  console.log(typeof values.perimationDate);
  //  console.log(perimationDate.toString());
  //  console.log( newValues);
    onsubmit(newValues)
   }}
>

<p>quantity</p>
<C_FormField
name="quantity"
type="text"
/>
<p>price</p>
<C_FormField
name="price"
type="text"
/>

<C_FormDatePicker name="perimationDate" />
<button onClick={onQuit}>Quit</button>
{!saved&&<button onClick={onDelete}>delete</button>}
<C_SubmitButton title={title}/>
</C_Form>}
</>
  )
}
