
const urlNav = window.location.search;
const urlParams = new URLSearchParams(urlNav);

//Accedemos a los valores
let tipo = urlParams.get("type");
let idProduct = urlParams.get("id");


