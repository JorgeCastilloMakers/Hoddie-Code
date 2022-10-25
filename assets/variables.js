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
        imgGallery1: "/assets/img/front/hoodie-html-gallery1.png",
        imgGallery2: "/assets/img/front/hoodie-html-gallery2.png",
        imgGallery3: "/assets/img/front/hoodie-html-gallery3.png",
        imgGallery4: "/assets/img/front/hoodie-html-gallery4.png",
    }, {
        id: 2,
        name: "T-Shirt CSS3",
        category: "T-Shirt",
        price: 100,
        technologie: "css3",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-css.png"
    }, {
        id: 3,
        name: "Sweatshirt SASS",
        category: "sweatshirt",
        price: 200,
        technologie: "sass",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-sass.png"
    }, {
        id: 4,
        name: "Kangaroo Hoddie UNITY",
        category: "Hoddie",
        price: 250,
        technologie: "unity",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-unity.png"
    }, {
        id: 5,
        name: "T-Shirt GATSBY",
        category: "T-Shirt",
        price: 100,
        technologie: "gatsby",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-gatsby.png"
    },{
        id: 6,
        name: "Kangaroo Hoddie REACT",
        category: "Hoddie",
        price: 250,
        technologie: "react",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-react.png"
    },{
        id: 7,
        name: "Sweatshirt REACT",
        category: "sweatshirt",
        price: 200,
        technologie: "react",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-react.png"
    },{
        id: 8,
        name: "Kangaroo Hoddie JAVASCRIPT",
        category: "Hoddie",
        price: 250,
        technologie: "javascript",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/hoddie-js.png"
    },{
        id: 9,
        name: "T-Shirt VUE-JS",
        category: "T-Shirt",
        price: 100,
        technologie: "vue-js",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/front/tshirt-vue.png"
    },{
        id: 10,
        name: "Sweatshirt TYPESCRIPT",
        category: "sweatshirt",
        price: 200,
        technologie: "typescript",
        collection: "frontend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/front/sweat-ts.png"
    },{
        id: 11,
        name: "Sweatshirt RUBY",
        category: "sweatshirt",
        price: 200,
        technologie: "ruby",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large", "extra-extra-large"],
        img: "/assets/img/back/sweat-ruby.png"
    },{
        id: 12,
        name: "Kangaroo Hoddie JAVASCRIPT",
        category: "Hoddie",
        price: 250,
        technologie: "javascript",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-js-logo.png"
    },{
        id: 13,
        name: "Kangaroo Hoddie KOTLIN",
        category: "Hoddie",
        price: 250,
        technologie: "kotlin",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-kotlin.png"
    },{
        id: 14,
        name: "Kangaroo Hoddie PHP",
        category: "Hoddie",
        price: 250,
        technologie: "php",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-php.png"
    },{
        id: 14,
        name: "Kangaroo Hoddie PYTHON",
        category: "Hoddie",
        price: 250,
        technologie: "python",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-python.png"
    },{
        id: 15,
        name: "T-Shirt C#",
        category: "T-Shirt",
        price: 100,
        technologie: "c#",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-c.png"
    },{
        id: 16,
        name: "T-Shirt C++",
        category: "T-Shirt",
        price: 100,
        technologie: "c++",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-c++.png"
    },{
        id: 17,
        name: "T-Shirt MYSQL",
        category: "T-Shirt",
        price: 100,
        technologie: "mysql",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/tshirt-mysql.png"
    },{
        id: 18,
        name: "Kangaroo Hoddie MONGODB",
        category: "Hoddie",
        price: 250,
        technologie: "mongodb",
        collection: "backend",
        size: ["small", "large", "medium", "extra-large"],
        img: "/assets/img/back/hoddie-mongo.png"
    },{
        id: 19,
        name: "Snapback REACT",
        category: "Snapback",
        price: 200,
        technologie: "react",
        collection: "frontend",
        size: null,
        img: "/assets/img/front/snapback-react.png"
    }];

const productsContainer = document.getElementById('products_container');

const breadCrumbs = document.getElementById('collectionFilter');

const filtros = document.getElementById('filters');

const template = document.getElementById('template');

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const btnContainer = document.getElementById('btn-add')

const lightBoxContainer = document.querySelector('.lightBox_container')

const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

