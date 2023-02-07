import mongoose from "mongoose";

const todosSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Proszę podać opis zadania."],
    },
  },
  {
    timestamps: true,
  }
);

const TODOS = mongoose.model("TODOS", todosSchema);

export default TODOS;
