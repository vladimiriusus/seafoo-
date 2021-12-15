$(function(){

	$('.header-slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
		vertical:true
	});



$('.product__name').slick({
	slidesToShow: 6,
	focusOnSelect: true,
	slidesToScroll: 1,
	asNavFor: '.product__content',
	vertical: true,
	prevArrow: '<button type="button" class="product-prev"><img src="img/product-prev.svg" alt=""></button>',
	nextArrow:'<button type="button" class="product-next"><img src="img/product-next.svg" alt=""></button>',
 });

 $('.product__content').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.product__name',
	fade: true,
	arrows: false
 });
 

});