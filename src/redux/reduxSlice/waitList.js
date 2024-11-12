import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"waitList",
     initialState:{
        list: [],
        },
     reducers:{
        pushToWaitList:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifyWaitList:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushToWaitList,modifyWaitList}=slice.actions;
