$(function() {
	$("html").easeScroll();	
	$("#header").height($(window).height());
	
	//$('.section').addClass('is-loading');
	//setTimeout(function() { $('.section').removeClass('is-loading'); }, 500);
	
});


$(document).ready(function(){
		
	if(!$.isMobile()){
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
    $("#header .info-box .btn-type1").velocity({
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
			$("#navPrimary .btn-home-go>img").attr("src","../img/btn-home-go.png");
			$(this).find("img").attr("src","../img/btn-all-menu-close.png");
			$("#breadcrumb").hide();
			$("#navPrimary").addClass("active");	
			//$("#wrap").css("position","fixed");	
		}else{
			var img = "../img/btn-all-menu.png";
			//if($("#navPrimary").hasClass("scroll")) img = "../img/btn-all-menu-scroll.png";
			$(this).find("img").attr("src",img);			
			$("#breadcrumb").show();
			$("#navPrimary").removeClass("active");
			//$("#wrap").css("position","relative");
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
		mode: "fade",
		speed: 1500,
		auto: true,
		pause: 4000,
		infiniteLoop: true,
		stopAutoOnClick: true,
		pager: true,
		controls: false,
		adaptiveHeight:true,
		swipeThreshold:0,
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    //$('#review .review-slide ul li').eq(oldIndex).fadeOut(1000);
		  }
	});	
	
	$("#breadcrumb li>a").click(function(e){
		e.preventDefault();
		var idv = $(this).attr("href");
		var h = $("#navPrimary .util").height();
		var t = $(idv).offset().top - h;
		$('html, body').animate({ scrollTop: t}, 500);
		$("#breadcrumb li>a").removeClass("active");
		$(this).addClass("active");
	});	
	
	$('#breadcrumb .fold>a').click(function (e) {
		e.preventDefault();
		if($(this).hasClass('close')){
			$("#navPrimary #breadcrumb>ul").slideUp(300);	
			$(this).removeClass("close");
		}else{
			$("#navPrimary #breadcrumb>ul").slideDown(300);
			$(this).addClass("close");
		}		
    });
	
	
	
	$( "#tutor-list .slide" ).hover(
	  function() {
	    $("#tutor-list .bx-controls-direction a").addClass("hover");
	  }, function() {
	    $("#tutor-list .bx-controls-direction a").removeClass("hover");
	  }
	);
	
	$( "#tutor-list .list ul>li" ).hover(
	  function() {
	    $(this).addClass("on");
	  }, function() {
	    $(this).removeClass("on");
	  }
	);
	
	$("#tutoring-curriculum .tab-menu .row>div>a").click(function(e){
		e.preventDefault();
		var items = $("#tutoring-curriculum .tab-menu .row>div>a");
		var index = items.index($(this));
		items.removeClass("on");
		$(this).addClass("on");
		$("#tutoring-curriculum .tab-content>div").removeClass("on");
		$("#tutoring-curriculum .tab-content>div").eq(index).addClass("on");
	});
	
	
	$("#tutoring-curriculum .tab-menu .row>div>a").hover(
		function () {
			var index = $("#tutoring-curriculum .tab-menu .row>div>a").index($(this));
			var width = $("#tutoring-curriculum .tab-menu .row>div").eq(index).outerWidth();
			var left = $("#tutoring-curriculum .tab-menu .row>div").eq(index).position().left;
			$("#tutoring-curriculum .tab-menu .row .slide").css("left", left + (width/4));
       }, 
       function () {
          var index = $("#tutoring-curriculum .tab-content>div").index($("#tutoring-curriculum .tab-content>div.on"));
          var width = $("#tutoring-curriculum .tab-menu .row>div").eq(index).outerWidth();
          var left = $("#tutoring-curriculum .tab-menu .row>div").eq(index).position().left;
		  $("#tutoring-curriculum .tab-menu .row .slide").css("left", left + (width/4));
       }
	);
	
	$('#btn-top').click(function (e) {
		e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    
	
	
});
$(window).resize(function() {
	$("#header").height($(window).height());
});

$(window).scroll(function() {	
	var scroll = getCurrentScroll();
	if(scroll < 800){
		$('#top-btn').fadeOut();
	}else{
		$('#top-btn').fadeIn();
	}
	if($("#navPrimary").hasClass("active")) return false;
	if(scroll > 100){
		$("#navPrimary").addClass('scroll');
		$("#navPrimary .util>a>img").each(function(){
			var src = this.src;
			src = src.replace("-scroll","");
			src = src.replace(".png","");
			this.src = src+"-scroll.png";
		});		
		//$("#navPrimary #breadcrumb>ul").slideUp(300);
		//$("#breadcrumb .fold>a").removeClass("close"); 
						
	}else{
		$("#navPrimary").removeClass('scroll');
		$("#navPrimary .util>a>img").each(function(){
			var src = this.src;
			src = src.replace("-scroll","");
			this.src = src;
		});
		//$("#navPrimary #breadcrumb>ul").slideDown(300);
		//$("#breadcrumb .fold>a").addClass("close");	
	}
});


function getCurrentScroll() {
    return window.pageYOffset;
}

$.isMobile = function(type) {
    var reg = [];
    var any = {
        blackberry: 'BlackBerry',
        android: 'Android',
        windows: 'IEMobile',
        opera: 'Opera Mini',
        ios: 'iPhone|iPad|iPod'
    };
    type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
    if ('*' == type) reg = $.map(any, function(v) {
        return v;
    });
    else if (type in any) reg.push(any[type]);
    return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
};


/*
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);
*/

(function (a){
	a.browserTest = function (d, f){
		var e = "unknown",
			g = "X",
			h = function (k, c)
			{
				for (var j = 0; j < c.length; j =
					j + 1)
				{
					k = k.replace(c[j][0], c[j][1]);
				}
				return k;
			}, b = function (l, m, j, k)
			{
				var n = {
					name: h((m.exec(l) || [e, e])[1],
						j)
				};
				n[n.name] = true;
				n.version = (k.exec(l) || [g, g, g,
					g
				])[3];
				if (n.name.match(/safari/) && n.version >
					400)
				{
					n.version = "2.0";
				}
				if (n.name === "presto")
				{
					n.version = (a.browser.version > 9.27) ? "futhark" : "linear_b";
				}
				n.versionNumber = parseFloat(n.version,
					10) || 0;
				n.versionX = (n.version !== g) ? (
					n.version + "").substr(0, 1) : g;
				n.className = n.name + n.versionX;
				return n;
			};
		d = (d.match(
			/Opera|Navigator|Minefield|KHTML|Chrome/
		) ? h(d, [
			[
				/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,
				""
			],
			["Chrome Safari", "Chrome"],
			["KHTML", "Konqueror"],
			["Minefield", "Firefox"],
			["Navigator", "Netscape"]
		]) : d).toLowerCase();
		a.browser = a.extend((!f) ? a.browser :
		{}, b(d,
			/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/, [],
			/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/
		));
		a.layout = b(d,
			/(gecko|konqueror|msie|opera|webkit)/, [
				["konqueror", "khtml"],
				["msie", "trident"],
				["opera", "presto"]
			],
			/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/
		);
		a.os = {
			name: (
				/(win|mac|linux|sunos|solaris|iphone)/
				.exec(navigator.platform.toLowerCase()) || [
					e
				])[0].replace("sunos", "solaris")
		};
		if (!f)
		{
			a("html").addClass([a.os.name, a.browser
				.name, a.browser.className, a.layout
				.name, a.layout.className
			].join(" "));
		}
	};
	a.browserTest(navigator.userAgent);
})(jQuery);

(function (a){
	var c = {
		init: function (e){
			var d = a.extend({}, a.fn.scrollContents.defaults,e);			
			return this.each(function (){
				a.extend(this, b);
				var g = this;
				var f = a(this).find(".view");
				var h = a(this).find(".view .scroll");
				var k = a(this).find(".btn-prev");
				var i = a(this).find(".btn-next");
				var j;
				var c = ((document.ontouchstart!==null) ? 'click' : 'touchstart');
				//console.log(f.attr("id"));
				this.resizeScroll(a(this), h);
				if (a.browser.className != "msie7" && a.browser.className != "msie8"){
					j = new IScroll(f.attr("id"),{
						scrollX: true, 
						scrollY: false,
						snap: true,
						momentum: false,
						mouseWheel: true
					});
					j.scrollToElement("li.on", null, true, null);
					a(window).resize(function (){
						g.resizeScroll(a(this), h);
						j.scrollToElement("li.on", null, true, null);
					});
					k.bind(c, function (l){
						l.preventDefault();
						j.scrollToPage("prev");
					});
					i.bind(c, function (l){
						l.preventDefault();
						j.scrollToPage("next");
					});
					if(f.attr("id") == "tutorlist"){
						var tutorlist_slider = $('#tutor-list .slide ul').bxSlider({		
							auto: true,
							pause: 3000,
							infiniteLoop: true,
							autoHover: false,
							stopAutoOnClick: true,
							pager: false,
							controls: true,
							adaptiveHeight:true,
							swipeThreshold:0,
							onSlideBefore : function($slideElement, oldIndex, newIndex){
								$("#tutor-list .list ul>li").removeClass("on");
								$("#tutor-list .list ul>li").eq(newIndex).addClass("on");
								$("#tutor-list .detail>li").removeClass("on");
								$("#tutor-list .detail>li").eq(newIndex).addClass("on");
								j.scrollToElement("li.on", null, true, null);
							}
						});		
						$("#tutor-list .list ul>li").bind(c, function (e){
							e.preventDefault();
							var index = $(this).index();
							tutorlist_slider.stopAuto();
							$("#tutor-list .list ul>li").removeClass("on");
							$(this).addClass("on");
							tutorlist_slider.goToSlide(index);
							j.scrollToElement("li.on", null, true, null);
						});	
					}									
				}
			});
		}
	};
	var b = {
		resizeScroll: function (e, f){
			var d = 0;
			f.find(">li").each(function (){
				d += a(this).outerWidth(true);
			});
			f.css({width: d + 4});
			if (f.outerWidth() > e.outerWidth()){
				e.addClass("on");
			}else{
				e.removeClass("on");
			}
		}
	};
	a.fn.scrollContents = function (d)
	{
		if (c[d])
		{
			return c[d].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else
		{
			if (typeof d === "object" || !d)
			{
				return c.init.apply(this, arguments);
			}
			else
			{
				a.error("Method " + d + " does not exist on jQuery");
			}
		}
	};
	a.fn.scrollContents.defaults = {};
})(jQuery);
