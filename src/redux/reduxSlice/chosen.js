import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "chosen",
  initialState: {
    chosenprod: {},
    chosenprods: [],
    chosenpurchase: {},
    chosenpurchases: [],
    chosenquantity: {},
    chosenprice: {},
    chosenIng: {},
  },
  reducers: {
//chosenprod
    modifychosenprod: (listName, action) => {
      listName.chosenprod = action.payload;
    },
//chosenprods
    modifychosenprods: (listName, action) => {
      listName.chosenprods = action.payload;
    },
    pushTochosenprods: (listName, action) => {
      listName.chosenprods.push(action.payload);
    },
    //chosenpurchase
    modifychosenpurchase: (listName, action) => {
      listName.chosenpurchase = action.payload;
    },
    //chosenpurchases
    modifychosenpurchases: (listName, action) => {
      listName.chosenpurchases = action.payload;
    },
    pushTochosenpurchases: (listName, action) => {
      listName.chosenpurchases.push(action.payload);
    },
    modifychosenquantity: (listName, action) => {
      listName.chosenquantity = action.payload;
    },
    modifychosenprice: (listName, action) => {
      listName.chosenprice = action.payload;
    },
    modifychosenIng: (listName, action) => {
      listName.chosenIng = action.payload;
    },
  },
});

export default slice.reducer;
export const {
  modifychosenprod,
  modifychosenprods,
  pushTochosenprods,
  modifychosenpurchase,
  modifychosenpurchases,
  pushTochosenpurchases,
  modifychosenquantity,
  modifychosenprice,
  modifychosenIng
} = slice.actions;
