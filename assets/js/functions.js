$(document).on('ready', function() {

	//confirm msg
	$('form input[type="submit"]').on('click', function(e) {
		e.preventDefault();

		
		$('.over').fadeIn(300, function() {
			$('.confirm').fadeIn(300);
		});

		$('.close').on('click', function() {
			$('.confirm').fadeOut(300);
			$('.over').fadeOut(300);
		})
	});

});