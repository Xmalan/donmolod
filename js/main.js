$(document).ready(function () {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");




	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	


	$(window).resize(function (event) {
		mainblock();
	});

	function mainblock() {
		var h = $(window).outerHeight();
		$('.mainblock').css('min-height', h);
	}
	mainblock();



	$('.filter__item').click(function (event) {
		var i = $(this).data('filter');
		if (i == 1) {
			$('.news__column').show();
		} else {
			$('.news__column').hide();
			$('.news__column.f_' + i).show();
		}
		$('.filter__item').removeClass('active');
		$(this).addClass('active');

		return false;
	});

	$(window).scroll(function (event) {
		var s = 0 - $(this).scrollTop() / 3;
		$('.mainblock__image').css('transform', 'translate3d(0, ' + s + 'px, 0)');
	});
});