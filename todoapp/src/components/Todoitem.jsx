import React, { useState } from 'react'

const Todoitem = ({todo , onDelete, color}) => {
   
    const [isCompleted,setIsCompeleted] = useState(todo.isCompleted)

  return (
    <div id='todoitem' key={todo.id}>
    {/* <input type="checkbox"  checked={isCompleted}
        onChange={(e) =>{
            setIsCompeleted(e.target.checked)
        }}
    /> */}
    <div className="value1" >{todo.value}</div>
    <button id='delete' onClick={ () =>onDelete (todo.id)}><i style={{color}} class="fa fa-circle" aria-hidden="true"></i></button>
    </div>
  )
}

export default Todoitem