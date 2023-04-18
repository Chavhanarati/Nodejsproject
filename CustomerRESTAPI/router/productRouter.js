let express = require("express");
let router = express.Router();
let productController = require("../controller/productController");


router.post("/storeProductInfo",productController.storeProductInfo);
router.get("/findAllProducts",productController.findAllProducts);
router.get("/findProductsByPname/:product_name",productController.findProductsByPname);

module.exports=router;