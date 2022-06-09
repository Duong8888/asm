const ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26.png",
        category: 4
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (1).png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (2).png",
        category: 2
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (3).png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (4).png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/image 26 (5).png",
        category: 6
    }
]
const ListCategory = [
    {
        id: 1,
        name: "Meat",
        image: "src/img/image 21.png"
    },
    {
        id: 2,
        name: "Dessert",
        image: "src/img/image 22.png"
    },
    {
        id: 3,
        name: "Lunch",
        image: "src/img/image 23.png"
    },
    {
        id: 4,
        name: "Chocolate",
        image: "src/img/image 24.png"
    },
    {
        id: 5,
        name: "Vegan",
        image: "src/img/image 20 (1).png"
    },
    {
        id: 6,
        name: "Breakfast",
        image: "src/img/image 25.png"
    }
];

function showProduct(items) {
    let product = document.querySelector('.main-product');
    if (product) {
        product.innerHTML = "";
        for (let i of items) {
            product.innerHTML += `
            <div class="box-product" >
            <a href="./detail.html?id=${i.id}">
                <div class="img-product">
                    <img src="${i.image}"  alt="">
                </div>
            </a>
            <div class="infor-product">
                <a href="./detail.html?id=${i.id}">${i.name}</a>
                <div class="time-type">
                    <div class="time">
                        <img src="src/img/Vector.png" alt="">
                        <p>30 Minutes</p>
                    </div>
                <div class="type">
                    <img src="src/img/Vector (1).png" alt="">
                    <img src="src/img/Vector (2).png" alt="">
                    <p>Snack</p>
                </div>
            </div>
            </div>
        </div>
        `;
        }
    }

}
showProduct(ListProduct);

function List() {
    let items = document.querySelector('.box-items');
    if (items) {
        for (let i of ListCategory) {
            items.innerHTML += `
                    <div class="items">
                        <img src="${i.image}" alt="">
                        <p>${i.name}</p>
                    </div>
        `;
        }
    }
};

List();
let price = document.querySelector('#select-price');
function priceSelection() {

    // cách 1 dùng vòng lặp
    let over30 = [];
    let cunder30 = [];
    for (let i of ListProduct) {
        if (i.price >= 30) {
            over30.push(i);
        } else {
            cunder30.push(i);
        }
    }

    // cách 2 dùng filter
    // let over30 = ListProduct.filter(function(x) {
    //     return x.price >= 30;
    // });
    // let cunder30 = ListProduct.filter(function(x) {
    //     return x.price < 30;
    // });


    if (price.value == "2") {
        showProduct(over30);
    }


    if (price.value == "3") {
        showProduct(cunder30);
    }

    if (price.value == "1") {
        showProduct(ListProduct);
    }
}
if (price) {
    price.addEventListener("change", priceSelection);
}

function detailProduct() {
    const prdId = new URLSearchParams(window.location.search).get('id');
    if (prdId) {
        const productDetail = ListProduct.find(function (item) {
            return item.id == prdId
        })
        const detailProductDiv = document.querySelector('.product-detail')
        detailProductDiv.innerHTML = `
        <div class="product-detail-left">
            <h1>${productDetail.name}</h1>
            <span>$${productDetail.price}</span>
            <p>${productDetail.desc}</p>

            <form action="">
                <input type="text" name="" id="quantity" placeholder="Quantity" required>
                <input  onclick="addCart()" type="button" value="Add To Cart" name="" id="submit">
            </form>
        </div>
        <div class="product-detail-right">
            <img src="${productDetail.image}" alt="">
        </div>
        `
    }
}
detailProduct();


function ProductPage() {
    var ListCategoryPage = document.querySelector('.top>ul');
    if (ListCategoryPage) {
        for (let i of ListCategory) {
            ListCategoryPage.innerHTML += `
                            <li><a onclick="reRender(${i.id})">${i.name}</a></li>
                        `;
        }
    }
}
ProductPage();
function CategoryPage(q) {
    var boxProduct = document.querySelectorAll('.box8');
    if(boxProduct[0]){
        for(let i in q){
            boxProduct[i].innerHTML +=`
            <img src="${q[i].image}" alt="">
            <p>${q[i].name}</p>
            <span>$${q[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
}

CategoryPage(ListProduct);

function reRender(cateId){
    var boxProduct = document.querySelectorAll('.box8');
    const filterCategory = ListProduct.filter(function(item){
        return item.category == cateId
    });

    if(boxProduct){
        for(let i in ListProduct){
            boxProduct[i].innerHTML =``;
        }
        for(let i in filterCategory){
            boxProduct[i].innerHTML =`
            <img src="${filterCategory[i].image}" alt="">
            <p>${filterCategory[i].name}</p>
            <span>$${filterCategory[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
   
};


// cart

// let arrCart = [];
// function addCart() {
//     var name = document.querySelector('.product-detail-left>h1');
//     var price = document.querySelector('.product-detail-left>span');
//     var quantity = document.querySelector('#quantity');
//     var image = document.querySelector('.product-detail-right>img');
//     var cart = document.querySelector('#cart');
//     arrCart.push({
//         nameCart: `${name.innerText}`,
//         priceCart: `${price.innerText}`,
//         quantityCart: `${quantity.value}`,
//         imageCart: `${image.src}`
//     });
//     // console.log(arrCart);
//     localStorage.setItem('objectCart',JSON.stringify(arrCart));
//     console.log(localStorage.getItem('objectCart'));
//     if (arrCart.length > 0) {
//         for (let i of arrCart) {
//             if (cart) {
//                 cart.innerHTML += `
//             <tr>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//                 <td>${localStorage.getItem('objectCart')}</td>
//             </tr>
//         `;
//             }
//         }
//     }
// }








