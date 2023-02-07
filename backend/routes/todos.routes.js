import express from "express";
const router = express.Router();

import { getAllTodos, setTodo } from "../controllers/todos.controllers.js";

router.route("/").get(getAllTodos).post(setTodo);

export default router;
