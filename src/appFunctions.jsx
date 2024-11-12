import { writeTextFile, readTextFile,BaseDirectory,exists } from '@tauri-apps/api/fs'
import *as actionBread from "./redux/reduxSlice/bread"
import *as actionPatisserie from "./redux/reduxSlice/patisserie"
import *as actionPurchasesDt from "./redux/reduxSlice/purchaseDb"
import *as actionSales from "./redux/reduxSlice/sales"
import *as actionReturns from "./redux/reduxSlice/returns"
import *as actionReturnsList from "./redux/reduxSlice/returnsList"
import *as actionSalesList from "./redux/reduxSlice/salesList"
import *as actionpurchasesList from "./redux/reduxSlice/purchaseList"
import *as actionpurchases from "./redux/reduxSlice/purchases"
import *as actionzebda from "./redux/reduxSlice/zebda"
import *as actionmargarine from "./redux/reduxSlice/margarine"
import *as actionfarine from "./redux/reduxSlice/farine"
import *as actioneggs from "./redux/reduxSlice/eggs"
import *as actionsmid from "./redux/reduxSlice/smid"
export const  productsInit=async(dispatch)=>{
  let breadDb = await exists('breadDb.json', { dir: BaseDirectory.Desktop })
  let patisserieDb = await exists('patisserieDb.json', { dir: BaseDirectory.Desktop })
  let purchasesDb = await exists('purchasesDb.json', { dir: BaseDirectory.Desktop })
  // console.log("prods",bread);
  if(breadDb){
    let readBread = await readTextFile('breadDb.json', { dir: BaseDirectory.Desktop })
    readBread = JSON.parse(readBread)
    dispatch(actionBread.modifybread(readBread))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('breadDb.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(patisserieDb){
    let readPatisserie = await readTextFile('patisserieDb.json', { dir: BaseDirectory.Desktop })
    readPatisserie = JSON.parse(readPatisserie)
    dispatch(actionPatisserie.modifyPatisserie(readPatisserie))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('patisserieDb.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(purchasesDb){
    let readPurchasesDb = await readTextFile('purchasesDb.json', { dir: BaseDirectory.Desktop })
    readPurchasesDb = JSON.parse(readPurchasesDb)
    dispatch(actionPurchasesDt.modifyPurchaseDb(readPurchasesDb))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('purchasesDb.json',empty, { dir: BaseDirectory.Desktop });
  }
  
}

export const  historyInit=async(dispatch)=>{
  // let history = await exists('history.json', { dir: BaseDirectory.Desktop })
  // if(history){
  //   let readHistory = await readTextFile('history.json', { dir: BaseDirectory.Desktop })
  //   readHistory = JSON.parse(readHistory)
  //   dispatch(actionHistory.modifyHistory(readHistory))
  // }else{
  //   let empty=[]
  //   empty=JSON.stringify(empty)
  //   let res=await writeTextFile('history.json',empty, { dir: BaseDirectory.Desktop });
  // }
}
export const  salesInit=async(dispatch)=>{
  let sales = await exists('sales.json', { dir: BaseDirectory.Desktop })
  let salesList = await exists('salesList.json', { dir: BaseDirectory.Desktop })
  if(sales){
    let readSales=await readTextFile('sales.json', { dir: BaseDirectory.Desktop });
    readSales = JSON.parse(readSales)
    dispatch(actionSales.modifySales(readSales))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('sales.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(salesList){
    let readSalesList=await readTextFile('salesList.json', { dir: BaseDirectory.Desktop });
    readSalesList = JSON.parse(readSalesList)
    dispatch(actionSalesList.modifySalesList(readSalesList))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('salesList.json',empty, { dir: BaseDirectory.Desktop });
  }
}
export const  returnsInit=async(dispatch)=>{
  let returns = await exists('returns.json', { dir: BaseDirectory.Desktop })
  let returnsList = await exists('returnsList.json', { dir: BaseDirectory.Desktop })
  if(returns){
    let readreturns=await readTextFile('returns.json', { dir: BaseDirectory.Desktop });
    readreturns = JSON.parse(readreturns)
    dispatch(actionReturns.modifyreturns(readreturns))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('returns.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(returnsList){
    let readreturnsList=await readTextFile('returnsList.json', { dir: BaseDirectory.Desktop });
    readreturnsList = JSON.parse(readreturnsList)
    dispatch(actionReturnsList.modifyreturnsList(readreturnsList))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('returnsList.json',empty, { dir: BaseDirectory.Desktop });
  }
}
export const  purchasesInit=async(dispatch)=>{
  let purchases = await exists('purchases.json', { dir: BaseDirectory.Desktop })
  let zebda = await exists('zebdaDb.json', { dir: BaseDirectory.Desktop })
  let farine = await exists('farineDb.json', { dir: BaseDirectory.Desktop })
  let margarine = await exists('margarineDb.json', { dir: BaseDirectory.Desktop })
  let smid = await exists('smidDb.json', { dir: BaseDirectory.Desktop })
  let eggs = await exists('eggsDb.json', { dir: BaseDirectory.Desktop })
  let zebdaSt = await exists('zebdaSt.json', { dir: BaseDirectory.Desktop })
  let farineSt = await exists('farineSt.json', { dir: BaseDirectory.Desktop })
  let margarineSt = await exists('margarineSt.json', { dir: BaseDirectory.Desktop })
  let smidSt = await exists('smidSt.json', { dir: BaseDirectory.Desktop })
  let eggsSt = await exists('eggsSt.json', { dir: BaseDirectory.Desktop })
  let purchasesList = await exists('purchasesList.json', { dir: BaseDirectory.Desktop })

//purchases St
 if(zebdaSt){
    let readzebdaSt = await readTextFile('zebdaSt.json', { dir: BaseDirectory.Desktop })
    readzebdaSt = JSON.parse(readzebdaSt)
    // console.log("readzebdaSt",readzebdaSt);
    dispatch(actionzebda.modifyzebdaSt(readzebdaSt))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('zebdaSt.json',empty, { dir: BaseDirectory.Desktop });
  }
 if(farineSt){
    let readfarineSt = await readTextFile('farineSt.json', { dir: BaseDirectory.Desktop })
    readfarineSt = JSON.parse(readfarineSt)
    dispatch(actionfarine.modifyfarineSt(readfarineSt))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('farineSt.json',empty, { dir: BaseDirectory.Desktop });
  }
 if(margarineSt){
    let readmargarineSt = await readTextFile('margarineSt.json', { dir: BaseDirectory.Desktop })
    readmargarineSt = JSON.parse(readmargarineSt)
    dispatch(actionmargarine.modifymargarineSt(readmargarineSt))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('margarineSt.json',empty, { dir: BaseDirectory.Desktop });
  }
 if(smidSt){
    let readsmidSt = await readTextFile('smidSt.json', { dir: BaseDirectory.Desktop })
    readsmidSt = JSON.parse(readsmidSt)
    dispatch(actionsmid.modifysmidSt(readsmidSt))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('smidSt.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(eggsSt){
    let readeggsSt = await readTextFile('eggsSt.json', { dir: BaseDirectory.Desktop })
    readeggsSt = JSON.parse(readeggsSt)
    dispatch(actioneggs.modifyeggsSt(readeggsSt))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('eggsSt.json',empty, { dir: BaseDirectory.Desktop });
  }
  //purchases db
  if(zebda){
    let readzebda = await readTextFile('zebdaDb.json', { dir: BaseDirectory.Desktop })
    readzebda = JSON.parse(readzebda)
    dispatch(actionzebda.modifyzebda(readzebda))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('zebdaDb.json',empty, { dir: BaseDirectory.Desktop });
  }
  
  if(farine){
    let readfarine = await readTextFile('farineDb.json', { dir: BaseDirectory.Desktop })
    readfarine = JSON.parse(readfarine)
    dispatch(actionfarine.modifyfarine(readfarine))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('farineDb.json',empty, { dir: BaseDirectory.Desktop });
  }

  if(smid){
    let readsmid = await readTextFile('smidDb.json', { dir: BaseDirectory.Desktop })
    readsmid = JSON.parse(readsmid)
    dispatch(actionsmid.modifysmid(readsmid))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('smidDb.json',empty, { dir: BaseDirectory.Desktop });
  }

  if(eggs){
    let readeggs = await readTextFile('eggsDb.json', { dir: BaseDirectory.Desktop })
    readeggs = JSON.parse(readeggs)
    dispatch(actioneggs.modifyeggs(readeggs))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('eggsDb.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(margarine){
    let readmargarine = await readTextFile('margarineDb.json', { dir: BaseDirectory.Desktop })
    readmargarine = JSON.parse(readmargarine)
    dispatch(actionmargarine.modifymargarine(readmargarine))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('margarineDb.json',empty, { dir: BaseDirectory.Desktop });
  }
//
 if(purchases){
    let readpurchases=await readTextFile('purchases.json', { dir: BaseDirectory.Desktop });
    readpurchases = JSON.parse(readpurchases)
    dispatch(actionpurchases.modifyPurchases(readpurchases))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('purchases.json',empty, { dir: BaseDirectory.Desktop });
  }
  if(purchasesList){
    let readpurchasesList=await readTextFile('purchasesList.json', { dir: BaseDirectory.Desktop });
    readpurchasesList = JSON.parse(readpurchasesList)
    dispatch(actionpurchasesList.modifypurchasesList(readpurchasesList))
  }else{
    let empty=[]
    empty=JSON.stringify(empty)
    let res=await writeTextFile('purchasesList.json',empty, { dir: BaseDirectory.Desktop });
  }
}