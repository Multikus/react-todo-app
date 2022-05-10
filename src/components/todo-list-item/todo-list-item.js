import React from "react";
import './todo-list-item.css';



const TodoListItem = ({ description, createTime }) => {

    return (
        <div className="view">

            <input className="toggle" type="checkbox"></input>

            <label>
                <span className="description">{ description }</span>
                <span className="created">created {createTime}</span>
            </label>

            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>

        </div>
    );
};

export default TodoListItem;