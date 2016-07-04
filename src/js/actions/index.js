let todoIndex=0;
export const addTodo=(text)=>{
	let id=todoIndex++;
		return {
		type:'ADD_TODO',
		id,
		text
	}
}