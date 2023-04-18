function storeOrderInfo(){
    var CustomeridValue = document.getElementById("customer_id").value;
    var CategoryidValue = document.getElementById("category_id").value;
    var pidValue = document.getElementById("product_id").value;
    var pqtyValue = document.getElementById("product_qty").value;
    var amountValue= document.getElementById("amount").value;
    var odateValue = document.getElementById("order_date").value;
    var ddateValue = document.getElementById("delivery_date").value;
    var dtimeValue = document.getElementById("delivery_time").value;
    var order = {customer_id:CustomeridValue,category_id:CategoryidValue,product_id:pidValue,product_qty:pqtyValue,amount:amountValue,order_date:odateValue,delivery_date:ddateValue,delivery_time:dtimeValue};
   // console.log(customer);
    fetch("http://localhost:3000/api/order/storeOrderInfo",{
        method:"post",
        body:JSON.stringify(order),
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
// fetch("http://localhost:3000/api/order/findAllOrder",{
//     method:"post",
//     body:JSON.stringify(order),
//     headers:{
//         "Content-type":"application/json"
//     }
// }).then(res=>res.text()).then(result=>{
//     document.getElementById("msg").innerHTML=result;
//     console.log(result); 
//     //alert(result);   
// }).catch(error=>console.log(error));
// reset();

async function findAllOrder() {
    let res = await fetch("http://localhost:3000/api/order/findAllOrder");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","2");  
    tableTag.setAttribute("class","table table-secondary");
    
    var firstRow = document.createElement("tr");
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("customer_id");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("category_id");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);


    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("product_id");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowfourthColumn= document.createElement("th");
    var firstRowfourthColumnValue = document.createTextNode("product_qty");
    firstRowfourthColumn.appendChild(firstRowfourthColumnValue);


    var firstRowfifthColumn = document.createElement("th");
    var firstRowfifthColumnValue  = document.createTextNode("amount");
    firstRowfifthColumn.appendChild(firstRowfifthColumnValue);

    var firstRowsixColumn = document.createElement("th");
    var firstRowsixColumnValue  = document.createTextNode("order_date");
    firstRowsixColumn.appendChild(firstRowsixColumnValue);

    var firstRowSevenColumn = document.createElement("th");
    var firstRowSevenColumnValue  = document.createTextNode("delivery_date");
    firstRowSevenColumn.appendChild(firstRowSevenColumnValue);

    var firstRowEightColumn = document.createElement("th");
    var firstRowEightColumnValue  = document.createTextNode("delivery_time");
    firstRowEightColumn.appendChild(firstRowEightColumnValue);


    tableTag.appendChild(firstRow);
    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowfourthColumn);
    firstRow.appendChild(firstRowfifthColumn);
    firstRow.appendChild(firstRowsixColumn);
    firstRow.appendChild(firstRowSevenColumn);
    firstRow.appendChild(firstRowEightColumn);

    tableTag.appendChild(firstRow);


    for(i=1;i<data.length;i++){
    var secondRow = document.createElement("tr");
    
    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i].customer_id);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].category_id);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);

    var secondRowThirdColumn = document.createElement("td");
    var secondRowThirdColumnValue = document.createTextNode(data[i].product_id);
    secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

    var secondRowFourthColumn = document.createElement("td");
    var secondRowFourthColumnValue = document.createTextNode(data[i].product_qty);
    secondRowFourthColumn.appendChild(secondRowFourthColumnValue);

    var secondRowFifthColumn = document.createElement("td");
    var secondRowFifthColumnValue = document.createTextNode(data[i].amount);
    secondRowFifthColumn.appendChild(secondRowFifthColumnValue);

    var secondRowSixColumn = document.createElement("td");
    var secondRowSixColumnValue = document.createTextNode(data[i].order_date);
    secondRowSixColumn.appendChild(secondRowSixColumnValue);

    var secondRowSevenColumn = document.createElement("td");
    var secondRowSevenColumnValue = document.createTextNode(data[i].delivery_date);
    secondRowSevenColumn.appendChild(secondRowSevenColumnValue);

    var secondRowEightColumn = document.createElement("td");
    var secondRowEightColumnValue = document.createTextNode(data[i].delivery_time);
    secondRowEightColumn.appendChild(secondRowEightColumnValue);


    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(secondRowThirdColumn);
    secondRow.appendChild(secondRowFourthColumn);
    secondRow.appendChild(secondRowFifthColumn);
    secondRow.appendChild(secondRowSixColumn);
    secondRow.appendChild(secondRowSevenColumn);
    secondRow.appendChild(secondRowEightColumn);
    
    tableTag.appendChild(secondRow);
    }
     document.getElementsByTagName("body")[0].appendChild(tableTag);
}

     async function SearchOrder(){
        let custId = document.getElementById("custId").value;
        let result = document.getElementById("result");
        let response = await fetch("http://localhost:3000/api/order/findOrderByCustomerId/"+custId);
        let data = await response.json();
         if(data.length==0){
            result.innerHTML="No Order present "
        }
    else {
        // result.innerHTML = data.map(obj=>"custFname "+obj.last_name+"Customer Name "+obj.first_name).join("<br/>");  
        // result.innerHTML = data.first_name,data.last_name,data.
        // document.getElementById(findCustomersByName).innerHTML =
        result.innerHTML =
        "Customer Id: "+
        data.customer_id+
        "<br>Category Id:"+
        data.category_id +
        "<br>Product Id: "+
        data.product_id +
        "<br>Product qty: "+
        data.product_qty +
        "<br>Amount: "+
        data.amount +
        "<br>Order Date: "+
        data.order_date +
        "<br>Delivery Date: "+
        data.delivery_date +
        "<br>Delivery Time: "+
        data.delivery_time
        // result.innerHTML = data."First name"
    
        // console.log(data)
        }
    }





function reset() {
    document.getElementById("customer_id").value="";
    document.getElementById("category_id").value="";
    document.getElementById("product_id").value="";
    document.getElementById("product_qty").value="";
    document.getElementById("amount").value="";
    document.getElementById("order_date").value="";
    document.getElementById("delivery_date").value="";
    document.getElementById("delivery_time").value="";
}
// }

