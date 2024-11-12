import React, { useState } from 'react';

import Card from '../component/card/Card';
import Popups from '../popups/Popups';
import { useSelector, useDispatch } from "react-redux"; 
import *as productsActions from '../redux/reduxSlice/bread';
const ProductList = () => {
    const dispatch=useDispatch();
    let prodDb=[
        {
            id: 1,
            name: "mouniss",
            price:30,
        },
        {
            id: 2,
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
    dispatch(productsActions.modifyProducts(prodDb));
     const re_products=useSelector(state=>state.entities.products.list);
    //  const [products,setproducts]=useState(re_products)
  console.log("prod",re_products);
    return (
        <div className="productlist">
            
            {
                re_products.map(item => { 
                    return <Card key={item.id} data={item} />
                })
            }
            
        </div>
    );
};

export default ProductList;