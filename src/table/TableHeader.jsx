import React from "react";

export default function TableHeader({columns,sortColumn,setsortColumn,onSort}) {
   const raiseSort=path=>{
            console.log(path);
            const newsortColumn={...sortColumn};
            if(newsortColumn.path ===path)
            newsortColumn.order=(newsortColumn.order==='asc')?'desc':'asc';
        else{
            newsortColumn.path=path;
            newsortColumn.order="asc";
            setsortColumn(newsortColumn)
        }
        
        
        // console.log(newsortColumn);
    
        setsortColumn(newsortColumn);
        onSort(newsortColumn)
      }
  return (
    <thead>
      <tr>
        {columns.map(column=>(
        <th 
         key={column.path||column.key}  
        onClick={()=>raiseSort(column.path)}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
}
