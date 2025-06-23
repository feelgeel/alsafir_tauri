import { combineReducers } from "@reduxjs/toolkit";
import breadReducer from "./reduxSlice/bread";
import breadStockReducer from "./reduxSlice/breadStock";
import chosenReducer from "./reduxSlice/chosen";
import chosenProdReducer from "./reduxSlice/chosenProd";
import chosenProductsReducer from "./reduxSlice/chosenProducts";
import chosenPurchasProdsReducer from "./reduxSlice/chosenPurchasProds";
import chosenPurchaseReducer from "./reduxSlice/chosenPurchase";
import chosenReturnsProdsReducer from "./reduxSlice/chosenReturnsProds";
import chosenSalesProdsReducer from "./reduxSlice/chosenSalesProds";
import classActiveReducer from "./reduxSlice/classActive";
import eggsReducer from "./reduxSlice/eggs";
import farineReducer from "./reduxSlice/farine";
import historyReducer from "./reduxSlice/history";
import ingredientReducer from "./reduxSlice/ingredient";
import margarineReducer from "./reduxSlice/margarine";
import navActiveReducer from "./reduxSlice/navActive";
import patisserieReducer from "./reduxSlice/patisserie";
import patisserieStockReducer from "./reduxSlice/patisserieStock";
import prodPriceReducer from "./reduxSlice/prodPrice";
import purchaseDbReducer from "./reduxSlice/purchaseDb";
import purchaseListReducer from "./reduxSlice/purchaseList";
import purchaseStockReducer from "./reduxSlice/purchaseStock";
import purchasesReducer from "./reduxSlice/purchases";
import returnsReducer from "./reduxSlice/returns";
import returnsListReducer from "./reduxSlice/returnsList";
import salesReducer from "./reduxSlice/sales";
import salesListReducer from "./reduxSlice/salesList";
import smidReducer from "./reduxSlice/smid";
import waitReducer from "./reduxSlice/wait";
import waitListReducer from "./reduxSlice/waitList";
import zebdaReducer from "./reduxSlice/zebda";
import debugReducer from "./reduxSlice/debug";

export default combineReducers({
  bread: breadReducer,
  breadStock: breadStockReducer,
  chosen: chosenReducer,
  chosenProd: chosenProdReducer,
  chosenProducts: chosenProductsReducer,
  chosenPurchasProds: chosenPurchasProdsReducer,
  chosenPurchase: chosenPurchaseReducer,
  chosenReturnsProds: chosenReturnsProdsReducer,
  chosenSalesProds: chosenSalesProdsReducer,
  classActive: classActiveReducer,
  eggs: eggsReducer,
  farine: farineReducer,
  history: historyReducer,
  ingredient: ingredientReducer,
  margarine: margarineReducer,
  navActive: navActiveReducer,
  patisserie: patisserieReducer,
  patisserieStock: patisserieStockReducer,
  prodPrice: prodPriceReducer,
  purchaseDb: purchaseDbReducer,
  purchaseList: purchaseListReducer,
  purchaseStock: purchaseStockReducer,
  purchases: purchasesReducer,
  returns: returnsReducer,
  returnsList: returnsListReducer,
  sales: salesReducer,
  salesList: salesListReducer,
  smid: smidReducer,
  wait: waitReducer,
  waitList: waitListReducer,
  zebda: zebdaReducer,
  debug: debugReducer,
});