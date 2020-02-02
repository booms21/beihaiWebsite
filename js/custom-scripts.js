//Javascript Document copyright szl 201607


var degree = 0;
var maxtalk = 0;
var talkbubble = 1;


//人物气泡贴士动画的函数
function manTalk(){
		
	var timer = setTimeout(function() {
		
		//改变气泡贴士的html内容
		$temp = "<p>"+$("div.bubble-options p.man-bubble:nth-child("+talkbubble+")").html()+"</p>";		
		$("div.man-bubble").html($temp);
			if(talkbubble<maxtalk){
			
			talkbubble++;
			}
		else
			talkbubble = 1;
				
		//显示气泡
		$(".man-bubble").animate({"opacity":'1', "bottom":'70px'}, 400);
		
		//隐藏气泡
		setTimeout(function() {
			
			$(".man-bubble").animate({"opacity":'0', "bottom":'0px'}, 400);
			manTalk()
	
		},5000);		
		
	}, 4000);	
	
}


//*************星球旋转动画函数
function rotate() {

	$planet = $("div.planet");

	  //CSS3
	$planet.css({ 'transform' : 'rotate(' + degree + 'deg)'}); 
	  // For webkit browsers: e.g. Chrome
   $planet.css({ '-webkit-transform' : 'rotate(' + degree + 'deg)'});
	  // For Mozilla browser: e.g. Firefox
	$planet.css({ '-moz-transform' : 'rotate(' + degree + 'deg)'});
	  //IE9
	$planet.css({ '-ms-transform' : 'rotate(' + degree + 'deg)'});
	  //Opera
	$planet.css({ '-o-transform' : 'rotate(' + degree + 'deg)'});
	
	// Animate 旋转回调
	var timer = setTimeout(function() {
		
		rotate();
		degree-=0.1;
	},10);

}

//星球上的人物图片动作函数
function manRun(){
	
	var man = $("div.man");
	
	var timer2 = setTimeout(function() {
								 
		if(man.css("background-position") == "0px 0px")
			man.css({"background-position":"-58px 0px"});
		else
			man.css({"background-position":"0px 0px"});							 
			
		manRun();	
		
	}, 200);	
	
}