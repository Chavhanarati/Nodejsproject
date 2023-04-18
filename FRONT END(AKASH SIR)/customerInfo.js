function storeCustomerInfo(){
    var fnameValue = document.getElementById("first_name").value;
    var lnameValue = document.getElementById("last_name").value;
    var ageValue = document.getElementById("age").value;
    var mobilenoValue = document.getElementById("mobile_no").value;
    var genderValue = document.getElementById("gender").value;
    var addressValue = document.getElementById("address").value;
    var customer = {first_name:fnameValue,last_name:lnameValue,age:ageValue,mobile_no:mobilenoValue,gender:genderValue,address:addressValue};
   // console.log(customer);
    fetch("http://localhost:3000/api/customer/storeCustomerInfo",{
        method:"post",
        body:JSON.stringify(customer),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("msg").innerHTML=result;
        console.log(result); 
        //alert(result);   
    }).catch(error=>console.log(error));
    reset();
}
function findAllCustomers(){
    var fnameValue = document.getElementById("first_name").value;
    var lnameValue = document.getElementById("last_name").value;
    var ageValue = document.getElementById("age").value;
    var mobilenoValue = document.getElementById("mobile_no").value;
    var genderValue = document.getElementById("gender").value;
    var addressValue = document.getElementById("address").value;
    var customer = {first_name:fnameValue,last_name:lnameValue,age:ageValue,mobile_no:mobilenoValue,gender:genderValue,address:addressValue};
   // console.log(customer);
    fetch("http://localhost:3000/api/customer/findAllCustomers",{
        method:"post",
        body:JSON.stringify(customer),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.text()).then(result=>{
        document.getElementById("msg").innerHTML=result;
        console.log(result); 
        //alert(result);   
    }).catch(error=>console.log(error));
    reset();
}
async function findAllCustomers() {
    let res = await fetch("http://localhost:3000/api/customer/findAllCustomers");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","1");  
    tableTag.setAttribute("class","table table-primary");
    
    var firstRow = document.createElement("tr");
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("first_name");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("last_name");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);


    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("age");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowfourthColumn= document.createElement("th");
    var firstRowfourthColumnValue = document.createTextNode("mobile_no");
    firstRowfourthColumn.appendChild(firstRowfourthColumnValue);


    var firstRowfifthColumn = document.createElement("th");
    var firstRowfifthColumnValue  = document.createTextNode("gender");
    firstRowfifthColumn.appendChild(firstRowfifthColumnValue);

    var firstRowsixColumn = document.createElement("th");
    var firstRowsixColumnValue  = document.createTextNode("address");
    firstRowsixColumn.appendChild(firstRowsixColumnValue);


    tableTag.appendChild(firstRow);
    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowfourthColumn);
    firstRow.appendChild(firstRowfifthColumn);
    firstRow.appendChild(firstRowsixColumn);
    
    tableTag.appendChild(firstRow);


    for(i=1;i<data.length;i++){
    var secondRow = document.createElement("tr");
    
    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i].first_name);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].last_name);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

    var secondRowThirdColumn = document.createElement("td");
    var secondRowThirdColumnValue = document.createTextNode(data[i].age);
    secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

    var secondRowFourthColumn = document.createElement("td");
    var secondRowFourthColumnValue = document.createTextNode(data[i].mobile_no);
    secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

    var secondRowFifthColumn = document.createElement("td");
    var secondRowFifthColumnValue = document.createTextNode(data[i].gender);
    secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

    var secondRowSixColumn = document.createElement("td");
    var secondRowSixColumnValue = document.createTextNode(data[i].address);
    secondRowSixColumn.appendChild(secondRowSixColumnValue);



    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(secondRowThirdColumn);
    secondRow.appendChild(secondRowFourthColumn);
    secondRow.appendChild(secondRowFifthColumn);
    secondRow.appendChild(secondRowSixColumn);

    tableTag.appendChild(secondRow);
    }
     document.getElementsByTagName("body")[0].appendChild(tableTag);

}


async function findCustomersByName(){
    let fname = document.getElementById("fname").value;
    let result = document.getElementById("result");
    let response = await fetch("http://localhost:3000/api/customer/findCustomersByName/"+fname);
    let data = await response.json();
     if(data.length==0){
        result.innerHTML="No Customer present "
    }
else {
    // result.innerHTML = data.map(obj=>"custFname "+obj.last_name+"Customer Name "+obj.first_name).join("<br/>");  
    // result.innerHTML = data.first_name,data.last_name,data.
    // document.getElementById(findCustomersByName).innerHTML =
    result.innerHTML =
    "First name: "+
    data.first_name+
    "<br>last_name:"+
    data.last_name +
    "<br>Age: "+
    data.age +
    "<br>mobile_no: "+
    data.mobile_no +
    "<br>gender: "+
    data.gender +
    "<br>address: "+
    data.address

    // result.innerHTML = data."First name"

    // console.log(data)
    }
}


// async function SearchCustomer(){
//     let fname = document.getElementById("fname").value;
//     let result = document.getElementById("result");
//     let response = await fetch("http://localhost:3000/api/order/findOrderByCustomerId/"+fname);
//     let data = await response.json();
//      if(data.length==0){
//         result.innerHTML="No Order present "
//     }
// else {
//     // result.innerHTML = data.map(obj=>"custFname "+obj.last_name+"Customer Name "+obj.first_name).join("<br/>");  
//     // result.innerHTML = data.first_name,data.last_name,data.
//     // document.getElementById(findCustomersByName).innerHTML =
//     result.innerHTML =
//     "Customer Id: "+
//     data.customer_id+
//     "<br>Category Id:"+
//     data.category_id +
//     "<br>Product Id: "+
//     data.product_id +
//     "<br>Product qty: "+
//     data.product_qty +
//     "<br>Amount: "+
//     data.amount +
//     "<br>Order Date: "+
//     data.order_date +
//     "<br>Delivery Date: "+
//     data.delivery_date +
//     "<br>Delivery Time: "+
//     data.delivery_time
//     // result.innerHTML = data."First name"

//     // console.log(data)
//     }
// }










function reset() {
    document.getElementById("first_name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("age").value="";
    document.getElementById("mobile_no").value="";
    document.getElementById("gender").value="";
    document.getElementById("address").value="";
}



