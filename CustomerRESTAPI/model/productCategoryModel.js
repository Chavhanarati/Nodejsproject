let mongoose = require("mongoose");
mongoose.pluralize(null);
let productCategorySchema = mongoose.Schema({
    _id:Number,
    
    disease_name:{
        type:String,
        required:[true,"Disease name is required"]
    },

    image:{
        type:String,
        required:[true,"Image is required"]
    },
        
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let productCategoryModel = mongoose.model("ProductCategory",productCategorySchema);

module.exports = productCategoryModel;