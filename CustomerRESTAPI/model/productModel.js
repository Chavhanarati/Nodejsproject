let mongoose = require("mongoose");
mongoose.pluralize(null);
let productSchema = mongoose.Schema({
    _id:Number,
    
    product_name:{
        type:String,
        required:[true,"product name required"]
    },

    product_image:{
        type:String,
        required:[true,"product image required"]},
        
    product_price:{
        type:String,
        required:[true,"product price required"]},
        
    product_qty:{
        type:Number,
        required:[true,"Product Typt must be required"],
    },
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let productModel = mongoose.model("Product",productSchema);

module.exports = productModel;