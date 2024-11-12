import React from 'react'
// import "./card.css"
import prodImg from "../../img/hero.jpg"


export default function Card({data}) {
    // console.log(data);
    return (
        <div className='card'>
            <div className="card-side card-side-front">
                <div className="card-pic card-pic-1">
                   <img width="100%" height="100%" src={prodImg} alt="" />
                </div>
                <h4 className="card-heading">
                    <span className="card-heading-span card-heading-span-1">{data.name}</span>
                </h4>
                {/* 
                <h4 className="card-heading">
                    <span className="card-heading-span card-heading-span-1">30DA</span>
                </h4> */}
                <div className="card-details">
                    <ul>
                        <li className="card-list">{data.price} DA</li>
                    </ul>
                </div>
            </div>
           
        </div>
    )
}
