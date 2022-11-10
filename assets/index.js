const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

let localUsersOn = localStorage.getItem('userOn');
let usersLogOn = [];

if (localUsersOn){
  usersLogOn = JSON.parse(localUsersOn);
}


const handleLocation = (e) => {
  e.preventDefault()
    if((window.location.pathname == '/assets/login.html' ||
       window.location.pathname == '/assets/register.html' ||
       window.location.pathname == '/assets/products.html' ||
       window.location.pathname == '/assets/productTemplate.html') && !localUsersOn){
      
        location.href = 'login.html';

    }else if(!localUsersOn){
      location.href = './assets/login.html';
    }else{
      window.confirm("do you want log out?")
      localStorage.removeItem("userOn");
      handleAvatar()
      var urlPrev = window.location.pathname;
      location.href = `${urlPrev}`;
    }
};

const handleAvatar = () =>{
  if(!localUsersOn){
    nameAcount.innerText = 'Login';
  }else{
    console.log(usersLogOn)
    nameAcount.innerText = `Hi, ${usersLogOn.name}`;
  }
};

const renderCardProducts = (lista) => {

    const { id, name, category, price, technologie, size, img } = lista
        productsContainer.innerHTML += `
        <div class="card-product">
        <div class="image_product_container">
            <img src="${img}" alt="">
            <a href="/assets/productTemplate.html?type=${tipo}&id=${id}" class="quickview"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <h3>${name}</h3>
        <p>Category: ${category}</p>
        <h2>$${price}</h2>
        <button class="add-cart"
        data-id="${id}"
        data-name="${name}"
        data-price="${price}"
        data-size="${size}"
        data-img="${img}"
        data-technologie="${technologie}">${size === "Only size" ? "Add to cart" : "View options"}</button>
        </div>
        `
}

let quantity = 1;

const closeGallery = () =>{

    lightBoxContainer.style.display = "none"
}
const openGallery = () =>{
    lightBoxContainer.style.display = "block"
}

const changeSize = () => {
    let size = selectSize.options[selectSize.options.selectedIndex].value
    return size

}
const existingCartProduct = (product) => {

    let result = cart.find((item) => item.id === product.id && item.size === product.size);
    if (result) {
      return true;
    }
};
const addUnitProductFromTemplate = (product) => {
    cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id && cartProduct.size === product.size
        ? { ...cartProduct, quantity: Number(cartProduct.quantity) + Number(document.getElementById('root').textContent) }
        : cartProduct;
    });
};
const addUnitProductFromList = (product) => {
    cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id 
        ? { ...cartProduct, quantity: Number(cartProduct.quantity) + 1 }
        : cartProduct;
    });
};

const handleQuantity = (e) => {
    if (e.target.classList.contains("down")) {
      templateMinusBtn(e.target.dataset.id);
    } else if (e.target.classList.contains("up")) {
        templatePlusBtn(e.target.dataset.id);
    }

}; 

const createCartProduct = (product) => {
    cart = [...cart, { ...product, quantity }];
  };
const productData = (id, name, price, img, size, quantity) => {
    return { id, name, price, img, size, quantity };
  };


const addCart = (e) => {
    if (!e.target.classList.contains("add-cart-btn")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity = Number(document.getElementById('root').textContent));
    
    product.size = changeSize()
    if (existingCartProduct(product)) {
        if (product.quantity == 0){
            alert("no podes pa");
            return
        }
        addUnitProductFromTemplate(product);
        showMessage("Added a unit from this product")
      } else {
        if (product.quantity == 0){
            alert("no podes pa");
            return
        }
        createCartProduct(product);
        showMessage("Product Added to cart")
      }
    saveLocalStorage()
    renderCounter()
    renderCart();
    renderTotal(cart)
}

const addCartFromProductsList = (e) =>{
    if (!e.target.classList.contains("add-cart")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity);
    console.log(e.target.dataset.size)
    if (product.size === "Only size"){
        console.log("ESTOY ACA")
        if (existingCartProduct(product)) {
        
            addUnitProductFromList(product);
            showMessage("Added a unit from this product")
          } else {
            createCartProduct(product);
            showMessage("Product Added to cart")
          }
        saveLocalStorage()
        renderCounter()
        renderCart();
        renderTotal(cart)
    }else if(product.size != "null"){
        location.href = `/assets/productTemplate.html?type=${tipo}&id=${product.id}`
    }
}

const addCartFromHome = (e) =>{
    if (!e.target.classList.contains("add-cart-from-home")) return;
    
    let { id, name, price, img, size, quantity, collection} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity, collection);
    console.log(e.target.dataset.size)
    if (product.size === "Only size"){
        console.log("ESTOY ACA")
        if (existingCartProduct(product)) {
        
            addUnitProductFromList(product);
            showMessage("Added a unit from this product")
          } else {
            createCartProduct(product);
            showMessage("Product Added to cart")
          }
        saveLocalStorage()
        renderCounter()
        renderCart();
        renderTotal(cart)
    }else if(product.size != "null"){
        location.href = `/assets/productTemplate.html?type=${product.collection}&id=${product.id}`
    }
}
const showMessage = (msg) => {
    message.classList.add("active-message");
    message.textContent = msg;
    setTimeout(() => {
      message.classList.remove("active-message");
    }, 2000);
};

const renderCounter = () => {
    let count = cart.length;
    countCart.innerText = count
}

const init = () => {
    handleAvatar()
    renderCart();
    avatar.addEventListener('click', handleLocation)
    icon?.addEventListener('click', openMenu)
    document?.addEventListener('click', closeMenu)
    cartIcon?.addEventListener('click', openCart)
    document?.addEventListener('click', closeCart)
    document?.addEventListener("DOMContentLoaded", renderCounter);
    document?.addEventListener("DOMContentLoaded", renderTotal);
    resetCartBtn?. addEventListener('click', resetCart)
    cartProducts.addEventListener('click',handleQuantityCart)
    document?.addEventListener("DOMContentLoaded", findLatest)
    latestProducts?.addEventListener('click', addCartFromHome)

    document?.addEventListener("DOMContentLoaded", renderFilters)
    document?.addEventListener("DOMContentLoaded", filterType)
    breadCrumbs.innerText = `${tipo}${!idProduct? "": "/Product-"+idProduct}`
    document?.addEventListener("DOMContentLoaded", filterTemplate)
    btnFilter?.addEventListener('click', handleFilters)
    btnFilterReset?.addEventListener('click', resetFilter)
    btnContainer?.addEventListener('click', addCart)

    // document?.addEventListener('DOMContentLoaded', changeSize)
    productsContainer?.addEventListener('click', addCartFromProductsList)

    document?.addEventListener("DOMContentLoaded", renderCart(cart));
    resetCartBtn. addEventListener('click', resetCart)
    
}

init()
