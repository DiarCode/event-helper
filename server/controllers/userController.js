const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class UserController {
  async registration(req, res) {
    try {
      const requestBody = req.body;
      const hashedPassword = await bcrypt.hash(requestBody.passwordValue, 10);
      await User.create({
        userName: requestBody.nameValue,
        userEmail: requestBody.emailValue,
        userPassword: hashedPassword,
      });
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  }

  async login(req, res) {
    const requestBody = req.body;
    const userData = await User.findOne({
      userEmail: requestBody.emailValue,
    });

    if (userData) {
      const isPasswordValid = await bcrypt.compare(
        requestBody.passwordValue,
        userData.userPassword
      );

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            userEmail: userData.userEmail,
            userName: userData.userName,
            userID: userData._id,
          },
          process.env.JWT_SECRET_KEY
        );

        return res.json({ success: true, user: token });
      }
    }

    res.json({ success: false, user: false });
  }
}

module.exports = new UserController();
