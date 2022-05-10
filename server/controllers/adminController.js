const AdminRepository = require("../repository/adminRepository");

class AdminController {
  async uploadAdvice(req, res) {
    try {
      const { adviceImageURL, adviceTitle, adviceBody, adviceLink } = req.body;
      const response = await AdminRepository.uploadAdviceToDB(
        adviceImageURL,
        adviceTitle,
        adviceBody,
        adviceLink
      );

      if (response.isUploaded) res.json({ success: true });
      else res.json({ success: false, error: response.error });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  }

  async getAllAdvice(req, res) {
    try {
      const response = await AdminRepository.findAllAdvice();
      if (!response.success)
        res.json({ success: false, error: response.error });

      res.json({ success: true, data: response.response });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  }
}

module.exports = new AdminController();
