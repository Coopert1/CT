$(document).ready(function() {
$('select').niceSelect();
// pgs-panel

$('.pgs-nav ul').scrollbar();

// end pgs-panel

//for footer
$(window).resize(function(){
	var browserMinWidth = $(window).width();
	if (browserMinWidth >= 800){
		$(".footer__list").show();
	}

});
$('.footer__title').click(function(){
	var browserMinWidth = $(window).width();
	console.log(browserMinWidth)
		if (browserMinWidth < 800){
			$(this).next('.footer__list').slideToggle("slow");
		}

});
//add item to favorites
$('.add-to-fav').click(function(){
	console.log(1);
	$(this).toggleClass('active')
});

//
$('.right-side>.second-line>.menu>ul>li').click(function(){
	console.log(1);
	$(this).toggleClass('open')
})

// end for footer
//	$("#last-seen-slider").slick({
//		dots: true,
//		infinite: true,
//		speed: 300,
//		slidesToShow: 3,
//		adaptiveHeight: false,
//		centerPadding: '12%',
//		slidesToScroll: 3,
//		centerMode: true,
//		arrows: true,
//		responsive: [
//		{
//		  breakpoint: 1300,
//		  settings: {
//			slidesToShow: 3,
//			slidesToScroll: 3,
//			infinite: true,
//			adaptiveHeight: true,
//			  centerPadding: '12%',
//		  }
//		},
//		{
//		  breakpoint: 1000,
//		  settings: {
//			slidesToShow: 2,
//			slidesToScroll: 2
//		  }
//		},
//		{
//		  breakpoint: 600,
//		  settings: {
//			slidesToShow: 1,
//			slidesToScroll: 1
//		  }
//		}]
//	});

	var last_seen_slider=$('#last-seen-slider').lightSlider({
			slideMargin: 35,
			item: 4,
			slideMove:1,
			pager: false,
			addClass: '',
			mode: "slide",
			useCSS: true,
			cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
			easing: 'linear', //'for jquery animation',////
			speed: 400, //ms'
			auto: true,
			loop: true,
			slideEndAnimation: true,
			pause: 10000,
			controls: false,
			responsive:[
				{
					breakpoint: 1200,
					settings:
						{
							item:3,
							slideMove:1,
						}
				},
				{
					breakpoint: 800,
					settings:
						{
							item:2,
							slideMove:1,
						}
				},
				{
					breakpoint: 600,
					settings:
						{
							item:1.2,
							slideMove:1,
							slideMargin: 35
						}
				},
				],
		});

		$(".ls-prevSlide").click(function(){
			last_seen_slider.goToPrevSlide();
		});
		$(".ls-nextSlide").click(function(){
			last_seen_slider.goToNextSlide();
		});
	var review_slider = $("#review-slider").lightSlider({
			slideMargin: 60,
			galleryMargin: 55,
			item: 2.2,
			slideMove:1,
			pager: true,
			addClass: '',
			mode: "slide",
			useCSS: true,
			cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
			easing: 'linear', //'for jquery animation',////
			speed: 400, //ms'
			auto: true,
			loop: true,
			slideEndAnimation: true,
			pause: 10000,
			controls: true,
			responsive:[

				{
					breakpoint: 600,
					settings:
						{
							item:1.2,
							slideMove:1,
							slideMargin: 35
						}
				},
				],
		});

	// for tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
