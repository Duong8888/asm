// dữ liệu 

var productList = [
    {
        'id': 1,
        'name': 'Hand Cream',
        'avatar': 'https://static.wixstatic.com/media/c837a6_b8785d0e4dbe4a1f8fe00c6c36e25422~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_b8785d0e4dbe4a1f8fe00c6c36e25422~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 2,
        'categoriesId': 1
    },

    {
        'id': 2,
        'name': 'Herbal Tea 16 ct.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_260c0b2e4a224901b112978a8a2c1c6e~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_260c0b2e4a224901b112978a8a2c1c6e~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 5,
        'categoriesId': 1
    },

    {
        'id': 3,
        'name': 'Strawberries - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_7f6d45dc2b004e88ac1f4eee127ff332~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 3,
        'categoriesId': 1
    },

    {
        'id': 4,
        'name': 'Hass Avocados, Ready-to-Eat - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01/c837a6_b5b9284a44384c8dbce0bc27bad2dda4~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 9,
        'categoriesId': 1
    },

    {
        'id': 5,
        'name': 'Tuna Steak Fillet - 1lb',
        'avatar': 'https://static.wixstatic.com/media/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_58835d9ae93f4c43af863ba0e76ae2a0~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 1,
        'categoriesId': 1
    },

    {
        'id': 6,
        'name': 'Cream Cheese Spread 8 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_cc314d70076e442fadd82ce2e39758a1~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 2.99,
        'categoriesId': 1
    },

    {
        'id': 7,
        'name': 'Thin Spaghetti.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_568af83ef77c4945aa44dd71cafbeb22~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_568af83ef77c4945aa44dd71cafbeb22~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 4.5,
        'categoriesId': 1
    },

    {
        'id': 8,
        'name': 'Oats and Honey Granola Cereal.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_2dde4d0405d34e2497319ee16a9a096d~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_2dde4d0405d34e2497319ee16a9a096d~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 1
    },

    {
        'id': 9,
        'name': 'Decaffeinated Instant Coffee',
        'avatar': 'https://static.wixstatic.com/media/c837a6_a3f22d6f9d5740d4ba7e81fdcb2dad1c~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_a3f22d6f9d5740d4ba7e81fdcb2dad1c~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 1
    },
    {
        'id': 10,
        'name': 'Brown Ale Glass Bottle 16 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 1
    },

    {
        'id': 10,
        'name': 'Brown Ale Glass Bottle 16 oz.',
        'avatar': 'https://static.wixstatic.com/media/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.jpg/v1/fill/w_207,h_207,al_c,q_80,usm_0.66_1.00_0.01/c837a6_2bd65ba805394358838d82695f3b92e1~mv2.webp',
        'desc': "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        'price': 8,
        'categoriesId': 1
    },

    
];
var categoriesList = [
    {
        'id': 1,
        'categoriesName': 'Vegetables',
        'img': 'https://static.wixstatic.com/media/c837a6_54f3e8f5b6ed4a6a92a3e7e72c45c6c0~mv2.png/v1/fill/w_338,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_99478112_2.png'
    },
    {
        'id': 2,
        'categoriesName': 'Bakery',
        'img': 'https://static.wixstatic.com/media/c837a6_27969dc29ca74784bdcda6dfb7f8e8f5~mv2.png/v1/fill/w_386,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1485281813.png'
    },
    {
        'id': 3,
        'categoriesName': 'Wine',
        'img': 'https://static.wixstatic.com/media/c837a6_24bc47c82c4e44c496b517fad1b91a80~mv2.png/v1/fill/w_284,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/B_009_3.png'
    },
    {
        'id': 4,
        'categoriesName': 'Dairy & Eggs',
        'img': 'https://static.wixstatic.com/media/c837a6_f5efa954aaab4579816a29703d8ab59f~mv2.png/v1/fill/w_354,h_299,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_136358678.png'
    },
    {
        'id': 5,
        'categoriesName': 'Meat & Poultry',
        'img': 'https://static.wixstatic.com/media/c837a6_c91b032b1ce6483ca30e14bea694fac9~mv2.png/v1/fill/w_353,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1383180032_2.png'
    },
    {
        'id': 6,
        'categoriesName': 'Soft Drinks',
        'img': 'https://static.wixstatic.com/media/c837a6_78211f5f45854b4dbbb99c5779e8fc6e~mv2.png/v1/fill/w_279,h_399,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1434271904_4.png'
    },
    {
        'id': 7,
        'categoriesName': 'Cleaning Supplies',
        'img': 'https://static.wixstatic.com/media/c837a6_9ea4c59481ae46049411e798469725b8~mv2.png/v1/fill/w_297,h_318,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_123544366.png'
    },
    {
        'id': 8,
        'categoriesName': 'Cereal & Snacks',
        'img': 'https://static.wixstatic.com/media/c837a6_467f29f6d4ef4fdf8897910dec40537a~mv2.png/v1/fill/w_300,h_341,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Korn_Flakes_2.png'
    },

];



// kết thúc animation loading
var container = document.querySelector('.container');
var loading = document.querySelector('.loading');
if (loading) {
    setTimeout(function () {
        loading.style.opacity = '0';
        loading.style.zIndex = '-100';
    }, 2000);
}


// duyệt mảng rproduct hiển thị sản phẩm

var boxProduct = document.querySelector('.main-slider-best');
if(boxProduct){
    function displayProduct(){
        for(let item of productList){
            boxProduct.innerHTML +=`
                    <div class="product">
                    <a href="detail.html?id=${item.id}" class="avatar-product">
                        <img src="${item.avatar}" alt="">
                    </a>
                    <a href="" class="name-price">
                        <span class="name-product">${item.name}</span>
                        <span class="price-product">$${item.price}</span>
                    </a>
                    <div class="add-cart">
                        <form action="">
                            <div class="minus">-</div>
                            <input type="text" value="1" class="numberProduct">
                            <div class="add">+</div>
                        </form>
                        <div class="btn-add-cart">Add to Cart</div>
                    </div>
                    </div>
            `;
        }
    }
    displayProduct();
}

// slider sản phẩm
var next = document.querySelector('.bx-chevron-right');
var back = document.querySelector('.bx-chevron-left');
var productSlider = document.querySelectorAll('.product');
var widthSlide = document.querySelector('.main-slider-best');
if (next) {
    var responsive = container.getClientRects()[0];
    var widthMain = widthSlide.getClientRects()[0];
    if(responsive.width > 1024){
        var px = ((widthMain.width) / 100) * 20;
    }else if(responsive.width > 740){
        var px = ((widthMain.width) / 100) * 25;
    }else{
        var px = ((widthMain.width) / 100) * 100;
    }
    
    var count = 0;
    var countRun = 0;
    function sliderNext() {
        
        console.log(countRun);
        if (countRun == productList.length-5 && responsive.width > 1024) {
            return;
        } else if (countRun == productList.length-4 && responsive.width > 740) {
            return;
        } else if (countRun == productList.length-1) {
            return;
        }
        count += px;
        for (let i of productSlider) {
            i.style.transform = 'translateX(' + -count + 'px)';
        }
        countRun++;
    }

    function sliderBack() {
        if (countRun == 0 && responsive.width > 1024) {
            return;
        } else if (countRun == 0 && responsive.width > 740) {
            return;
        } else if (countRun == 0) {
            return;
        }
        count -= px;
        for (let i of productSlider) {
            i.style.transform = 'translateX(' + -count + 'px)';
        }
        countRun--;
    }
    next.addEventListener('click', sliderNext);
    back.addEventListener('click', sliderBack);
}

// thêm số lượng sản phẩm + tiền khi thêm sản phẩm

var add = document.querySelectorAll('.add');
var minus = document.querySelectorAll('.minus');
var numberProduct = document.querySelectorAll('.numberProduct');
var priceProduct = document.querySelectorAll('.price-product');
if (add) {
    var arrPrice = [];
    for (var i = 0; i < add.length; i++) {
        var gia = priceProduct[i].innerText.slice(1);
        arrPrice.push(gia);
    }
    for (let i in add) {
        add[i].onclick = function () {
            numberProduct[i].value++;
            priceProduct[i].innerText = "$" + Math.round((numberProduct[i].value) * arrPrice[i]);
        };
        minus[i].onclick = function () {
            if (numberProduct[i].value < 1) {
                numberProduct[i].value = 1;
            }
            numberProduct[i].value--;
            priceProduct[i].innerText = "$" + Math.round((numberProduct[i].value) * arrPrice[i]);
        };
    }
}

// sử lý onscroll bg sub footer
/* transform: translateX(-10%); */
var bg = document.querySelector('.sub-footer-bg>img');
if (bg) {
    var z = 0;
    function animationBg() {

        var x = bg.getClientRects()[0];
        if (x.top < 100) {
            if (z <= 200) {
                bg.style.transform = 'translateX(-' + z + 'px)';
                z += 20;
                console.log("hihi");
            }
        } else {
            if (z >= 0) {
                bg.style.transform = 'translateX(-' + z + 'px)';
                z -= 20;
            }
        }
    }
    window.addEventListener('scroll', animationBg);
}

// duyệt mảng hiển thị categories

var mainCategories = document.querySelector('.main-categories');
if (mainCategories) {
    function displayCategories() {
        for (let item of categoriesList) {
            mainCategories.innerHTML += `
                    <div class="box-categories">
                        <div class="categories-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <p class="categories-name">
                            ${item.categoriesName}
                        </p>
                    </div>
            `;
        }
    }
    displayCategories();
}


// validate form
var signUp = document.querySelector('#submit-signUp');
var signIn = document.querySelector('#submit-signIn');
function checkFrom() {
    var countErro = 0;
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let pass = document.querySelector('#password');
    let rePass = document.querySelector('#re-password');
    let span = document.querySelectorAll('span');
    if (signUp) {
        if (name.value.length == 0) {
            span[2].innerText = "Vui lòng nhập tên.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[3].innerText = "Vui lòng nhập password.";
            countErro++;
        } else {
            span[3].innerText = "";
        }
        if (rePass.value != pass.value) {
            span[4].innerText = "Mật Khẩu không Khớp.";
            countErro++;
        } else {
            span[4].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Sign Up Success.", "success");
        }
    } else if (signIn) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            span[1].innerText = "Email không hợp lệ.";
            countErro++;
        } else {
            span[1].innerText = "";
        }
        if (pass.value.length == 0) {
            span[2].innerText = "Vui lòng nhập password.";
            countErro++;
        } else {
            span[2].innerText = "";
        }
        if (countErro == 0) {
            swal("Sent", "Logged in successfully.", "success");
        }
    } 
}
if (signUp) {
    signUp.addEventListener('click', checkFrom);
}

if (signIn) {
    signIn.addEventListener('click', checkFrom);
}


// detail product 
var mainDetail = document.querySelector('.detail-product');
if(mainDetail){
    var idProduct = new URLSearchParams(window.location.search).get('id');
    function detailDisplay(){
        for(let i of productList){
            if(i.id == idProduct){
                var idDetail = i;
            }
        }
        mainDetail.innerHTML = `
        <article class="detail-product">
        <div class="detail-left">
            <img src="${idDetail.avatar}" alt="">
        </div>
        <div class="detail-right">
            <form action="">
                <p class="detail-name">${idDetail.name}</p>
                <span class="detail-price">$${idDetail.price}</span>
                <label for="quantity">Quantity</label>
                <input type="number" value="1" min="0" id="quantity">
                <button>Add Cart</button>
            </form>
            <div class="detail-info">
                <p class="desc-content">${idDetail.desc}</p>
                </div>
            </div>
        </article>
        `;
    }
    detailDisplay();
}







