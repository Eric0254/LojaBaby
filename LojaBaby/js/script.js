let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 10000);
}
function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });
    
    const offset = currentSlide * -100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
});
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
autoSlide();