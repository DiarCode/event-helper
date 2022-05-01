const User = require("../models/user.model");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

class UserController {
  async registration(req, res) {
    try {
      const { nameValue, emailValue, passwordValue } = req.body;
      const validEmail = validator.isEmail(emailValue);
      const validPassword = validator.isLength(passwordValue, {
        min: 5,
        max: undefined,
      });
      const validName = validator.isLength(nameValue, {
        min: 3,
        max: undefined,
      });

      if (validEmail && validPassword && validName) {
        const hashedPassword = await bcrypt.hash(passwordValue, 10);
        await User.create({
          userName: nameValue,
          userEmail: emailValue,
          userPassword: hashedPassword,
        });
        res.json({ success: true });
      } else {
        res.json({ success: false, error: "Invalid input value provided" });
      }
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
