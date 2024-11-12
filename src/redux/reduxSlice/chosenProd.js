import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"chosenprod",
     initialState:{
        list: {},
        },
     reducers:{
        setChosenProd:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {setChosenProd}=slice.actions;
