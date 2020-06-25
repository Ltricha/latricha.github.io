const navButton = document.querySelector('.l-nav-main__button');
const navList = document.querySelector('.l-nav-main__list');

navButton.addEventListener('click', () => {
    navList.classList.toggle('is-open');
});