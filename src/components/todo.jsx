// Todo.jsx
import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const updateTodoValue = (event) => setNewTodo(event.target.value);
  

  const pendingCount = todos.filter(todo => !todo.isDone).length;

  const addNewTask = () => {
    if (newTodo.trim()) {
      const newTask = { id: Date.now(), task: newTodo.trim(), isDone: false };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (event) => { 
    if (event.key === "Enter") {
      addNewTask();
    }
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const markAsDone = (id) =>
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: true } : todo));

  const markAllDone = () =>
    setTodos(todos.map((todo) => ({ ...todo, isDone: true })));

  const markAsUndone = (id) =>
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: false } : todo));

  const markAllUndone = () =>
    setTodos(todos.map((todo) => ({ ...todo, isDone: false })));



  return (
    <div className="todo-container">
      
      <input
        placeholder="Add a new task"
        value={newTodo}
        onChange={updateTodoValue}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addNewTask}>Add Task</button>
      <button onClick={markAllDone}>Mark All Done</button>
      <button onClick={markAllUndone}>Reopen All</button>

      <h3 className="head">No. of Pending Tasks: {pendingCount}</h3>
      <hr />
      
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item-vertical">
            <span className={`todo-text ${todo.isDone ? 'done' : ''}`}>
              {todo.task}
            </span>
            <div className="todo-buttons">
              { todo.isDone ? ( <button onClick={() => markAsUndone(todo.id)}>Reopen</button>) : (<button onClick={() => markAsDone(todo.id)}>Done</button>)}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
