const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primarynav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    primarynav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', 'false')
    : navToggle.setAttribute('aria-expanded', 'true');

    primarynav.toggleAttribute('data-visible');

    primaryHeader.toggleAttribute('data-overlay');
})