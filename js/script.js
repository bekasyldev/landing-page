document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('header__mobile-toggle--active');
        menu.classList.toggle('header__menu--active');
        body.style.overflow = menu.classList.contains('header__menu--active') ? 'hidden' : ''; // Prevent scrolling when menu is open
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.header__menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('header__mobile-toggle--active');
            menu.classList.remove('header__menu--active');
            body.style.overflow = '';
        });
    });
});