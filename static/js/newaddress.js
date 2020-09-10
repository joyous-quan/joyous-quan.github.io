/**
 * Created by yuchong on 2017/8/11.
 */
document.write('<link rel="stylesheet" href="/static/css/addAddressBox.css"/>');
function _addAddressBox(title,type,obj){
    var typename='Shipping',country='',province='',isshow='',h=740;
    if(isempty(obj)){
        obj={"add_id":"","add_name":"","add_phone":"","add_address1":"","add_address2":"","add_company":"","add_province":"","add_city":"","add_zipcode":"","add_email":""};
        oncli="_addAddress(\'"+type+"\')";
    }else{
        country=obj.add_country;
        province=obj.add_province;
        isshow='display:none;';
        oncli="_editAddress(\'"+obj.add_id+"\')";
        h=700;
    }
    if(type==1){typename="Billing";}
    var addAddress='<div class="i_f_content a_i_content dv_address_box">'+
        '<ul>'+
        '<li class="i_f_ipt marg0">'+
        '<p class="colorGrey">* Attention Name</p>'+
        '<input type="text" id="add_name" name="" value="'+obj.add_name+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Phone</p>'+
        '<input type="text" name="" id="add_phone" value="'+obj.add_phone+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Institute/Company Name</p>'+
        '<input type="text" name="" id="add_company" value="'+obj.add_company+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Country</p>'+
        '<select id="add_country" class="sel_country underline_ipt a_i_select"></select>'+
        '</li>'+
        '<li class="i_f_ipt li_province">'+
        '<p class="colorGrey">* State/Province</p>'+
        '<select class="sel_province show underline_ipt a_i_select" id="add_state"></select>'+
        '<input class="ipt_province dv_text" type="text" id="add_state2">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* City</p>'+
        '<input type="text" id="add_city" value="'+obj.add_city+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Address1<span style="color: red;float: right;">*Max character length is 35 on address line 1.</span></p>'+
        '<input type="text" name="" id="add_BAddress1"  value="'+obj.add_address1+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">Address2</p>'+
        '<input type="text" name="" id="add_BAddress2" value="'+obj.add_address2+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Zip Code</p>'+
        '<input type="text" name="" id="add_zipcode" value="'+obj.add_zipcode+'">'+
        '</li>'+
        '<li class="i_f_ipt">'+
        '<p class="colorGrey">* Email</p>'+
        '<input type="text" id="add_email" name="" value="'+obj.add_email+'">'+
        '</li>'+
        '<li style="height: 30px;line-height: 30px;padding-top: 10px;'+isshow+'">'+
        '<span class="float-right">'+
        '<input class="switch-checkbox" id="switch-checkbox" type="checkbox">'+
        '<label for="switch-checkbox" class="switch-label">'+
        '<span class="switch-circle"></span>'+
        '</label>'+
        '<span class="switch-checkbox-txt position-r">&nbsp;&nbsp;Set the default address</span>'+
        '</span>'+
 		'</li>'+
        '</ul>'+
        '<p class="errorBox">&nbsp;&nbsp;</p>'+
        '<a class="btn btn-block green-black-btn" onclick="'+oncli+'"> Submit </a>'+
        '</div>';
    aBox._cntbox(addAddress,title,400,h);

    _loadCountry(country);//鍔犺浇鍥藉鍒楄〃
    if(!isempty(province)){//宸查€夌渷涓嶄负绌哄姞杞界渷
        _loadProvince(".dv_address_box .sel_country",province);
    }
    $(".sel_country").change(function(){//缁戝畾鍥藉鍒楄〃鍊兼敼鍙樹簨浠�
        _loadProvince($(this));
    });
    $("#Container input").focus(function(){
        $("#box_errmsg").hide();
    });
}
//鍔犺浇鍥藉鍚嶇О
function _loadCountry(country){
    var result=[];
    try{
        result=_DoAjaxByAdm("GET",{},"/webapi/v1/mem/regional");
    }catch(e){
        result=_DoAjax("GET",{},"/webapi/v1/mem/regional");
    }
    if(result.length>0){
        var ophtml='<option value="">Please Select</option>';
        $.each(result, function (idx, item) {
            var isseled='';
            if(item.r_name.toLowerCase()==country.toLowerCase()){isseled="selected";}
            ophtml += '<option '+isseled+' value="'+item.r_name+'"  rid="'+item.r_id+'">'+item.r_name+'</option>';
        });
        $(".dv_address_box .sel_country").html(ophtml);
    }
}
//鏍规嵁鐖秈d鏌ヨ鐪佷唤銆佸煄甯傘€佸尯
function _loadProvince(obj,province){
    if(isempty(province)){province="";}
    var id=$(obj).find("option:selected").attr("rid");
    var country=$(obj).val();
    if(!isempty(id)) {
        //if(country.toLowerCase()=="united states"){
        if(country=="United States"||country=="Canada"||country=="United Kingdom"||country=="Australia"||country=="Mexico"||country=="China"||country=="Japan"){
            var result=[];
            try{
                result = _DoAjaxByAdm("GET", {"all": true, "id": id}, "/webapi/v1/mem/regional");
            }catch(e){
                result = _DoAjax("GET", {"all": true, "id": id}, "/webapi/v1/mem/regional");
            }
            if (result.length > 0) {
                $(obj).parent().parent().find(".sel_province").addClass("show").siblings().removeClass("show");
                var ophtml = '<option value="">Please Select</option>';
                $.each(result, function (idx, item) {
                    var isseled='';
                    if($.trim(item.r_name.toLowerCase())==$.trim(province.toLowerCase())){isseled="selected"}
                    ophtml += '<option '+isseled+' value="' + item.r_name + '" >' + item.r_name + '</option>';
                });
                $(".dv_address_box .sel_province").html(ophtml);
            }
        }else{
            $(obj).parent().parent().find(".ipt_province").addClass("show").siblings().removeClass("show");
            $(".dv_address_box .ipt_province").val(province);
        }
    }
}
function _addAddress(type){
    var address1=$("#add_BAddress1").val();
    var params={"name":$("#add_name").val(),"phone":$("#add_phone").val(),"address1":address1,"address2":$("#add_BAddress2").val(),"company":$("#add_company").val(),"country":$("#add_country option:selected").html(),"province":$(".dv_address_box  .show").val(),"city":$("#add_city").val(),"zipcode":$("#add_zipcode").val(),"email":$("#add_email").val(),"type":type};
    if(address1.length>35){$(".errorBox").html("Max character length is 35 on address line 1.");return false;}
    var chkres=_chkParams(params,['address2']);
    if(chkres["chkok"]) {
        params["isdefault"]=$("#switch-checkbox").is(":checked")?true:false;//鏄惁榛樿
        if (_chkPhone(params["phone"])) {
            if (_chkZipCode(params["zipcode"])) {
                if (_chkEmail(params["email"])) {
                     _DoAjaxAsyncTrue("POST", params, '/webapi/v1/mem/address', function () {
                        aBox._warn("Added successfully.");
                        setTimeout(function(){
                            window.location.reload();
                        },2000);
                    });
                }else{$(".errorBox").html("Mailbox format error");}
            }else{$(".errorBox").html("Zip Code format error");}
        }else{$(".errorBox").html("Phone number should have seven digits or more.");}
    }else{$(".errorBox").html(chkres["errmsg"]);}
}

function _editAddress(addid){
    var address1=$("#add_BAddress1").val();
    var params={"addid":addid,"name":$("#add_name").val(),"phone":$("#add_phone").val(),"address1":address1,"address2":$("#add_BAddress2").val(),"company":$("#add_company").val(),"country":$("#add_country option:selected").html(),"province":$(".dv_address_box  .show").val(),"city":$("#add_city").val(),"zipcode":$("#add_zipcode").val(),"email":$("#add_email").val()};
    if(address1.length>35){$(".errorBox").html("Max character length is 35 on address line 1.");return false;}
    var chkres=_chkParams(params,['address2']);
    if(chkres["chkok"]) {
        if (_chkPhone(params["phone"])) {
            if (_chkZipCode(params["zipcode"])) {
                if (_chkEmail(params["email"])) {
                     _DoAjaxAsyncTrue("PUT", params, '/webapi/v1/mem/address', function () {
                        aBox._warn("Successfully.");
                        setTimeout(function(){
                            window.location.reload();
                        },2000);
                    });
                }else{$(".errorBox").html("Mailbox format error");}
            }else{$(".errorBox").html("Zip Code format error");}
        }else{$(".errorBox").html("Phone number should have seven digits or more.");}
    }else{$(".errorBox").html(chkres["errmsg"]);}
}
function _chkPhone(val){
    if(isempty(val)){
		return false;
	}
    val=val.replace(/[^0-9]/ig,"");
	if(val.length>=7&&val.length<=20){
		return true;
	}else{
		return false;
	}
}