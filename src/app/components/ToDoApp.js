import React from "react"
import {Todo} from "./ToDo"



export class ToDoApp extends React.Component{
	constructor(props){
		super(props);
		
    
		


		this.onSubmit = this.onSubmit.bind(this)
		this.onToggle = this.onToggle.bind(this)

	}
	componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }
	onSubmit(event){
		const input = event.target;
    	const text = input.value;
    	const isEnterKey = (event.which == 13);
    	const isLongEnough = text.length > 0;

   	   if(isEnterKey && isLongEnough) {
     		 input.value = '';
     		 this.props.addTodo(text);
    	}
	}
	onToggle(id){

		this.props.toggleTodo(id)

	}

	render(){
         const { todos } = this.props;
		 
		
		return(
			<div className='todo'>
      			<input type='text' placeholder='Add todo' onKeyDown = {this.onSubmit} />
      			<ul className='todo__list'>
        			{todos.map(t => (<li key={t.get("id")} className='todo__item' onClick={()=>{this.onToggle(t.get('id'))}} ><Todo todo={t} />
					</li>
        			))}
      			</ul>
    		</div>

			)
	}
}