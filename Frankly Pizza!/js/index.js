$(document).ready(function() {

// Animate Scroll
	$('a[href*="#"]').click(function(e) { e.preventDefault(); var dest = $(this).attr('href'); console.log(dest); $('html,body').animate({ scrollTop: $(dest).offset().top }, 1500); });

	$("a[href='#top']").click(function() {
 	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
	});

// Highlight Selected Nav

	var navItem = $('.navbar li')	

	navItem.hover(function() {

		$(this).addClass('hover');

	});


// Sticky Navbar
	var  mn = $("nav");
    mns = "navbar-fixed-top";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
	

});