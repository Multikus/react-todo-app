import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleCompleted }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
            return (
                <li key={ id }>
                    <TodoListItem {...itemProps}
                    onDeleted={ () => onDeleted(id) }
                    onToggleCompleted={ () => onToggleCompleted(id) }/>
                </li>
            );
    });
    
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;