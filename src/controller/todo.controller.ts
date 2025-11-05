import { Request, Response } from "express";
import { todo, saveTodo, findId, deleteTodo, updateTodo } from "../config/db";

export const getTodo = (req: Request, res: Response) => {
  res.handleSuccess(todo);
};

export const createTodoData = (req: Request, res: Response) => {
  if (!req.body) {
    return res.handleError({ message: "Invalid todo data" }, 400);
  }
  const newTodo = req.body;

  const savedTodo = saveTodo(newTodo);
  return res.handleCreated(savedTodo);
};

export const getTodoDataById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.handleError({ message: "Invalid ID format" }, 400);
  }
  const data = findId(id);
  if (!data) {
    return res.handleError({ message: "Todo not found" }, 404);
  }
  return res.handleSuccess(data);
};

export const deleteTodoData = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.handleError({ message: "Invalid ID format" }, 400);
  }
  const data = deleteTodo(id);
  if (!data) {
    return res.handleError({ message: "Todo not found" }, 404);
  }
  return res.handleSuccess(id, "Todo deleted successfully");
};

export const updateTodoData = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.handleError({ message: "Invalid ID format" }, 400);
  }
  const data = updateTodo(id, req.body);
  if (!data) {
    return res.handleError({ message: "Todo not found" }, 404);
  }
  return res.handleSuccess(data, "Todo updated successfully");
};
