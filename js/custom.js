// JavaScript Document



$(document).ready(function(){
	$('.hamIcon').click(function(){
		$('.hamIcon').toggleClass('hamActive');
	});
});



function toggleSidebar(){
	document.getElementsByClassName("sidebar")[0].classList.toggle('sidebarActive');
}

