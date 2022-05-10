const UserRepository = require("../repository/userRepository");
const UserValidator = require("../validator/userValidator");
const UserService = require("../service/userService");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class UserController {
  async registration(req, res) {
    try {
      const { nameValue, emailValue, passwordValue } = req.body;
      const isValid = UserValidator.isUserInfoValid(
        emailValue,
        passwordValue,
        nameValue
      );
      if (isValid) {
        const hashedPassword = await bcrypt.hash(passwordValue, 10);
        await UserRepository.createNewUser(
          nameValue,
          emailValue,
          hashedPassword
        );
        await res.json({ success: true });
      } else {
        res.json({ success: false, error: "Invalid input value provided" });
      }
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async login(req, res) {
    const requestBody = req.body;
    const emailValue = requestBody.emailValue;

    try {
      const userData = await UserRepository.findUserByEmail(emailValue);
      if (userData) {
        const isPasswordValid = await UserValidator.isPasswordValid(
          requestBody.passwordValue,
          userData.userPassword
        );

        if (isPasswordValid) {
          const token = UserService.createUserToken(
            userData.userEmail,
            userData.userName,
            userData._id,
            userData.isAdmin
          );

          return res.json({ success: true, user: token });
        }
      }

      res.json({ success: false, user: false });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }
}

module.exports = new UserController();
