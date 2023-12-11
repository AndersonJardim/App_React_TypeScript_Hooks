import React from 'react';
import { Todo } from '../models/TodoList';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: 'Ir ao mercado', done: false },
        { id: 2, title: 'Ir a academia', done: false }
    ];

    return (
        <table className='uk-table'>
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id}></TodoListItem>)
                        //todo => (<div key={todo.id}>{todo.title}</div>)  //anterior
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;