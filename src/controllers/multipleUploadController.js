const multipleUploadMiddleware = require("../middleware/multipleUploadMiddleware");

let multipleUpload = (req, res) => {
  multipleUploadMiddleware(req, res, (error) => {
    if (error) throw error;
    console.log(req.files);
  });
};

module.exports = {
  multipleUpload: multipleUpload
};
