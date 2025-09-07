// App.jsx
import React from 'react';
import TodoList from './components/todo';
import './styles.css';

export default function App() {
  return (
    <div className="app-container">
      <h1>Todo Tracker</h1>
      <TodoList />
    </div>
  );
}
