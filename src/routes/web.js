/**
 * Created by trungquandev.com's author on 17/08/2019.
 * routes/web.js
 */
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const multipleUploadController = require("../controllers/multipleUploadController");

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get("/", homeController.getHome);
  
  // Upload nhiều file với phương thức post
  router.post("/multiple-upload", multipleUploadController.multipleUpload);

  return app.use("/", router);
};

module.exports = initRoutes;
