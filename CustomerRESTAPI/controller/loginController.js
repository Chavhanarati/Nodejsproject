let loginModel = require("../model/loginModel");
let passwordHashConfig = require("../config/passwordHashConfig");
let jwt = require("jsonwebtoken");          // load the jsonwebtoken 
let signUp = async (request,response)=> {
    let login = request.body;
    try{
    if(login.typeofuser =="admin"){
        response.jsong({"msg":"Admin account can't create"})
    }else {
        console.log(login);
        // randomnumber 
        // Customer : fname,dob, gender : password : aka1982male
         login.password = await passwordHashConfig.convertPasswordInHash(login.password);
        console.log(login);
        let result  = await loginModel.insertMany(login);
        if(result!=null){
            response.send({"msg":"Customer Account created"});
        }
    }
    }catch(ex){
        console.log(ex);
        response.json({"msg":"EmailId must be unqiue"});
    }
}
// let signIn = async (request,response)=> {
//     let login = request.body;
//     try{
//         // using emailid get hashPassword from database. 
//         // then call convertPasswordInHash(login.password,hashpassword)
//         // if true then do the task or else return failure. 
//     let result  = await loginModel.findOne({emailid:login.emailid,password:login.password,typeofuser:login.typeofuser});
//     //response.json(result); 
//     if(result==null){
//         response.json({"msg":"Emailid or password is wrong or type of user may be wrong"})
//     }else if(result.typeofuser=="admin"){
//         response.json({"msg":"Admin login successfully"})
//     }else {
//         response.json({"msg":"Student login successfully"})
//     }
    
//     }catch(ex){
//         response.json(ex);
//     }
// }

let signIn = async (request,response)=> {
    let login = request.body;
    try{
    let findUser  = await loginModel.findOne({emailid:login.emailid});
    if(findUser!=null){
        let result = await passwordHashConfig.comparePassword(login.password,findUser.password);
        if(result){
                console.log(findUser);
                // we will write the code 
                let payload ={"emailid":findUser.emailid};
                let tokenValue = jwt.sign(payload,"secretKey");
                if(findUser.typeofuser=="admin" && login.typeofuser=="admin"){
                        response.json({
                            "msg":"Admin done login successfully",
                            "token":tokenValue
                            })
                }else if(findUser.typeofuser=="customer" && login.typeofuser=="customer"){
                    response.json({
                        "msg":"Customer done login successfully",
                        "token":tokenValue
                    
                    })
                }else {
                    response.json({"msg":"type of user may be wrong"})
                }
        }else {
                response.json({"msg":"Password is wrong"});
        }
    }else {
        response.json({"msg":"EmailId is wrong"});
   }
    }catch(ex){
        response.json(ex);
    }
}
let findAllLogin= async(request,response)=> {
    try {
        let result = await loginModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}



module.exports = {signUp,signIn,findAllLogin};