/**
 * Created by trungquandev.com's author on 17/08/2019.
 * multipleUploadController.js
 */
const multipleUploadMiddleware = require("../middleware/multipleUploadMiddleware");

let debug = console.log.bind(console);

let multipleUpload = async (req, res) => {
  try {
    // thực hiện upload
    await multipleUploadMiddleware(req, res);

    // Nếu upload thành công, không lỗi thì tất cả các file của bạn sẽ được lưu trong biến req.files
    debug(req.files);

    // Mình kiểm tra thêm một bước nữa, nếu như không có file nào được gửi lên thì trả về thông báo cho client
    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file or more.`);
    }

    // trả về cho người dùng cái thông báo đơn giản.
    return res.send(`Your files has been uploaded.`);
  } catch (error) {
    // Nếu có lỗi thì debug lỗi xem là gì ở đây
    debug(error);
    return res.send(`Error when trying upload many files: ${error}}`);
  }
};

module.exports = {
  multipleUpload: multipleUpload
};
