import express from "express";
import {
  createTodoData,
  deleteTodoData,
  getTodo,
  getTodoDataById,
  updateTodoData,
} from "../controller/todo.controller";

const routerTodo = express.Router();
routerTodo.get("/", getTodo);
routerTodo.get("/:id", getTodoDataById);
routerTodo.post("/", createTodoData);
routerTodo.put("/:id", updateTodoData);
routerTodo.delete("/:id", deleteTodoData);

export default routerTodo;
