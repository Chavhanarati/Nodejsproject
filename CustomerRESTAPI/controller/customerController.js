let customerModel = require("../model/customerModel");


let storeCustomerInfo = async (request,response)=> {
    let customer = request.body;
    //console.log(customer);
    //response.send("done");
    try{
    let result  = await customerModel.insertMany(customer);
    response.json(result);
    }catch(ex){
        response.json(ex);
    }
}
let findAllCustomers= async(request,response)=> {
    try {
        let result = await customerModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
let updateCustomerByFName = async (reqeust,response)=> {
    let customer= reqeust.body;
    try{
        let result  = await customerModel.updateOne({first_name:customer.first_name})
        if(result.modifiedCount>0){
            response.json("Your first name updated successfully")
        }else if(result.matchedCount>0){
            response.json("Your old first name and new first name is same")
        }else {
            response.json("Customer not present");
        }
        }catch(ex){
            response.json(ex);
        }    
}

let deleteCustomerByFName = async (reqeust,response)=> {
    try {
        let customer = reqeust.params.first_name;
        let result = await customerModel.deleteOne({first_name:customer})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Customer details deleted successfully")
        }else {
            response.send("Customer not present")
        }
    } catch (error) {
        response.json(error);
    }
}

 let findCustomersByName = async (request,response)=> {
    let custFname= request.params.first_name;
    try{
        let result =await customerModel.findOne({first_name:custFname});
        if(result==null){
            response.json({"msg":"Record not present with name as "+custFname})
        }else {
            // response.json(result);
            response.json({"msg":"Record present","customer":result});
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}




    module.exports = {storeCustomerInfo,findAllCustomers,findCustomersByName,updateCustomerByFName,deleteCustomerByFName};