import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "Smid",
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
    smidSt:[

    ]
  },
  reducers: {
    modifysmid: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushTosmid: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifysmidSt: (listName, action) => {
      listName.smidSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushTosmidSt: (listName, action) => {
      listName.smidSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifysmid, pushTosmid,modifysmidSt, pushTosmidSt } = slice.actions;
