const express = require("express");

const router = express.Router();

const {
  createFolder,
  getAllFolders,
  getFolderEmail,
} = require("./folder.controller");

router.route("/").get(getAllFolders).post(createFolder);
router.route("/:email").get(getFolderEmail);

module.exports = router;
