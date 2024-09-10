import AuthService from "../services/auth.service.js";
import userModel from "../models/user.model.js";

const authService = new AuthService(userModel);

async function register(req, res, next) {
  try {
    const response = await authService.register({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      error: {},
      message: `User with email id ${req.body.email} is registered successfully`,
      success: true,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const response = await authService.login({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      error: {},
      message: `Logged in successfully`,
      success: true,
    });
  } catch (error) {
    next(error);
  }
}

export default {
  register,
  login,
};
