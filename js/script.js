/* Author:
Gustavo marques
*/

// ------------------------------------------------------------------
// Core itens
// ------------------------------------------------------------------ 




// Para fazer as animações

/*
$("body > section").waypoint(function() {
	$('body > section').removeClass("active");
	$(this).addClass("active");
}, { offset: 400 });

$("body > header").waypoint(function() {
	$(this).addClass("active");
}, { offset: 400 });
*/


$(document).ready(function(){
	$("#wrapper").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$( '#btUser' ).click( function(){
		if( $(this).hasClass('open') ){
			$('#userNav').stop().animate({left : '-240px'}, 300);
			$(this).removeClass('open');
		}else{
			$('#userNav').stop().animate({left : '0'}, 200);
			$(this).addClass('open');
		}

		return false
	});

});