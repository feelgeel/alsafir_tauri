import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"purchasesList",
     initialState:{
        list: [],
        },
     reducers:{
        pushTopurchasesList:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifypurchasesList:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushTopurchasesList,modifypurchasesList}=slice.actions;
