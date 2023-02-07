import TODOS from "../models/todos.models.js";
import asyncHandler from "express-async-handler";

/**
 * getAllTodos
 */

export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await TODOS.find();
  res.status(200).json(todos);
});

/**
 * create new todos
 */
export const setTodo = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Proszę podać opis");
  }

  const newTodo = await TODOS.create({ name });

  if (!newTodo) {
    res.status(500);
    throw new Error("Błąd serwera");
  }

  res.status(201).json(newTodo);
});
