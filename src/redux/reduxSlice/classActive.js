import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "classActive",
  initialState: {
    class1Selected: "item item-active",
    class1UnSelected: "item ",
    class2Selected: "item-icon icon-active",
    class2UnSelected: "item-icon",
    class3Selected: "name-item name-active",
    class3UnSelected: "name-item ",
  },
  reducers: {
    modifyClass1: (listName, action) => {
      listName.class1Selected = action.payload;
      // console.log("payload", action.payload);
    },
    modifyClass2: (listName, action) => {
      listName.class2Selected(action.payload);
    },
    //bread stock
   modifyClas3: (listName, action) => {
      listName.class3Selected = action.payload;
      // console.log("payload", action.payload);
    }
  },
});

export default slice.reducer;
export const { modifyClass1, modifyClass2,modifyClass3 } = slice.actions;
