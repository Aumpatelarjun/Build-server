import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted , setshowCompleted] = useState(false);
  console.log(todos);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const showAllTodos = () => {
    setshowCompleted(false);
  }

  const showCompletedTodos = () =>{
    setshowCompleted(true);
  }

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos.filter((todo) => !todo.completed);


  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      <div className="heading">
      { todos.length>0 ? (
        <>
      <button type="button" className="todo-bt" onClick={showAllTodos}>
          To Do
        </button>
        <button type="button" className="todo-bt" onClick={showCompletedTodos}>
          Completed
        </button>
        </>) : 
        ( <>
        </>)
       }
        </div>
     
      {filteredTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            completed = {todo.completed}
          />
        )
      )}
    </div>
  );
};