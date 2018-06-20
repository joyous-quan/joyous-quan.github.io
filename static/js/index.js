$(function (){
    //nav 效果
    $(window).scroll(function() {
        if ($(".nav").offset().top > 50) {
            $(".nav").addClass("top-nav-collapse");
        } else {
            $(".nav").removeClass("top-nav-collapse");
        }
    });


    //nav 点击切换目录
    $('.scroll_li').click(function (){
        var index = $(this).index();
        var target = $('.section').eq(index).offset().top - 49;
        $('html,body').animate({scrollTop:target}, 500);
    });

    $('.top').click(function (){
        $('html,body').animate({scrollTop:0}, 500);
    });

    $('.last').click(function(){
        $('html,body').animate({scrollTop:$('.section2').offset().top}, 500);
    })

    //header 自适应浏览器高度
    var my_height = $(window).height();
    $('.header').css({
         height : my_height + "px"
    })

   /* $('.hidden_nav').click(function(){
        $(".nav_ul").toggle()
    }*/

    //nav 显示 隐藏
    $('.hidden_nav').click(function(){
        if($(".nav_ul").css("display")=='none'){
            $(".nav_ul").slideDown();
        }else{
            $(".nav_ul").slideUp();
        }
    })


    // Isotope Filter
    var $container = $('.portfolio-items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.cat li a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });


    //数字
    $('.count').countUp({
        delay: 10,
        time: 2000
    });
   


});
