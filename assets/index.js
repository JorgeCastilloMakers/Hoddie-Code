//funcion LocalStorage de carrito
const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

//Traer usuario logueado
let localUsersOn = localStorage.getItem('userOn');
let usersLogOn = [];
if (localUsersOn){
  usersLogOn = JSON.parse(localUsersOn);
}

//Manejador de locacion segun ultima ubicacion
const handleLocation = (e) => {
  e.preventDefault()
    if((window.location.pathname == '/assets/login.html' ||
       window.location.pathname == '/assets/register.html' ||
       window.location.pathname == '/assets/products.html' ||
       window.location.pathname == '/assets/productTemplate.html') && !localUsersOn){
      
        location.href = 'login.html';

    }else if(!localUsersOn){
      location.href = './assets/login.html';
    }else if(localUsersOn){
      Swal.fire({
        title: 'Are you sure you want to log out?',
        color: '#000',
        showCancelButton: true,
        confirmButtonColor: '#FFDE59',
        cancelButtonColor: '#000'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("userOn");
          handleAvatar()
          var urlPrev = window.location.pathname;
          location.href = `/index.html`;
        }
      })

    }else{
      return
    }
};

//Funcion para manejar si se esta logueado o no y redirigir
const handleAvatar = () =>{
  if(!localUsersOn){
    nameAcount.innerText = 'Login';
  }else{
    nameAcount.innerText = `Hi, ${usersLogOn.name}`;
  }
};

//Funcion render de cards de productos para Home y para collecciones
const renderCardProducts = (lista) => {

    const { id, name, category, price, technologie, size, img } = lista
        productsContainer.innerHTML += `
        <div class="card-product">
        <div class="image_product_container">
            <a href="/assets/productTemplate.html?type=${tipo}&id=${id}"><img src="${img}" alt="product-image-${name}"></a>
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

//Verifica si existe el producto
const existingCartProduct = (product) => {

    let result = cart.find((item) => item.id === product.id && item.size === product.size);
    if (result) {
      return true;
    }
};
//Si existe el producto agrega una unidad
const addUnitProductFromTemplate = (product) => {
    cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id && cartProduct.size === product.size
        ? { ...cartProduct, quantity: Number(cartProduct.quantity) + Number(document.getElementById('root').textContent) }
        : cartProduct;
    });
};
//Si existe el producto agrega una unidad para productos sin opciones
const addUnitProductFromList = (product) => {
    cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id 
        ? { ...cartProduct, quantity: Number(cartProduct.quantity) + 1 }
        : cartProduct;
    });
};
//Manejador de cantidad en el carrito
const handleQuantity = (e) => {
    if (e.target.classList.contains("down")) {
      templateMinusBtn(e.target.dataset.id);
    } else if (e.target.classList.contains("up")) {
        templatePlusBtn(e.target.dataset.id);
    }

}; 
//Funcion creador de productos para el carrito
const createCartProduct = (product) => {
    cart = [...cart, { ...product, quantity }];
  };
//Constructor de producto
const productData = (id, name, price, img, size, quantity) => {
    return { id, name, price, img, size, quantity };
  };
//Agregar producto al carrito desde el template de prodcuto segun la cantidad del manejador
const addCart = (e) => {
    if (!e.target.classList.contains("add-cart-btn")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity = Number(document.getElementById('root').textContent));
    
    product.size = changeSize()
    if (existingCartProduct(product)) {
        if (product.quantity == 0){
            return
        }
        addUnitProductFromTemplate(product);
        showMessage("Added a unit from this product")
      } else {
        if (product.quantity == 0){
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
//Agregar producto al carrito desde colleciones
const addCartFromProductsList = (e) =>{
    if (!e.target.classList.contains("add-cart")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity);
    console.log(e.target.dataset.size)
    if (product.size === "Only size"){
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
//Agregaro producto al carrito desde Home
const addCartFromHome = (e) =>{
    if (!e.target.classList.contains("add-cart-from-home")) return;
    
    let { id, name, price, img, size, quantity, collection} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity, collection);
    if (product.size === "Only size"){
        if (existingCartProduct(product)) {
        
            addUnitProductFromList(product);
            showMessage(`Added a unit from this product`)
          } else {
            createCartProduct(product);
            showMessage("Product Added to cart")
          }
        saveLocalStorage()
        renderCounter()
        renderCart();
        renderTotal(cart)
    }else if(product.size != "Only size"){
        location.href = `/assets/productTemplate.html?type=${collection}&id=${product.id}`
    }
}
//Mensaje de producto agregado al carrito
const showMessage = (msg) => {
    message.classList.add("active-message");
    message.innerHTML = `${msg}`;
    setTimeout(() => {
      message.classList.remove("active-message");
    }, 3000);
};
//Contador del carrito
const renderCounter = () => {
    let count = cart.length;
    countCart.innerText = count
}
//Funcion init
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

    productsContainer?.addEventListener('click', addCartFromProductsList)

    document?.addEventListener("DOMContentLoaded", renderCart(cart));
    resetCartBtn. addEventListener('click', resetCart)
    
}

init()
