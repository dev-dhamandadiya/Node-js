import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
};
