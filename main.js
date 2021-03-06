const toggleBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navIcons = document.querySelector('.nav__icons');

toggleBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('active');
    navIcons.classList.toggle('active');
});