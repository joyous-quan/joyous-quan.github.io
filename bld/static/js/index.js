/**
 * Created by bd2010141 on 2018/7/12.
 */
var $container = null;
var $prev = $('.slider_prev');
var $len = null;
var $cycleTm = 4000;
var $sec = 500;
var $flag = true;
var $index = 0;
var $timer = setTimeout(move, $cycleTm);
 $(function(){
     _DoAjaxAsyncTrue('GET',{},'/webapi/v1/getSlideshow',function(res){
         if(res.length>0){
             var slider_html='';
             $.each(res,function(idx,item){
                 slider_html+='<a href="'+(!isempty(item.href)?item.href:'javascript:;')+'" class="slider_item"><img src="'+item.src+'"></a>';
             })
             $(".slider_content").html(slider_html);
             $container = $('.slider_container');
             $len=$('.slider_content a').length;
            $prev.off('click').click(function() {
                $index--;
                if ($index == -1) { $index = $len - 1; }
                $container.find('a').eq($index).stop().fadeIn($sec).siblings('a').stop().fadeOut($sec);
            }).next('span').off('click').click(function() {
                $index++;
                if ($index == $len) { $index = 0; }
                $container.find('a').eq($index).stop().fadeIn($sec).siblings('a').stop().fadeOut($sec);
            });
            $container.find('span').each(function(index, items) {
                items.onselectstart = items.onmousedown = items.onmouseup = function() {
                    return false;
                }
            });
            $container.hover(function() {
                $flag = false;
                clearTimeout($timer);
            }, function() {
                $flag = true;
                $timer = setTimeout(move, $cycleTm);
            });
             $('.slider_content img').oLoader({
                waitLoad: true,
                fadeLevel: 0.9,
                backgroundColor: '#fff',
                style:0,
                image: '/static/img/loader.gif'
              });
         }
    });
});
function move() {
    $index++;
    if ($index == $len) { $index = 0; }
    $container.find('a').eq($index).stop().fadeIn($sec, function() {
        if ($flag) {
            clearTimeout($timer);
            $timer = setTimeout(move, $cycleTm);
        }
    }).siblings('a').stop().fadeOut($sec);
}

