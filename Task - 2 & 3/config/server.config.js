import dotenv from "dotenv";

dotenv.config({});

export default {
  PORT: process.env.PORT || 3001,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
