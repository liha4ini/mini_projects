function slidesPlugin(numSlide) {
    const slides = document.querySelectorAll('.slide');

    slides[numSlide].classList.add('active')

    for (const item of slides) {
        item.addEventListener('click', () => {
            clearActiveClasses();
            item.classList.add('active');
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidesPlugin(3)