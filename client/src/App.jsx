import React, { useState, useEffect } from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/TodoList';
import { getTodos } from './services/api'; 

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  
  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
    }
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-start bg-[#1B151C] p-4 '>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-[#b184c8] '>
        To-Do List
      </h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;