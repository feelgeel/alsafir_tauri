import React, { useState } from 'react'

export default function DropDown({name,lists=[],onchange}) {
  

  return (
    <div>
      {name}: <select   onChange={(e) =>onchange(e) } name="subject" id="subject">
    {lists.map((list)=> <option key={list._id} value={list.name} 
    defaultValue={list.name} >{list.name}</option>)}
   
  </select>
    </div>
  )
}
