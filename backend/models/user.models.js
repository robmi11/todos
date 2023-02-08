import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Proszę podać nazwę."],
    },
    email: {
      type: String,
      required: [true, "Proszę podać adres e-mail."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Proszę podać hasło."],
    },
  },
  {
    timestamps: true,
  }
);

const USER = mongoose.model("USER", userSchema);

export default USER;
