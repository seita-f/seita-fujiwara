
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarIcon = navbarToggler.querySelector('i');

    navbarToggler.addEventListener('click', function () {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            
            navbarIcon.classList.remove('fa-bars');
            navbarIcon.classList.add('fa-xmark');

            // DEBUG:
            console.log(isExpand)
            console.log("Icon should be fa-bars")

        } else {

            navbarIcon.classList.remove('fa-xmark');
            navbarIcon.classList.add('fa-bars');

            // DEBUG:
            console.log(isExpand)
            console.log("Icon should be fa-xmark")

        }
    });
});

