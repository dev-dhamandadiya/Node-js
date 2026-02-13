import mongoose from "mongoose";
import { envConfig } from "./dotenv.js";

const db = async () => {
  try {
    await mongoose.connect(envConfig.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default db;
