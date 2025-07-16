import React from 'react';
import { deleteTodo, updateTodo } from '../services/api.js';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const handleUpdateTodo = async (id, currentTask) => {
    const updatedTask = prompt("Update your task:", currentTask);
    if (!updatedTask || updatedTask.trim() === "") return;

    try {
      const res = await updateTodo(id, updatedTask);
      setTodos(todos.map(todo => 
        todo._id === id ? { ...todo, task: res.data.task } : todo
      ));
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl mt-2 h-[500px] overflow-y-auto pt-1 rounded-md">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-[#efddf6] p-3 rounded-sm mb-2 shadow-sm flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              className="w-5 h-4 accent-[#b184c8] rounded-sm "
            />
            <span className="text-lg font-medium">{todo.task}</span>
          </div>

          <div className="flex gap-3 text-sm">
            <button 
              onClick={() => handleUpdateTodo(todo._id, todo.task)}
              className="bg-[#b184c8] text-[#1B151C] p-1 rounded-full font-semibold text-lg cursor-pointer"
            >
              <MdModeEditOutline />
            </button>
            <button 
              onClick={() => handleDelete(todo._id)}
              className="bg-[#b184c8] text-[#1B151C] p-1 rounded-full font-semibold text-lg cursor-pointer"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;