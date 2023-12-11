import React from 'react';

const TodoListItem = () => {
    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                        type="checkbox"
                    //checked={props.todo.done}
                    //onChange={handleChange}                 
                    />
                </label>
            </td>
            <td className="uk-width-expand"
            ///>  {props.todo.title}
            >
                Item
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                //</td>onClick={() => onRemove(props.todo)}
                ></button>
            </td >
        </tr >
    );
}

export default TodoListItem;