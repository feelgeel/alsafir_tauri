import React from "react";
import "./pagination.css";
import _ from "lodash";
export default function Pagination({ itemCounts, 
    pageSize, onPageChange,currentPage}) {
        let pages=1
  const pageCounts = Math.ceil(itemCounts / pageSize);
  if(pageCounts<=1) return null
  pages=_.range(1,pageCounts+1)
        const handlePrev=()=>{
            if(currentPage===1){}
            else{
                let newcurrentPage=currentPage-1
                onPageChange(newcurrentPage)
            }
            // onPageChange(page)
        }
        const handleNext=()=>{
            // console.log(currentPage,pages[pages.length-1]);
            if(currentPage!==pages[pages.length-1]){
                let newcurrentPage=currentPage+1
                onPageChange(newcurrentPage)
            }
        }
  return (
    <div className="pagination">
      <a  className="paginate-link" onClick={()=>handlePrev()} href="#">&laquo;</a>
      {pages.map(page=>(
        // console.log(currentPage,page)
      <a className={`paginate-link ${currentPage===page?"paginate-active":""}`}
       onClick={()=>onPageChange(page)} key={page} href="#">{page}</a>
       ))}
      <a  className="paginate-link" onClick={()=>handleNext()} href="#">&raquo;</a>
    </div>
  );
}
