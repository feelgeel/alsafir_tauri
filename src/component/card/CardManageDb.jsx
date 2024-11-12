import React from 'react'
import NewCard from './NewCard'
let style={
    display:"flex",
    justifyContent:"center"
}
export default function CardManageDb({data,onclick}) {
  // console.log(data);
  return (
    <div style={style}>
      {data.map((list)=>(<NewCard key={list._id} data={list} onclick={()=>onclick(list)} />))}
    </div>
  )
}
