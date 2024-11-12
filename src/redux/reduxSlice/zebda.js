import { createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";

//create slice
const slice = createSlice({
  name: "zebda",
  initialState: {
    list: [],
    zebdaSt:[]
  },
  reducers: {
    modifyzebda: (listName, action) => {
      listName.list = action.payload;
      // console.log("payload", action.payload);
    },
    pushTozebda: (listName, action) => {
      listName.list.push(action.payload);
    },
    modifyzebdaSt: (listName, action) => {
      listName.zebdaSt = action.payload;
      // console.log("payload", action.payload);
    },
    pushTozebdaSt: (listName, action) => {
      listName.zebdaSt.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { modifyzebda, pushTozebda,modifyzebdaSt, pushTozebdaSt } = slice.actions;
