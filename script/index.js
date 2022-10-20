import { section1News, section2News } from "./News.js";
import { renderProductDetailsHtml, renderSection1News, renderSection2News, renderShopProducts, renderCheckoutItemHtml } from "./RenderHtml.js";
import products from "./Products.js"

const home = document.querySelectorAll('main section');
const shopPage = document.querySelector('.shop-content');
const shopItems = products;



if(home[0] && home[1]){
    renderSection1News(section1News);
    renderSection2News(section2News);
}


if(shopPage){
    renderShopProducts(shopItems);
    openProductDetailsOrAddToCheckout();
    searchEngine();
}

function searchEngine(){
    const searchInput = document.querySelector('.search-bar #search-input');

    searchInput.addEventListener('keyup', event => {
        console.log(searchInput, event.target.value)
        const enteredInput = String(event.target.value).toLowerCase();
        const filteredItems = shopItems.filter(item => {
            const itemRenamed = item.name.toLowerCase();
            return itemRenamed.includes(enteredInput);
        })
        console.log(filteredItems)
        renderShopProducts(filteredItems);
        openProductDetailsOrAddToCheckout();
    });
};




// OPEN MORE DETAILS OR ADD ITEM TO CART
function openProductDetailsOrAddToCheckout(){
    document.querySelectorAll('.shop-content .product').forEach(productTag => {
        productTag.addEventListener('click', (event) => {
            if(event.target.matches('.icon')){
                addItemsToCheckout(productTag);
            } else{
                const object = convertTagIntoObject(productTag)
                openDetails(object);
                window.open('#header', '_self');
            };
        });
    });
};

function convertTagIntoObject(productTag){
    return shopItems.find(product => product.id == productTag.id);
};

function openDetails(product){
    const tag = document.querySelector('.more-detail');

    conditionalClassTag(tag);
    tag.id = product.id;

    // RENDER PRODUCT DETAILS (HTML)
    tag.innerHTML = renderProductDetailsHtml(product);

    // ADD LISTENER TO CLOSE BUTTON
    const closeBtn = document.querySelector('.more-detail .close-btn');
    closeBtn.addEventListener('click', () => {
        conditionalClassTag(tag);
    });

    const mainImage = document.querySelectorAll('.more-detail img')[0];
    const images = document.querySelectorAll('.more-detail .flex-row img');

    // CHANGES THE MAIN IMAGE BY CLICK
    images.forEach(image => {
        image.addEventListener('click', () => {
            mainImage.setAttribute('src', image.getAttribute('src'));
        });
    });

    // QUANTITY CONTROLLER
    const quantityTag = document.querySelector('.more-detail .quantity');
    const addToCheckoutBtn = document.querySelector('.add-to-checkout');

    quantityTag.addEventListener('change', () => {
        quantityController(product, quantityTag);
    });

    // ADD PRODUCT INTO CART FROM DETAILS PAGE
    addToCheckoutBtn.addEventListener('click', () => {
        // GET IMG SRC AND ADD TO CHECKOUT
        const img = tag.children[0].children[0].getAttribute('src')
        addItemsToCheckout(tag, img);
    });
};



function addItemsToCheckout(productTag, img){
    const checkoutBox = document.querySelector('.checkout .checkout-items');
    const productObject = convertTagIntoObject(productTag);
    const index = shopItems.indexOf(productObject);
    let imgIndex;
    
    if(img != undefined){
        imgIndex = shopItems[index].img.indexOf(img)
    }

    if(!searchForDuplicates(productTag)){
        checkoutBox.innerHTML += renderCheckoutItemHtml(shopItems[index], imgIndex);
    } else{
        console.log('Already in the cart')
        // INSERT POPUP HERE
    };
    // LISTENING TO INPUT CHANGES (QUANTITY)
    checkoutController();
};


function searchForDuplicates(productTag){
    const checkoutProducts = document.querySelectorAll('.checkout-product');

    for(let element of checkoutProducts){
        if(productTag.id === element.id){
            return true;
        };
    };
    return false;
};


// LISTENING FOR NEW QUANTITIES CHANGES
function checkoutController(){
    const checkoutProducts = document.querySelectorAll('.checkout-product');

    checkoutProducts.forEach(product => {
        const productObject = convertTagIntoObject(product);
        const quantityTag = product.children[2];
        const index = shopItems.indexOf(productObject);

        quantityTag.value = shopItems[index].quantity;
        refreshTotalPrice();
        
        product.addEventListener('change', (e) => {
            if(e.target.matches('.quantity')){
                quantityController(productObject, e.target);
            };
        });
        // LISTENING FOR REMOVE BTN
        product.addEventListener('click', (e) => {
            if(e.target.matches('.remove-btn')){
                product.remove();
                refreshTotalPrice();
            };
        });
    });
};



function quantityController(productObject, quantityTag){
    const index = shopItems.indexOf(productObject);
    
    if(quantityTag.value == 0){
        quantityTag.value = 1;
        shopItems[index].quantity = Number(quantityTag.value);
    } else{
        shopItems[index].quantity = Number(quantityTag.value);
    };
    refreshTotalPrice();
};





function refreshTotalPrice(){
    const checkoutProducts = document.querySelectorAll('.checkout-product');
    const totalPriceTag = document.querySelector('.checkout .total-price span')
    let totalPrice = 0;

    checkoutProducts.forEach(product => {
        const object = convertTagIntoObject(product);
        const index = shopItems.indexOf(object);
        console.log(product.children[2].value)
        totalPrice += product.children[2].value * shopItems[index].price;
    });

    totalPriceTag.innerHTML = `$${Number(totalPrice).toFixed(2)}`;
};






// OPEN MORE DETAILS TAB
function conditionalClassTag(tag){
    const mainTag = document.querySelector('main');
    const checkoutTag = document.querySelector('.checkout');
    if(!tag.matches('.absolute') ){
        tag.classList.add('absolute');
        mainTag.classList.add('height-adjust');
        if(checkoutTag.matches('.open')){
            checkoutTag.classList.remove('open');
        }
    }else{
        tag.classList.remove('absolute');
        mainTag.classList.remove('height-adjust');
    };
};

openCheckoutTab();
function openCheckoutTab(){
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutTag = document.querySelector('.checkout');
    const checkoutCloseBtn = document.querySelector('.checkout .close-btn');
    checkoutBtn.addEventListener('click', () => {
        conditionalCheckoutTab(checkoutTag);
    });
    checkoutCloseBtn.addEventListener('click', () => {
        conditionalCheckoutTab(checkoutTag);
    });
};

function conditionalCheckoutTab(checkoutTag){
    const mainTag = document.querySelector('main');
    const moreDetailTab = document.querySelector('.more-detail');
    if(!checkoutTag.matches('.open')){
        checkoutTag.classList.add('open');
        if(moreDetailTab.matches('.absolute')){
            moreDetailTab.classList.remove('absolute');
            mainTag.classList.remove('height-adjust');
        };
    } else{
        checkoutTag.classList.remove('open');
    };
};



// OPEN SEARCH BAR
openSearchBar();
function openSearchBar(){
    const searchBtn = document.querySelector('.navbar .search-btn');
    const searchBar = document.querySelector('header .search-bar');
    const searchInput = document.querySelector('header #search-input');

    searchBtn.addEventListener('click', () => {
        if(!searchBar.matches('.open')){
            setInterval(() => searchInput.focus(), 350);
            searchBar.classList.add('open');            
            document.addEventListener('click', event =>{
                if(!event.target.matches('.search-btn') && !event.target.matches('#search-input')){
                    searchBar.classList.remove('open');
                };
            });
        } else{
            searchBar.classList.remove('open');
            searchInput.focus();
        };
    });
};





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