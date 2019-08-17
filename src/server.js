/**
 * Created by trungquandev.com's author on 17/08/2019.
 * server.js
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const initRoutes = require("./routes/web");

// Cho phép lý dữ liệu từ form method POST
app.use(bodyParser.json());

// Khởi tạo các routes cho ứng dụng
initRoutes(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 8017;
app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`);
});
