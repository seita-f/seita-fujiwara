document.addEventListener('DOMContentLoaded', function () {
    console.log("JS file is loaded");

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarIcon = navbarToggler.querySelector('i');

    let isExpand = false;

    navbarToggler.addEventListener('click', function () {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            isExpand = true;
            navbarIcon.classList.remove('fa-bars');
            navbarIcon.classList.add('fa-xmark');

            // DEBUG:
            console.log(isExpand);
            console.log("Icon should be fa-xmark");
        } else {
            isExpand = false; 
            navbarIcon.classList.remove('fa-xmark');
            navbarIcon.classList.add('fa-bars');

            // DEBUG:
            console.log(isExpand);
            console.log("Icon should be fa-bars");
        }
    });
});