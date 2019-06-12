let k=0;
let firstLink = document.getElementById('firstLink');
let secondLink = document.getElementById('secondLink');
let thirdLink = document.getElementById('thirdLink');
let fourthLink = document.getElementById('fourthLink');
let arrow = document.getElementsByClassName('fixedArrow')[0];
let particle = document.getElementsByClassName('particle');

function firstParticle() {
    particle[0].classList.add('-activeParticle');
}
firstParticle();
function zero() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    firstLink.classList.add('-active');
    document.getElementsByClassName('-activeParticle')[0].classList.remove('-activeParticle');
    particle[0].classList.add('-activeParticle');
}
function first() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    secondLink.classList.add('-active');
    document.getElementsByClassName('-activeParticle')[0].classList.remove('-activeParticle');
    particle[1].classList.add('-activeParticle');
}
function second() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    thirdLink.classList.add('-active');
    document.getElementsByClassName('-activeParticle')[0].classList.remove('-activeParticle');
    particle[2].classList.add('-activeParticle');
}
function third() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    fourthLink.classList.add('-active');
    document.getElementsByClassName('-activeParticle')[0].classList.remove('-activeParticle');
    particle[3].classList.add('-activeParticle');
}
function activatesidebar(){
    document.getElementsByClassName('sidebar')[0].classList.add('active-sidebar');
}
function disactivateidebar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('active-sidebar');
}
function detectPage() {
    switch (k) {
        case 0:
            zero();
            break;
        case 1:
            first();
            break;
        case 2:
            second();
            break;
        case 3:
            third();
            break;
    }
}
function arrowDown() {
    switch (k) {
        case 0: arrow.href = '#about';
            k=1;
         break;
        case 1: arrow.href = '#mark';
            k=2;
            break;
        case 2: arrow.href = '#ad';
            k=3;
            break;
        case 3: arrow.href = '#home';
            k=0;
            break;
    }
}