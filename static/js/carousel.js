;(function($) {
	jQuery.fn.imgPlayer = function(settings) {
	settings = jQuery.extend(this,{
	//---------------img播放设置---------------
		delay:		          5000, 			//停留时间
		fadeOutTime:          600, 			//淡出时间(ms)
		fadeInTime:           600, 	    	//淡入时间(ms)
		height:               400,  			//图片高度(px)
		//width:                960, 				//图片宽度(px)
		startIndex:     	  0,       			//初始播放序号(若大于图片总数,则从0开始)
		autoPlay:     		  true,     		//自动播放
		mouseEvent:     	  true,     		//鼠标悬浮停止播放
		bindEvent:     		  'mouseover' , 	//切换触发的事件（click,mouseover）
	//-----------------------title设置------------------------------
		showTitle:            false, 			//是否显示标题
		titleSlideUpTime:     500, 				//标题上升过程时间(ms)
		titleAnimate:         true, 			//是否启用动画
		tBackgroundColor: 	  '#222',		    //标题背景颜色
		tBackgroundOpacity:   '0.7',			//标题背景透明度
		titleColor:   		  '#fff',			//标题文字颜色
		titleHeight:   	 	  40,				//标题高度(px)
		titleAlign:   	 	  'top',			//标题对齐方式(top,bottom)
		fontSize:   	  	  18,				//标题文字大小(px)
		fontAlign:   		  'center',			//标题文字对齐方式(left,center,right)
//		isNewLine: 		  	  false,			//标题文字是否可以换行显示
//		fontWidth:   	      '960',			//标题文字宽度(px),不设置默认为img宽度
	//-----------------------dots设置------------------------------
		isIconShow:   		  true,				//是否显示图标
//		iconBorder:   		  '2px solid #fff', //图标显示的边框
//		iconColor:   		  'none',			//图标显示的颜色
		iconOpacity:   	      '1',			//图标显示的透明度
//		activeIconColor:   	  'none',			//激活时图标显示的颜色
//		activeIconBgUrl:   	  '/static/img/yuantb.png',			//激活时图标显示的自定义图标(图片url)
		iconHeigth:   		  14,				//图标的高度(px)
		iconWidth:   		  14,				//图标的宽度(px)
		iconLeft:   	 	  50,   			//图标离右边的百分比%
		iconBottom:   	  	  23,    			//图标离下边的距离px
		iconMargin:   	  	  16	 			//图标的间距px
//		iconBgUrl:   		  '/static/img/yuantb2.png'			//图标显示的自定义图标(图片url)
//		iconFontSize:   	  12,				//图标文字的大小(px)
//		iconFontColor:   	  '#1d103b',		//图标的文字颜色
//		activeIconHeight:     20,				//激活时图标的高度(px)
//		activeIconWidth:   	  20,				//激活时图标的宽度(px)
//		activeIconBorder:     '2px solid #fff', //激活时图标显示的边框
//		activeIconFontSize:   16,				//激活时文字的大小(px)
//		activeIconFontColor:  '#ffffff',		//激活时的文字颜色
//		activeIconOpacity:    '0.6',			//激活时图标显示的透明度
	},settings);

	////////////////////////全局变量//////////////////////
/****/ 	var isLast=0;  //判断轮播是否到了最后一张，为0时"否"
	var imgTimer ="";/****/
	var $images = settings.children("li");
	//----------------------主体样式----------------------------------
	if(settings.css("position")=="static"){ //将设置为相对布局
		settings.css("position","relative");
	}
	settings.css({"height":settings.height+'px',"width":settings.width+'px',"overflow":"hidden","text-align":"left","display":"block"});
	//----------------------------图片的样式---------------------------
	$images.css({"position":"absolute","display":"none","top":"0px","left":"0px","height":settings.height+'px',"width":"100%","display":"none","cursor":"pointer"});
	//-----------------------------构造DOM------------------------------
	var imageNum = $images.length;
	var imageIcon = "";
	for(var i=1;i<=imageNum;i++){
		if(i!=imageNum){
			imageIcon += "<span class='jquery-imagePlayer-icon-num'>"+i+"</span><span class='jquery-imagePlayer-icon-blank'></span>";
		}else{
			imageIcon += "<span class='jquery-imagePlayer-icon-num'>"+i+"</span>";
		}
	}
	settings.append("<div class='jquery-imagePlayer-title'><div></div></div>");
	settings.append("<div class='jquery-imagePlayer-icon'>"+imageIcon+"</div>");
	//-----------------------------构造DOM------------------------------
	//----------------------设置小图标的样式------------------------------
	var $icon = settings.children(".jquery-imagePlayer-icon");
	$icon.css({"position":"absolute","text-align":"left","left":settings.iconLeft+'%',"bottom":settings.iconBottom+'px',"z-index":"98"});
	if(settings.isIconShow){//显示图标
		$icon.children(".jquery-imagePlayer-icon-blank").css({"width":settings.iconMargin+'px',"display":"inline-block","height":settings.iconHeigth,"float":"left"});
		var $smallIcon = $icon.children(".jquery-imagePlayer-icon-num");
		$icon.css({"margin-left":(-($smallIcon.length*25/2)).toString()+"px"});
		$smallIcon.css({"height":settings.iconHeight+'px',
						"width":settings.iconWidth+'px',
						"text-indent":'100px',
						"overflow":"hidden",
						"background":"#007bc4",
						"border-radius":"14px",
						"border":settings.iconBorder,
						"font-size":settings.iconFontSize+'px',
						"text-align":"center",
						"line-height":settings.iconHeigth+'px',
						"color":settings.iconFontColor,
						"cursor":"pointer",
						"opacity":settings.iconOpacity,
						"display":"block",
						"float":"left",
						"filter": "alpha(opacity="+settings.iconOpacity*100+")"
					});
		$smallIcon.bind(settings.bindEvent,function(){
 			if(isLast==1){ settings.startIndex=imageNum; }
			if(settings.startIndex==$(this).text()){
				if(isLast==1){settings.startIndex=0;}
				return;
			}
			settings.startIndex = $(this).text()-1;
			imgShow();
		});
		if(settings.autoPlay&&settings.mouseEvent){
			$smallIcon.hover(
			function(){clearInterval(imgTimer);},
			function(){imgTimer = setInterval(imgShow,settings.delay);}
			);
		}
	}else{
		$icon.hide();
	}
	//初始化数据
	settings.startIndex = settings.startIndex+1>imageNum?0:settings.startIndex;

	if(settings.titleSlideUpTime>settings.delay/2){//避免显示不完整
		 settings.titleSlideUpTime = settings.delay/2;
	 }
	var icons = settings.children(".jquery-imagePlayer-icon").children(".jquery-imagePlayer-icon-num");
	////////////////////////轮播显示函数//////////////////////
	function imgShow(){
			var icon = settings.children(".jquery-imagePlayer-icon").children(".jquery-imagePlayer-icon-num").eq(settings.startIndex);
			 icons.css({"height":settings.iconHeight+'px',
						"width":settings.iconWidth+'px',
						"background":"#ffffff",
				 		"border-radius":"14px",
						"border":settings.iconBorder,
						"font-size":settings.iconFontSize+'px',
						"text-align":"center",
						"line-height":settings.iconHeight+'px',
						"color":settings.iconFontColor,
						"cursor":"pointer",
						"opacity":settings.iconOpacity,
						"display":"block",
						"float":"left",
						"filter": "alpha(opacity="+settings.iconOpacity*100+")"
					});

			 icon.css({ "height":settings.activeIconHeight+'px',
						"width":settings.activeIconWidth+'px',
						"background":"#007bc4",
				 		"border-radius":"14px",
						"border":settings.activeIconBorder,
						"font-size":settings.activeIconFontSize+'px',
						"text-align":"center",
						"line-height":settings.activeIconHeight+'px',
						"color":settings.activeIconFontColor,
						"font-weight":"600",
						"cursor":"pointer",
						"opacity":settings.activeIconOpacity,
						"display":"block",
						"float":"left",
						"filter": "alpha(opacity="+settings.iconOpacity*100+")"
					});
			 
			 var  $activedImg = settings.children("li:visible");
			 var  $preparedImg = settings.children("li").eq(settings.startIndex);
			 if(settings.showTitle&&settings.titleAnimate){//显示动画
				 $activedImg.stop(true,true).fadeOut(settings.fadeOutTime);
				 $title.stop(true,true).fadeOut(settings.fadeOutTime);
				 $preparedImg.stop(true,true).fadeIn(settings.fadeInTime,function(){
				 	titleShow($preparedImg);
				 });
				//$(".print-console").append("$activedImg:"+$activedImg.attr("title")+"$preparedImg:"+$preparedImg.attr("title")+"<br>");
			 }else if(settings.showTitle&&!settings.titleAnimate){//无动画
			 	 var title = $preparedImg.attr("title")||"";
			 	 $activedImg.stop(true,true).fadeOut(settings.fadeOutTime);
				 $preparedImg.stop(true,true).fadeIn(settings.fadeInTime);
				 $content.stop(true,true).fadeOut(settings.fadeOutTime,function(){
				 	 $content.text(title);
				 	 $content.fadeIn(400);
				 });
			 }else{//不显示
			 	 $activedImg.stop(true,true).fadeOut(settings.fadeOutTime);
				 $preparedImg.stop(true,true).fadeIn(settings.fadeInTime);
			 }
			 settings.startIndex++;
/****/			 isLast=0;
			  if(settings.startIndex==imageNum){
/****/			    isLast=1;
			 	settings.startIndex=0;
			 }

	}
	//------------------------initImageShow-------------------------------
	if(imageNum>0){
		imgShow();
	}
	//自动播放
	if(settings.autoPlay){
		imgTimer = setInterval(imgShow,settings.delay);
	}
	//鼠标悬浮停止播放
	if(settings.autoPlay&&settings.mouseEvent){
		$images.hover(function(){
			clearInterval(imgTimer);
		},function(){
			imgTimer = setInterval(imgShow,settings.delay);
		});
	}

	$images.click(function(){
		var url = $(this).attr("url");
		if(url){
			_aClickOpenWindow(url);
		}
	});

	$(this).parent().find(".prev").click(function(){
		settings.startIndex=settings.startIndex-2;
		isLast=0;
		if(settings.startIndex==-1){
			isLast=1;
			settings.startIndex=imageNum-1;
		}else if(settings.startIndex==-2){
			settings.startIndex=imageNum-2;
		}
		imgShow();
	});
	$(this).parent().find(".next").click(function(){
		imgShow();
	});
	$(".prev,.next").hover(
		function(){clearInterval(imgTimer);},
		function(){imgTimer = setInterval(imgShow,settings.delay);}
	);
	return settings;
	};

})(jQuery);
