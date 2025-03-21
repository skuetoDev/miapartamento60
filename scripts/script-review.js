const sliderReview = document.querySelector('.slider-review');
const prevBtnReview = document.querySelector('.prev-review-btn');
const nextBtnReview = document.querySelector('.next-review-btn');
let currentSliderReview = 0;
const slideWidthReview = 200; 


nextBtnReview.addEventListener('click', () => {
	const maxSlide = sliderReview.children.length - 1;
	if (currentSliderReview < maxSlide) {
		currentSliderReview++;
	} else {
		currentSliderReview = 0;
	}
	sliderReview.style.transform = `translateX(-${slideWidthReview * currentSliderReview}px)`;
});

prevBtnReview.addEventListener('click', () => {
	const maxSlide = sliderReview.children.length - 1;
	if (currentSliderReview > 0) {
		currentSliderReview--;
	} else {
		currentSliderReview = maxSlide;
	}
   sliderReview.style.transform = `translateX(-${slideWidthReview * currentSliderReview}px)`;
});