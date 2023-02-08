import TODOS from "../models/todos.models.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

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

/**
 * Update todo
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
 * deleteTodo
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
