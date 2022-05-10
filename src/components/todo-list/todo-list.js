import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { completed, id, ...itemProps } = item;

        if( completed ){
            return (
                <li key={ id } className="completed">
                    <TodoListItem {...itemProps} />
                </li>
            );
        } else {
            return (
                <li key={ id }>
                    <TodoListItem {...itemProps} />
                </li>
            );
        }
    });
    
    
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;