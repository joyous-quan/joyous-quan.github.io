/**
 * Created by bd2010141 on 2018/9/28.
 */
//var t = 5;
//var timer;
var validato;//表单验证对象
$(document).ready(function(){
   /* _DoAjaxAsyncTrue('GET',{},'/webapi/v1/getSlideshow',function(res){
        if(!isempty(res)){
            $(".imgPlayer").html(res);
            $(".imgPlayer").imgPlayer({});
        }
    });*/
     /*// 初始化轮播图
      $('.featured-products-con').owlCarousel({
          items: 5,
          loop: true,
          margin: 0,
           nav:true,
           dots:false,
          autoplay: true,
          stopOnHover:true,
          autoplayTimeout: 4000,
          autoplayHoverPause: false,
          navRewind: true,
          navText: [ '<', '>' ]
      });*/
    //添加自定义检查密码的方法
        validator=$('#login_form').validate({
            rules:{
                email:{
                    required: true
                },
                password:{
                    required: true,
                    minlength: 6,
                    maxlength:18
                }
            },
            messages:{
                email:{
                    required:"请输入邮箱地址或手机号"
                },
                password:{
                    required:"请输入密码",
                    minlength:"密码最少为6个字符",
                    maxlength:"密码最多为18个字符"
                }
            }
        });
        try{
            $("#email")[0].focus();
        } catch (e){}
//        $("#email").blur(function(){
//            selCompany();
//        });
        /*20200413*/
        /*
        $('#video_btn').click(function(){
            $('.video_mask,.video_box_bg').show();
            $('#play_video')[0].currentTime=0;
            $('#play_video')[0].play();
        })
        $('.video_mask,.closed_video').click(function(){
            $('.video_mask,.video_box_bg').hide();
            $('#play_video')[0].pause();
        })
        */
       /* //tab 切换
        $('.index_tab_title li').click(function() {
            var idx = $(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            $('.tab_content').eq(idx).show().siblings().hide();

        });
        //tab 跳转到指定页面
        
        var ur =location.href;
        var type=ur.split('?')[1].split("=")[1];
        $('input').click(function(event) {
            $('input').removeClass('btn');
            $(this).addClass('btn');
            $('#box1 div').css({'display':'none'});
            $('#box1 div').eq($(this).index()).css({'display':'block'});
        });
        $('#box1 div').css({'display':'none'});
        $('input').removeClass('btn');
        $('input').eq(type-1).addClass('btn');
        $('#box1 div').eq(type-1).css({'display':'block'});
        */
        /*20200413*/
});
//预览视频
function _openVideoBox(){
    layer.open({
        type: 2,
        area: ['930px','532px'],
        fix: false, //不固定
        btnAlign: 'c',
        title: false,
        content: "/modules/video.html",
        shadeClose:true,
        resize:false
    });
}
var slideVerify=null;
function _openLogisticsBox(){
    var html='<div class="logistics-tracking">\
            <p class="padding-B5"><span>*</span>输入手机号码：</p>\
            <p><input type="text" id="ipt_logistics_phone" maxlength="11" class="enter-tel"><a href="javascript:;" id="a_logistics_phone" onclick="sendMessage(\'#ipt_logistics_phone\',\'#a_logistics_phone\',1)" class="set-code">发送验证码</a></p>\
            <br>\
            <p class="padding-B5"><span>*</span>输入验证码：</p>\
            <p><input type="text" maxlength="6" id="ipt_logistics_code" class="enter-code"></p>\
            <div class="selfDiv" style="margin:20px 0;">\
                <div class="verify-wrap" id="verify-wrap"></div>\
            </div>\
            <p><a href="javascript:;" class="query-btn" onclick="_chkPhoneBylogistics()">查 询</a></p>\
        </div>';
    _openBox('物流追踪',html,480,360);
    var SlideVerifyPlug = window.slideVerifyPlug;
    slideVerify = new SlideVerifyPlug('#verify-wrap',{
        wrapWidth:'100%',//设置 容器的宽度
        initText:'请按住滑动到最右边',  //设置  初始的 显示文字
        sucessText:'验证通过'//设置 验证通过 显示的文字
    });
}
//查询物流检查手机号验证码
function _chkPhoneBylogistics(){
    var phone=$.trim($("#ipt_logistics_phone").val());
    var code=$.trim($("#ipt_logistics_code").val());
    if(isempty(phone)){layer.msg('请输入手机号码');return false;}
    if(!/^1[3456789]\d{9}$/.test(phone)) {layer.msg(" 请输入正确的手机号码");return false;}
    if(isempty(code)){layer.msg('请输入验证码');return false;}
    if(!slideVerify.slideFinishState){layer.msg('请先完成验证');return false;}
    _DoAjaxAsyncTrue('POST',{phone:phone,code:code},'/webapi/v1/chkLogisticsByPhone',function(res){
        if(res.isok){
            window.location.href='/logistics-list.html?phone='+window.btoa(phone)+'&code='+window.btoa(code);
        }else{
            layer.msg('暂未找到物流信息')
        }
    })
}
function _openBox(title,html,w,h){
    if(isempty(w)){w=430;}
    if(isempty(h)){h=380;}
    $(".common_mask").remove();
    $("body").append('<div class="mask common_mask" style="display:block;"><div class="mask_bg"></div>\
    <div class="popups form-popups" style="width: '+w+'px;height: '+h+'px;">\
        <h2 class="form-popups-title">'+title+'<span class="del-mask"><i class="iconfont icon-delete" style="font-size:26px;" onclick="$(this).parents(\'.common_mask\').hide()"></i></span></h2>\
        <div class="form-box add-addr-form">'+html+'</div>\
    </div>\
</div>');
}
function _openLoginBox(){
    //if(isempty(getCookie("access_token"))) {
        $(".common_mask").remove();
        var html = '<div class="mask common_mask" style="display:block;"><div class="mask_bg"></div>\
        <div class="popups form-popups log-inquire-popups" style="width:480px;height:360px;">\
            <h2 class="form-popups-title">会员登录<span class="del-mask"><i class="iconfont icon-delete" style="font-size:26px;" onclick="_close(this)"></i></span></h2>\
            <div class="form-box add-addr-form">\
                <div class="logistics-tracking login-register-con login-con">\
                    <form id="login_form" novalidate="novalidate">\
                        <p class="padding-B5"><span>*</span>邮箱/电话</p>\
                        <p><input type="text" id="email" name="email" class="enter-code"></p>\
                        <br>\
                        <p class="padding-B5"><span>*</span>密码</p>\
                        <p><input type="password" name="password" id="password" class="enter-code"></p>\
                        <p class="align-R"><a href="/user/passwordAssistance.html" title="" style="color: #888;">忘记密码 ?</a></p>\
                        <p class="checkbox-con">\
                        <label for="remember"><input class="input_check" type="checkbox" id="remember" checked="">记住登录状态</label>\
                        </p>\
                        <p class="padding-B5">登录后填写建议可以查看反馈进度，是否登录？</p>\
                        <p><a href="javascript:;" class="query-btn" onclick="_login()">登 录</a><a class="no-btn" href="javascript:;" onclick="_toUrl()">不，继续反馈</a></p>\
                    </form>\
                </div>\
            </div>\
        </div>\
        </div>';
        $("body").append(html);
    //}else{
        //window.location.href='/suggestion.html';
    //}
}
function _login(){
    $(".errorBox").hide();
    var flag = $("#login_form").valid();
    if(!flag){
        validator.focusInvalid();
        return false;
    }
    var isSave=$(".input_check").is(":checked");
    var email=$("#email").val();
    var password=$("#password").val();
//        var userid='';
//        if(!$('.company').hasClass('hide')){
//            userid=$('.company option:selected').val();
//        }
    var params={"email":email,"password":password,"isSave":isSave};
    _DoAjaxAsyncTrue('POST',params, '/webapi/v1/user/login', function () {
        window.location.href='/suggestion.html';
    });
}
_domKey13(_login);
function _close(obj){
    $(obj).parents('.common_mask').hide();
}
function _toUrl(){
    window.location.href='/suggestion.html';
}

