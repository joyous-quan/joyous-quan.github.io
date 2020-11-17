/**
 * Created by bd2010141 on 2019/11/8.
 */
var count = 60; //间隔函数，1秒执行
var InterValObj1; //timer变量，控制时间
var curCount1;//当前剩余秒数
var btn_code_cls='';//倒计时按钮class
function sendMessage(phone_cls,code_cls,code_type) {
    if(isempty(phone_cls)||isempty(code_cls)||code_type==null){return false;}
    btn_code_cls=code_cls;
    curCount1 = count;
    var phone = $.trim($(phone_cls).val());
    if (!/^1[3456789]\d{9}$/.test(phone)) {
        layer.msg(" 请输入正确的手机号码");
        return false;
    }
    //向后台发送处理数据
    _DoAjaxAsyncTrue("POST",{"mobile":phone,'code_type':code_type},"/webapi/v1/getVerificationCode",function(res){
        if(res.isok){
            //设置button效果，开始计时
            $(btn_code_cls).addClass("disabled");
            if($(btn_code_cls)[0].tagName=="A"){$(btn_code_cls).html( + curCount1 + " (s)");}else{$(btn_code_cls).val( + curCount1 + " (s)");}
            InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
        }else{
            layer.msg(res.errmsg);//错误提示
        }
    });
}
function SetRemainTime1() {
    if(!isempty(btn_code_cls)){
        if (curCount1 == 0) {
            window.clearInterval(InterValObj1);//停止计时器
            $(btn_code_cls).removeClass("disabled");//启用按钮
            if($(btn_code_cls)[0].tagName=="A"){$(btn_code_cls).html("重新发送");}else{$(btn_code_cls).val("重新发送");}
        }
        else {
            curCount1--;
            if($(btn_code_cls)[0].tagName=="A"){$(btn_code_cls).html(curCount1 + " (s)");}else{$(btn_code_cls).val(curCount1 + " (s)");}
        }
    }
}