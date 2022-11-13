
new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './assets/img/bg1.png',
    image2: './assets/img/bg2.png',
    displacementImage: './assets/img/bg2.png',
    imagesRatio: 330/300
})




new hoverEffect({
    parent: document.querySelector('.front-wrapper'),
    intensity: 0.3,
    image1: '/assets/img/fron1.png',
    image2: '/assets/img/fron2.png',
    displacementImage: '/assets/img/fron1.png',
    imagesRatio: 1080/1920
})

new hoverEffect({
    parent: document.querySelector('.back-wrapper'),
    intensity: 0.3,
    image1: '/assets/img/back1.png',
    image2: '/assets/img/back2.png',
    displacementImage: '/assets/img/back2.png',
    imagesRatio: 1080/1920
})

//text
TweenMax.from(".text h1 .hidetext", 1.5, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from(".text h5", 1.5, {
    delay: 1.2,
    opacity: 0,
    x: "-1000",
    ease: Expo.easeInOut
});

TweenMax.from(".text h2", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-1000",
    ease: Expo.easeInOut
});

TweenMax.from(".distortion", 1.5, {
    delay: 2,
    opacity: 0,
    y: "-20",
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut
}, 0.08);

TweenMax.to(".first", 1.5, {
    delay: .5,
    top: "-100%",
    ease: Expo.easeInOut
});
TweenMax.to(".second", 1.5, {
    delay: .7,
    top: "-100%",
    ease: Expo.easeInOut
});
TweenMax.to(".third", 1.5, {
    delay: .9,
    top: "-100%",
    ease: Expo.easeInOut
});


//collections
