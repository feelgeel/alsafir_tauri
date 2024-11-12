import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "patisserie",
  initialState: {
    list: [
      // {
      //   image:prodImg,
      //   name: "petit pain",
      //   price: 30,
      //   category:"patisserie"
      // },
      // {
      //   image:prodImg,
      //   name: "croissant",
      //   price: 30,
      //   category:"patisserie"
      // },
    ],
    patisserieSt:[]
  },
  reducers: {
    modifyPatisserie: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToPatisserie: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifyPatisserieSt: (listName, action) => {
      listName.patisserieSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushToPatisserieSt: (listName, action) => {
      listName.patisserieSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyPatisserie, pushToPatisserie,modifyPatisserieSt, pushToPatisserieSt } = slice.actions;
