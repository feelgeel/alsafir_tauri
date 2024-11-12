import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "eggs",
  initialState: {
    list: [
    
    ],
    eggsSt:[]
  },
  reducers: {
    modifyeggs: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushToeggs: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifyeggsSt: (listName, action) => {
      listName.eggsSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushToeggsSt: (listName, action) => {
      listName.eggsSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyeggs, pushToeggs,modifyeggsSt, pushToeggsSt } = slice.actions;
