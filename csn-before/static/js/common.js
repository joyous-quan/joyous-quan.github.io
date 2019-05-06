;(function($){

    //TOP
	$(document).on("touchstart", ".to-top", function () {
 		$(window).scrollTop(0);
 	})

	//input focus blur
    $(document).on("focus", ".ipt", function () {
        $(this).css("border-color","#9fb1c4");
    })
    $(document).on("blur", ".ipt", function () {
        $(this).css("border-color","#f3f3f3");
    })

    //侧边菜单移入移出
    $(document).on('touchstart','.menu-icon', function(event){
        $('.sidebar-mask').css({ 'left' : '0' });
        $('body').css({'position':'fixed'});
    });
    $(document).on('touchstart','.del-sidebar', function(event){
        $('.sidebar-mask').css({ "left" : "-100%" });
        $('body').css({'position':'relative'});
    });
    
    //二级菜单显示隐藏
    $(document).on('touchstart','.sub-title>div',function(event){
        $(this).parent().find('.sub-menu').toggle();
        $(this).parent().siblings().find('.sub-menu').hide();

    });


})(Zepto);
