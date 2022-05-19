let products = ["Galaxy","Iphone 11","Laptop Gaming"];
function showListProduct() {
    let tableBody ="";
    for(let i = 0; i < products.length; i++) {
        tableBody += ` <tr>
        <td>${i}</td>
        <td>${products[i]}</td>
        <td> <button onclick = "editItem(${i})"> Edit </button> </td>
        <td><button onclick = "deleteItem(${i})"> Delete </button> </td>
    </tr>`
    } 
    document.getElementById('table_body').innerHTML = tableBody;
}

function addProduct() { 
   
    let insertProduct =  document.getElementById('add_product').value;
    if(insertProduct == "") {
        alert("Nhập tên sản phẩm cần thêm");
    }
    else {
        products.push(insertProduct);
        showListProduct();
        document.getElementById('add_product').value = "";
    }

    
}
function deleteItem(x) {
    if(confirm("Xóa bố đấm đấy(_)")==true){
        for(let i = 0; i < products.length; i++) {
            if(i ==x) {
                products.splice(i,1);
                break;
            }
           }
    }
    else {
        showListProduct();
    }
  
   showListProduct();

}
function editItem(x) {
    // for(let i = 0; i < products.length; i++) {
    //     if(i ==x) {
    //     document.getElementById('add_product').value = products[i];
    //     }
    //    }
    let editNameProduct = prompt('Sửa sản phẩm');
    products[x] =editNameProduct;
    showListProduct();
}

showListProduct();
