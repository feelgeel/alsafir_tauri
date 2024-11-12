import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"purchases",
     initialState:{
        list: [],
        },
     reducers:{
        modifyPurchases:(listName,action)=>{
            listName.list=action.payload
            // console.log("payload",action.payload);
       },
       pushToPurchases:(listName,action)=>{
        listName.list.push(action.payload)
   },

        
     }
 })

export default  slice.reducer;
export const {modifyPurchases,pushToPurchases}=slice.actions;
