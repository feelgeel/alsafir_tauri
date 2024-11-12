import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"chosenpurchase",
     initialState:{
        list: {},
        },
     reducers:{
        setChosenPurchase:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {setChosenPurchase}=slice.actions;
