$(function(){
	$('.table-card').on("swipeleft", function (event) {//左滑显示隐藏按键
        event.stopPropagation();
        $('.table-card').animate({left: '0'}, 200, 'linear');
        $('.hide-con').animate({width: '0'}, 200, 'linear');
        $(this).animate({left: '-32%'}, 200, 'linear');
        $(this).parent().find('.hide-con').animate({width: '32%'});
        var ci = '<span>加入<br>收藏</span>';
        var cc = '<span>删除</span>';
        var fi = '<span>产品<br>置顶</span>';
        var fc = '<span>取消<br>收藏</span>';
        $('.cart-istop').html(ci);
        $('.cart-cancel').html(cc);
        $('.favorite-istop').html(fa);
        $('.favorite-cancel').html(fc);
    });
    $('.table-card').on("swiperight tap", function (event) {//右滑恢复
        event.stopPropagation();
        $(this).animate({left: '0'}, 200, 'linear');
        $(this).parent().find('.hide-con').animate({width: '0'});
    });
    $('.cancel').on("tap", function () { //删除
        $(this).parent().parent().remove();
    });
})