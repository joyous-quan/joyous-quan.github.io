
function inquiryClick(){
    $('.logout-inquire-mask,.dv_keyword_mask').show();
}

$(function(){


  

    $('#related,#history').owlCarousel({
        loop: true,
        margin: 0,
        nav:false,
        dots:true,
        //autoplay: true,
        stopOnHover:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        navRewind: true,
        responsive: {
            0: { items: 2 },
            580: { items: 3 },
            780: { items: 4 },
            1024:{ items: 5 }
        }
    });


    $(".products-small-img li").hover(function(){
        $(".dv_main_img img").attr("src",$(this).find("img").attr("src"));
    });

    $(".cirle").hover(function(){
        $(this).addClass("cirle-active").siblings().removeClass("cirle-active");
    });
    //放大图
    $('.magnifying-glass').click(function () {
        $('.magnifying-img img')[0].src = $('.products-big-img img')[0].src;
        $('.magnifying-img').show();
    });
    $('.magnifying-img').click(function () {
        $('.magnifying-img').hide();
    });

    $('.magnifying-img').mouseleave(function(){
      $('.magnifying-img').hide();
     });

    //图片切换
    $('.products-small-img .img-box').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.products-big-img img')[0].src = $(this).find("img")[0].src;
    });
    $('.rp-img-span').click(function(){ $(this).siblings().addClass('rp-a-img-big');});
    $('.rp-a-img').mouseleave(function(){ $(this).removeClass('rp-a-img-big');});

    //tab 选项卡
    $(".tab-menu li").click(function () {
        var _index = $(this).index();
        $(".tab-content>div").eq(_index).show().siblings().hide();
        $(this).addClass("current").siblings().removeClass("current");
    });
    //显示更多
    $(".tab-content-show .more img,.tab-content-show .more b").click(function () {
        var txt=$(this).parent().find("b").text();
        $(this).parent().find("b").text((txt=="更多"?"收起":"更多"));
        $(this).parent().find("img").toggleClass("rotate90deg");
        if($(this).parents(".tab_yield").length>0){
            $(this).parents(".tab_yield").find('.tr_yield_hide').toggleClass("tr_yield_show");
        }else{
            $(this).parents(".references").find("div").toggleClass("dv_txt_hide");
        }
    });
    //弹出合成路线-下游产品
    $('.downstream-btn').click(function(){
        $('.downstream-mask,.mask').show();
    })
    //关闭弹窗
    $('.del-mask,.dv_keyword_mask').click(function () {
        $('.mask').hide()
    }); 

    
})


