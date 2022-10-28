const renderCart = () => {
    if (!cart.length) {
        cartProducts.innerHTML = `<p class="empty-msg">This is empty, try to add something.</p>`;
        resetCartBtn.classList.remove('btnChange')
        resetCartBtn.setAttribute("disabled", "true") 
        return;
    }
    cartProducts.innerHTML = cart.map(renderCartProduct).join("");
    renderTotal(cart)
    
    resetCartBtn.removeAttribute("disabled")
    resetCartBtn.classList.add('btnChange')
    
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

const resetCart = () => {
    console.log("hola")
    window.confirm("queres borrar el carrito?")

        cart = [];
        saveLocalStorage();
        renderCart();
        renderCounter()
        renderTotal(cart)
    
}

const cartTotal = () => {
    return cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),0 );
};
  
const renderTotal = () => {
    totalCart.innerHTML = `Total: $${cartTotal()}`;
};