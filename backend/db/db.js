import mongoose from "mongoose";
const uri =
  "mongodb+srv://todos_user:dKOSFLKCq5sveyf9@todos.xsf0wrx.mongodb.net/todos?retryWrites=true&w=majority";

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(uri);
    console.log(`DB connected: ${connection.connection.host}`);
  } catch (err) {
    console.error(err.message);
  }
};

export default db;
