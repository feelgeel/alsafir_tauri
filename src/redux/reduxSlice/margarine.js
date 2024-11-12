import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "margarine",
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
    margarineSt:[

    ]
  },
  reducers: {
    modifymargarine: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushTomargarine: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifymargarineSt: (listName, action) => {
      listName.margarineSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushTomargarineSt: (listName, action) => {
      listName.margarineSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifymargarine, pushTomargarine,modifymargarineSt, pushTomargarineSt } = slice.actions;
