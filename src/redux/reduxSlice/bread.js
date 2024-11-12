import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "bread",
  initialState: {
    bread: [
     
    ],
    breadSt:[]
  },
  reducers: {
    modifybread: (listName, action) => {
      listName.bread = action.payload;
      // console.log("payload", action.payload);
    },
    pushTobread: (listName, action) => {
      listName.bread.push(action.payload);
    },
    //bread stock
   modifybreadSt: (listName, action) => {
      listName.breadSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushTobreadSt: (listName, action) => {
      listName.breadSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifybread, pushTobread,modifybreadSt, pushTobreadSt } = slice.actions;
