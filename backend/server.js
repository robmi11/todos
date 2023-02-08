import express from "express";
import dotenv from "dotenv";
import db from "./db/db.js";
import todosRouter from "./routes/todos.routes.js";
import userRouter from "./routes/users.routes.js";
import { customErrorHandler } from "./middlewares/error.middleware.js";
dotenv.config();

//Connect to db
db();

//Enviromental
const PORT = process.env.PORT || 8000;

//Initialize express server
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/v1/todos", todosRouter);
server.use("/api/v1/users", userRouter);

server.use(customErrorHandler);
server.listen(PORT, function () {
  console.log(`Server is on. Port: ${PORT}`);
});
