/*------------------------ slider ------------------------*/
const items = document.querySelectorAll('.slider img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active')

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

let infiniteSlideInterval = setInterval(slideSuivante, 3000);

function stopInfiniteSlide() {
    clearInterval(infiniteSlideInterval);
}

function startInfiniteSlide() {
    infiniteSlideInterval = setInterval(slideSuivante, 3000);
}

document.addEventListener("mouseenter", stopInfiniteSlide);
document.addEventListener("mouseleave", startInfiniteSlide);

/*------------------------ menu déroulant ------------------------*/

const hamburgerButton = document.querySelector('.nav-toggler')
const navigation = document.querySelector('.nav-menu')

hamburgerButton.addEventListener('click', toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('active')
}