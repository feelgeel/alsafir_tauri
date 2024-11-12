import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './table.css'
import "./tableBody.css";

export default function Table({columns,tableData,selectedObj,sortColumn,
  setsortColumn,onSort,onDelete,onLike,onclick,handleInc,handleDec,handleDelete,sell=true
  ,deletes,quantManager,image,quantForm}) {


  return (
    <div className='table'>
      <table className='content-table'>
       <TableHeader columns={columns}
         setsortColumn={setsortColumn} 
         sortColumn={sortColumn}
         onSort={onSort}
         
       />
       
    {sell&&<TableBody tableData={tableData} 
       onDelete={onDelete} 
       onLike={onLike} 
       selectedObj={selectedObj}
       onclick={onclick}
       handleInc={handleInc}
       handleDec={handleDec}
       handleDelete={handleDelete}
       deletes={deletes}
       quantManager={quantManager}
       image={image}
       quantForm={quantForm}
     />}
      </table>
    </div>
  )
}
