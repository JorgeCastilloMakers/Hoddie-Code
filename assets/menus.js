const openMenu = () =>  {
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}

const closeMenu = (e) => {
    if(e.target.id !== "menu" && e.target.id !== "icon"){
        icon.classList.remove('active');
        menu.classList.remove('active');
    }
}
const openCart = () =>  {
    cartIcon.classList.toggle('open-cart');
    cartMenu.classList.toggle('open-cart');
}

const closeCart = (e) => {
    if(e.target.id !== "cart-menu" && e.target.id !== "cart-icon"){
        cartIcon.classList.remove('open-cart');
        cartMenu.classList.remove('open-cart');
    }
}