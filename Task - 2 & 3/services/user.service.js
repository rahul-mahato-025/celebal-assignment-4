class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async create(userData) {
    try {
      const userExists = await this.userModel.findOne({
        email: userData.email,
      });
      if (userExists)
        throw new Error(`User with emailID ${userData.email} already exists`);
      const user = await this.userModel.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async find(obj) {
    try {
      const user = await this.userModel.findOne(obj);
      if (!user) throw new Error(`User does not exists`);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
