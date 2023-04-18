let mongoose = require("mongoose");
mongoose.pluralize(null);
let customerSchema = mongoose.Schema({
    _id:Number,
    
    first_name:{
        type:String,
        required:[true,"first name required"]},

    last_name:{
        type:String,
        required:[true,"last name required"]
    },

    age:{
        type:Number,
        required:[true,"Age must be required"]
    },
    mobile_no: {
        type:Number,
        required:[true,"Mobile no  is required"],
        unique:true
    },
    gender:{
        type:String,
        required:[true,"gender must be required"]
    },
    address: {
        type:String,
        required:[true,"Address must be required"]
    }
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let customerModel = mongoose.model("Customer",customerSchema);

module.exports = customerModel;