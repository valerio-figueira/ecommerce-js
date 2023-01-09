export function renderProductDetailsHtml(product){
    return `
    <div class="flex-column">
        <img src="${product.img[0]}" alt="${product.name}">
        <div class="flex-row">${renderImages(product)}</div>
    </div>
    <div class="box">
        <p class="label">${product.label}</p>
        <h2 class="title">${product.name}</h2>
        <p class="price">$${Number(product.price).toFixed(2)}</p>
        <div class="controller">
            <button class="minus fas fa-minus"></button>
            <input type="number" class="quantity" min="1" max="999" value="${product.quantity}">
            <button class="plus fas fa-plus"></button>
        </div>
        <button class="add-to-checkout">Add to Cart</button>
        <h3 class="details">Product Details</h3>
        <p class="description">${product.description}</p>
        <button class="close-btn">&times;</button>
    </div>
    `;
};

function renderImages(product){
    if(product.img.length > 1){
        return createImageTag(product).map(element => {
            return element.outerHTML;
        }).join('');
    };
    return ``;
};

function createImageTag(product){
    const imagesElements = [];
    for(let image of product.img){
        const createElement = document.createElement('img');
        createElement.src = image;
        createElement.alt = product.name;
        imagesElements.push(createElement);
    };
    return imagesElements;
};



export function renderShopProducts(shopItems){
    document.querySelector('.shop-content')
    .innerHTML = shopItems.map(product => {
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
};




export function renderCheckoutItemHtml(product, index = 0){
    return `
        <div class="checkout-product" id="${product.id}">
            <h3>${product.name}</h3>
            <img src="${product.img[index]}" class="">
            <div class="controller">
                <button class="minus fas fa-minus"></button>
                <input type="number" class="quantity" min="1" max="999" value="${product.quantity}" required=true>
                <button class="plus fas fa-plus"></button>
            </div>
            <p class="product-price">Price: <span>$${Number(product.price).toFixed(2)}</span></p>
            <button class="remove-btn">&times;</button>
        </div>
    `;
};





export function renderSection1News(section1News){
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

export function renderSection2News(section2News){
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