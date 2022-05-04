const validator = require("validator");
const bcrypt = require("bcryptjs");

class UserValidator {
  isUserInfoValid(emailValue, passwordValue, nameValue) {
    const validEmail = validator.isEmail(emailValue);
    const validPassword = validator.isLength(passwordValue, {
      min: 5,
      max: undefined,
    });
    const validName = validator.isLength(nameValue, {
      min: 3,
      max: undefined,
    });

    return validEmail && validPassword && validName;
  }

  async isPasswordValid(passwordValue, hashedPassword) {
    const isValid = await bcrypt.compare(passwordValue, hashedPassword);

    return isValid;
  }
}

module.exports = new UserValidator();
