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

const ListBlogNews = [
    {
        id: 1,
        title: "GitHub là gì? Cách chia sẻ mã nguồn, tải code dễ dàng",
        subTitle: "GitHub là dịch vụ server quản lý nhiều phiên bản code, giúp lưu trữ chúng và cả nội dung dự án của hai hay nhiều tài khoản của lập trình viên.....",
        img: "./src/img/github-la-gi.jpg",
        content: "GitHub được sử dụng chủ yếu cho dự án có nhiều người cùng hợp tác và cần giám sát toàn bộ thay đổi của dự án. Bên cạnh đó, GitHub còn có khả năng khôi phục code khi cần thiết. Khi sử dụng GitHub, ngoài các công việc chính như tạo Branch, tạo Pull Request và Fork một Repository, bạn có thể theo dõi, tương tác với người khác như một mạng xã hội thông thường.",
        BlogCategoryId: 1
    },
    {
        id: 2,
        title: "Vị tướng thứ 158 của LMHT: Zeri – Tia chớp thành Zaun",
        subTitle: "Trong thông báo đầu tiên của năm 2022, Riot Games đã bất ngờ đem đến một niềm vui cho người hâm mộ thông qua việc nâng cấp.....",
        img: "./src/img/tuong-moi-lmht-zeri-1-696x391.jpg",
        content: "Trong thông báo đầu tiên của năm 2022, Riot Games đã bất ngờ đem đến một niềm vui cho người hâm mộ thông qua việc nâng cấp một số chi tiết trong LMHT. Và thay đổi lớn nhất được nhiều người chơi chắc chắn là sự xuất hiện của tướng mới Zeri.Đại diện hãng game cho biết: “Chúng tôi muốn giới thiệu một Xạ Thủ mới linh hoạt trong di chuyển, có tốc độ chơi với tốc độ của súng máy và mang lại cảm giác như một game bắn súng.” Theo đó, Zeri sẽ là một Xạ Thủ khủng, vượt tầm cả Ezreal. Đây là vị tướng thứ 158 được giới thiệu trong LMHT.",
        BlogCategoryId: 2
    },
    {
        id: 3,
        title: "Chi tiết bộ kỹ năng của tướng Yue trong Liên Quân Mobile",
        subTitle: "Thông số kỹ năng của Yue Ngọc Phiến Công Chúa - vị tướng mới được ra mắt trong bản cập nhật ......",
        img: "./src/img/gt8mee8-122540.png",
        content: "Chiêu 1 - Cắt Giang Sơn,Chiêu 2 - Trảm Thiên ĐịaChiêu 3 - Đạo Quân Vương.Yue là công chúa thứ 10 trong hoàng tộc Vương Quốc Rồng. Ngoài dung mạo xinh đẹp, Yue còn có trí tuệ và năng lực tuyệt đỉnh. Trong video giới thiệu phiên bản Trung Quốc, Yue có vẻ như là bạn bè và có chút liên quan tới Qi - cô nàng Võ Sư Bánh Bao.",
        BlogCategoryId: 2
    },



];

const BlogCategory = [
    {
        id: 1,
        name: "GitHub"
    },
    {
        id: 2,
        name: "Game"
    },
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
    if (boxProduct[0]) {
        for (let i in q) {
            boxProduct[i].innerHTML += `
            <img src="${q[i].image}" alt="">
            <p>${q[i].name}</p>
            <span>$${q[i].price}</span>
            <button>Add To Cart</button>
            `;
        }
    }
}

CategoryPage(ListProduct);

function reRender(cateId) {
    var boxProduct = document.querySelectorAll('.box8');
    const filterCategory = ListProduct.filter(function (item) {
        return item.category == cateId
    });

    if (boxProduct) {
        for (let i in ListProduct) {
            boxProduct[i].innerHTML = ``;
        }
        for (let i in filterCategory) {
            boxProduct[i].innerHTML = `
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

// validate from

var signUp = document.querySelector('#submit-signUp');
var signIn = document.querySelector('#submit-signIn');
function checkFrom() {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let pass = document.querySelector('#password');
    let rePass = document.querySelector('#re-password');
    let span = document.querySelectorAll('span');

    if (signUp) {
        if (name.value.length == 0) {
            span[2].innerText = "Vui lòng nhập tên.";
        } else {
            span[2].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[3].innerText = "Vui lòng nhập password.";
        } else {
            span[3].innerText = "";
        }
        if (rePass.value != pass.value) {
            span[4].innerText = "Mật Khẩu không Khớp.";
        } else {
            span[4].innerText = "";
        }
    } else {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[2].innerText = "Vui lòng nhập password.";
        } else {
            span[2].innerText = "";
        }
    }

}
if (signUp) {
    signUp.addEventListener('click', checkFrom);
}

if (signIn) {
    signIn.addEventListener('click', checkFrom);
}

// blog

let news = document.querySelector('.news');
function displayBlogNews(items) {
    if (news) {
        news.innerHTML = ``;
        for (let i of items) {
            news.innerHTML += `
        <div class="box-news">
        <div class="newImg">
            <img onclick="displayNews(${i.id})" src="${i.img}" alt="">
        </div>
        <div class="infoUser">
            <img src="src/img/img-11.png" alt="">
            <div class="nameUser">
                <p>Anh Duong</p>
                <span>Dec 9, 2021</span>
            </div>
        </div>
        <div class="title-new">
            <a onclick="displayNews(${i.id})">${i.title}</a>
            <p>${i.subTitle}</p>
        </div>
        <div class="views-heart">
            <p>100 viwes</p>
            <span><i class='bx bxs-heart' onclick="heartClick(this)"></i></span>
        </div>
    </div>
        `;
        }
    }
}
if (news) { displayBlogNews(ListBlogNews); }
let overlay = document.querySelector('.main-blog>.overlay');
let newsDetails = document.querySelector('.news-details');
function displayNews(items) {
    if (newsDetails) {
        newsDetails.style.display ='block';
        newsDetails.style.zIndex = '20'
        overlay.style.display = "block";
        var filter = ListBlogNews.find(function (i) {
            return i.id == items;
        })
        newsDetails.innerHTML = `
        <div class="icon-close">
        <i onclick="closeNews()" class='bx bx-x'></i>
    </div>
    <div class="body-News">
        <div class="infoUser-1">
            <div class="box-user">
                <div class="avatar">
                    <img src="src/img/img-11.png" alt="">
                </div>

                <div class="user">
                    <p>Anh Duong</p>
                    <span>Dec 9, 2021</span>
                </div>
            </div>

            <div class="conten-news">
                <p>${filter.title}</p>
                <img src="${filter.img}" alt="">
                <span>${filter.content}</span>
            </div>
            <div class="heart">
                <i class='bx bxs-heart' onclick="heartClick(this)"></i>
                <i class='bx bxs-message-dots'></i>
            </div>
        </div>
    </div>
        `;
    }
}
function closeNews() {
    newsDetails.style.display = 'none';
    overlay.style.display = "none";
}
let slectNews = document.querySelector('#selectBlog');
function filterNews() {
    if (slectNews) {

        let game = ListBlogNews.filter(function (i) {
            return i.BlogCategoryId == "2";
        });
        let github = ListBlogNews.filter(function (i) {
            return i.BlogCategoryId == "1";
        });

        if (slectNews.value == "") {
            displayBlogNews(ListBlogNews);
        }
        if (slectNews.value == "Game") {
            displayBlogNews(game);
        }
        if (slectNews.value == "GitHub") {
            displayBlogNews(github);
        }
    }

}
if (slectNews) {
    slectNews.addEventListener('change',filterNews);
}
let count = 0;
function heartClick(heart){
    if(count%2==0){
        heart.style.color = 'red';
    }else{
        heart.style.color = 'black';
    }
    count++;
}