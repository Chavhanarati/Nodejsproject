let express = require("express");
let router = express.Router();
let productCategoryController = require("../controller/productCategoryController");


router.post("/storeProductCategoryInfo",productCategoryController.storeProductCategoryInfo);
// router.patch("/updateProductCategory",productCategoryController.updateProductCategory);
router.get("/findAllProductCategory",productCategoryController.findAllProductCategory);
router.get("/findProductCategoryBydisease/:disease_name",productCategoryController.findProductCategoryBydisease);

module.exports=router; 