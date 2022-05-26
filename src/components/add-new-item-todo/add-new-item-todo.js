import React, { Component } from 'react';

import './add-new-item-todo.css';

export default class AddNewItemTodo extends Component {
    state = {
        description: ''
    }

    onLabelChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    onSubmit = (evt) => { 
        evt.preventDefault();
        this.props.onItemAdded(this.state.description);
        this.setState({
            description: ''
        });
    };
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    className="new-todo" 
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?" 
                    value={this.state.description}
                    autoFocus>
                </input>
            </form>
        );
    };

};

