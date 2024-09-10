import mongoose from "mongoose";
import serverConfig from "./server.config.js";

async function connectMongoDB() {
  try {
    await mongoose.connect(serverConfig.MONGO_DB_URL);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log(`Mongo Db connection error`, error);
  }
}

export default connectMongoDB;
