import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "breadStock",
  initialState: {
    list: [
      // {
      //   image:prodImg,
      //   name: "mounice",
      //   price: 30,
      //   category:"bread"
      // },
      // {
      //   image:prodImg,
      //   name: "zitoun",
      //   price: 30,
      //   category:"bread"
      // },
    ],
  },
  reducers: {
    modifyBreadStock: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToBreadStock: (listName, action) => {
      listName.list.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyBreadStock, pushToBreadStock } = slice.actions;
