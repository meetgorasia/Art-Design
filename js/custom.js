// JavaScript Document

/* Hamburger */

$(document).ready(function(){
	$('.hamIcon').click(function(){
		$('.hamIcon').toggleClass('hamActive');
	});
});

/* Sidebar */

/*

function toggleSidebar(){
	document.getElementsByClassName("left-sidebar")[0].classList.toggle('sideBarActive');
}

*/

/* Search Menu*/

$(document).ready(function(){
		$('#search').click(function(){
			$('.menu-item').addClass('hide-item');
			$('.search-form').addClass('active');
			$('.close').addClass('active');
//			$('#search').hide();			
			function searchFocus() {
			$('#search-bar').focus();
			}		
			setTimeout(searchFocus, 1000);
		});
		
	
 		$('.close').click(function(){
			$('.menu-item').removeClass('hide-item');
			$('.search-form').removeClass('active');
			$('.close').removeClass('active');
			$('#search').show();
		});
});

/* Fixed header */

$(window).on('scroll',function(){
	if ($(window).scrollTop()){
		$('header').addClass('scrolled-header');
	}
	else {
		$('header').removeClass('scrolled-header');
	}
});

