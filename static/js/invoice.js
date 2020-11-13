/**
 * Created by bd2010141 on 2018/10/19.
 */
function _addInvoiceBox(title,funcname,obj) {
    if(isempty(funcname)){funcname="";}
    var oncli='';
    if(isempty(obj)){
        obj={"i_invoicetitle":"",//发票抬头
            "i_identifynumber":"",//纳税人识别号
            "i_invoiceaddress":"",//公司注册地址
            "i_bankaddress":"",//公司开户行
            "i_banknumber":"",//公司的开户行账号
            "i_phone":"",//电话号码
            "i_isdefault":""
            };
        oncli="_addInvoice("+funcname+")";
    }else{
        oncli="_editInvoice("+funcname+","+obj.i_id+")";
    }
    var check='',type='';
    if(obj.i_isdefault){check='checked';}
    if(obj.i_type==1){
        type='<label style="margin-right: 20px;"><input type="radio" name="invoice" value="0">增值税普票</label><label><input type="radio" name="invoice" value="1" checked>增值税专用发票（所有项为必填项）</label>';
    }else{
        type='<label style="margin-right: 20px;"><input type="radio" name="invoice" value="0" checked>增值税普票</label><label><input type="radio" name="invoice" value="1">增值税专用发票（所有项为必填项）</label>';
    }
    var addAddress = '<div class="mask bill-info-mask"><div class="mask_bg"></div>' +
        '<div class="popups add-addr-popups form-popups" style="height:580px;">' +
        '<h2 class="form-popups-title">'+title+'</h2>' +
        '<span class="del-mask del-mask-billInfo"><i class="iconfont icon-delete1"></i></span>' +
        '<div class="form-box bill-info-form">' +
        '<p><span>*</span> 发票类型：</p>' +
        '<p id="add_type">'+type+'</p>' +
        '<p><span>*</span> 发票抬头：</p>' +
        '<input type="text" id="add_invoicetitle" value="'+obj.i_invoicetitle+'">' +
        '<p><span>*</span> 纳税识别号：</p>' +
        '<input type="text" id="add_identifynumber" value="'+obj.i_identifynumber+'">' +
        '<p>公司注册地址：</p>' +
        '<input type="text" id="add_invoiceaddress" value="'+obj.i_invoiceaddress+'">' +
        '<p>公司开户行：</p>' +
        '<input type="text" id="add_bankaddress"  value="'+obj.i_bankaddress+'">' +
        '<p>开户行账号：</p>' +
        '<input type="text" id="add_banknumber" value="'+obj.i_banknumber+'">' +
        '<p>电话号码：</p>' +
        '<input type="text" id="add_phone" value="'+obj.i_phone+'">' +
        '<p class="checkbox-con">' +
        '<label for="remember"><input class="input_check" type="checkbox" id="remember" '+check+' >' +
        '设为默认发票信息</label>' +
        '</p>' +
        '<p class="error"></p>' +
        '<button type="submit" class="btn btn-blue" onclick="'+oncli+'">保存</button>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("body").append(addAddress);
    $('.bill-info-mask').css({"display" : "block"});
    $('.del-mask-billInfo').click(function(){
		$('.bill-info-mask').remove();
	});
}
function _addInvoice(funcname){
    params={type:$("#add_type input:checked").val(),
        invoicetitle:$("#add_invoicetitle").val(),
        identifynumber:$("#add_identifynumber").val(),
        invoiceaddress:$("#add_invoiceaddress").val(),
        bankaddress:$("#add_bankaddress").val(),
        banknumber:$("#add_banknumber").val(),
        phone:$("#add_phone").val(),
        isdefault:$("#remember").is(":checked")
    };
    var chkres;
    if(params['type']=='1'){
        chkres=_chkParams(params,['isdefault'],{"invoicetitle":"发票抬头不能为空","identifynumber":"纳税人识别号不能为空","invoiceaddress":"公司注册地址不能为空","bankaddress":"公司开户行不能为空","banknumber":"开户行账号不能为空","phone":"电话号码不能为空"});
    }else{
        chkres=_chkParams(params,['invoiceaddress','bankaddress','banknumber','phone','isdefault'],{"invoicetitle":"发票抬头不能为空","identifynumber":"纳税人识别号不能为空"});
    }
    if(chkres["chkok"]) {
        _DoAjaxAsyncTrue("POST", params, "/webapi/v1/mem/invoice", function (res) {
            bide._warn("添加成功");
            setTimeout(function(){
                $('.mask').remove();
                if(!isempty(funcname)){funcname();}
            },2000);
        });
    }else{$(".error").show().html(chkres["errmsg"]);}
}
function _editInvoice(funcname,id){
    params={type:$("#add_type input:checked").val(),
        invoicetitle:$("#add_invoicetitle").val(),
        identifynumber:$("#add_identifynumber").val(),
        invoiceaddress:$("#add_invoiceaddress").val(),
        bankaddress:$("#add_bankaddress").val(),
        banknumber:$("#add_banknumber").val(),
        phone:$("#add_phone").val(),
        isdefault:$("#remember").is(":checked")
    };
    var chkres;
    if(params['type']=='1'){
        chkres=_chkParams(params,['isdefault'],{"invoicetitle":"发票抬头不能为空","identifynumber":"纳税人识别号不能为空","invoiceaddress":"公司注册地址不能为空","bankaddress":"公司开户行不能为空","banknumber":"开户行账号不能为空","phone":"电话号码不能为空"});
    }else{
        chkres=_chkParams(params,['invoiceaddress','bankaddress','banknumber','phone','isdefault'],{"invoicetitle":"发票抬头不能为空","identifynumber":"纳税人识别号不能为空"});
    }
    if(chkres["chkok"]) {
        _DoAjaxAsyncTrue("PUT", params, "/webapi/v1/mem/invoice/"+id, function (res) {
            bide._warn("编辑成功");
            setTimeout(function(){
                $('.mask').remove();
                if(!isempty(funcname)){funcname();}
            },2000);
        });
    }else{$(".error").show().html(chkres["errmsg"]);}
}