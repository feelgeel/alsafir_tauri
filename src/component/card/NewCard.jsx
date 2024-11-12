import React from "react";

export default function NewCard({
  data,
  onclick,
  quant = true,
  imgStyle,
  cardStyle,
  price=true
}) {
  // console.log("newCard",data.category);
  return (
    <div style={cardStyle} onClick={onclick} className="newCard">
      <div style={imgStyle} className="imgCard">
        <img width="100%" height="100%" src={data.image} alt="" />
      </div>
      <div className="infoCard">
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        {data.name && <h2>Name:{data.name}</h2>} 
        {data.category && <h2>Category:{data.category}</h2>}
        {data.price &&<h2>Price:{data.price}DA</h2>} 
        {data.measureIn &&<h2>measureIn:{data.measureIn}</h2>}
        {data.quantity && (
          <h2>
            {data.quantity}
            {data.quantity === 1 ? "piece" : "pieces"}
          </h2>
        )}
      </div>
    </div>
  );
}
