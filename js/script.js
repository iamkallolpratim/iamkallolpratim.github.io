$(document).ready(function() {
	$(".click_hint").fadeIn('slow');
	$('.nav_button').click(function() {
		$(".click_hint").fadeOut('slow');
		$("#content").slideToggle();
	});
});