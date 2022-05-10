const User = require("../models/user.model");

class UserRepository {
  async createNewUser(nameValue, emailValue, hashedPassword) {
    await User.create({
      userName: nameValue,
      userEmail: emailValue,
      userPassword: hashedPassword,
      isAdmin: false,
    });
  }

  async findUserByEmail(emailValue) {
    const response = await User.findOne({
      userEmail: emailValue,
    });

    return response;
  }
}

module.exports = new UserRepository();
