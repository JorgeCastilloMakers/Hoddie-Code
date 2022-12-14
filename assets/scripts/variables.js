//Array de productos
let products = [
    {
        id: 1,
        name: "Kangaroo Hoddie HTML",
        category: "Hoddie",
        price: 250,
        technologie: "html",
        collection: "frontend",
        size: ["small", "large", "medium"],
        img: "/assets/img/front/hoddie-html.png",
        imgBig: "/assets/img/front/hoodie-html-big.png",
        imgGallery1: "/assets/img/front/hoodie-html-gall1.png",
        imgGallery2: "/assets/img/front/hoodie-html-gall2.png",
        imgGallery3: "/assets/img/front/hoodie-html-gall3.png",
        imgGallery4: "/assets/img/front/hoodie-html-gall4.png",
    }, {
        id: 2,
        name: "T-Shirt CSS3",
        category: "T-Shirt",
        price: 100,
        technologie: "css3",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-css.png",
        imgBig: "/assets/img/front/tshirt-css-big.png",
        imgGallery1: "/assets/img/front/tshirt-css-gallery1.png",
        imgGallery2: "/assets/img/front/tshirt-css-gallery2.png",
        imgGallery3: "/assets/img/front/tshirt-css-gallery3.png",
        imgGallery4: "/assets/img/front/tshirt-css-gallery4.png",
    }, {
        id: 3,
        name: "Sweatshirt SASS",
        category: "sweatshirt",
        price: 200,
        technologie: "sass",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-sass.png",
        imgBig: "/assets/img/front/sweat-sass-big.png",
        imgGallery1: "/assets/img/front/sweat-sass-gallery1.png",
        imgGallery2: "/assets/img/front/sweat-sass-gallery2.png",
        imgGallery3: "/assets/img/front/sweat-sass-gallery3.png",
        imgGallery4: "/assets/img/front/sweat-sass-gallery4.png",
    }, {
        id: 4,
        name: "Kangaroo Hoddie UNITY",
        category: "Hoddie",
        price: 250,
        technologie: "unity",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-unity.png",
        imgBig: "/assets/img/front/hoodie-unity-big.png",
        imgGallery1: "/assets/img/front/hoodie-unity-gal1.png",
        imgGallery2: "/assets/img/front/hoodie-unity-gal2.png",
        imgGallery3: "/assets/img/front/hoodie-unity-gal3.png",
        imgGallery4: "/assets/img/front/hoodie-unity-gal4.png",
    }, {
        id: 5,
        name: "T-Shirt GATSBY",
        category: "T-Shirt",
        price: 100,
        technologie: "gatsby",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-gatsby.png",
        imgBig: "/assets/img/front/tshirt-gatsby-big.png",
        imgGallery1: "/assets/img/front/tshirt-gatsby-gallery1.png",
        imgGallery2: "/assets/img/front/tshirt-gatsby-gallery2.png",
        imgGallery3: "/assets/img/front/tshirt-gatsby-gallery3.png",
        imgGallery4: "/assets/img/front/tshirt-gatsby-gallery4.png",
    },{
        id: 6,
        name: "Kangaroo Hoddie REACT",
        category: "Hoddie",
        price: 250,
        technologie: "react",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-react.png",
        imgBig: "/assets/img/front/react-big.png",
        imgGallery1: "/assets/img/front/react-gallery1.png",
        imgGallery2: "/assets/img/front/react-gallery2.png",
        imgGallery3: "/assets/img/front/react-gallery3.png",
        imgGallery4: "/assets/img/front/react-gallery4.png"
    },{
        id: 7,
        name: "Sweatshirt REACT",
        category: "sweatshirt",
        price: 200,
        technologie: "react",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-react.png",
        imgBig: "/assets/img/front/sweat-react-big.png",
        imgGallery1: "/assets/img/front/sweat-react-gallery1.png",
        imgGallery2: "/assets/img/front/sweat-react-gallery2.png",
        imgGallery3: "/assets/img/front/sweat-react-gallery3.png",
        imgGallery4: "/assets/img/front/sweat-react-gallery4.png"
    },{
        id: 8,
        name: "Kangaroo Hoddie JAVASCRIPT",
        category: "Hoddie",
        price: 250,
        technologie: "javascript",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-js.png",
        imgBig: "/assets/img/front/hoodie-javascript-big.png",
        imgGallery1: "/assets/img/front/hoodie-javascript-gal1.png",
        imgGallery2: "/assets/img/front/hoodie-javascript-gal2.png",
        imgGallery3: "/assets/img/front/hoodie-javascript-gal3.png",
        imgGallery4: "/assets/img/front/hoodie-javascript-gall4.png",
    },{
        id: 9,
        name: "T-Shirt VUE-JS",
        category: "T-Shirt",
        price: 100,
        technologie: "vue-js",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-vue.png",
        imgBig: "/assets/img/front/tshirt-vue-big.png",
        imgGallery1: "/assets/img/front/tshirt-vue-gallery1.png",
        imgGallery2: "/assets/img/front/tshirt-vue-gallery2.png",
        imgGallery3: "/assets/img/front/tshirt-vue-gallery3.png",
        imgGallery4: "/assets/img/front/tshirt-vue-gallery4.png",
    },{
        id: 10,
        name: "Sweatshirt TYPESCRIPT",
        category: "sweatshirt",
        price: 200,
        technologie: "typescript",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-ts.png",
        imgBig: "/assets/img/front/sweat-ts-big.png",
        imgGallery1: "/assets/img/front/sweat-ts-gallery1.png",
        imgGallery2: "/assets/img/front/sweat-ts-gallery2.png",
        imgGallery3: "/assets/img/front/sweat-ts-gallery3.png",
        imgGallery4: "/assets/img/front/sweat-ts-gallery4.png",
    },{
        id: 11,
        name: "Sweatshirt RUBY",
        category: "sweatshirt",
        price: 200,
        technologie: "ruby",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/back/sweat-ruby.png",
        imgBig: "/assets/img/back/sweat-ruby-big.png",
        imgGallery1: "/assets/img/back/sweat-ruby-gallery1.png",
        imgGallery2: "/assets/img/back/sweat-ruby-gallery2.png",
        imgGallery3: "/assets/img/back/sweat-ruby-gallery3.png",
        imgGallery4: "/assets/img/back/sweat-ruby-gallery4.png",
    },{
        id: 12,
        name: "Kangaroo Hoddie JAVASCRIPT",
        category: "Hoddie",
        price: 250,
        technologie: "javascript",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-js-logo.png",
        imgBig: "/assets/img/back/hoddie-js-logo-big.png",
        imgGallery1: "/assets/img/back/javascript-b-gal1.png",
        imgGallery2: "/assets/img/back/javascript-b-gal2.png",
        imgGallery3: "/assets/img/back/javascript-b-gal3.png",
        imgGallery4: "/assets/img/back/javascript-b-gal4.png",
    },{
        id: 13,
        name: "Kangaroo Hoddie KOTLIN",
        category: "Hoddie",
        price: 250,
        technologie: "kotlin",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-kotlin.png",
        imgBig: "/assets/img/back/hoddie-kotlin-big.png",
        imgGallery1: "/assets/img/back/kotlin-gal1.png",
        imgGallery2: "/assets/img/back/kotlin-gal2.png",
        imgGallery3: "/assets/img/back/kotlin-gal3.png",
        imgGallery4: "/assets/img/back/kotlin-gal4.png",
    },{
        id: 14,
        name: "Kangaroo Hoddie PHP",
        category: "Hoddie",
        price: 250,
        technologie: "php",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-php.png",
        imgBig: "/assets/img/back/hoodie-php-big.png",
        imgGallery1: "/assets/img/back/php-gal1.png",
        imgGallery2: "/assets/img/back/php-gal2.png",
        imgGallery3: "/assets/img/back/php-gal3.png",
        imgGallery4: "/assets/img/back/php-gal4.png",
    },{
        id: 15,
        name: "Kangaroo Hoddie PYTHON",
        category: "Hoddie",
        price: 250,
        technologie: "python",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-python.png",
        imgBig: "/assets/img/back/hoddie-python-big.png",
        imgGallery1: "/assets/img/back/python-gal1.png",
        imgGallery2: "/assets/img/back/python-gal2.png",
        imgGallery3: "/assets/img/back/python-gal3.png",
        imgGallery4: "/assets/img/back/python-gal4.png",
    },{
        id: 16,
        name: "T-Shirt C#",
        category: "T-Shirt",
        price: 100,
        technologie: "c#",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-c.png",
        imgBig: "/assets/img/back/tshirt-c-big.png",
        imgGallery1: "/assets/img/back/tshirt-c-gallery1.png",
        imgGallery2: "/assets/img/back/tshirt-c-gallery2.png",
        imgGallery3: "/assets/img/back/tshirt-c-gallery3.png",
        imgGallery4: "/assets/img/back/tshirt-c-gallery4.png",
    },{
        id: 17,
        name: "T-Shirt C++",
        category: "T-Shirt",
        price: 100,
        technologie: "c++",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-c++.png"
    },{
        id: 18,
        name: "T-Shirt MYSQL",
        category: "T-Shirt",
        price: 100,
        technologie: "mysql",
        collection: "Backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-mysql.png"
    },{
        id: 19,
        name: "Kangaroo Hoddie MONGODB",
        category: "Hoddie",
        price: 250,
        technologie: "mongodb",
        collection: "Backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoodie-mongo.png",
        imgBig: "/assets/img/back/hoddie-mongo-big.png",
        imgGallery1: "/assets/img/back/mongo-gal1.png",
        imgGallery2: "/assets/img/back/mongo-gal2.png",
        imgGallery3: "/assets/img/back/mongo-gal3.png",
        imgGallery4: "/assets/img/back/mongo-gal4.png",
    },{
        id: 20,
        name: "Snapback REACT",
        category: "Snapback",
        price: 50,
        technologie: "react",
        collection: "Frontend",
        size: "Only size",
        img: "/assets/img/front/snapback-react.png",
        imgBig: "/assets/img/front/snapback-react-big.png",
        imgGallery1: "/assets/img/front/snapback-react-gallery1.png",
        imgGallery2: "/assets/img/front/snapback-react-gallery2.png",
        imgGallery3: "/assets/img/front/snapback-react-gallery3.png",
        imgGallery4: "/assets/img/front/snapback-react-gallery4.png",
    },{
        id: 21,
        name: "Snapback Sass",
        category: "Snapback",
        price: 50,
        technologie: "sass",
        collection: "Frontend",
        size: "Only size",
        img: "/assets/img/front/snapback-sass.png",
        imgBig: "/assets/img/front/snapback-sass-big.png",
        imgGallery1: "/assets/img/front/snapback-sass-gallery1.png",
        imgGallery2: "/assets/img/front/snapback-sass-gallery2.png",
        imgGallery3: "/assets/img/front/snapback-sass-gallery3.png",
        imgGallery4: "/assets/img/front/snapback-sass-gallery4.png",
    }];

const latestProducts = document.getElementById('latestProducts') //Contenedor productos home
const productsContainer = document.getElementById('products_container');// Contenedor productos pagina de collecion
const breadCrumbs = document.getElementById('collectionFilter');// Conteneder de enlaces migas de pan
const filtros = document.getElementById('filters');//Contenedor de filtros
const template = document.getElementById('template');//Contenedor template de pagina de producto
const selectSize = document.getElementById('selectSize')//Select de la pagina de producto
const option1 = document.getElementById('option1')//Option de select Size
const option2 = document.getElementById('option2')//Option de select Size
const option3 = document.getElementById('option3')//Option de select Size
const option4 = document.getElementById('option4')//Option de select Size
const option5 = document.getElementById('option5')//Option de select Size
let cart = JSON.parse(localStorage.getItem("cart")) || [];//LS
const lightBoxContainer = document.querySelector('.lightBox_container')//Caja overlay de galeria de imagenes producto

//Menu mobile
const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

//CART Menu
const cartIcon = document.getElementById('cart-icon');
const cartMenu = document.getElementById('cart-menu');
const btnCloseCart = document.getElementById('close-cart')
const cartProducts = document.getElementById('cartProducts')
const totalCart = document.getElementById('total')
const countCart = document.getElementById('counter')
const resetCartBtn = document.getElementById('empty-cart')

const message = document.querySelector('.add-message')//Container mensaje producto agregado
const btnFilter = document.getElementById('btn-filter')//boton filtrar
const btnFilterReset = document.getElementById('btn-filter-reset')//Boton reset filtros

//Register Form
const formRegister = document.getElementById('register-form');
const nameUser = document.getElementById('nameUser');
const emailUser = document.getElementById('emailUser');
const addressUser = document.getElementById('addressUser');
const passwordUser = document.getElementById('passwordUser');
const registerError = document.getElementById('register-error');
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')

//Login Form
const formLogin = document.getElementById('login-form');
const emailInput = document.getElementById('emailUser');
const passwordInput = document.getElementById('passwordUser');
const loginError = document.getElementById('login-error');

//Avatar 
const avatar = document.getElementById('avatarLogo');
const nameAcount = document.getElementById('nameAcount');

//Checkout
const checkoutModal = document.getElementById('checkout-modal');
const btnContainer = document.getElementById('btn-add')

