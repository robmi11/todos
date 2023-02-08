import mongoose from "mongoose";

const todosSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      Ref: "USER",
    },
    name: {
      type: String,
      required: [true, "Proszę podać opis zadania."],
    },
    done: {
      type: Boolean,
      required: [true, "Proszę określić status zadania."],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TODOS = mongoose.model("TODOS", todosSchema);

export default TODOS;
