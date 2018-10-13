$(document).ready(function(){
    $("a").on('click', function(event) {
		var valid_hashes = ["#our-wedding", "#rsvp", "#registry", "#accommodation", "#contact"];
		if (jQuery.inArray(this.hash, valid_hashes) != -1) {
			console.log(this.hash);
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});