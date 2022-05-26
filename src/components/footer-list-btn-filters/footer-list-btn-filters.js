import React, { Component } from "react";
import './footer-list-btn-filters.css';

export default class FooterListBtnFilter extends Component {

    
    render() {
        const { onFilterCompleted, onFilterAll, toDoStatusFilter } = this.props;
        console.log(this.props);
        return (
            <ul className='filters'>
                <li>
                    <button className="selected" onClick={ () => toDoStatusFilter('all') }>All</button>
                </li>
                <li>
                    <button onClick={ () => toDoStatusFilter('active') }>Active</button>
                </li>
                <li>
                    <button onClick={ () => toDoStatusFilter('completed') }>Completed</button>
                </li>
            </ul>
        );
    }

};
