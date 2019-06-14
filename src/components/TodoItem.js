import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <h2>{this.props.todo.title}</h2>
        );
    }
}

export default TodoItem;
