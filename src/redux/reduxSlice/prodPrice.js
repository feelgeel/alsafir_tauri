import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "prodPrice",
  initialState: {
    list: [
    //  {productionPrice:20,intrestRate:20,sellPrice:30,prodId:""}
    ],
  },
  reducers: {
    modifyProdPrice: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToProdPrice: (listName, action) => {
      listName.list.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyProdPrice, pushToProdPrice } = slice.actions;              
