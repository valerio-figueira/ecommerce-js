import { section1News, section2News } from "./News.js";
import products from "./Products.js"

const home = document.querySelectorAll('main section');
const shopPage = document.querySelector('.shop-content');

if(home[0] && home[1]){
    renderSection1News();
    renderSection2News();
}


function renderSection1News(){
    document.querySelector('main .section-1')
    .innerHTML = section1News.map(item => {
        return `
        <article class="news">
            <img src="${item.img}" alt="${item.upTitle}">
            <div class="absolute">
                <p>${item.upTitle}</p>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="${item.url}">${item.anchorDescription}</a>
            </div>
        </article>
        `;
    }).join('');
};

function renderSection2News(){
    document.querySelector('main .section-2')
    .innerHTML = section2News.map(item => {
        return `
        <article class="news">
            <img src="${item.img}" alt="${item.title}">
            <div class="absolute">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            </div>
        </article>
        `;
    }).join('');
};

if(shopPage){
    renderShopProducts();
}
function renderShopProducts(){
    document.querySelector('.shop-content')
    .innerHTML = products.map(product => {
        return `
        <div class="product" id="${product.id}">
            <img src="${product.img[0]}" alt="${product.name}">
            <p class="label">${product.label}</p>
            <h2 class="title">${product.name}</h2>
            <div class="flex-row">
                <p class="price">$${Number(product.price).toFixed(2)}</p>
                <button class="fas fa-shopping-cart icon"></button>
            </div>
        </div>
        `;
    }).join('');
    
    document.querySelectorAll('.shop-content .product').forEach(productTag => {
        productTag.addEventListener('click', () => {
            const object = convertTagIntoObject(productTag)
            openDetails(object);
        });
    });
};

function convertTagIntoObject(productTag){
    return products.find(product => product.id == productTag.id);
}

function openDetails(product){
    const tag = document.querySelector('.more-detail');

    conditionalClassTag(tag);

    tag.innerHTML = `
    <div class="flex-column">
        <img src="${product.img[0]}" alt="${product.name}">
        <div class="flex-row">
            <img src="${product.img[1]}" alt="${product.name}">
            <img src="${product.img[2]}" alt="${product.name}">
            <img src="${product.img[3]}" alt="${product.name}">
            <img src="${product.img[4]}" alt="${product.name}">
        </div>
    </div>
    <div class="box">
        <p class="label">${product.label}</p>
        <h2 class="title">${product.name}</h2>
        <p class="price">$${Number(product.price).toFixed(2)}</p>
        <input type="number" class="quantity" min="1" value="${product.quantity}">
        <button>Add to Cart</button>
        <h3 class="details">Product Details</h3>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam dolore saepe facere consequuntur porro maxime harum vitae, soluta corrupti in, id quidem ab architecto impedit error blanditiis molestias eligendi?</p>
        <button class="close-btn">&times;</button>
    </div>
    `;

    const btn = document.querySelector('.more-detail .close-btn');
    btn.addEventListener('click', () => {
        conditionalClassTag(tag);
    });

    const mainImage = document.querySelectorAll('.more-detail img')[0];
    const images = document.querySelectorAll('.more-detail .flex-row img');

    // changes the main image
    images.forEach(image => {
        image.addEventListener('click', () => {
            mainImage.setAttribute('src', image.getAttribute('src'));
        });
    });

    // quantity controller
    quantityController(product);
};

function conditionalClassTag(tag){
    const mainTag = document.querySelector('main');

    if(tag.matches('.closed')){
        tag.classList.remove('closed');
        tag.classList.add('absolute');
        mainTag.classList.add('height-adjust');
    }else{
        tag.classList.add('closed');
        tag.classList.remove('absolute');
        mainTag.classList.remove('height-adjust');
    }
}





function quantityController(product){
    const productTag = document.querySelector('.more-detail');
    const quantityTag = document.querySelector('.more-detail .quantity');


    quantityTag.addEventListener('change', (e) => {
        if(quantityTag.value == 0){
            quantityTag.value = 1;
        } else{
            product.quantity = e.target.value;
            refreshProductPrice(product);
            console.log(product.quantity)
        }
    })
}

function refreshProductPrice(product){
    const priceTag = document.querySelector('.more-detail .price');

    product.total = product.quantity * product.price;
    priceTag.innerHTML = product.total;
}




footerTag()
function footerTag(){
    document.querySelector('footer')
    .innerHTML = `
        <div class="box">
            <h3>Contact</h3>
            <p>Address: <span>562 Wellington Road, Street 22, San Francisco</span></p>
            <p>Phone: <span>+00 0000 000 / +00 0000 0000</span></p>
            <p>Hours: <span>10:00 - 18:00, Mon - Sat</span></p>
        </div>
        <div class="box">
            <h3>About</h3>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="box">
            <h3>My Account</h3>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div class="box">
            <h3>Install App</h3>
            <p>From App Store or Google Play</p>
            <div class="flex-row">
                <a href="#"><img src="imgs/pay/app.jpg" alt=""></a>
                <a href="#"><img src="imgs/pay/play.jpg" alt=""></a>
            </div>
            <img src="imgs/pay/pay.png" alt="payment" class="payment">
        </div>
    `;
};