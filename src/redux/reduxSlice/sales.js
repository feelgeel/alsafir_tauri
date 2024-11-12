import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"sales",
     initialState:{
        list: [],
        },
     reducers:{
        pushTosales:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifySales:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushTosales,modifySales}=slice.actions;
