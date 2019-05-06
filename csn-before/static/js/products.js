;(function($){
	//
	$('.product-btn-box .flex1').on('touchstart', function(){
		$(this).find('img').toggle()
	})

   
    //显示隐藏
    $('.hide-card>li div').on('touchstart',function(event){

        event.stopPropagation();
        $(this).parent().find('ol.hide').toggle();
        $(this).parent().siblings().find('ol.hide').hide();

    });
    /* 数值加减 */
    $('.number .minus').on('touchstart', function(event){
        var num = Number($(this).parent().find('input').val());
        $(this).parent().find('input').val(num - 1);
        if(num <=0) {
            $(this).parent().find('input').val(0);
            $(this).css({ 'color' : '#ddd' })
        }
    })
    $('.number .add').on('touchstart', function(event){
        var num = Number($(this).parent().find('input').val());
        $(this).parent().find('input').val(num + 1);
        if(num >=0) {
            $('.number .minus').css({ 'color' : '#333' })
        }
    })

})(Zepto);