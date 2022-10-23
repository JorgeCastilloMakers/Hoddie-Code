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
        <button 
        data-id="${id}"
        data-name="${name}"
        data-price="${price}"
        data-size="${size}"
        data-img="${img}"
        data-technologie="${technologie}">Add to cart</button>
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

const renderProductTemplate = (product) =>{
    renderSize(product[0].size)
    const { id, name, category, price, technologie, img } = product[0]
    breadCrumbs.innerHTML = `<a href="/assets/products.html?type=${tipo}">${tipo}</a>/${name}`
    document.getElementById('productName').textContent = `${name}`
    document.getElementById('productCategory').textContent = `Hoodie Code ${category}`
    document.getElementById('productPrice').textContent = `$${price}`
    document.getElementById('productImageBig').innerHTML = `<img class=".materialboxed" src="${img}" alt="">`
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
    quantityContainer = document.getElementById('cantidad')
    quantityContainer.addEventListener('click', handleQuantity)
}

const renderSize = (sizeArr) => {
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
    cart = [...cart, { ...product, }];
  };
const productData = (id, name, price, img, size, quantity) => {
    return { id, name, price, img, size, quantity };
  };
const addCart = (e) => {
    if (!e.target.classList.contains("add-cart-btn")) return;
    
    let { id, name, price, img, size, quantity} = e.target.dataset;
    let product = productData(id, name, price, img, size, quantity = Number(document.getElementById('root').textContent));
    
    console.log(product.quantity)
    product.size = changeSize()
    if (existingCartProduct(product)) {
        
        addUnitProductFromTemplate(product);
      } else {
        createCartProduct(product);
      }
    saveLocalStorage()
}

const init = () => {
    window?.addEventListener("DOMContentLoaded", renderFilters)
    window?.addEventListener("DOMContentLoaded", filterType)
    breadCrumbs.innerText = `${tipo}${!idProduct? "": "/Product-"+idProduct}`
    window?.addEventListener("DOMContentLoaded", filterTemplate)
    btnContainer.addEventListener('click', addCart)
    window?.addEventListener('DOMContentLoaded', changeSize)
    
}

init()
