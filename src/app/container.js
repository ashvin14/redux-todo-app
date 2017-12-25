import {ToDoApp}  from "./components/ToDoApp"
import { connect } from "react-redux";
import { addToDo, toggleToDo } from "./actions"
export const TodoList = connect(

    function mapStateToProps(state) {
        return {
            todos: state
        }
        
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addToDo(text)),
            toggleTodo: id => dispatch(toggleToDo(id))
        };
    }
)(ToDoApp);