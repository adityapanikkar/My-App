import React from 'react'

function Todo(props){
    return(
        <div className="todo-list">
            <input 
                type ="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
                <p>Story : {props.item.task}</p>
                <p>Assigned to : {props.item.assigned}</p>
        </div>
    )
}

export default Todo