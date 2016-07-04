import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let Todos=({dispatch})=>{

	/*handleAdd(){
		dispatch(addTodo({input.value}));
	}*/
    let input
	return (
		<div>
		<input ref={node => {
          input = node
        }} />
		<button onClick={e=>{dispatch(addTodo(input.value));input.value='';}}>Add Todos</button>
		</div>
		)
	}

Todos=connect()(Todos)

export default Todos