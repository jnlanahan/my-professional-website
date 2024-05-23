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

    function pageFlipEffect() {
        sections.forEach((section, idx) => {
            const bounding = section.getBoundingClientRect();

            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                section.classList.add('section-visible');
                section.classList.remove('section-hidden');
                section.classList.add('flip-section');
            } else {
                section.classList.remove('section-visible');
                section.classList.add('section-hidden');
                section.classList.remove('flip-section');
            }
        });
    }

    window.addEventListener('scroll', () => {
        highlightCurrentSection();
        pageFlipEffect();
    });

    highlightCurrentSection();
    pageFlipEffect();
});
