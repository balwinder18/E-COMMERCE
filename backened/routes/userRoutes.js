const express = require("express");
const {registeruser, loginuser, logout, forgotpassword, getUserDetails, updatePasword} = require("../controllers/usercontrollers");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const router  = express.Router();

router.route("/register").post(registeruser);
router.route("/login").post(loginuser);
router.route("/logout").post(logout);
// router.route("/password/forgot").post(forgotpassword
router.route("/me").post(isAuthenticated,getUserDetails);

// router.route("/password/update").put(isAuthenticated,updatePasword);
module.exports = router;

