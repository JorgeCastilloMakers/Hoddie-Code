const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
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

// const filterType = () => {
//     const productsList = products.filter(
//         (product) => product.collection.toUpperCase() === tipo.toUpperCase()
//       );
//     productsContainer.innerHTML = "";
//     productsList.map(renderCardProducts).join("");
// }

let quantity = 1;

const closeGallery = () =>{

    lightBoxContainer.style.display = "none"
}
const openGallery = () =>{
    lightBoxContainer.style.display = "block"
}
// const renderProductTemplate = (product) =>{
//     lightBoxContainer.style.display = "none"
//     renderSize(product[0].size)
//     const { id, name, category, price, technologie, img, imgBig, imgGallery1, imgGallery2, imgGallery3, imgGallery4 } = product[0]
//     breadCrumbs.innerHTML = `<a href="/assets/products.html?type=${tipo}">${tipo}</a>/${name}`
//     document.getElementById('productName').textContent = `${name}`
//     document.getElementById('productCategory').textContent = `Hoodie Code ${category}`
//     document.getElementById('productPrice').textContent = `$${price}`
//     document.getElementById('productImageBig').innerHTML = `<img class=".materialboxed" src="${imgBig}" alt="">`
//     document.querySelector('.add-cart').innerHTML = `
//             <div class="quantity" id="cantidad">
//             <button class="quantity-btn minus down" data-id="${id}" >-</button>
//             <h2 id="root">1</h2>
//             <button class="quantity-btn up" data-id="${id}">+</button>
//             </div>
//             <button class="add-cart-btn" data-id="${id}"
//             data-name="${name}"
//             data-price="${price}"
//             data-img="${img}"
//             data-technologie="${technologie}"
//             data-quantity="${quantity}">
//             <i class="fa-solid fa-cart-shopping"></i>
//             Add to cart
//             </button>
//     `
//     document.querySelector('.image-product-galery').innerHTML = `
//             <a href="#image2" class="open">
//                 <img src="${imgGallery2}" alt="">
//             </a>
//             <a href="#image3" class="open">
//                 <img src="${imgGallery3}" alt="">
//             </a>
//             <a href="#image4" class="open">
//                 <img src="${imgGallery4}" alt="">
//             </a>
//             <a href="#image5" class="open">
//                 <img src="${imgGallery1}" alt="">
//             </a>    
//     `

//     lightBoxContainer.innerHTML = `
//     <article class="light-box" id="image1">
//         <a href="#image5" class="next"><i class="fa-solid fa-arrow-left"></i></a>
//         <img src="${imgBig}" alt="">
//         <a href="#image2" class="next"><i class="fa-solid fa-arrow-right"></i></a>
//         <a class="close"><i class="fa-solid fa-xmark"></i></a>
//     </article>
//     <article class="light-box" id="image2">
//         <a href="#image1" class="next"><i class="fa-solid fa-arrow-left"></i></a>
//         <img src="${imgGallery2}" alt="">
//         <a href="#image3" class="next"><i class="fa-solid fa-arrow-right"></i></a>
//         <a class="close"><i class="fa-solid fa-xmark"></i></a>
//     </article>
//     <article class="light-box" id="image3">
//         <a href="#image2" class="next"><i class="fa-solid fa-arrow-left"></i></a>
//         <img src="${imgGallery3}" alt="">
//         <a href="#image4" class="next"><i class="fa-solid fa-arrow-right"></i></a>
//         <a class="close"><i class="fa-solid fa-xmark"></i></a>
//     </article>
//     <article class="light-box" id="image4">
//         <a href="#image3" class="next"><i class="fa-solid fa-arrow-left"></i></a>
//         <img src="${imgGallery4}" alt="">
//         <a href="#image5" class="next"><i class="fa-solid fa-arrow-right"></i></a>
//         <a class="close"><i class="fa-solid fa-xmark"></i></a>
//     </article>
//     <article class="light-box" id="image5">
//         <a href="#image4" class="next"><i class="fa-solid fa-arrow-left"></i></a>
//         <img src="${imgGallery1}" alt="">
//         <a href="#image1" class="next"><i class="fa-solid fa-arrow-right"></i></a>
//         <a class="close"><i class="fa-solid fa-xmark"></i></a>
//     </article>
//     `
//     closeBtnGallery = document.querySelectorAll('.close')
//     openBtnGallery = document.querySelectorAll('.open')
//     quantityContainer = document.getElementById('cantidad')
//     quantityContainer.addEventListener('click', handleQuantity)
//     arrClose = [closeBtnGallery];
//     arrClose[0].forEach(e => {
//         e.addEventListener('click', closeGallery)
//     });
//     arrOpen = [openBtnGallery];
//     arrOpen[0].forEach(e => {
//         e.addEventListener('click', openGallery)
//     });

// }

// const renderSize = (sizeArr) => {
//     if (sizeArr === "Only size"){

//         option1.textContent = `Only Size`
//         option1.value = `${sizeArr}`
//         option2.remove();
//         option3.remove();
//         option4.remove();
//         option5.remove();
        
//         return
//     }
//     const [size1, size2, size3, size4, size5] = sizeArr;
//     console.log(sizeArr)

//     option1.textContent = `${size1}`
//     option2.textContent = `${size2}`
//     option3.textContent = `${size3}`
//     option4.textContent = `${size4}`
//     option5.textContent = `${!size5 ? "": size5}`
//     option1.value = `${!size1 ? option1.remove(): size1}`
//     option2.value = `${!size2 ? option2.remove(): size2}`
//     option3.value = `${!size3 ? option3.remove(): size3}`
//     option4.value = `${!size4 ? option4.remove(): size4}`
//     option5.value = `${!size5 ? option5.remove(): size5}`

// }
// const changeSize = () => {
//     let size = selectSize.options[selectSize.options.selectedIndex].value
//     return size

// }
// const filterTemplate = () => {
//     let productFilter = products.filter((producto) => producto.id === Number(idProduct));
//     renderProductTemplate(productFilter)
// }
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
// const templatePlusBtn = () => {

//     quantity= quantity + 1
//     document.getElementById('root').innerText = quantity
//     const btnMinus =  document.querySelector('.minus');
//     btnMinus.removeAttribute("disabled")
//     return quantity

//   };
// const templateMinusBtn = () => {
//     quantity= quantity - 1
//     document.getElementById('root').innerText = quantity
//     if(quantity === 0){
//       const btnMinus =  document.querySelector('.minus');
//       btnMinus.setAttribute("disabled", "true")
//     }
//     return quantity
//   };

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
    }, 1500);
};

const renderCounter = () => {
    let count = cart.length;
    countCart.innerText = count
}

const init = () => {
    icon?.addEventListener('click', openMenu)
    document?.addEventListener('click', closeMenu)
    cartIcon?.addEventListener('click', openCart)
    document?.addEventListener('click', closeCart)
    document?.addEventListener("DOMContentLoaded", renderCounter);
    document?.addEventListener("DOMContentLoaded", renderTotal);
    resetCartBtn?. addEventListener('click', resetCart)

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
