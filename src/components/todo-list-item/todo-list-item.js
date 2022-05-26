import React, { Component } from "react";
import './todo-list-item.css';



export default class TodoListItem extends Component {


    render() {

        const { onDeleted, description, createTime, onToggleCompleted, completed } = this.props;

        let classNameComplete = 'view ';

        if( completed ) {
            classNameComplete += 'completed';
        }

                return (
                        <div className={ classNameComplete }>
    
                            <input 
                                className="toggle" 
                                type="checkbox"
                                onClick={ onToggleCompleted } ></input>

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