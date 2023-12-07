// Slideshow

const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
	const slides = slideshow.querySelectorAll('.slideshow__slide');
	const controls = slideshow.querySelectorAll('.slideshow__controlls-button');
	const dots = slideshow.querySelectorAll('.slideshow__dot');
	const counter = slideshow.querySelector('.slideshow__slide-counter');
	const captions = document.querySelectorAll('.slideshow__slide-caption');

	let index = 0;

	const totalSlides = slides.length;
	const lastIndex = slides.length - 1;

	const setIndex = (newIndex) => {
		index = newIndex;
	};

	const decreaseIndex = () => {
		if (index > 0) {
			index = index - 1;
		} else {
			index = lastIndex;
		}
	};

	const increaseIndex = () => {
		if (index < lastIndex) {
			index = index + 1;
		} else {
			index = 0;
		}
	};

	const renderSlideClass = () => {
		slides.forEach(slide => {
			slide.classList.remove('slideshow__slide--visible');
		});
		dots.forEach(dot => {
			dot.classList.remove('slideshow__dot--current');
		});
		captions.forEach(caption => {
			caption.classList.remove('slideshow__slide-caption--curent');
		});

		slides[index].classList.add('slideshow__slide--visible');
		dots[index].classList.add('slideshow__dot--current');
		captions[index].classList.add('slideshow__slide-caption--curent');
	}

	const renderCounter = () => {
		counter.textContent = `${index + 1}/${totalSlides}`;
	}

	const changeSlide = (event) => {
		const button = event.currentTarget;

		if (button.dataset.direction === 'previous') {
			decreaseIndex();
		}

		if (button.dataset.direction === 'next') {
			increaseIndex();
		}

		if (button.dataset.index) {
			setIndex(parseInt(button.dataset.index));
		}

		renderSlideClass();
		renderCounter();
	}

	controls.forEach(button => {
		button.addEventListener('click', changeSlide);
	});

	dots.forEach(button => {
		button.addEventListener('click', changeSlide);
	});

	captions.forEach(button => {
		button.addEventListener('click', changeSlide);
	});
})