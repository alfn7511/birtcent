$(function() {
	$("#header").height($(window).height());
	
	//$('.section').addClass('is-loading');
	//setTimeout(function() { $('.section').removeClass('is-loading'); }, 500);
	
});


$(document).ready(function(){	
	
	//if( chkMobile() != "mobile") var s = skrollr.init({ skrollrBody:"wrap", smoothScrollingDuration:800 });
	if( chkMobile() != "mobile"){
		var s = skrollr.init({
			skrollrBody:"wrap",
			forceHeight: false,
			render : function(data){
				//console.log(data.curTop+"위치");
				//console.log(data.direction+"방향");
	   			//console.log(data.maxTop+"총 높이 값");
			}
		});	
	} 
	
	
	$("#header .logo").velocity({
        opacity: [1, 0]
    }, {
        duration: 2000,
        delay: 500,
        easing: [0.215, 0.61, 0.355, 1]
    });
    $("#header .info-box .text").velocity({
        translateY: [0, 40],
        opacity: [1, 0]
    }, {
        duration: 1300,
        delay: 1000,
        easing: [0.215, 0.61, 0.355, 1]
    });
    $("#header .info-box .btn-trial-apply").velocity({
        translateY: [0, 40],
        opacity: [1, 0]
    }, {
        duration: 1300,
        delay: 1600,
        easing: [0.215, 0.61, 0.355, 1]
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
	
	$("#breadcrumb li>a").each(function(index){
		var section = $(this).attr("href");
		var id = $(this).attr("id");
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
		auto: true,
		pause: 2000,
		infiniteLoop: false,
		pager: true,
		controls: false,
		adaptiveHeight:true,
		swipeThreshold:0
	});	
	
	$("#breadcrumb li>a").click(function(e){
		var index = $("#breadcrumb li>a").index($(this));
		var t = $(".section").eq(index).offset().top;
		$('html, body').animate({ scrollTop: t}, 500);
		$("#breadcrumb li>a").removeClass("active");
		$(this).addClass("active");
	});	
	
});


$(window).scroll(function() {
	var scroll = getCurrentScroll();
	if(scroll==0) $("#navPrimary .util").removeClass("hide");
	if(scroll>=100) $("#navPrimary .util").addClass("hide");
	var m1 = 0, 
	m2 = $("#why-britcent").offset().top,
	m3 = $("#whenever").offset().top;
	m4 = $("#tutor").offset().top;
	if(scroll >= m2/2 && scroll <= m3- ((m3-m2)/3)){
		$("#why-britcent").addClass("loaded");	
	}else{
		$("#why-britcent").removeClass("loaded");
	}
	/*
	if(scroll >= m3- ((m3-m2)/3)){
		$("#why-britcent").addClass("loaded");	
	}else{
		$("#why-britcent").removeClass("loaded");
	}
	*/
	
});

function getCurrentScroll() {
    return window.pageYOffset;
}


function chkMobile(){
    var mode = "pc";

    if(navigator.platform){
        if((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            mode = "mobile";
        }else{
            mode = "pc";
        }
    }
    return mode;
}
