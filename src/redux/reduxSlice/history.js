import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"history",
     initialState:{
        list: [
            {   prodImg,
                prodName:"mounice",
                prodPricePerUnit:30,
                date:"4/7/23",
                time:"11:23:51",
                prodQuant:2
            },
            {   prodImg,
                prodName:"zitoun",
                prodPricePerUnit:30,
                date:"4/7/23",
                time:"12:23:51",
                prodQuant:3
            }
        ],
        },
     reducers:{
        modifyHistory:(listName,action)=>{
            listName.list=action.payload
       },
        pushToHistory:(listName,action)=>{
            listName.list.push(action.payload)
       },
        
     }
 })

export default  slice.reducer;
export const {pushToHistory,modifyHistory}=slice.actions;
