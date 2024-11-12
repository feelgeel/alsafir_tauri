import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";
export default function PurchasesBtn({handlePurchaseSelected,purchaseType,name}) {
  return (
    <div
      onClick={() => {handlePurchaseSelected(name); }}
      className={purchaseType === name ? classSelected1 : classUnselected1}>
      <FontAwesomeIcon 
      className={purchaseType === name ? classSelected2 : classUnselected2} icon={faBarcode}
      />
      <p className={purchaseType === name ? classSelected3 : classUnselected3}>{name}</p>
    </div>
  )
}
