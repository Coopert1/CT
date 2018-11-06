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
// end for footer
//add item to favorites
$('.add-to-fav').click(function(){
	$(this).toggleClass('active')
});

//
$('.right-side>.second-line>.menu>ul>li').click(function(){
	$(this).toggleClass('open')
})
	var last_seen_slider=$('#last-seen-slider').lightSlider({
			slideMargin: 25,
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
							slideMargin: 35,

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
	var recommend_slider=$('#recommend-slider').lightSlider({
			slideMargin: 25,
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
							slideMargin: 35,

						}
				},
				],
		});
	var review_slider = $("#review-slider").lightSlider({
			slideMargin: 60,
			galleryMargin: 55,
			item: 2.25,
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
							slideMargin: 35,
							controls: false
						}
				},
				],
		});
	var product_cardSlider = $("#product_card-slider").lightSlider({
		enableDrag: true,
		gallery:true,
		currentPagerPosition: 'middle',
		item: 1,
		slideMove:1,
		thumbItem:5,
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
						thumbItem:3,
					}
			}
		]
	})
	// for tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	$(this)
	  .addClass('active').siblings().removeClass('active')
	  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

	// show-hide filters
		$('#show-filter-mobile').click(function(){
			$(".filters").addClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
		$('.filters__close-btn').click(function(){
			$(".filters").removeClass('filters_active');
			$('.backdrop').toggleClass('on');
			$('body').toggleClass('no-scroll');
		})
	// end show-hide filters

	// $(".fancybox").attr('rel', 'images').fancybox({
	//     beforeLoad: function() {
	//         this.title = $(this.element).attr('caption');
	//     }
	// });
	// $(".flex-column__main img").click(function(){
	// 	var el = $(this).prop("src");
	// 	console.log(el)
	// })
	$(".fancybox").fancybox({
	 toolbar  : true,
	 thumbs: {
		autoStart: true, // Display thumbnails on opening
		},
		afterLoad : function( instance, slide ) {
		    console.info( slide.$content );
		  }
  });

	//scroll anchor
	$("#butt").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$("#menu-butt").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//product_card
	$(".flex-column__thumbnail .fancybox").mouseover(function(){
		var src = $(this).prop('href');
		var srcChild = $(this).children().prop('src');
		$(".flex-column__main .fancybox").prop('href', src)
		$(".flex-column__main .fancybox").children().prop('src', srcChild)
	});
	//close modal window
	$(".fixed-overlay__modal .icon_remove-item").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay__modal input[type='submit']").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
	$(".fixed-overlay__modal .icon-remove-item").click(function(){
		$(".fixed-overlay").removeClass('active');
	});

	//open modal window
	$("a.cart-modal").click(function(){
		$(".fixed-overlay.fast-cart-modal").addClass('active');
	});
	//close modal
	$(".close-btn").click(function(){
		$(".fixed-overlay").removeClass('active');
	});
});
