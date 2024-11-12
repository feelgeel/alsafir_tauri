import React from 'react'
import ProductList from "../productsList/ProductList";
import ChosenProducts from "../chosenproducts/ChosenProducts";

export default function AddProducts() {
  return (
    <div className='addproducts'>
        <div className="left">
        <h2>product list</h2>
        <ProductList/>
        </div>
        <div className="right">
        <h2 className='btn btn-primary'>chosen product list</h2>
          <ChosenProducts/>
          <button>save</button>
        </div>
      
    </div>
  )
}
