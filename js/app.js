$(function() {
	$("#header").height($(window).height());
	$('.section').addClass('is-loading');
	setTimeout(function() {
		$('.section').removeClass('is-loading');
	}, 500);
	
});


$(document).ready(function(){	
	var controller = new ScrollMagic.Controller();
	
	$("#breadcrumb li>a").each(function(index){
		var section = $(this).attr("href");
		var id = $(this).attr("id");
		new ScrollMagic.Scene({triggerElement: section, triggerHook: 0, duration: $(section).height()})
					.setClassToggle("#"+id, "active")
					//.addIndicators()
					.addTo(controller);
	});
	
	$("#tutor .tutor-list>a").click(function(e){
		e.preventDefault();
	});
	
			
	$("#navPrimary .btn-all-menu").click(function(e){
		e.preventDefault();
		//console.log($(".all-menu-list").css("width"));
		if($(".all-menu-list").css("width") == "0px"){
			$(this).find("img").attr("src","../img/btn-all-menu-close.png");
			$("#breadcrumb").hide();
			$("#navPrimary").addClass("active");	
		}else{
			$(this).find("img").attr("src","../img/btn-all-menu.png");
			$("#breadcrumb").show();
			$("#navPrimary").removeClass("active");
		}
	});	
	
	/*
	$("#wrap").onepage_scroll({
	   sectionContainer: ".section",
	   easing: "ease",
	   animationTime: 1500,
	   pagination: true,
	   updateURL: false
	});
	*/
	
	$(".section").each(function(index){
		if($(this).hasClass("active")){
			$('.section').addClass('is-loading');
			setTimeout(function() {
				$('.section').removeClass('is-loading');
			}, 100);
		}
	});
	
	$('#review .review-slide>ul').bxSlider({
		infiniteLoop: false,
		pager: true,
		controls: false,
		adaptiveHeight:true
	});	
	
	$("#breadcrumb li>a").click(function(e){
		var index = $("#breadcrumb li>a").index($(this));
		var t = $(".section").eq(index).offset().top;
		$('html, body').animate({ scrollTop: t}, 500);
		$("#breadcrumb li>a").removeClass("active");
		$(this).addClass("active");
	});
	
	//console.log($("#why-britcent").offset().top);
	
});

/*
$(window).mousemove(function (e) {
    var p = $(window).scrollTop();
    console.log(p);
});
*/


$(window).scroll(function() {
	var scroll = getCurrentScroll();
	console.log(scroll);
});

function getCurrentScroll() {
    return window.pageYOffset;
}

