const bioSection = document.querySelector('.bio-section');

function checkVisibility() {
    const sectionPosition = bioSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        bioSection.classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', checkVisibility);

window.addEventListener('scroll', checkVisibility);
