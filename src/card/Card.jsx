import React, { useState } from "react";
import "./card.css";
import img from "../image/mounice.jpg";
export default function Card({ data, onclick, active = false }) {
  // console.log("card",data);
  const [quant, setquant] = useState(1);
  let isActive = active ? "active" : "";
  let isWhite = active ? "white" : "";
  let isPurple = active ? "purple" : "";
  const handleChange = (e) => {
    setquant(e.target.value);
    // console.log(e.target.value);
  };
  const handleInc = () => {
    let newQuant = quant;
    newQuant++;
    setquant(newQuant);
  };
  const handlDec = () => {
    let newQuant = quant;
    newQuant--;
    setquant(newQuant);
  };
  // console.log(data.image);
  return (
    <div onClick={() => onclick(data)} className={`card ${isActive}`}>
      <div>
        <img
          className="card-img"
          src={data.image}
          width="100px"
          height="100px"
        />
      </div>
      <div className="card-desc">
        <p className="name">{data.name}</p>
        <p className="name">{data.weight}{data.measureIn}</p>
        <div className="card-button">
          <p className={`left-butt ${isWhite} b-c-primary`}>
            {data.quantity ? data.quantity + "pcs" : "N/A"}
          </p>
          <p className={`right-butt purple`}>
            {data.price ? data.price + " DA" : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
