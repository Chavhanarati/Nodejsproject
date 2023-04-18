let express = require("express");
let router = express.Router();
let orderController = require("../controller/orderController");


router.post("/storeOrderInfo",orderController.storeOrderInfo);
router.patch("/updateOrderDeliveryDate",orderController.updateOrderDeliveryDate);
router.get("/findAllOrder",orderController.findAllOrder);
router.get("/findOrderByCustomerId/:customer_id",orderController.findOrderByCustomerId);


module.exports=router;