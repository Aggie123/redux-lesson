import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let VisibleTodos=({todos=[], dispatch})=>{
	console.log(todos)
	return (
		<div>
			<p>todo list:</p>
			{todos.map(todo=>{
				console.log(todo)
				return <p>{todo.text}</p>
			})}
		</div>
		)
}

function mapStateProps(state){
	return {
		todos:state
	}
}

VisibleTodos=connect(mapStateProps)(VisibleTodos)


export default VisibleTodos