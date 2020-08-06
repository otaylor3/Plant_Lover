const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const menuNav = document.querySelector('.links');
let navigate = false;
menuBtn.addEventListener('click', () => {
    if (!navigate) {
        menuNav.classList.add('after');
        navigate = true;
    }
    else {
        menuNav.classList.remove('after');
        navigate = false;
    }
} );
