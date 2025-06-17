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

/* function to make big with click reviews in slider */

document.addEventListener('DOMContentLoaded', function () {
	const listItems = document.querySelectorAll('.review');

	listItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (item.classList.contains('scaled')) {
				item.classList.remove('scaled');
			} else {
				item.classList.add('scaled');
			}
		});
	});
});

/* funtion to grow textarea of contact if its necesary */

//  function adjustHeight(event) {
//  	const textarea = event.target;
//  	if (!textarea.dataset.minHeight) {
//  		textarea.dataset.minHeight = textarea.offsetHeight;
// 	}
//  	const minHeight = parseInt(textarea.dataset.minHeight, 10);
//  	if (textarea.scrollHeight > textarea.offsetHeight) {
//  		textarea.style.height = 'auto';
//  		textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
//  	}
//  }
//  const textarea = document.getElementById('textareaMessage');
//  textarea.addEventListener('input', adjustHeight);

