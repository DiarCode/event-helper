const AdviceModel = require("../models/advice.model");

class AdminRepository {
  async uploadAdviceToDB(imageURL, title, body, link) {
    try {
      await AdviceModel.create({
        adviceImageURL: imageURL,
        adviceTitle: title,
        adviceBody: body,
        adviceLink: link,
      });

      return { isUploaded: true };
    } catch (error) {
      return { isUploaded: false, error: error };
    }
  }

  async findAllAdvice() {
    try {
      const response = await AdviceModel.find();
      return { success: true, response: response };
    } catch (error) {
      return { success: true, error: error };
    }
  }
}

module.exports = new AdminRepository();
