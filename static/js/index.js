$(function (){
    $(window).scroll(function (){
        var st = $(this).scrollTop();
        if(st >= 600){
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('.scroll_li').click(function (){
        var index = $(this).index();
        var target = $('.section').eq(index).offset().top;
        $('html,body').animate({scrollTop:target}, 500);
    });

    $('.top').click(function (){
        $('html,body').animate({scrollTop:0}, 500);
    });

    var my_height = $(window).height();
    $('.section').css({
         height : my_height + "px"
    })
    console.log($(window).height());
    console.log($('.section').height());

});