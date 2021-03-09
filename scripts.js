$('#scrollDown').on('click', function(e) {
	$('html, body').animate({
		scrollTop: $('#projectScroll').offset().top
	}, 'slow');
});

$('#projectTrello').on('click', function(e) {
	window.location.replace('projects.html');
});

