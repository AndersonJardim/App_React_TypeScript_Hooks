import React from 'react';
import { Todo } from '../models/TodoList';

const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'Ir ao mercado', done: false },
        { id: 2, title: 'Ir a academia', done: false },
        { id: 3, title: 'Trabalhar', done: false }
    ];

    return (<div>Todo List</div>);
}

export default TodoList;