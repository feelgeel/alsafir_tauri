import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "purchaseStock",
  initialState: {
    list: [
    ],
  },
  reducers: {
    modifyPurchaseStock: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToPurchaseStock: (listName, action) => {
      listName.list.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyPurchaseStock, pushToPurchaseStock } = slice.actions;
