import React from 'react';

import './add-new-item-todo.css';

const AddNewItemTodo = () => {
    return (
            <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus>
            </input>
        );
};

export default AddNewItemTodo;