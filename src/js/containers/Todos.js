import React, { Component } from 'react'
import AddTodo from './AddTodo'
import VisibleTodos from './VisibleTodos'

export default class Todos extends Component {
  render() {
    return (
      <div>
      <h3>hello todos!</h3>
       <AddTodo/>
       <VisibleTodos/>
      </div>
    );
  }
}
