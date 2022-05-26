import React from 'react';
import { formatDistanceToNow } from 'date-fns'

import TitleApp from '../title-app/TitleApp';
import AddNewItemTodo from '../add-new-item-todo/add-new-item-todo';
import './todoapp.css';
import Footer from '../footer/footer';
import TodoList from '../todo-list/todo-list';
// import lightFormat from 'date-fns/esm/fp/lightFormat/index.js';



export default class TodoApp extends React.Component {

    itemId = 10;

    state = {
        todoData: [ // якобы получаем данные с сервера
            this.createTodoItem('Completed task'),
            this.createTodoItem('Editing task'),
            this.createTodoItem('Active task'),
            this.createTodoItem('testing task')
        ]
    };

    oldArr = this.state.todoData.slice();

    createTime = formatDistanceToNow(
        new Date(),
        {
            includeSeconds: true,
            addSuffix: true
        }
    );

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState( ({todoData}) => {
            const pushNewItemArray = todoData.slice();
            pushNewItemArray.push(newItem);
            this.oldArr = pushNewItemArray;
            return {
                todoData: pushNewItemArray
            };
        });
    };

    createTodoItem(description) {
        return {
            description,
            completed: false, 
            edited: false,
            createTime: this.createTime,
            id: this.itemId++
        }
    };

    onToggleCompleted = (id) => {
        this.setState( ({todoData}) => {

            const idx = todoData.findIndex( (el) => el.id === id );
            const oldItem = todoData[idx];
            const newItem = {...oldItem, completed: !oldItem.completed}
            const newArr = [ ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1) ];
            this.oldArr = newArr;
            return { 
                todoData: newArr
            };
        });
    };

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {

            const newArrData = todoData.slice();
            const idx = newArrData.findIndex( (el) => el.id === id );
            newArrData.splice(idx, 1);
            this.oldArr = newArrData;
            return {
                todoData: newArrData
            }

        });
    };

    onClearCompleteItem = () => {
        this.setState( ({ todoData }) => {

            const newArrData = todoData.slice();
            const arrNotCompleteItem = newArrData.filter((el) => !el.completed)

            return {
                todoData: arrNotCompleteItem
            };

        });
    };

    toDoStatusFilter = (status) => {
        this.setState( ({ todoData }) => {
            

            if(status === 'active'){
            
                const newArrData = this.oldArr.slice();
                const arrCompleteItem = newArrData.filter((el) => !el.completed)

                if(arrCompleteItem.length === 0) {
                    return {
                        todoData: todoData
                    }
                } else {
                    return {
                        todoData: arrCompleteItem
                    }
                }
            } 

            if(status === 'completed'){
            
                const newArrCompletedData = this.oldArr.slice();
                const arrCompleteItem = newArrCompletedData.filter((el) => el.completed)

                if(arrCompleteItem.length === 0) {
                    return {
                        todoData: todoData
                    }
                } else {
                    return {
                        todoData: arrCompleteItem
                    }
                }
            } else {
                    return {
                        todoData: this.oldArr
                    }
            }
        });
    }


    render() {

        const doneCount = this.oldArr.filter((element) => element.completed).length; //doneCount - создаёт новый массив куда входят все элементы у которых done = true

        const todoCount = this.oldArr.length - doneCount; //todoCount - высчитывает сколько элементов осталось ещё сделать

        
        return ( 
            <section className="todoapp">

                <header className='header'>
                    <TitleApp />
                    <AddNewItemTodo 
                        onItemAdded={this.addItem}/>
                </header>


                <section className='main'>
                    <TodoList todos={ this.state.todoData }
                                onDeleted={this.deleteItem}
                                onToggleCompleted={this.onToggleCompleted}/>
                    <Footer toDo={ todoCount }
                            onClearCompleteItem={ this.onClearCompleteItem }
                            // onFilterCompleted={ this.onFilterCompleted }
                            // onFilterAll={ this.onFilterAll }
                            toDoStatusFilter={ this.toDoStatusFilter }/>
                </section>

            </section>
        );
    }
};

