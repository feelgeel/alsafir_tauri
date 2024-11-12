import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "farine",
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
    farineSt:[]
  },
  reducers: {
    modifyfarine: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushTofarine: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifyfarineSt: (listName, action) => {
      listName.farineSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushTofarineSt: (listName, action) => {
      listName.farineSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyfarine, pushTofarine,modifyfarineSt, pushTofarineSt } = slice.actions;
