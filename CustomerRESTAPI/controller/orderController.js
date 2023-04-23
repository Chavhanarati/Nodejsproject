let orderModel = require("../model/orderModel");


let storeOrderInfo = async (request,response)=> {
    let order = request.body;
    //console.log(order);
    //response.send("done");
    try{
    let result  = await orderModel.insertMany(order);
    response.json(result);
    }catch(ex){
        response.json(ex);
    }
}
let findAllOrder= async(request,response)=> {
    try {
        let result = await orderModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
let updateOrderDeliveryDate = async (reqeust,response)=> {
    let order= reqeust.body;
    try{
        let result  = await orderModel.updateOne({customer_id:order.customer_id},{delivery_date:order.delivery_date})
        if(result.modifiedCount>0){
            response.json("Your devivery date updated successfully")
        }else if(result.matchedCount>0){
            response.json("Your old delivery date and new delivery date is same")
        }else {
            response.json("Order not present");
        }
        }catch(ex){
            response.json(ex);
        }    
}


// let updateStudentGrade = async (reqeust,response)=> {
//     let student = reqeust.body;
//     try{
//         let result  = await studentModel.updateOne({_id:student._id},{grade:student.grade})
//         //response.send(result);
//         if(result.modifiedCount>0){
//             response.send("Your grade updated successfully")
//         }else if(result.matchedCount>0){
//             response.send("Your old grade and new grade is same")
//         }else {
//             response.send("Student not present");
//         }
//         }catch(ex){
//             response.send(ex);
//         }    
// }





// let updateOrder = async (reqeust,response)=> {
//     let order= reqeust.body;
//     try{
//         let result  = await orderModel.updateOne({_id:order._id},{customer_id:order.customer_id})
//         //response.send(result);
//         if(result.modifiedCount>0){
//             response.json("Your Customer id updated successfully")
//         }else if(result.matchedCount>0){
//             response.json("Your old customer id and new Customer id is same")
//         //}else {
//            // response.json(" Customer id not present");
//         }
//         }catch(ex){
//             response.json(ex);
//         }    
// }

let findOrderByCustomerId = async (request,response)=> {
    let order= request.params.customer_id;
    try{
        let result =await orderModel.findOne({customer_id:order});
        if(result==null){
            response.json({"msg":"Record not present with id as "+customer_id})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}





    module.exports = {storeOrderInfo,findAllOrder,findOrderByCustomerId,updateOrderDeliveryDate};