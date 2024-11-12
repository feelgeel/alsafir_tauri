import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"returnsList",
     initialState:{
        list: [],
        },
     reducers:{
        pushToreturnsList:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifyreturnsList:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushToreturnsList,modifyreturnsList}=slice.actions;
