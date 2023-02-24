document.querySelector(".content_bars").addEventListener("click", animateBars);
document.querySelector(".content_bars").addEventListener("click", animateNavs);


let toolsPorcent = document.querySelectorAll('.old');
function movePorcent() {
    toolsPorcent.forEach((item) =>
    item.style.animation = 'mover 2s ease-out');   
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('activate'));
    this.classList.add('activate');
}
list.forEach((item) =>
item.addEventListener('click', activeLink)
)

var navContiner = document.querySelector(".content_item_menu");
var line1 = document.querySelector(".line1__bars-menu");
var line2 = document.querySelector(".line2__bars-menu");
var line3 = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");
}

function animateNavs() {
    navContiner.classList.toggle("activenav__menu--click");
}

/////fijando menú

window.addEventListener('scroll', function() {
    let fixedMenu = document.querySelector('.content_bars');
    let unFixed = document.querySelector('.menu');
    let changeAbout = document.getElementById('init_about');
    let changeFolio = document.getElementById('init_porfolio');
    let changeContact = document.getElementById('init_porfolio');
   

    let positionMenu = fixedMenu.getBoundingClientRect().top;
    let unFixedMenu = unFixed.getBoundingClientRect().top;

    let positionAbout = changeAbout.getBoundingClientRect().top;
    let positionFolio = changeFolio.getBoundingClientRect().top;
    let positionContact = changeContact.getBoundingClientRect().top;

    let heightWind = window.innerHeight/5.5;


    if(unFixedMenu > heightWind) {
        fixedMenu.classList.remove('active_fixed');
        navContiner.classList.remove('active_fixed_nav');
    }else {
        if(positionMenu < heightWind) {
            fixedMenu.classList.add('active_fixed');
            navContiner.classList.add('active_fixed_nav');
            movePorcent();
        }
    }

    if(positionContact < -590) {
        list.forEach((item) =>
        item.classList.remove('activate'));
        list[3].classList.add('activate')
    } else {
        if(positionFolio < 60) {
            list.forEach((item) =>
            item.classList.remove('activate'));
            list[2].classList.add('activate')
        } else {
            if(positionAbout < 60) {
                list.forEach((item) =>
                item.classList.remove('activate'));
                list[1].classList.add('activate')
            } else {
                list.forEach((item) =>
                item.classList.remove('activate'));
                list[0].classList.add('activate')
            }
        }
    }


    
})
