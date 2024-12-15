document.addEventListener("DOMContentLoaded", function () {

    // DEBUG:
    console.log("DEBUG:")
    console.log("DOMContentLoaded")

    const sections = document.querySelectorAll(".fade-section");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const handleScroll = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add("fade-in");
            }
        });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});