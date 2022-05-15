import React, { Component } from "react";
import './todo-list-item.css';



export default class TodoListItem extends Component {

    state = {
        completed: false
    }

    onMarkComplete = () => { //устанавливаем важность задачи в списке
        this.setState( (state) => { //setState принимает функцию с параметром содержащим текущий STATE c состоянием компоненты
            return { //возвращаем новый STATE в зависимости от текущего состояния
                completed: !state.completed
            };
        });
    };

    render() {

        const { onDeleted, description, createTime } = this.props;
        const { completed } = this.state;

        let classNameComplete = 'view ';

        if( completed ) {
            classNameComplete += 'completed';
        }

                return (
                        <div className={ classNameComplete }>
    
                            <input 
                                className="toggle" 
                                type="checkbox"
                                onClick={ this.onMarkComplete } ></input>

                            <label>
                                <span className="description">{ description }</span>
                                <span className="created">created { createTime }</span>
                            </label>

                            <button className="icon icon-edit"></button>
                            <button 
                                className="icon icon-destroy"
                                onClick={ onDeleted }
                                ></button>
                        </div>  
                );
    }
};