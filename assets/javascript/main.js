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
const rejects = $$('.btn__reject');

// 1 scrollTop
const headerHeight = header.offsetHeight;
document.onscroll = function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const newHeight = headerHeight - scrollTop;

    header.style.height = newHeight > 0 ? newHeight + 'px' : 0;
    header.style.opacity = newHeight / headerHeight;
};

// 2 stopPropagation
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

for(const reject of rejects) {
    reject.onclick = function() {
        closeRegister();
        closeLogin();
    }
}

// 3 change to
const navbarLinks = $$('.navbar__link');
const contentMains = $$('.content__main');
const navbarLinkActive = $('.navbar__link.active');
navbarLinks.forEach((navbarLink, index) => {
    const contentMain = contentMains[index];

    navbarLink.onclick = function() {
        $('.navbar__link.active').classList.remove('active');
        $('.content__main.active').classList.remove('active');

        this.classList.add('active');
        contentMain.classList.add('active');
    };
});