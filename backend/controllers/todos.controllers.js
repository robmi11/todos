import TODOS from "../models/todo.models.js";
import USER from "../models/user.models.js";
import asyncHandler from "express-async-handler";

/**
 * @description   GET User Todos
 * @route         GET /api/v1/todos
 * @access        Private
 */
export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await TODOS.find({ user: req.user.id });
  if (!todos) {
    res.status(404);
    throw new Error("Nie znaleziono.");
  }
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

  const newTodo = await TODOS.create({ name, user: req.user.id });

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
  const id = req.params.id;
  let name = req.body.name;
  let done = req.body.done;

  if (!id) {
    res.status(400);
    throw new Error("Nie przekazano id");
  }

  //Check if todo exists
  const todo = await TODOS.findById(id);
  if (!todo) {
    res.status(404);
    throw new Error(`Nie znaleziono zadania o id ${id}.`);
  }

  //Check for logged user
  const user = await USER.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Nie znaleziono użytkownika");
  }

  //Check if user is owner of todo
  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Użytkownik nie jest uprawniony do edycji zadania.");
  }

  const upd = {
    name,
    done,
  };

  const updTodo = await TODOS.findByIdAndUpdate(id, upd, { new: true });

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
  const id = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error("Proszę podać id.");
  }

  const user = await USER.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Użytkownik nie uprawniony do usunięcia zadania");
  }

  const todo = await TODOS.findById(id);
  if (!todo) {
    res.status(404);
    throw new Error("Nie znaleziono zadania.");
  }

  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Brak autoryzacji");
  }

  await todo.remove();

  res.status(200).json({ message: `Zadanie numer ${id} zostało usunięte.` });
});
