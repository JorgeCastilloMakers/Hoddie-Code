const renderCart = () => {
    if (!cart.length) {
        cartProducts.innerHTML = `<p class="empty-msg">This is empty, try to add something.</p>`;
      return;
    }
    cartProducts.innerHTML = cart.map(renderCartProduct).join("");
};


const renderCartProduct = (productAdd) => {
const { id, img, price, name, size, quantity } = productAdd;
return `
<div class="products-in-cart">
    <div>
        <p>#${id}</p>
        <img src="${img}" alt="">    
    </div>
    <div class="quantity-container">
        <p>${quantity}</p>
        <div class="btn-arrows">
            <img src="/assets/img/caret-up-fill.svg" alt="" class="up">
            <img src="/assets/img/caret-down-fill.svg" alt="" class="down">
        </div>
    </div>
    <h3>${name}<span>Size: ${size === "null" ? "Only Size" : size}</span></h3>
    <h2>$${price}</h2>
</div>   
`;
};