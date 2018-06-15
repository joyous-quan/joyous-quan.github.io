$(function (){
    //nav 点击切换目录
    $('.scroll_li').click(function (){
        var index = $(this).index();
        var target = $('.section').eq(index).offset().top - 50;
        $('html,body').animate({scrollTop:target}, 500);
    });
    //
    $('.top').click(function (){
        $('html,body').animate({scrollTop:0}, 500);
    });

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

    //
    $('.cat li a').click(function(){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');

    })

    $('.cat .all').click(function(){
        $('.row_list').show(1000);
    })
    $('.cat .web').click(function(){
        $('.row .branding').hide(1000);
        $('.row .web').show(500);
    })
    $('.cat .branding').click(function(){
        $('.row .web').hide(1000);
        $('.row .branding').show(1000);
    })
    $('.cat .app').click(function(){
        $('.row .web').hide(1000);
        $('.row .branding').hide(1000);
        $('.row .app').show(1000);
    })

    //
    $('.change_btn span').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.change_btn .pre').click(function(){
        $('.about_content ol').animate({"left" :"0"});
    })

    $('.change_btn .next').click(function(){
        $('.about_content ol').animate({"right" :"0"});
    })







});