function storeProductCategoryInfo(){
    var dnameValue = document.getElementById("disease_name").value;
    var imageValue = document.getElementById("image").value;
    var productCategory = {disease_name:dnameValue,image:imageValue};
   // console.log(product);
    fetch("http://localhost:3000/api/productCategory/storeProductCategoryInfo",{
        method:"get",
        body:JSON.stringify(productCategory),
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
function findAllProductCategory(){
    var dnameValue = document.getElementById("disease_name").value;
    var imageValue = document.getElementById("image").value;
    var productCategory = {disease_name:dnameValue,image:imageValue};
   // console.log(customer);
    fetch("http://localhost:3000/api/productCategory/findAllProductCategory",{
        method:"get",
        body:JSON.stringify(productCategory),
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


// async function findAllProductCategory(){
//     let res = await fetch("http://localhost:3000/api/productCategory/findAllProductCategory");
//     let data = await res.json();
//     console.log(data);
//     for(i=0;i<data.length;i++){
//         var divTag = document.createElement("div");
//         var imgTag = document.createElement("img");
//         var imageDetails = document.createElement("span");
//         var iamgeDetailsValue = document.createTextNode("disease_name "+data[i].disease_name);
//         imageDetails.appendChild(iamgeDetailsValue);

//         imgTag.setAttribute("src",data[i].image);
//         imgTag.setAttribute("width","50px");
//         imgTag.setAttribute("height","50px");
//         divTag.setAttribute("class","myImageData");
//         divTag.appendChild(imgTag);
//         divTag.appendChild(imageDetails);
//         document.getElementsByTagName("body")[0].appendChild(divTag);
//     }
// }


    async function findAllProductCategory() {
        let res = await fetch("http://localhost:3000/api/productCategory/findAllProductCategory");
        let data = await res.json();
        console.log(data);
        var tableTag = document.createElement("table"); 
        tableTag.setAttribute("border","3");  
        tableTag.setAttribute("class","table table-secondary");
        var firstRow = document.createElement("tr");
        
        var firstRowFirstColumn = document.createElement("th");
        var firstRowFirstColumnValue = document.createTextNode("disease_name");
        firstRowFirstColumn.appendChild(firstRowFirstColumnValue);
    
        var firstRowSecondColumn = document.createElement("th");
        var firstRowSecondColumnValue = document.createTextNode("image");
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src","image")
        firstRowSecondColumn.appendChild( firstRowSecondColumnValue);
        imgTag.setAttribute("width","300px");
        imgTag.setAttribute("height","200px");
        // var firstRowSecondColumnValue = document.createTextNode( "image");
        // firstRowSecondColumn.appendChild(firstRowSecondColumnValue);
    
    
        tableTag.appendChild(firstRow);
    
        firstRow.appendChild(firstRowFirstColumn);
        firstRow.appendChild(firstRowSecondColumn);
    
    
    
    
        for(i=0;i<data.length;i++){
        var secondRow = document.createElement("tr");
        
        var secondRowFirstColumn = document.createElement("td");
        var secondRowFirstColumnValue = document.createTextNode(data[i].disease_name);
        secondRowFirstColumn.appendChild(secondRowFirstColumnValue);


        var secondRowSecondColumn = document.createElement("td");
        var secondRowSecondColumnValue = document.createTextNode("image");
        var imgTag = document.createElement("img")
        imgTag.setAttribute("src",data[i].image);
        secondRowSecondColumn.appendChild(imgTag,secondRowSecondColumnValue);
        imgTag.setAttribute("width","300px");
        imgTag.setAttribute("height","200px");
    



    
        // var secondRowSecondColumn = document.createElement("td");
        // var secondRowSecondColumnValue = document.createTextNode(data[i].image);
        // secondRowSecondColumn.appendChild(secondRowSecondColumnValue);
    
    
        secondRow.appendChild(secondRowFirstColumn);
        secondRow.appendChild(secondRowSecondColumn);
    
        tableTag.appendChild(secondRow);
        document.getElementsByTagName("body")[0].appendChild(tableTag);
        }
 
 
    }
 
 
    async function searchProductCategory(){
        let Cdisease = document.getElementById("Cdisease").value;
        let result = document.getElementById("result");
        let respnose = await fetch("http://localhost:3000/api/productCategory/findProductCategoryBydisease/"+Cdisease);
        let data = await respnose.json();
        if(data.length==0){
            result.innerHTML="No ProductCategory present "
        }else {
            var imgTag=`<img src=${
                data.pimage
            }>`

            result.innerHTML = data.map(obj=>"<br>Image: "+obj.image+"<br>Disease Name: "+obj.disease_name).join("<br/>");  
        }
    
        //console.log(data);
    }









function reset() {
    document.getElementById("disease_name").value="";
    document.getElementById("image").value="";

}
    
    