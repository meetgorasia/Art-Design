// JavaScript Document

//Closing Popups

//  --  Closing Sidebar

$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('#hamIcon')) {
    $('#sidebar').removeClass('sidebarActive');
	$('#hamIcon').removeClass('hamActive');
  }
});
 
$('#sidebar').on('click touch', function(event) {
  event.stopPropagation();
});

//  --  Closing Logform

$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('#login')) {
    $('#logform').removeClass('logformActive');
  }
});
 
$('#logform').on('click touch', function(event) {
  event.stopPropagation();
});


//  --  Search bar

$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('#search')) {
    $('.menu-item').removeClass('hide-item');
	$('.search-form').removeClass('active');
	$('.close').removeClass('active');
	$('#search').show();
  }
});
 
$('.search-form').on('click touch', function(event) {
  event.stopPropagation();
});



/* Hamburger */

$(document).ready(function(){
	$('.hamIcon').click(function(){
		$('.hamIcon').toggleClass('hamActive');
	});
});

/* Sidebar */

function toggleSidebar(){
	document.getElementsByClassName("sidebar")[0].classList.toggle('sidebarActive');
}


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

/* Scrolled header */

$(window).on('scroll',function(){
	if ($(window).scrollTop()){
		$('header').addClass('scrolled-header');
//		$('.home-hero').slideUp(2000);
	}
	else {
		$('header').removeClass('scrolled-header');
//		$('.home-hero').slideDown(2000);
	}
});

/* Parallex */

$(window).scroll(function(){
	parallax();
});

function parallax(){
	var wScroll = $(window).scrollTop();
	
	$('.parallax--bg').css('background-position', 'center '+(wScroll*0.75)+'px');
}

//Log in form

$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
  
// $(document).ready(function(){
//    $("#login").click(function(){
//        $("#logform").toggle();
//        if (e.srcElement !== div) $(div).hide();
//    });
//});

$(document).ready(function(){
	$('#login').click(function(){
		$('#logform').toggleClass('logformActive');
	});
});
