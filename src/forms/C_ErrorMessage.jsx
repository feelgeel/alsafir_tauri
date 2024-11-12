import React from 'react'
let errorStytle={
  color:"red"
}
export default function C_ErrorMessage({error,visible,name}) {
  // console.log(name,visible)
    if(visible) return null
  return (
    <div >
       <label style={errorStytle} type="invalid">
                {error}
        </label>
    </div>
  )
}