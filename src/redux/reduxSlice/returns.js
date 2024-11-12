import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"returns",
     initialState:{
        list: [],
        },
     reducers:{
        pushToreturns:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifyreturns:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushToreturns,modifyreturns}=slice.actions;
