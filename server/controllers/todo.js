import toDoModel from "../models/todoModel.js";

//CreateTodo
export const createTodo=async(req,res)=>{
    const {task}=req.body;
        if(!task) return res.status(400).json({message:"Task is required"})
    try {
        const newTodo=await toDoModel.create({task});
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({message:"Failed to create task",error})
    }
}

// Get all tasks
export const getTodos=async(req,res)=>{
    try {
        const todos=await toDoModel.find();
        res.status(201).json(todos);
    } catch (error) {
        res.status(500).json({message:"Failed to fetch tasks",error})
    }
}
//update Todos
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { task, isCompleted } = req.body;

  try {
    const updatedTodo = await toDoModel.findByIdAndUpdate(
      id,
      { task, isCompleted },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task", error });
  }
};

//delete Todos
export const deleteTodo=async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedTodo=await toDoModel.findByIdAndDelete(id)
    if (!deletedTodo) return res.status(404).json({ message: "Task not found" })
    res.status(200).json({message:"Task deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task", error });
    }
}

export default {createTodo,getTodos,updateTodo,deleteTodo};