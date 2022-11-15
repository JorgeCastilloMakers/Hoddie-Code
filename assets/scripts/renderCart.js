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
            <img src="/assets/img/caret-up-fill.svg" alt="" class="up" data-id=${id} data-size=${size}>
            <img src="/assets/img/caret-down-fill.svg" alt="" class="down" data-id=${id} data-size=${size}>
        </div>
    </div>
    <h3>${name}<span>Size: ${size}</span></h3>
    <h2>$${price}</h2>
</div>   
`;
};

const resetCart = () => {
    Swal.fire({
        title: 'Do you want to empty the cart?',
        color: '#000',
        showCancelButton: true,
        confirmButtonColor: '#FFDE59',
        cancelButtonColor: '#000'
      }).then((result) => {
        if (result.isConfirmed) {
            cart = [];
            saveLocalStorage();
            renderCart();
            renderCounter()
            renderTotal(cart)
        }else if (result.dismiss){
            return
        }
      })
    
}

const cartTotal = () => {
    return cart.reduce(
      (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),0 );
};
  
const renderTotal = () => {
    totalCart.innerHTML = `Total: $${cartTotal()}`;
};

const removeProductFromCart = (existingProduct) => {
    cart = cart.filter(product => {
        return product.id !== existingProduct.id || 
            (product.id === existingProduct.id && product.size !== existingProduct.size)
        })

    saveLocalStorage()
    renderCounter()
    renderCart();
    renderTotal(cart)
    renderOrder()
}

const subtractProductUnit = (existingProduct) => {
    cart = cart.map(cartProduct => {
        return cartProduct.id === existingProduct.id && cartProduct.size === existingProduct.size ? {...cartProduct, quantity: cartProduct.quantity - 1} 
        : cartProduct;
    })
    saveLocalStorage()
    renderCounter()
    renderCart();
    renderTotal(cart)
}
const addUnitProductFromCart = (product) => {
      cart = cart.map((cartProduct) => {
        return cartProduct.id === product.id && cartProduct.size === product.size
          ? { ...cartProduct, quantity: Number(cartProduct.quantity) + 1 }
          : cartProduct;
      });
  };
const handleUpBtn = (id, size) => {
    
    if(size === "Only"){
        size = "Only size"
    }
    const existingCartProduct = cart.find(item => item.id === id && item.size === size);
    
    addUnitProductFromCart(existingCartProduct);
    saveLocalStorage()
    renderCounter()
    renderCart();
    renderTotal(cart)
}

const handleDownBtn = (id, size) => {
    if(size === "Only"){
        size = "Only size"
    }
    const existingCartProduct = cart.find(item => item.id === id && item.size === size);
    if (existingCartProduct.quantity <= 2){

        Swal.fire({
            title: 'Do you want to remove the product from the cart??',
            color: '#000',
            showCancelButton: true,
            confirmButtonColor: '#FFDE59',
            cancelButtonColor: '#000'
          }).then((result) => {
            if (result.isConfirmed) {
                removeProductFromCart(existingCartProduct)
            }else if (result.dismiss){
                return
            }
          })

    }
    subtractProductUnit(existingCartProduct);
}

const handleQuantityCart = (e) => {
    if (e.target.classList.contains("down")) {
      handleDownBtn(e.target.dataset.id, e.target.dataset.size);
    } else if (e.target.classList.contains("up")) {
        handleUpBtn(e.target.dataset.id, e.target.dataset.size);
    }

}; 

const openCheckout = document.getElementById('open-checkout')

const openCheckoutModal = () => {
    checkoutModal.style.display = "flex";
    cartIcon.classList.remove('open-cart');
    cartMenu.classList.remove('open-cart-cart');
    renderOrder()
}
openCheckout.addEventListener('click', openCheckoutModal)