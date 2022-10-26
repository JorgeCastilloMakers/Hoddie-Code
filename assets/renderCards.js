
const findLatest = () => {
    let lastThreeProducs = products.slice(products.length-3)

    latestProducts.innerHTML = "";
    lastThreeProducs.map(renderLatestProducts).join("");
}
const renderLatestProducts = (list) => {
    const { id, name, category, price, technologie, size, img, collection  } = list

    latestProducts.innerHTML += `
        <div class="card-product">
        <div class="image_product_container">
            <img src="${img}" alt="">
            <a href="/assets/productTemplate.html?type=${collection}&id=${id}" class="quickview"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <h3>${name}</h3>
        <p>Category: ${category}</p>
        <h2>$${price}</h2>
        <button class="add-cart-from-home"
        data-id="${id}"
        data-name="${name}"
        data-price="${price}"
        data-size="${size}"
        data-img="${img}"
        data-collection="${collection}"
        data-technologie="${technologie}">${!size ? "Add to cart" : "View options"}</button>
        </div>
        `
}

