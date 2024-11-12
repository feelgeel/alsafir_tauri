import React from 'react'
import Card from './Card'

export default function Cards({data,onclick}) {
  return (
    <div style={{display:"flex"}}>
   {data.map(dt=><Card key={dt._id} data={dt} onclick={onclick} />)}
    </div>
  )
}
