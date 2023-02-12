import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

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
