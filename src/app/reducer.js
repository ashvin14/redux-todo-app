import {List,Map} from "immutable";



const init = List([]);

//reducer

export default function(todos=init,action){

	switch(action.type){
		case "ADD_TODO":
		return  todos.push(Map(action.payload));

		break;

		case "TOGGLE_TODO":
		return todos.map((todo)=>{
			if(todo.get('id')==action.payload){
				
				return todo.update('isDone', isDone => !isDone);
			}
			else
				return todo
			

		})
		break;
		default:
		 return todos



		
	}



	
}


