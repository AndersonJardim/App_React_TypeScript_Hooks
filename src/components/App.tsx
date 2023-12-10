import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <div className='uk-container'>
            <Navbar></Navbar>
            <TodoList></TodoList>
            <h6>Desenvolvido por Anderson Jardim</h6>
        </div>
    );
}

export default App;