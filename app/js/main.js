$(document).ready(function () {
	// lang switch
	$('.lang').click(function(){
		$('.lang').removeClass('active');
		$(this).addClass('active');
	});
	// menu switch
	$('.header__menu li').click(function(){
		$('.header__menu li').removeClass('active');
		$(this).addClass('active');
	});
	// dropdown menu
	$('.header__menu .dropdown').hover(function(){
		$(this).find('.submenu').fadeIn();
	},
	function(){
		$(this).find('.submenu').fadeOut();
	});
	// sidebar accordion
	$('.sidebar h6').click(function(){
		$('.sidebar p').slideUp('400', function(){
			$(this).siblings('h6').find('span').text('Click to open');
			$(this).siblings('h6').find('.arrow').removeClass('transformed');
		});
		if($(this).siblings('p').is(':hidden')){
			$(this).siblings('p').slideDown('400', function(){
				$(this).siblings('h6').find('span').text('Click to close');
				$(this).siblings('h6').find('.arrow').addClass('transformed');
			});
		}
	});
	// fixed menu while scrolling
	window.onscroll = function () {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop,
			nav = document.querySelector('.header');
		if (scrolled > $(nav).height()) {
			$('.header').addClass('header--scrolled');
		} else if (scrolled <= $(nav).height()) {
			$('.header').removeClass('header--scrolled');
		}
	};
});