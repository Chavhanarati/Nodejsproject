let mongoose = require("mongoose");
mongoose.pluralize(null);
let orderSchema = mongoose.Schema({
    _id:Number,
    
    customer_id:{
        type:Number,
        required:[true,"Customer id must be required"],
        unique:true
    },
    category_id:{
        type:Number,
        required:[true,"Customer id must be required"]
    },
    product_id:{
        type:Number,
        required:[true,"Product name must be required"]
    },
    product_qty:{
        type:Number,
        required:[true,"product qty must be required"]
    },
    amount: {
        type:String,
        required:[true,"Amount must be required"]
    },
    order_date:{
        type:String,
        required:[true,"Order must be required"]
    },
    delivery_date: {
        type:String,
        required:[true,"Delivery date must be required"]
    },
    delivery_time: {
        type:String,
        required:[true,"Delivery time must be required"]
    },
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let orderModel = mongoose.model("Order",orderSchema);

module.exports = orderModel;