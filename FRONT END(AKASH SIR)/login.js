function signIn() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var customerValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(customerValue){
        typeofuserValue="customer"
    }
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   console.log(login);
    fetch("http://localhost:3000/api/login/signIn",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
                console.log(result);
        console.log(result.token);
        sessionStorage.setItem("token",result.token);
        sessionStorage.setItem("token",result.token);
        if(result.msg=="Admin done login successfully"){
            window.location.href="http://127.0.0.1:5500/adminHome.html"
        }else if(result.msg=="Customer done login successfully"){
            window.location.href="http://127.0.0.1:5500/CustomerHome.html" 
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(error=>console.log(error));
    reset();
}
function signUp() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var customerValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(customerValue){
        typeofuserValue="customer"
    }
    
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   console.log(login);
    fetch("http://localhost:3000/api/login/signUp",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("msg").innerHTML=result.msg;
        console.log(result);    
    }).catch(error=>console.log(error));
    reset();
}

function reset() {
    document.getElementById("emailid").value="";
    document.getElementById("password").value="";
}


function logout() {
    sessionStorage.removeItem("token");
    window.location.href="http://127.0.0.1:5500/index.html"   
}


async function loadCustomerData(){
    try{ 
    let result = document.getElementById("result");
    let response = await fetch("http://localhost:3000/api/customer/findAllCustomers",{
        method:"get",
        headers:{
            "Content-type":"application/json",
            "authorization":sessionStorage.getItem("token")
        }
    });

     //let respnose = await fetch("http://localhost:3000/api/students/findAllStudents");
     let data = await response.json();
     console.log(data);
     //result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");
     result.innerHTML = data.map(obj=>"<li>StdId "+obj._id+"Customer Name "+obj.first_name+"</li>").join("<br/>");
     //console.log(data);  
}catch(ex){
    alert(ex);
} 
}


// async function searchCustomer(){
//     let fname = document.getElementById("fname").value;
//     let result = document.getElementById("result");
//     let respnose = await fetch("http://localhost:3000/api/students/findStudentByName/"+fname);
//     let data = await respnose.json();
//     if(data.length==0){
//         result.innerHTML="No Student present "
//     }else {
//         result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");  
//     }

    //console.log(data);
    //result.innerHTML = data.map(obj=>"StdId "+obj._id+"Student Name "+obj.first_name).join("<br/>");
    //result.innerHTML = data.map(obj=>"<li>StdId "+obj._id+"Student Name "+obj.first_name+"</li>").join("<br/>");
// }



