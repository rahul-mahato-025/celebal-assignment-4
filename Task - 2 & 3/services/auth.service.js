import UserDto from "../dtos/user.dto.js";
import { generateToken } from "../utils/jwt.util.js";

class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async register(userData) {
    try {
      const userExists = await this.userModel.findOne({
        email: userData.email,
      });
      if (userExists)
        throw new Error(`User with emailID ${userData.email} already exists`);

      const user = await this.userModel.create(userData);
      const token = generateToken(user);
      return { user: new UserDto(user), token };
    } catch (error) {
      throw error;
    }
  }

  async login(userData) {
    try {
      const user = await this.userModel.findOne({
        email: userData.email,
      });
      if (!user) throw new Error(`Invalid credentials`);
      const validPass = await user.comparePassword(userData.password);
      if (!validPass) throw new Error(`Invalid credentials`);
      const token = generateToken(user);
      return { user: new UserDto(user), token };
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
