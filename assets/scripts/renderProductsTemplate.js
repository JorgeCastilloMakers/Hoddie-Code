
//Render de template pagina de producto
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
            <button class="quantity-btn minus down" data-id="${id}" >-</button>
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

//Funcion render para filtrar las medidas de cada producto
const renderSize = (sizeArr) => {
    if (sizeArr === "Only size"){

        option1.textContent = `Only Size`
        option1.value = `${sizeArr}`
        option2.remove();
        option3.remove();
        option4.remove();
        option5.remove();
        
        return
    }
    const [size1, size2, size3, size4, size5] = sizeArr;

    option1.textContent = `${size1}`
    option2.textContent = `${size2}`
    option3.textContent = `${size3}`
    option4.textContent = `${size4}`
    option5.textContent = `${!size5 ? "": size5}`
    option1.value = `${!size1 ? option1.remove(): size1}`
    option2.value = `${!size2 ? option2.remove(): size2}`
    option3.value = `${!size3 ? option3.remove(): size3}`
    option4.value = `${!size4 ? option4.remove(): size4}`
    option5.value = `${!size5 ? option5.remove(): size5}`

}

//Funciones para aumentar cantidad de producto a agregar en pagina de producto
const templatePlusBtn = () => {

    quantity= quantity + 1
    document.getElementById('root').innerText = quantity
    const btnMinus =  document.querySelector('.minus');
    btnMinus.removeAttribute("disabled")
    return quantity

  };
const templateMinusBtn = () => {
    quantity= quantity - 1
    document.getElementById('root').innerText = quantity
    if(quantity === 0){
      const btnMinus =  document.querySelector('.minus');
      btnMinus.setAttribute("disabled", "true")
    }
    return quantity
  };

//Funciones para abrir y cerrar galeria de producto
const closeGallery = () =>{

    lightBoxContainer.style.display = "none"
}
const openGallery = () =>{
    lightBoxContainer.style.display = "block"
}
//Manejador de size
const changeSize = () => {
    let size = selectSize.options[selectSize.options.selectedIndex].value
    return size

}