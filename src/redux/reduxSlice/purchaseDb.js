import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "purchaseDb",
  initialState: {
    list: [
    ],
  },
  reducers: {
    modifyPurchaseDb: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToPurchaseDb: (listName, action) => {
      listName.list.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyPurchaseDb, pushToPurchaseDb } = slice.actions;
