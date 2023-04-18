let mongoose = require("mongoose");
mongoose.pluralize(null);
let loginSchema = mongoose.Schema({
    _id:Number,

    emailid:{
        type:String,
        required:[true,"emailid is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    typeofuser:{
        type:String,
        required:[true,"typeof user must required"],
    }
    
})
// 1st parameter providing collection name
//2nd prameter hold schema details. 
let loginModel = mongoose.model("Login",loginSchema);

module.exports = loginModel;