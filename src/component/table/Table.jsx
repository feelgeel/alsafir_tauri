import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import './table.css'

export default function Table({columns,tableData,sortColumn,
  setsortColumn,onSort,onDelete,onDec,onInc,onclick,selected}) {
    

  return (
    <div>
      <table className='content-table'>
       <TableHeader columns={columns}
         setsortColumn={setsortColumn} 
         sortColumn={sortColumn}
         onSort={onSort}
         
       />
       
       <TableBody tableData={tableData} 
       onDelete={onDelete} 
       onDec={onDec} 
       onInc={onInc} 
       onclick={onclick}
       selected={selected}
       
     />
      </table>
    </div>
  )
}
