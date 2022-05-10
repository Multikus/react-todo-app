import React from 'react';
import ReactDOM from 'react-dom';
import { formatDistanceToNow } from 'date-fns'

import TitleApp from '../title-app/TitleApp';
import AddNewItemTodo from '../add-new-item-todo/add-new-item-todo';
import './todoapp.css';
import Footer from '../footer/footer';
import TodoList from '../todo-list/todo-list';


const TodoApp = () => {

    let createTime = formatDistanceToNow(
        new Date(),
        {
            includeSeconds: true,
            addSuffix: true
        }
    );

    const todoData = [ // якобы получаем данные с сервера
        {description: 'Completed task', completed: true, edited: false, createTime, id: 1},
        {description: 'Editing task', completed: false, edited: true, createTime, id: 2},
        {description: 'Active task', completed: false, edited: false, createTime, id: 3},
        {description: 'testing task', completed: true, edited: false, createTime, id: 4},
        {description: 'Test create time', completed: false, edited: false, createTime, id: 5}
    ];

    return ( 
            <section className="todoapp">

                <header className='header'>
                    <TitleApp />
                    <AddNewItemTodo />
                </header>



                <section className='main'>
                    <TodoList todos={ todoData }/>
                    <Footer />
                </section>

            </section>
        );
};

export default TodoApp;