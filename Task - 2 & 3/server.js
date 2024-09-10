import express from "express";
import serverConfig from "./config/server.config.js";
import connectMongoDB from "./config/db.config.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

// Global Error Handler
app.use((error, req, res, next) => {
  return res.status(500).json({
    data: {},
    error: error.message,
    success: false,
  });
});

app.listen(serverConfig.PORT, async () => {
  console.log(`Server started at port ${serverConfig.PORT}`);
  await connectMongoDB();
});
