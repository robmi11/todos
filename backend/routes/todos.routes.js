import express from "express";
const router = express.Router();

import {
  getAllTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.controllers.js";

router.route("/").get(getAllTodos).post(setTodo);
router.route("/:id").delete(deleteTodo).put(updateTodo);

export default router;
