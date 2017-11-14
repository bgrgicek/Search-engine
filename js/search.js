$(document).ready(function() {
	
	$('#search-icon').on('click', function () {
		$(this).fadeOut(2);
		$('#normal-icon').fadeIn(2);
		$('document').css('background-color', '#161616');
	});

	$('#normal-icon').on('click', function () {
		$(this).fadeOut(2);
		$('#search-icon').fadeIn(2);
		$('document').css('background-color', '#fff');

	});
});