let mainLis = document.querySelectorAll(".header .main-nav li a");
let mainMega = document.querySelector(".header .main-nav li .mega-menu");
let landing = document.querySelector(".landing");
let body = document.querySelector(".body");
let megaMenu = mainLis[3];


megaMenu.addEventListener("click", () =>{ 
    mainMega.classList.toggle("open")
    })  


