//funciton to make move reviews in slider

document.addEventListener('DOMContentLoaded', function () {
	const sliderReview = document.querySelector('.slider-review');
	const prevBtnReview = document.querySelector('.prev-review-btn');
	const nextBtnReview = document.querySelector('.next-review-btn');
	let currentSliderReview = 0;
	const slideWidthReview = 225;

	function moveSlider(slider, currentIndex, slideWidth, maxVisibleSlides) {
		const maxSlide = slider.children.length - maxVisibleSlides;
		currentIndex = currentIndex < 0 ? maxSlide : currentIndex > maxSlide ? 0 : currentIndex;
		slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
		return currentIndex;
	}

	if (sliderReview && prevBtnReview && nextBtnReview) {
		prevBtnReview.addEventListener('click', () => {
			currentSliderReview = moveSlider(sliderReview, --currentSliderReview, slideWidthReview, 0);
		});

		nextBtnReview.addEventListener('click', () => {
			currentSliderReview = moveSlider(sliderReview, ++currentSliderReview, slideWidthReview, 0);
		});
	}
});


/* function to make big with click reviews in slider */

document.addEventListener('DOMContentLoaded', function () {
	const listItems = document.querySelectorAll('.review');
	
	listItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (item.classList.contains('scaled-review')) {
				item.classList.remove('scaled-review');
			} else {
				listItems.forEach((otherItem) => {
					otherItem.classList.remove('scaled-review');
				});
				item.classList.add('scaled-review');
			}
		});
	});
});


//funciton to make move apartament in slider

document.addEventListener('DOMContentLoaded', function () {
	const sliderApartament = document.querySelector('.slider-apartament');
	const prevBtnReview = document.querySelector('.prev-apartament-btn');
	const nextBtnReview = document.querySelector('.next-apartament-btn');
	let currentSliderApartament = 0;
	const sliderWidthApartament = 700;

	function moveSlider(slider, currentIndex, slideWidth, maxVisibleSlides) {
		const maxSlide = slider.children.length - maxVisibleSlides;
		currentIndex = currentIndex < 0 ? maxSlide : currentIndex > maxSlide ? 0 : currentIndex;
		slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
		return currentIndex;
	}

	if (sliderApartament && prevBtnReview && nextBtnReview) {
		prevBtnReview.addEventListener('click', () => {
			currentSliderApartament = moveSlider(sliderApartament, --currentSliderApartament, sliderWidthApartament, 4);
		});

		nextBtnReview.addEventListener('click', () => {
			currentSliderApartament = moveSlider(sliderApartament, ++currentSliderApartament, sliderWidthApartament, 4);
		});
	}
});



//function to make hamburger menu in mobile

document.addEventListener('DOMContentLoaded', function () {
	const hamburgerMenu = document.getElementById('hamburger-menu');
	const navLinks = document.getElementById('nav-links');
	const logo = document.getElementById('logo');

	if (hamburgerMenu && navLinks) {
		hamburgerMenu.addEventListener('click', () => {
			navLinks.classList.toggle('show');
			logo.classList.toggle('show');
		});
	} else {
		console.error('Elementos no encontrados: revisa los IDs en tu HTML');
	}
});
