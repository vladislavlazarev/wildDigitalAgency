let activePage;
let k=0;
let firstLink = document.getElementById('firstLink');
let secondLink = document.getElementById('secondLink');
let thirdLink = document.getElementsByClassName('thirdLink')[0];
let fourthLink = document.getElementById('fourthLink');
console.log(firstLink, secondLink, thirdLink,fourthLink);
function zero() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    firstLink.classList.add('-active');
}
function first() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    secondLink.classList.add('-active');
}
}
function second() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    thirdLink.classList.add('-active');
}
}
function third() {
    document.getElementsByClassName('-active')[0].classList.remove('-active');
    fourthLink.classList.add('-active');
}
}
function detectPage() {
    switch (k) {
        case 0: zero();
            break;
        case 1: first();
            break;
        case 2: second();
            break;
        case 3: third();
            break;
    }

}
