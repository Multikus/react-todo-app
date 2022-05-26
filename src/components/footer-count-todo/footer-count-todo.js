import React from "react";
import './footer-count-todo.css';

const FooterCountTodo = ({toDo}) => {
    return (
        <span className="todo-count">{toDo} items left</span>
    );
};

export default FooterCountTodo;