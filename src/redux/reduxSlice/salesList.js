import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"salesList",
     initialState:{
        list: [],
        },
     reducers:{
        pushTosalesList:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifySalesList:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushTosalesList,modifySalesList}=slice.actions;
