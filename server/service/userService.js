require("dotenv").config();
const jwt = require("jsonwebtoken");

class UserService {
  createUserToken(userEmail, userName, userID) {
    const token = jwt.sign(
      {
        userEmail: userEmail,
        userName: userName,
        userID: userID,
      },
      process.env.JWT_SECRET_KEY
    );

    return token;
  }
}

module.exports = new UserService();
