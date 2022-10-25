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
