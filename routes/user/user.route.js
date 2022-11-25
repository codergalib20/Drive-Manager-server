const {
  registerUsre,
  loginUser,
  getLoggedInUser,
} = require("./user.controller");
const checkLogin = require("../../middleware/checkLogin");

const router = require("express").Router();

router.post("/signup", registerUsre);
router.post("/signin", loginUser);
router.get("/validation", checkLogin, getLoggedInUser);

module.exports = router;
