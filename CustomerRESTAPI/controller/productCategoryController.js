let productCategoryModel = require("../model/productCategoryModel");


let storeProductCategoryInfo = async (request,response)=> {
    let productCategory = request.body;
    //console.log(productCategory);
    //response.send("done");
    try{
    let result  = await productCategoryModel.insertMany(productCategory);
    response.json(result);
    }catch(ex){
        response.json(ex);
    }
}
let findAllProductCategory= async(request,response)=> {
    try {
        let result = await productCategoryModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}


// let updateProductCategory = async (reqeust,response)=> {
//     let productcategory= reqeust.body;
//     try{
//         let result  = await productcategoryModel.updateOne({_id:productcategory._id},{disease_name:productcategory.disease_name})
//         //response.send(result);
//         if(result.modifiedCount>0){
//             response.json("Your disease name updated successfully")
//         }else if(result.matchedCount>0){
//             response.json("Your old disease name and new disease name is same")
//         //}else {
//           //  response.json("Disease not present");
//         }
//         }catch(ex){
//             response.json(ex);
//         }    
// }
let findProductCategoryBydisease = async (reqeust,response)=> {
    let Cdisease = reqeust.params.disease_name;
    try {
        let result = await productCategoryModel.find({disease_name: Cdisease});
        if(result==null){
             response.json({"msg":"Record not present with disease as "+Cdisease});
    }else{
        response.json(result);
    }
    } catch (ex) {
        response.json({"msg":"Error generated "+ex});
    }
}

        
module.exports = {storeProductCategoryInfo,findAllProductCategory,findProductCategoryBydisease};