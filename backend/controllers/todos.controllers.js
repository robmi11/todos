import TODOS from "../models/todos.models.js";
import asyncHandler from "express-async-handler";

/**
 * @description   GET User Todos
 * @route         GET /api/v1/todos
 * @access        Private
 */

export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await TODOS.find();
  res.status(200).json(todos);
});

/**
 * @description   Create Todo
 * @route         POST /api/v1/todos
 * @access        Private
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

/**
 * @description   Update User todo
 * @route         PUT /api/v1/todos/:id
 * @access        Private
 */

export const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id);
  if (!name) {
    res.status(400);
    throw new Error("Proszę podać nową wartość dla zadania.");
  }

  if (!id) {
    res.status(400);
    throw new Error("Nie przekazano id");
  }

  const todo = await TODOS.findById(id);
  if (!todo) {
    res.status(404);
    throw new Error(`Zadanie o id ${id} nie zostało znalezione.`);
  }

  const updTodo = await TODOS.findByIdAndUpdate(id, { name }, { new: true });

  if (!updTodo) {
    res.status(500);
    throw new Error("Błąd serwera");
  }

  res.status(200).json(updTodo);
});

/**
 * @description   Delete user todo
 * @route         DELETE /api/v1/todos/:id
 * @access        Private
 */
export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400);
    throw new Error("Proszę podać id.");
  }

  const deletedTodo = await TODOS.findByIdAndDelete(id);
  if (!deletedTodo) {
    res.status(500);
    throw new Error("Błąd servera");
  }

  res.status(200).json({ message: `Zadanie numer ${id} zostało usunięte.` });
});
