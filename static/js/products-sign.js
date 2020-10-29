
function inquiryClick(){
        var inquiryHtml = '<div class="mask logout-inquire-mask"><div class="popups form-popups log-inquire-popups"><h2 class="form-popups-title">询单</h2><span class="del-mask"><i class="iconfont icon-delete"></i></span><div class="form-box add-addr-form"><p class="blue-tips"><b>填写一下信息</b>（我们会尽快回复您的询单）</p><p>工作单位<span class="required">*</span></p><input type="text" name="" id="organizationText"><ul><li class="float-L"><p>姓名<span class="required">*</span></p><input type="text" name="" id="nameText"></li><li class="float-R"><p>电话<span class="required">*</span></p><input type="text" name="" id="phoneNum"></li></ul><p>邮箱<span class="required">*</span></p><input type="text" name="" id="emailText"><ul><li class="float-L"><p>CAS号<span class="required">*</span></p><input type="text" name="" value="5336-90-3" id="casNum"></li><li class="float-R"><p>数量<span class="required">*</span></p><input type="text" name="" value="1" id="quantityText"></li></ul><p>产品<span class="required">*</span></p><textarea id="productName" class="sp_pro_name_cn"></textarea><p>备注</p><textarea class="remark" id="additional-inf"></textarea><p class="inquiry_errorBox"></p><button type="submit" class="btn btn-blue" onclick="addinquiry()" href="javascript:;">保存</button></div></div></div>'

        $('body').append(inquiryHtml);
        $('.logout-inquire-mask').show();
        //关闭弹窗
        $('.del-mask').click(function () {
            $('.mask').remove()
        }); 
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
    $('.del-mask').click(function () {
        $('.mask').hide()
    }); 

    
})


