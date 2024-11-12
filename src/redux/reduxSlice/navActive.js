import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "navActive",
  initialState: {
    list: "sales"
  },
  reducers: {
    modifyNavActive: (listName, action) => {
      listName.list = action.payload;
    },
   
  },
});

export default slice.reducer;
export const { modifyNavActive } = slice.actions;
