let productModel = require("../model/productModel");


let storeProductInfo = async (request,response)=> {
     let product = request.body;
    // console.log(product);
    // response.send("done");
    try{
    let result  = await productModel.insertMany(product);
    response.json(result);
    }catch(ex){
        response.json(ex);
    }
}
let findAllProducts= async(request,response)=> {
    try {
        let result = await productModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
let findProductsByPname = async (reqeust,response)=> {
    let productPname = reqeust.params.product_name;
    try {
        let result = await productModel.findOne({product_name: productPname});
        if(result==null){
             response.json({"msg":"Record not present with name as "+productPname});
    }else{
        // response.json(result);
        response.json({"msg":"Record present","product":result});

    }
    } catch (ex) {
        response.json({"msg":"Error generated "+ex});
    }
}

// let findCustomerByName = async (request,response)=> {
//     let custFname= request.params.first_name;
//     try{
//         let result =await customerModel.findOne({first_name:custFname});
//         if(result==null){
//             response.json({"msg":"Record not present with id as "+custFname})
//         }else {
//             response.json(result);
//         }
//         }catch(ex){
//             response.json({"msg":"Error generated "+ex});
//         }
// }




module.exports = {storeProductInfo,findAllProducts,findProductsByPname};