const express = require("express");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { newOrder, myOrders } = require("../controllers/ordercontrollers");

const router  = express.Router();

router.route("/order/new").post(isAuthenticated,newOrder);
// router.route("/order/:id").get(isAuthenticated,)    admin work
router.route("/order/me").get(isAuthenticated,myOrders);


module.exports = router;