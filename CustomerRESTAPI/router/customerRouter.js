let express = require("express");
let router = express.Router();
let customerController = require("../controller/customerController");
// let authToken = require("../config/authToken");







router.post("/storeCustomerInfo",customerController.storeCustomerInfo);
router.get("/findAllCustomers",customerController.findAllCustomers);
router.get("/findCustomersByName/:first_name",customerController.findCustomersByName);
router.patch("/updateCustomerByFName",customerController.updateCustomerByFName);
router.delete("/deleteCustomerByFName/:first_name",customerController.deleteCustomerByFName);


// router.post("/storeCustomerInfo",authToken.verifyUserToken,authToken.isCustomerOrAdmin,customerController.storeCustomerInfo);
// router.get("/findAllCustomers",authToken.verifyUserToken,authToken.isCustomerOrAdmin,customerController.findAllCustomers);
// router.get("/findCustomersByName/:first_name",customerController.findCustomersByName);
// router.patch("/updateCustomerByFName",customerController.updateCustomerByFName);
// router.delete("/deleteCustomerByFName/:first_name",customerController.deleteCustomerByFName);

module.exports=router;
