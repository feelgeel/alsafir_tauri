import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"wait",
     initialState:{
        list: [],
        },
     reducers:{
        pushToWait:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifyWait:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushToWait,modifyWait}=slice.actions;
