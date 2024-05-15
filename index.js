const circle = document.querySelector('.slider__circles');

const backgroundImage = document.querySelector('.header__background');
let prevImage = null;

const images = [
    'slider-image-1',
    'slider-image-2',
    'slider-image-3'
];

circle.addEventListener('click', function(e) {
    if (e.target.classList.contains('slider__circle')) {
        backgroundImage.classList.remove(`slider-image-${prevImage}`);
        backgroundImage.classList.add(`slider-image-${e.target.dataset.slider}`);
        prevImage = e.target.dataset.slider;
    }
});