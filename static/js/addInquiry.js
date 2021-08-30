/**
 * Created by mingyuan-01 on 2017/12/18.
 */
document.write('<link rel="stylesheet" href="/static/css/addInquiry.css?t=20210811001"/>');
function _openInquiryBox(obj){
    var load_idx=layer.load(2);
    var name='',email='',phone='',quantity='',title='Inquiry Form',onclick='_addinquiry()',conf_html='';
    if(!isempty(BLD)){
        name=BLD.mem_name;
        email=BLD.mem_email;
        phone=BLD.mem_phone;
    }
    if(obj=="isfree"){title="Apply Sample";onclick="_addinquiry('isfree')";quantity='1mg';conf_html='<div class="dv_conf_free"><label><input type="checkbox" checked/>I confirm to accept the email contact from BLD service team for sample arrangement</label></div>'}
    _DoAjaxAsyncTrue("GET",{},"/webapi/v1/mem/regional",function(res){
        var selHtml='',bd='',proname='',tsstock='';
        try {tsstock=stock}catch (e){}
        if(!isempty(tsstock)){
            bd=tsstock.split("_")[0];
            proname=$("#proname").val();
            if(obj=="isfree"){
                bd+='-1mg';
            }
        }else if(obj!="isfree"&&!isempty(obj)){
            if($(obj).parent().parent().find("td:eq(1) a").length>0){
                bd=$(obj).parent().parent().find("td:eq(1) a").text();
                proname=$(obj).parent().parent().find("td:eq(2) a").text();
            }else{
                bd=$(obj).attr("bd");
                proname=$(obj).attr("nameen");
            }
        }
        var pro_ipt_val=bd+'; '+proname;//单个产品询单
        try{
            if(!isempty(checked_pro_bd)&&!isempty(checked_pro_name)){
                pro_ipt_val=checked_pro_bd+'; '+checked_pro_name;//单个产品询单
            }else if(!isempty(free_pro_checked_data_list)&&free_pro_checked_data_list.length>0){
                pro_ipt_val='';
                for(var i=0;i<free_pro_checked_data_list.length;i++){
                    var free_pro=free_pro_checked_data_list[i];
                    pro_ipt_val+=free_pro.p_bd+'-1mg|'+free_pro.p_name_en+'; ';
                }
            }
        }catch (e){}
        $.each(res, function (idx,item) {
            selHtml+='<dd rid="'+item.r_id+'">'+item.r_name+'</dd>'
        });
        layer.close(load_idx);
        var bulkHtml='<div class="dv_bulk_inquiry">'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Organization Name: </span><input type="text"  id="organizationText" value=""/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Country:</span>'+
            '<div class="dv_inquiry_country" onselectstart="return false"><div class="dv_inquiry_shade"></div><p class="label_p">Please Select</p><div class="dv_inquiry_selcnt"><h3><input class="ipt_bom_ipt" type="text"/><img src="/static/img/head/icon_search.png"/></h3><dl>'+selHtml+'</dl></div></div></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Name:</span><input type="text"  id="nameText" value="'+name+'"/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Email:</span><input id="emailText" value="'+email+'" type="text"/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Phone:</span><input id="phoneNum" value="'+phone+'" type="text"/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Quantity Required:</span><input id="quantityText" type="text" value="'+quantity+'"/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> BD Cat. No.;&Product Name:</span><input placeholder="BD Catalog No.;  & Product Name:" value="'+pro_ipt_val+'" id="productInfo" type="text"/></label>'+
            '<label class="label_ipt"><span class="label_span"><i>*</i> Additional Information:</span><input id="AdditionalText" type="text"/></label>'+
            conf_html+
            '<div style="min-height:20px;"><p class="inquiry_errorBox"></p></div>'+
            '<button class="blue_btn a_btn a_inquiay" onclick="'+onclick+'"> Submit </button>'+
            '</div>';
        bld._cntbox(bulkHtml,title,580,(conf_html!=''?540:520));
        $(".dv_inquiry_country > p").click(function(){
            $(this).toggleClass("on");
            if($(this).hasClass("on")){
                $(".dv_inquiry_shade,.dv_inquiry_selcnt").show();
            }else{
               $(".dv_inquiry_shade,.dv_inquiry_selcnt").hide();
            }
            $(".dv_inquiry_selcnt .ipt_bom_ipt").val('')[0].focus();
            var dlobj=$(".dv_inquiry_selcnt dl");
            dlobj.removeClass("ddhide");
            dlobj.find("dd").removeClass("show");
            dlobj.find(".dd_nodata").remove();
        });
        $(".ipt_bom_ipt").bind("input propertychange change",function(event){
            var tsval=$(this).val();
            var dlobj=$(".dv_inquiry_selcnt dl");
            dlobj.find("dd").removeClass("show");
            dlobj.find(".dd_nodata").remove();
            if(!isempty(tsval)){
                dlobj.addClass("ddhide");
                tsval=tsval.toLocaleLowerCase();//转小写
                var hascount=0;
                $(".dv_inquiry_selcnt dd").each(function(){
                    if($(this).text().toLocaleLowerCase().indexOf(tsval)>-1){
                        $(this).addClass("show");
                        hascount++;
                    }
                });
                if(hascount==0){
                    dlobj.append("<dd class='dd_nodata'>No Data</dd>");
                }
            }else{
                dlobj.removeClass("ddhide");
            }
        });
        $(".dv_inquiry_selcnt dl dd").click(function(){
            $(".dv_inquiry_country > p").html($(this).text()).attr("rid",$(this).attr("rid"));
            $(".dv_inquiry_shade,.dv_inquiry_selcnt").hide();
            $(".dv_inquiry_country > p").removeClass("on");
        });
        $(".dv_inquiry_shade").click(function(){
            $(".dv_inquiry_shade,.dv_inquiry_selcnt").hide();
            $(".dv_inquiry_country > p").removeClass("on");
        });
    });
}
function _addinquiry(isfree){
    if(isfree=="isfree"&&!$(".dv_conf_free input").is(":checked")){
        $(".inquiry_errorBox").html("Please read and agree to the agreement.").css("display","inline-block");
        return false;
    }
    $(".inquiry_errorBox").hide();
    var name,email,quantity,information,phone,proid,akpro,cat,product,country,company;
    name=$("#nameText").val();
    email=$("#emailText").val();
    quantity=$("#quantityText").val();
    information=$("#AdditionalText").val();
    akpro=$("#productInfo").val();
    cat=(isfree=="isfree"?'Sample Application':$("#productInfo").val().split(';')[0]);
    product=(isfree=="isfree"?$("#productInfo").val():$("#productInfo").val().split(';')[1].trim());
    proid=$("#proid").val();
    phone=$("#phoneNum").val();
    country=$(".dv_inquiry_country >p").text();
    company=$("#organizationText").val();
    if(email!=''&&akpro!=''&&quantity!=''&&phone!=''&&name!=''&&proid!=''&&country!=''&&country!='Please Select'&&company!=''){
        if(name.length>200){
            $("#nameText")[0].focus();
            $(".inquiry_errorBox").html("The length of the name should not exceed 200!").css("display","inline-block");
        }else if(email.length>200){
            $("#emailText")[0].focus();
            $(".inquiry_errorBox").html("The length of the email should not exceed 200!").css("display","inline-block");
        }else if(!_chkEmail(email)){
            $("#emailText")[0].focus();
            $(".inquiry_errorBox").html("Incorrect email format!").css("display","inline-block");
        }else if(phone.length>50){
            $("#phoneNum")[0].focus();
            $(".inquiry_errorBox").html("The length of the phone should not exceed 50!").css("display","inline-block");
        }else if(quantity.length>20){
            $("#quantityText")[0].focus();
            $(".inquiry_errorBox").html("The length of the quantity should not exceed 20!").css("display","inline-block");
        }else if(cat.length>50){
            $("#productInfo")[0].focus();
            $(".inquiry_errorBox").html("The length of the Cat. No.should not exceed 50!").css("display","inline-block");
        }else if(product.length>500){
            $("#productInfo")[0].focus();
            $(".inquiry_errorBox").html("The length of the product should not exceed 500!").css("display","inline-block");
        }else if(company.length>500){
            $("#organizationText")[0].focus();
            $(".inquiry_errorBox").html("The length of the Organization Name should not exceed 500!").css("display","inline-block");
        }else{
            var params={"is_free":(isfree=="isfree"?true:false),"name":name,"email":email,"quantity":quantity,"information":information,"cat":cat,"product":product,"phone":phone,"proid":proid,'country':country,'company':company};
            _DoAjaxAsyncTrue("POST",params,'/webapi/v1/user/addinquiry',function(){
                bld._warn('Added successfully!');
            });
        }
    }else{
        if(isempty(name)){$("#nameText")[0].focus()}
        else if(isempty(email)){$("#emailText")[0].focus()}
        else if(isempty(phone)){$("#phoneNum")[0].focus()}
        else if(isempty(quantity)){$("#quantityText")[0].focus()}
        else if(isempty($("#productInfo").val())){$("#productInfo")[0].focus()}
        //else if(isempty(information)){$("#AdditionalText")[0].focus()}
        $(".inquiry_errorBox").html("fields with * is required!").css("display","inline-block");
    }
}