import jwt from "jsonwebtoken";
import serverConfig from "../config/server.config.js";

export function generateToken(user) {
  try {
    const token = jwt.sign(
      { name: user.name, email: user.email },
      serverConfig.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
}
