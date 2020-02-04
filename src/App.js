import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Todo from './components/Todo';

import Team from './components/Team'

import todoData from './components/TodoData';

class App extends Component {
    constructor(){
      super()
      this.state={
        todo:todoData
      }
      this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
      this.setState(prevState => {
        const updatedTodo = prevState.todo.map(todo =>{
          if(todo.id === id){
            todo.completed = !todo.completed
          } 
          return todo
        })
        return {
          todo:updatedTodo
        }
      })
    }

    render(){
      const toDoItems = this.state.todo.map(todo=>{
        return(
          <Todo key ={todo.id} item = {todo}
            handleChange = {this.handleChange}
          />
        )
      })
      return (
        <div className="name">
          <Header/>
          {toDoItems}
        </div>
      );
    }
}

export default App;

  