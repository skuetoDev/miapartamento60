const sliderPhoto = document.querySelector('.slider-photo');
const prevBtnPhoto = document.querySelector('.prev-photo-btn');
const nextBtnPhoto = document.querySelector('.next-photo-btn');
let currentSliderPhoto = 0;
const slideWidth = 340; 

nextBtnPhoto.addEventListener('click', () => {
	const maxSlide = sliderPhoto.children.length - 1;
	if (currentSliderPhoto < maxSlide) {
		currentSliderPhoto++;
	} else {
		currentSliderPhoto = 0;
	}
	sliderPhoto.style.transform = `translateX(-${slideWidth * currentSliderPhoto}px)`;
});

prevBtnPhoto.addEventListener('click', () => {
	const maxSlide = sliderPhoto.children.length - 1;
	if (currentSliderPhoto > 0) {
		currentSliderPhoto--;
	} else {
		currentSliderPhoto = maxSlide;
	}
	sliderPhoto.style.transform = `translateX(-${slideWidth * currentSliderPhoto}px)`;
});



