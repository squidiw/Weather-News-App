let header = document.querySelector('header');

let images = [
    "url(imgs/1.jpg)",
    "url(imgs/2.jpg)",
    "url(imgs/3.jpg)",
    "url(imgs/4.jpg)",
    "url(imgs/5.jpg)",
    "url(imgs/6.jpg)",
    "url(imgs/7.jpg)",
    "url(imgs/8.jpg)",
    "url(imgs/9.jpg)",
    "url(imgs/10.jpg)",
    "url(imgs/11.jpg)",
    "url(imgs/12.jpg)"
]

setInterval(function(){
    let bg = images[Math.floor(Math.random() * images.length ) ];
    header.style.background = bg;
    header.style.backgroundSize = 'cover';
    header.style.backgroundRepeat = 'no-repeat';
}, 5000);