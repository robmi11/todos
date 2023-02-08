import express from "express";
import protect from "../middlewares/protect.middleware.js";
const router = express.Router();

import {
  getAllTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.controllers.js";

router.route("/").get(protect, getAllTodos).post(protect, setTodo);
router.route("/:id").delete(protect, deleteTodo).put(protect, updateTodo);

export default router;
