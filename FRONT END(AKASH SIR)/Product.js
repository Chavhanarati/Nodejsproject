function storeProductInfo(){
    var pnameValue = document.getElementById("product_name").value;
    var pimageValue = document.getElementById("product_image").value;
    var ppriceValue = document.getElementById("product_price").value;
    var pqtyValue = document.getElementById("product_qty").value;
    var product = {product_name:pnameValue,product_image:pimageValue,product_price:ppriceValue,product_qty:pqtyValue};
   // console.log(product);
    fetch("http://localhost:3000/api/product/storeProductInfo",{
        method:"post",
        body:JSON.stringify(product),
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

function reset() {
    document.getElementById("product_name").value="";
    document.getElementById("product_image").value="";
    document.getElementById("product_price").value="";
    document.getElementById("product_qty").value="";
}

function findAllProducts(){
    var pnameValue = document.getElementById("product_name").value;
    var pimageValue = document.getElementById("product_image").value;
    var ppriceValue = document.getElementById("product_price").value;
    var pqtyValue = document.getElementById("product_qty").value;
    var product = {product_name:pnameValue,product_image:pimageValue,product_price:ppriceValue,product_qty:pqtyValue};
   // console.log(product);
    fetch("http://localhost:3000/api/product/findAllProducts",{
        method:"post",
        body:JSON.stringify(product),
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

async function findAllProducts() {
    let res = await fetch("http://localhost:3000/api/product/findAllProducts");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","2");  
    tableTag.setAttribute("class","table table-secondary");
    var firstRow = document.createElement("tr");
    
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("product_name");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("product_image");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src","product_image")
    // var firstRowSecondColumnValue = document.createElement(  "src", "product_image");
    // firstRowSecondColumn.appendChild(firstRowSecondColumnValue);
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);
    imgTag.setAttribute("width","130px");
    imgTag.setAttribute("height","130px");



    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("product_price");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);


    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("product_qty");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    tableTag.appendChild(firstRow);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);




    for(i=0;i<data.length;i++){
    var secondRow = document.createElement("tr");
    
    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i].product_name);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var imgTag = document.createElement("img")
    imgTag.setAttribute("src",data[i].product_image);
    // var secondRowSecondColumnValue = document.createTextNode(data[i].product_image);
    // secondRowSecondColumn.appendChild(secondRowSecondColumnValue);
    secondRowSecondColumn.appendChild(imgTag);
    imgTag.setAttribute("width","130px");
    imgTag.setAttribute("height","130px");


    var secondRowThirdColumn = document.createElement("td");
    var secondRowThirdColumnValue = document.createTextNode(data[i].product_price);
    secondRowThirdColumn.appendChild(secondRowThirdColumnValue);

    var secondRowFourthColumn = document.createElement("td");
    var secondRowFourthColumnValue = document.createTextNode(data[i].product_qty);
    secondRowFourthColumn.appendChild(secondRowFourthColumnValue);



    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(secondRowThirdColumn);
    secondRow.appendChild(secondRowFourthColumn);

    tableTag.appendChild(secondRow);
    }
    // document.getElementById("findAllProducts").appendChild(tableTag)
    document.getElementsByTagName("body")[0].appendChild(tableTag);
    
}


//     async function findAllProducts(){
//         let res = await fetch("http://localhost:3000/api/product/findAllProducts");
//         let data = await res.json();
//         console.log(data);
//         for(i=0;i<data.length;i++){
//             var divTag = document.createElement("div");
//             var imgTag = document.createElement("img");
//             var imageDetails = document.createElement("span");
//             var iamgeDetailsValue = document.createTextNode("product_name "+data[i].product_name+" product_price "+data[i].product_price+" product_qty "+data[i].product_qty);
//             imageDetails.appendChild(iamgeDetailsValue);

//             imgTag.setAttribute("src",data[i].product_image);
//             imgTag.setAttribute("width","100px");
//             imgTag.setAttribute("height","100px");
//             divTag.setAttribute("class","myImageData");
//             divTag.appendChild(imgTag);
//             divTag.appendChild(imageDetails);
//             document.getElementsByTagName("body")[0].appendChild(divTag);
//         }
    
//     }
// }

    // async function SearchProduct(){
    //     let pname = document.getElementById("pname").value;
    //     let result = document.getElementById("result");
    //     let response = await fetch("http://localhost:3000/api/product/findProductsByPname/"+pname);
    //     let data = await response.json();
    //      if(data.length==0){
    //         result.innerHTML="No Product present "
    //     }else {
    //     // result.innerHTML = data.map(obj=>"custFname "+obj.last_name+"Customer Name "+obj.first_name).join("<br/>");  
    //     // result.innerHTML = data.first_name,data.last_name,data.
    //     // document.getElementById(findCustomersByName).innerHTML =
    //     result.innerHTML =
    //     "Product Name: "+
    //     data.product_name +
    //     "<br>Product Image:"+
    //     data.product_image +
    //     "<br>Product Price: "+
    //     data.product_price +
    //     "<br>Product qty: "+
    //     data.product_qty 
    
    //     // result.innerHTML = data."First name"
    
    //     console.log(data)


    //     // }
    // }
    
    // }



    async function searchProduct(){
        let pname = document.getElementById("pname").value;
        let result = document.getElementById("result");
        let respnose = await fetch("http://localhost:3000/api/product/findProductsByPname/"+pname);
        let data = await respnose.json();
        if(data.length==0){
            result.innerHTML="No Product present "
        }else {
            // data=document.getElementById("pname");
            var image=`<img src=${
                data.pimage
            }>`
            result.innerHTML = data.map(obj=>"<br>Product Name: "+obj.product_name+"<br>Product Image: "+obj.product_image+"<br>Product Price: "+obj.product_price+"<br>Product qty: "+obj.product_qty).join("<br/>");  
        }
    
        //console.log(data);
    }



//    function searchProduct(){
//         var productPname = document.getElementById("pname").value;
//         // let result = document.getElementById("result");
//          fetch("http://localhost:3000/api/product/findProductsByPname/"+productPname,{
//          method:"get",
//          headers: {
//             "Content-type": "application/json",
//             "authorization":localStorage.getItem("token")
//          }
//         }).then(res=>res.json()).
//         then(result=>{
//             if(result.msg!=null){
//                 opData=document.getElementById("productPname");
//                 opData.innerHTML=result.msg;
//             }else{
//                 opData=document.getElementById("productPname");
//                 var image= `<img src=${
//                     result.pimage
//                 }>`
//                 opData.innerHTML="Product Name: "+result.pname+"<br>Product Price: "+result.product_price+"<br>Product qty: "+result.product_qty;  
//             }
//         }).catch(err=>console.log(err));
    
//         // console.log(data);
//     }




    

function reset() {
    document.getElementById("product_name").value="";
    document.getElementById("product_image").value="";
    document.getElementById("product_price").value="";
    document.getElementById("product_qty").value="";
    }   



