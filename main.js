$(window).bind("scroll", function(e) {
	parallaxScroll();
});

function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	if ($(window).width() < 640) {
		$(".motivation__image--running-girl").css("top",(50 - (scrolled*.10)) + "px");
		$(".motivation__image--running-man").css("top",(70 - (scrolled*.30)) + "px");
		$(".motivation__image--black-mask").css("top",(-70 - (scrolled*.10)) + "px");
	 }
	 else {
		$(".motivation__image--running-girl").css("top",(150 - (scrolled*.15)) + "px");
		$(".motivation__image--running-man").css("top",(150 - (scrolled*.35)) + "px");
		$(".motivation__image--black-mask").css("top",(250 - (scrolled*.10)) + "px");
	 }
	
	
}