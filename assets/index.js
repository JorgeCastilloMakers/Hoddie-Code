const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

const renderFilters = () => {
    if (tipo === "Backend"){
        filters.innerHTML = `
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value="kanguroo-hoddie">Kangoroo Hoddie</option>
            <option value="sweatshirt">Sweatshirt</option>
            <option value="t-shirt">T-Shirt</option>
        </select>
        <label for="size">Size</label>
        <select name="size" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
            <option value="extra-extra-large">Extra Extra Large</option>
        </select>
        <label for="technologies">Technologies</label>
        <select name="technologies" id="technologies">
            <option value="php">PHP</option>
            <option value="mysql">MYSQL</option>
            <option value="kotlin">KOTLIN</option>
            <option value="c#">C#</option>
            <option value="ruby">RUBY</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="c++">C++</option>
            <option value="python">PYTHON</option>
            <option value="mongodb">MONGODB</option>
        </select>
        <button>Reset Filter</button>
        <button>Filter</button>
        `
        return
    }else if (tipo === "Frontend"){
        filters.innerHTML = `
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value="kanguroo-hoddie">Kangoroo Hoddie</option>
            <option value="sweatshirt">Sweatshirt</option>
            <option value="t-shirt">T-Shirt</option>
        </select>
        <label for="size">Size</label>
        <select name="size" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
            <option value="extra-extra-large">Extra Extra Large</option>
        </select>
        <label for="technologies">Technologies</label>
        <select name="technologies" id="technologies">
            <option value="html">HTML</option>
            <option value="css3">CSS3</option>
            <option value="react">REACT</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="vue-js">VUE JS</option>
            <option value="unity">UNITY</option>
            <option value="sass">SASS</option>
            <option value="typescript">TYPESCRIPT</option>
            <option value="gatsby">GATSBY</option>
        </select>
        <button>Reset Filter</button>
        <button>Filter</button>
        `
    }
}

const renderCardProducts = async (lista) => {
    const { id, name, category, price, technologie, size, img } = await lista
    console.log(lista)
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
        data-technologie="${technologie}">${!size ? "Add to cart" : "View options"}</button>
        </div>
        `
}

const filterType = () => {
    const productsList = products.filter(
        (product) => product.collection.toUpperCase() === tipo.toUpperCase()
      );
    productsContainer.innerHTML = "";
    productsList.map(renderCardProducts).join("");
}

let quantity = 1;

const closeGallery = () =>{

    lightBoxContainer.style.display = "none"
}
const openGallery = () =>{
    lightBoxContainer.style.display = "block"
}
const renderProductTemplate = (product) =>{
    lightBoxContainer.style.display = "none"
    renderSize(product[0].size)
    const { id, name, category, price, technologie, img, imgBig, imgGallery1, imgGallery2, imgGallery3, imgGallery4 } = product[0]
    breadCrumbs.innerHTML = `<a href="/assets/products.html?type=${tipo}">${tipo}</a>/${name}`
    document.getElementById('productName').textContent = `${name}`
    document.getElementById('productCategory').textContent = `Hoodie Code ${category}`
    document.getElementById('productPrice').textContent = `$${price}`
    document.getElementById('productImageBig').innerHTML = `<img class=".materialboxed" src="${imgBig}" alt="">`
    document.querySelector('.add-cart').innerHTML = `
            <div class="quantity" id="cantidad">
            <button class="quantity-btn down" data-id="${id}">-</button>
            <h2 id="root">1</h2>
            <button class="quantity-btn up" data-id="${id}">+</button>
            </div>
            <button class="add-cart-btn" data-id="${id}"
            data-name="${name}"
            data-price="${price}"
            data-img="${img}"
            data-technologie="${technologie}"
            data-quantity="${quantity}">
            <i class="fa-solid fa-cart-shopping"></i>
            Add to cart
            </button>
    `
    document.querySelector('.image-product-galery').innerHTML = `
            <a href="#image2" class="open">
                <img src="${imgGallery2}" alt="">
            </a>
            <a href="#image3" class="open">
                <img src="${imgGallery3}" alt="">
            </a>
            <a href="#image4" class="open">
                <img src="${imgGallery4}" alt="">
            </a>
            <a href="#image5" class="open">
                <img src="${imgGallery1}" alt="">
            </a>    
    `

    lightBoxContainer.innerHTML = `
    <article class="light-box" id="image1">
        <a href="#image5" class="next"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="${imgBig}" alt="">
        <a href="#image2" class="next"><i class="fa-solid fa-arrow-right"></i></a>
        <a class="close"><i class="fa-solid fa-xmark"></i></a>
    </article>
    <article class="light-box" id="image2">
        <a href="#image1" class="next"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="${imgGallery2}" alt="">
        <a href="#image3" class="next"><i class="fa-solid fa-arrow-right"></i></a>
        <a class="close"><i class="fa-solid fa-xmark"></i></a>
    </article>
    <article class="light-box" id="image3">
        <a href="#image2" class="next"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="${imgGallery3}" alt="">
        <a href="#image4" class="next"><i class="fa-solid fa-arrow-right"></i></a>
        <a class="close"><i class="fa-solid fa-xmark"></i></a>
    </article>
    <article class="light-box" id="image4">
        <a href="#image3" class="next"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="${imgGallery4}" alt="">
        <a href="#image5" class="next"><i class="fa-solid fa-arrow-right"></i></a>
        <a class="close"><i class="fa-solid fa-xmark"></i></a>
    </article>
    <article class="light-box" id="image5">
        <a href="#image4" class="next"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="${imgGallery1}" alt="">
        <a href="#image1" class="next"><i class="fa-solid fa-arrow-right"></i></a>
        <a class="close"><i class="fa-solid fa-xmark"></i></a>
    </article>
    `
    closeBtnGallery = document.querySelectorAll('.close')
    openBtnGallery = document.querySelectorAll('.open')
    quantityContainer = document.getElementById('cantidad')
    quantityContainer.addEventListener('click', handleQuantity)
    arrClose = [closeBtnGallery];
    arrClose[0].forEach(e => {
        e.addEventListener('click', closeGallery)
    });
    arrOpen = [openBtnGallery];
    arrOpen[0].forEach(e => {
        e.addEventListener('click', openGallery)
    });

}

const renderSize = (sizeArr) => {
    if (sizeArr === null){
        document.getElementById('option1').textContent = `Only Size`
        document.getElementById('option1').value = `${sizeArr}`
        return
    }
    const [size1, size2, size3, size4, size5] = sizeArr;
    document.getElementById('option1').textContent = `${size1}`
    document.getElementById('option2').textContent = `${size2}`
    document.getElementById('option3').textContent = `${size3}`
    document.getElementById('option4').textContent = `${size4}`
    document.getElementById('option5').textContent = `${!size5 ? "": size5}`
    document.getElementById('option1').value = `${size1}`
    document.getElementById('option2').value = `${size2}`
    document.getElementById('option3').value = `${size3}`
    document.getElementById('option4').value = `${size4}`
    document.getElementById('option5').value = `${!size5 ? "": size5}`

}
const changeSize = () => {
    let selectSize = document.getElementById('selectSize')
    let size = selectSize.options[selectSize.options.selectedIndex].value
    return size

}
const filterTemplate = () => {
    let productFilter = products.filter((producto) => producto.id === Number(idProduct));
    renderProductTemplate(productFilter)
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
const templatePlusBtn = (id) => {

    quantity= quantity + 1
    document.getElementById('root').innerText = quantity
    return quantity

  };
const templateMinusBtn = (id) => {

    quantity= quantity - 1
    document.getElementById('root').innerText = quantity
    if(quantity === 0){
        document.querySelector('.down').disabled = true
    }else if (quantity > 0){
        document.querySelector('.down').disabled = false
    }
    return quantity
  };

const handleQuantity = (e) => {
    if (e.target.classList.contains("down")) {
      templateMinusBtn(e.target.dataset.id);
    } else if (e.target.classList.contains("up")) {
        templatePlusBtn(e.target.dataset.id);
    }

}; 

const createCartProduct = (product) => {
    cart = [...cart, { ...product, quantity: 1 }];
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
        
        addUnitProductFromTemplate(product);
        showMessage("Added a unit from this product")
      } else {
        createCartProduct(product);
        showMessage("Product Added to cart")
      }
    saveLocalStorage()
    renderCounter()
    renderCart();
}

const addCartFromProductsList = (e) =>{
    if (!e.target.classList.contains("add-cart")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity);
    console.log(e.target.dataset.size)
    if (product.size == "null"){
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
    }else if(product.size != "null"){
        location.href = `/assets/productTemplate.html?type=${tipo}&id=${product.id}`
    }
}

const addCartFromHome = (e) =>{
    if (!e.target.classList.contains("add-cart-from-home")) return;
    
    let { id, name, price, img, size, quantity, collection} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity, collection);
    console.log(e.target.dataset.size)
    if (product.size == "null"){
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
    console.log(count)
    countCart.innerText = count
}

const init = () => {
    icon?.addEventListener('click', openMenu)
    document?.addEventListener('click', closeMenu)
    cartIcon?.addEventListener('click', openCart)
    document?.addEventListener('click', closeCart)
    document.addEventListener("DOMContentLoaded", renderCounter);
    document.addEventListener("DOMContentLoaded", renderCartProduct);
    document.addEventListener("DOMContentLoaded", renderCart(cart));
    document?.addEventListener("DOMContentLoaded", findLatest)
    latestProducts?.addEventListener('click', addCartFromHome)
    document?.addEventListener("DOMContentLoaded", renderFilters)
    document?.addEventListener("DOMContentLoaded", filterType)
    breadCrumbs.innerText = `${tipo}${!idProduct? "": "/Product-"+idProduct}`
    document?.addEventListener("DOMContentLoaded", filterTemplate)
    btnContainer?.addEventListener('click', addCart)
    document?.addEventListener('DOMContentLoaded', changeSize)
    productsContainer?.addEventListener('click', addCartFromProductsList)

}

init()
