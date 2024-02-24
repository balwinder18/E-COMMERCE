const express = require("express");
const {isAuthenticated, authorizedRoles} = require("../middleware/isAuthenticated");
const { getAllProducts, createProducts, updateproducts, deleteproducts, getproductdetails, Reviews } = require("../controllers/productcontroller");

const router = express.Router();

router.route("/products").get( getAllProducts);
router.route("/product/new").post(isAuthenticated ,createProducts);
router.route("/product/:id").put(isAuthenticated ,updateproducts);
router.route("/product/:id").delete(isAuthenticated ,deleteproducts);
router.route("/product/:id").get(getproductdetails);
// router.route("/review").put(isAuthenticated , Reviews);



module.exports =router;