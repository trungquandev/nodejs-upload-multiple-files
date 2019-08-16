const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/../../uploadResults`));
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

let multipleUploadMiddleware = multer({storage: storage}).array("many-files", 17);

module.exports = multipleUploadMiddleware;
