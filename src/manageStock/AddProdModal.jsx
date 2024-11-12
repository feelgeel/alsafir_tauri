import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Modal from "react-modal";

let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";
export default function AddProdModal({ addtoStockModal, setaddtoStockModal }) {
  const [prodType2, setprodType2] = useState("bread");

  const handleSelected2 = (dt) => {
    switch (dt) {
      case "bread":
        setprodType2("bread");
        break;
      case "patisserie":
        setprodType2("patisserie");
        break;

      default:
        break;
    }
  };
  return (
    <Modal
      isOpen={addtoStockModal}
      onRequestClose={() => setaddtoStockModal(false)}
    >
      <div className="d-flex" style={{ justifyContent: "flex-start" }}>
        <div
          onClick={() => {
            handleSelected2("bread");
          }}
          className={prodType2 === "bread" ? classSelected1 : classUnselected1}
        >
          <FontAwesomeIcon
            className={
              prodType2 === "bread" ? classSelected2 : classUnselected2
            }
            icon={faBarcode}
          />
          <p
            className={
              prodType2 === "bread" ? classSelected3 : classUnselected3
            }
          >
            bread{" "}
          </p>
        </div>
        <div
          onClick={() => {
            handleSelected2("patisserie");
          }}
          className={
            prodType2 === "patisserie" ? classSelected1 : classUnselected1
          }
        >
          <FontAwesomeIcon
            className={
              prodType2 === "patisserie" ? classSelected2 : classUnselected2
            }
            icon={faBarcode}
          />
          <p
            className={
              prodType2 === "patisserie" ? classSelected3 : classUnselected3
            }
          >
            patisserie
          </p>
        </div>
      </div>
    </Modal>
  );
}
