import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "ingredient",
  initialState: {
    ing: [
   
    ],
    prodPrice:[],
    producedQuant:[
      // quantity:100,prodId:"jgjgb,jf,j"
    ]
  },
  reducers: {
    modifyIng: (listName, action) => {listName.ing = action.payload;},

    pushToIng: (listName, action) => {listName.ing.push(action.payload);},

    modifyProdPrice: (listName, action) => {listName.prodPrice = action.payload;},

    pushToprodPrice: (listName, action) => {listName.prodPrice.push(action.payload);},

    modifyproducedQuant: (listName, action) => {listName.producedQuant = action.payload;},

    pushToproducedQuant: (listName, action) => {  listName.producedQuant.push(action.payload); },
  },
});

export default slice.reducer;
export const { modifyIng, pushToIng,modifyProdPrice,pushToprodPrice,modifyproducedQuant,pushToproducedQuant } = slice.actions;
