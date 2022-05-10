require("dotenv").config();
const jwt = require("jsonwebtoken");

class UserService {
  createUserToken(userEmail, userName, userID, isAdmin) {
    const token = jwt.sign(
      {
        userEmail: userEmail,
        userName: userName,
        userID: userID,
        isAdmin: isAdmin,
      },
      process.env.JWT_SECRET_KEY
    );

    return token;
  }
}

module.exports = new UserService();
