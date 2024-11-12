import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"chosenReturnsProducts",
     initialState:{
        list: [],
        },
     reducers:{
        pushToChosen:(listName,action)=>{
            listName.list.push(action.payload)
       },
       modifyChosenProds:(listName,action)=>{
        listName.list=action.payload
   },
     }
 })

export default  slice.reducer;
export const {pushToChosen,modifyChosenProds}=slice.actions;
