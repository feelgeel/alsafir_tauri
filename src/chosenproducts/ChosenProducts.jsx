import React from 'react'
import Card from '../component/card/Card';
export default function ChosenProducts() {
    let prodDb=[
        {
            id: 1,
            name: "mouniss",
            price:30,
        },
        {
            id: 2,
            name: "khobz zitoun",
            price:30,
        },
        {
            id: 3,
            name: "parisien",
            price:30,
        },
        {
            id: 4,
            name: "smid",
            price:30,
        },
    ]
  return (
    <div className='chosenproducts'>
       {
                prodDb.map(item => { 
                    return <Card data={item} />
                })
            }
    </div>
  )
}
