import React from 'react'
import DropDown from '../component/dropDown/DropDown'
import { useFormikContext } from 'formik'

export default function C_FormDropDown({name,lists}) {
  // console.log(lists);
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleDropDown=(e)=>{
    let val=e.target.value
    if(val!==""){
      setFieldValue(name,val)
    }
    // console.log(val);
  
  }
  return (
    <div>
      <DropDown name={name} lists={lists} onchange={(e)=>handleDropDown(e)}/>
    </div>
  )
}
