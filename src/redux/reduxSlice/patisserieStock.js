import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "patisserieStock",
  initialState: {
    list: [
      // {
      //   image:prodImg,
      //   name: "petit pain",
      //   price: 30,
      //   category:"patisserieStock"
      // },
      // {
      //   image:prodImg,
      //   name: "croissant",
      //   price: 30,
      //   category:"patisserieStock"
      // },
    ],
  },
  reducers: {
    modifyPatisserieStock: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToPatisserieStock: (listName, action) => {
      listName.list.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyPatisserieStock, pushToPatisserieStock } = slice.actions;              
