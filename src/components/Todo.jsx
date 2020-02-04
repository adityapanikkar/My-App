import React from 'react'

function Todo(props){
const completedStyle = {
    fontStyle: "italic",
    color:"#cdcdcd",
    textDecoration:"line-through"
}

    return(
        <div className="todo-list">
            <input 
                type ="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                />
                <p style = {props.item.completed ? completedStyle:null}>Story : {props.item.task}</p>
                <p style = {props.item.completed ? completedStyle:null}>Assigned to : {props.item.assigned}</p>
        </div>
    )
}


export default Todo