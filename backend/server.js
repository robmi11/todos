import express from "express";
import dotenv from "dotenv";
dotenv.config();

//Enviromental
const PORT = process.env.PORT || 8000;

//Initialize express server
const server = express();

server.get("/api/v1/todos", function (req, res) {
  res.status(200).json({ message: "It's all ok." });
});

server.listen(PORT, function () {
  console.log(`Server is on. Port: ${PORT}`);
});
