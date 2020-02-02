






//控制加载图标的位置和样式
function universalPreloader(){
	
	var pre = $("#universal-preloader>div");
	

	jQuery.fn.center = function () {
		this.css("position","absolute");
		this.css("top", (($(window).height() - this.outerHeight()) / 2) + "px");
		this.css("left", (($(window).width() - this.outerWidth()) / 2) + "px");
		return this;
	}
	

	pre.center();
	
	
	$(window).resize(function() {
	
		pre.center();
							  
	});
	
}

//当所有东西加载完时去掉加载图标的函数
function universalPreloaderRemove(){
		
	var parentD = $("#universal-preloader");
	var pre = $("#universal-preloader>div");
	
	var logo = $("#universal-preloader .universal-preloader-logo");
	var loader = $("#universal-preloader .universal-preloader-preloader");
	
	
	pre.delay(1000).animate({opacity:'0'},{duration:400, complete:function(){
	
		parentD.animate({opacity:'0'},{duration:400, complete:function(){
		
			parentD.remove();
		
		}});
																																		 
	}});
	
	
}
