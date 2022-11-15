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
    cartMenu.classList.toggle('open-cart-cart');

}

const closeCart = (e) => {
    if(e.target.classList.contains('close')){
        cartIcon.classList.remove('open-cart');
        cartMenu.classList.remove('open-cart-cart');
    }

}
