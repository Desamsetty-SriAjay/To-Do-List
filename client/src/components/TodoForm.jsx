import { useState } from "react";
import { createTodo } from "../services/api.js";

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleAddTask = async () => {
    if (!task.trim()) return;
    try {
      const res = await createTodo(task);
      onAddTodo(res.data); // Add new todo to state
      setTask("");
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  return (
    <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-2 md:gap-4 p-4 bg-[#efddf6] rounded-lg shadow-md ">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task"
        className="flex-1 font-sm p-2 border border-gray-300 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#b184c8] "
      />
      <button
        onClick={handleAddTask}
        className="bg-[#b184c8] text-[#1B151C] font-semibold px-4 py-2 rounded-md w-full sm:w-auto hover:bg-[#654374] hover:text-[#b184c8] transition duration-500"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;