import React from "react";

export default function UpdateSales({ updatedSales }) {
  // console.log("update sales", updatedSales);
  return (
    <div className="updateSales">
      <div className="updateSalesImg">
        <img width="100%" src={updatedSales.prodImg} alt="" />
      </div>
      <div className="updateSalesInfo">
        <h2>Name:{updatedSales.prodName}</h2>
        <h2>Price:{updatedSales.prodPricePerUnit}</h2>
        
        </div>
    </div>
  );
}
