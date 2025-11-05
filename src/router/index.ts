import express from "express";
import routerTodo from "./todo.router";

const router = express.Router();
const v1 = express.Router();

v1.use("/todo", routerTodo);
router.use("/api/v1", v1);

export default router;
