import React from 'react'
import "./search.css"
export default function Search({setsearch}) {
  const handleChange=(e)=>{
    setsearch(e.target.value)
  }
  return (
    <div className='search'>
      <input type="text" onChange={(e)=>handleChange(e)} placeholder='  search a product' />
      <div className='d-flex'>
      <p className='search-name search-btn'>Search</p>
      </div>
    </div>
  )
}
