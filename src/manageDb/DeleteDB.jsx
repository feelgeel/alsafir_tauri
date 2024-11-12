import React from 'react'

export default function DeleteDB({deletedDb}) {
  console.log(deletedDb);
  return (
    <div>
       <button><a href="/manageDb/add">add</a></button>
      <button><a href="/manageDb/update">update</a></button>
      <button disabled>delete</button>
    </div>
  )
}
