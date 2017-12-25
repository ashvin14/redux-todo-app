import React from "react"

export class Todo extends React.Component{
	render(){
		if(this.props.todo.get('isDone'))
			return(<strike>{this.props.todo.get('text')}</strike>)
		else
			return (<span>{this.props.todo.get('text')}</span>);

	}
}