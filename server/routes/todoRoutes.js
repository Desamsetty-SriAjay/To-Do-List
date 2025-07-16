import express from "express";
import { createTodo,getTodos,updateTodo,deleteTodo } from "../controllers/todo.js";
const router=express.Router();
router.post("/todos",createTodo);
router.get("/todos",getTodos);
router.put("/todos/:id",updateTodo);
router.delete("/todos/:id",deleteTodo);
export default router;
