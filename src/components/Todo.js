import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete,completed}) => {
  return (
    <div className="Todo">
        <p >{task.task}</p>
        <div>
        {!completed ? (
          <>
             <button className="input-com" onClick={() => toggleComplete(task.id)}>finished</button>
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
          </>
        ) : (
          <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        )}
        </div>
    </div>
  )
}