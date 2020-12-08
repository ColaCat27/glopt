function carousel(allSlidesSelector, nextArrow, prevArrow) {
const arrowNext = document.querySelectorAll(nextArrow),
      arrowPrev = document.querySelectorAll(prevArrow),
      slides = document.querySelectorAll(allSlidesSelector);

    arrowNext.forEach((item) => {
        item.addEventListener('click', () => {
            nextSlide();
        });
    });

    arrowPrev.forEach(item => {
        item.addEventListener('click', () => {
            prevSlide();
        });
    });

    function nextSlide() {
        let first = slides[0].getAttribute('class'),
            last = slides[2].getAttribute('class');

        slides[2].setAttribute('class', slides[1].getAttribute('class'));
        slides[1].setAttribute('class', first);
        slides[0].setAttribute('class', last);
    };

    function prevSlide() {
        let first = slides[0].getAttribute('class'),
            main = slides[1].getAttribute('class'),
            last = slides[2].getAttribute('class');

        slides[0].setAttribute('class', main);
        slides[1].setAttribute('class', last);
        slides[2].setAttribute('class', first);
    };

};

carousel('.comments__item','.comments__arrow-next','.comments__arrow-prev');

function toggleMenu() {
    
}