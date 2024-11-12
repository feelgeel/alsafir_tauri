import React from "react";
import "./content.css";
import Sales from "../sales/Sales";
export default function Content({children}) {
  return (
        <div className="content">
        {children}
        </div>
  );
}
