import React from 'react';
import { formatDistanceToNow } from 'date-fns'

import TitleApp from '../title-app/TitleApp';
import AddNewItemTodo from '../add-new-item-todo/add-new-item-todo';
import './todoapp.css';
import Footer from '../footer/footer';
import TodoList from '../todo-list/todo-list';

let createTime = formatDistanceToNow(
    new Date(),
    {
        includeSeconds: true,
        addSuffix: true
    }
);

export default class TodoApp extends React.Component {

    state = {
        todoData: [ // якобы получаем данные с сервера
        {description: 'Completed task', completed: false, edited: false, createTime, id: 1},
        {description: 'Editing task', completed: false, edited: true, createTime, id: 2},
        {description: 'Active task', completed: false, edited: false, createTime, id: 3},
        {description: 'testing task', completed: false, edited: false, createTime, id: 4},
        {description: 'Test create time', completed: false, edited: false, createTime, id: 5}
        ]
    };

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {

            const newArrData = todoData.slice();
            const idx = newArrData.findIndex( (el) => el.id === id );
            newArrData.splice(idx, 1);

            return {
                todoData: newArrData
            }

        });
    };

    render() {
        return ( 
            <section className="todoapp">

                <header className='header'>
                    <TitleApp />
                    <AddNewItemTodo />
                </header>


                <section className='main'>
                    <TodoList todos={ this.state.todoData }
                                onDeleted={this.deleteItem}/>
                    <Footer />
                </section>

            </section>
        );
    }
};

