const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// creat variable
const header = $('.header');
const navbar = $('.navbar');
const register = $('.register');
const modalRegister = $('.modal__register');
const login = $('.login');
const modalLogin = $('.modal__login');
const modalBodys = $$('.modal__body');

// scrollTop
const headerHeight = header.offsetHeight;
document.onscroll = function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const newHeight = headerHeight - scrollTop;

    header.style.height = newHeight > 0 ? newHeight + 'px' : 0;
    header.style.opacity = newHeight / headerHeight;
};

// stopPropagation
for(const modalBody of modalBodys) {
    modalBody.onclick = function(e) {
        e.stopPropagation();
    }
}
// display register
function showRegister() {
    modalRegister.classList.add('open');
}
function closeRegister() {
    modalRegister.classList.remove('open');
}
register.onclick = function() {
    showRegister();
}
modalRegister.onclick = function() {
    closeRegister();
}

// display login
function showLogin() {
    modalLogin.classList.add('open');
}
function closeLogin() {
    modalLogin.classList.remove('open');
}
login.onclick = function() {
    showLogin();
}
modalLogin.onclick = function() {
    closeLogin();
}