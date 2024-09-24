const prevBtn = document.querySelector('.prev-card');
const nextBtn = document.querySelector('.next-card');
const productCards = document.querySelector('.product-cards');
const cards = document.querySelectorAll('.product-card');
let currentIndex = 0;
let maxCards;

function getCardWidth() {
    return cards[0].offsetWidth;
}


function calculateMaxCards() {
    const containerWidth = productCards.parentElement.offsetWidth;
    const cardWidth = getCardWidth();
    return Math.floor(containerWidth / cardWidth);
}


function updateCarousel() {
    const cardWidth = getCardWidth();
    productCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function checkButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= cards.length - maxCards;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - maxCards) {
        currentIndex++;
        updateCarousel();
        checkButtons();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
        checkButtons();
    }
});
window.addEventListener('resize', () => {
    maxCards = calculateMaxCards();
    currentIndex = Math.min(currentIndex, cards.length - maxCards);
    updateCarousel();
    checkButtons();
});


window.addEventListener('load', () => {
    maxCards = calculateMaxCards();
    updateCarousel();
    checkButtons();
});
