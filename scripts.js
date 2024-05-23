/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightCurrentSection() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    function handleSectionVisibility() {
        sections.forEach((section, idx) => {
            const bounding = section.getBoundingClientRect();

            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                section.style.opacity = '1';
            } else {
                section.style.opacity = '0';
            }
        });
    }

    window.addEventListener('scroll', () => {
        highlightCurrentSection();
        handleSectionVisibility();
    });

    highlightCurrentSection();
    handleSectionVisibility();
});
