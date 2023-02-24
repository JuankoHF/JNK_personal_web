document.getElementById('left').addEventListener('click', toLeft);
document.getElementById('right').addEventListener('click', toRight);
let slider = document.querySelector('.slider_items');
let inShow = document.querySelector('.count');
let actualSlider = document.querySelectorAll('.slider_container');
let count = 1;
let width = actualSlider[0].clientWidth;
let interval = 8000;

/// slider pequeño

const imgArray = [
    './img/p2Yard.jpg',
    './img/p3Vodafone.jpg',
    './img/p4Marvel.jpg',
    './img/p5Tareas.jpg',
    './img/p6R&M.jpg',
    './img/p1chef.jpg'
]

let img = document.getElementById('img_portatil');
let i = 0;

const slideShow = () => {
    img.src = imgArray[i];
    i = ( i < imgArray.length - 1) ? i+1 : 0;

    inShow.innerText = '0'+(i + 1) + " - 06";
}

//slider pequeño

window.addEventListener('resize', function(){
    width = actualSlider[0].clientWidth;
})

setInterval(function() {
    slides();
    slideShow();
},interval);

function slides() {
    slider.style.transform = 'translate('+(-width*count)+'px)';
    slider.style.transition = 'transform 1s';
    count++;

    if(count == actualSlider.length){
        setTimeout(function(){
            
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
            count = 1;
        },1500)
    }
}

function toLeft() {
    
    if(i != 0 || count != 1){
        let j = 0;
        count --;
        slider.style.transform = 'translate('+(width - width*count )+'px)';
        (i == 1) ? (j=5) : j = i-2;
        i --;
        img.src = imgArray[j];

    }
}

function toRight() {
    
    slider.style.transform = 'translate('+(- width*count )+'px)';
    count++;
    img.src = imgArray[i];
    i++;
    
   
}