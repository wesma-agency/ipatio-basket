let signSlider = new Swiper(".card-add-dishes-sldier", {
	slidesPerView: "auto",
	spaceBetween: 25,
	observer: true,
	observeParents: true,
	watchOverflow: true,
	navigation: {
		nextEl: ".card-add-dishes-sldier__next",
	},
});
