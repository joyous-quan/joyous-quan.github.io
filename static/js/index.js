$(function (){
    //
    $('.scroll_li').click(function (){
        var index = $(this).index();
        var target = $('.section').eq(index).offset().top - 50;
        $('html,body').animate({scrollTop:target}, 500);
    });

    $('.top').click(function (){
        $('html,body').animate({scrollTop:0}, 500);
    });

    /*var my_height = $(window).height();
    $('.section').css({
         height : my_height + "px"
    })
    console.log($(window).height());
    console.log($('.section').height());*/

    $('.hidden_nav').click(function(){
         $(".nav_ul").toggle();
    })


});