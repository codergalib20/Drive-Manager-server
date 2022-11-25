const express = require("express");

const router = express.Router();

const {
  createFolder,
  getAllFolders,
  getFolderEmail,
  getFolderById,
  updateFolder,
  deleteFolder,
} = require("./folder.controller");

router.route("/").get(getAllFolders).post(createFolder);
router.route("/:email/:parent").get(getFolderEmail);
router
  .route("/id/:id")
  .get(getFolderById)
  .patch(updateFolder)
  .delete(deleteFolder);

// Export the router
module.exports = router;
