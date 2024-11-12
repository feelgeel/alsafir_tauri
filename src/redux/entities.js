import { combineReducers } from "redux";
import breadReducer from './reduxSlice/bread';
import patisserieReducer from './reduxSlice/patisserie';
import chosenProdReducer from './reduxSlice/chosenProd';
import chosenProductsReducer from './reduxSlice/chosenProducts';
import salesReducer from './reduxSlice/sales';
import returnsReducer from './reduxSlice/returns';
import returnsListReducer from './reduxSlice/returnsList';
import salesListReducer from './reduxSlice/salesList';
import chosenSalesProdsReducer from './reduxSlice/chosenSalesProds';
import historyReducer from './reduxSlice/history';
import purchasDbReducer from './reduxSlice/purchaseDb';
import purchasReducer from './reduxSlice/purchases';
import purchasesListReducer from './reduxSlice/purchaseList';
import chosenPurchaseReducer from './reduxSlice/chosenPurchasProds';
import waitReducer from './reduxSlice/wait';
import waitListReducer from './reduxSlice/waitList';
import IngReducer from './reduxSlice/ingredient';
import chosenpurchasereducer from './reduxSlice/chosenPurchase';
import chosenreducer from './reduxSlice/chosen';
import smidreducer from './reduxSlice/smid';
import farinareducer from './reduxSlice/farine';
import eggsreducer from './reduxSlice/eggs';
import margarinereducer from './reduxSlice/margarine';
import zebdareducer from './reduxSlice/zebda';
import navActivereducer from './reduxSlice/navActive';
import classActiveReducer from './reduxSlice/classActive';


export default combineReducers({
bread:breadReducer,
patisserie:patisserieReducer,
chosenProd:chosenProdReducer,
chosenProducts:chosenProductsReducer,
sales:salesReducer,
salesList:salesListReducer,
chosenSalesProds:chosenSalesProdsReducer,
returns:returnsReducer,
returnsList:returnsListReducer,
history:historyReducer,
purchases:purchasReducer,
purchaseDb:purchasDbReducer,
purchasesList:purchasesListReducer,
chosenPurchaseProds:chosenPurchaseReducer,
wait:waitReducer,
waitList:waitListReducer,
ingredient:IngReducer,
chosenPurchase:chosenpurchasereducer,
chosen:chosenreducer,
smid:smidreducer,
farine:farinareducer,
eggs:eggsreducer,
margarine:margarinereducer,
zebda:zebdareducer,
navActive:navActivereducer,
classActive:classActiveReducer
})