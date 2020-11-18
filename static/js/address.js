function _addAddressBox(title,type,funcname,obj) {
    if(isempty(funcname)){funcname="";}
    var oncli='';
    var isdefault='';
    if(isempty(obj)){
        obj={"add_id":"","add_name":"","add_phone":"","add_tel":"","add_address":"","add_company":"","add_province":"","add_city":"","add_zipcode":"","add_email":""};
        oncli="_addAddress(\'"+type+"\',"+funcname+")";
    }else{
        isdefault='style="display:none;"';
        oncli="_editAddress("+funcname+","+obj.add_id+")";
    }
    var provinces='';
    var addJson=_getAddressJson();
    $.each(addJson.provinces,function(idx,item){
        provinces+='<option value="'+item+'">'+item+'</option>'
    });
    var addAddress = '<div class="mask add-addr-mask"><div class="mask_bg"></div>' +
        '<div class="popups add-addr-popups form-popups">' +
        '<h2 class="form-popups-title">'+title+'<span class="del-mask"><i class="iconfont icon-delete1"></i></span></h2>' +
        '<div class="form-box add-addr-form">' +
        '<p class="form-popups-tips">请使用有效的公司或研究机构地址，订单无法发货至公寓和私人住所。</p>' +
        '<p><span>*</span> 省：</p>' +
        '<select id="addBox_province" onchange="_uptProvince(this)">' +provinces+'</select>' +
        '<p><span>*</span> 市：</p>' +
        '<select id="addBox_city">' +
        '<option value="">请选择城市</option>'+
        '</select>' +
        '<p><span>*</span> 详细地址：</p>' +
        '<input type="text" id="add_address" value="'+obj.add_address+'">' +
        '<p>邮政编码：</p>' +
        '<input type="text" id="zipcode"  value="'+obj.add_zipcode+'">' +
        '<p><span>*</span> 收货人：</p>' +
        '<input type="text" id="name" value="'+obj.add_name+'">' +
        '<p><span>*</span> 手机号码：</p>' +
        '<input type="text" id="phone" value="'+obj.add_phone+'">' +
        '<p>电话：</p>' +
        '<p style="margin:0;"><input type="text" id="tel1" value="'+obj.add_tel.split('-')[0]+'" style="width:18%;"> - <input  style="width:77%;float:right;" type="text" id="tel2" value="'+(isempty(obj.add_tel.split('-')[1])?'':obj.add_tel.split('-')[1])+'"></p>' +
        '<p'+isdefault+'>' +
        '<label class="remember" for="remember"><input class="input_check" type="checkbox" id="remember"> 设为默认地址</label>' +
        '</p>' +
        '<p class="errorBox" style="min-height:26px;"></p>' +
        '<button class="btn btn-blue" onclick="'+oncli+'">保存</button>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("body").append(addAddress);
    $('.add-addr-mask').css({"display" : "block"});
    $('.del-mask').click(function(){
		$('.add-addr-mask').remove();
	});
    // 选中 省市 城市
    if(obj){
        _uptProvinceAndCity({"province": obj.addBox_province, "city": obj.addBox_city});
        if(obj.remember){
            $("#remember").attr('checked', 'checked')
        }
    }
}
function _addAddress(type,funcname){
    var province=$("#addBox_province option:selected").html();
    var city=$("#addBox_city option:selected").html();
    if (province=="请选择省份"){
        $(".errorBox").show().html(province);
        return false;
    }if (city=="请选择城市"){
        $(".errorBox").show().html(city);
        return false;
    }
    var params={province:province,
        city:city,
        address:$("#add_address").val(),
        zipcode:$("#zipcode").val(),
        name:$("#name").val(),
        phone:$("#phone").val(),
        tel:$("#tel1").val()+(isempty($("#tel1").val())&&isempty($("#tel2").val())?'':'-')+$("#tel2").val(),
        isdefault:$("#remember").is(":checked"),
        type:type
    };
    var chkres=_chkParams(params,['zipcode','tel','isdefault'],{"province":"省份不能为空","city":"城市不能为空","address":"详细地址不能为空","name":"收货人不能为空","phone":"手机号码不能为空"});
    if(chkres["chkok"]) {
        if (_chkPhone(params["phone"])) {
            _DoAjaxAsyncTrue("POST", params, "/webapi/v1/mem/address", function (res) {
                bide._warn("添加成功.");
                setTimeout(function(){
                    $('.mask').remove();
                    if(!isempty(funcname)){funcname();}
                },2000);
            });
        }else{$(".errorBox").show().html("手机号码格式错误");}
    }else{$(".errorBox").show().html(chkres["errmsg"]);}
}

function  _editAddress(funcname,id) {
    var province=$("#addBox_province option:selected").html();
    var city=$("#addBox_city option:selected").html();
    if (province=="请选择省份"){
        $(".errorBox").show().html(province);
        return false;
    }if (city=="请选择城市"){
        $(".errorBox").show().html(city);
        return false;
    }
    var params={province:province,
        city:city,
        address:$("#add_address").val(),
        zipcode:$("#zipcode").val(),
        name:$("#name").val(),
        phone:$("#phone").val(),
        tel:$("#tel1").val()+(isempty($("#tel1").val())&&isempty($("#tel2").val())?'':'-')+$("#tel2").val(),
        addid:id
    };
    var chkres=_chkParams(params,['zipcode','tel']);
    if(chkres["chkok"]) {
        if (_chkPhone(params["phone"])) {
            _DoAjaxAsyncTrue("PUT", params, "/webapi/v1/mem/address", function (res) {
                bide._warn("修改成功.");
                setTimeout(function(){
                    $('.mask').remove();
                    if(!isempty(funcname)){funcname();}
                },2000);
            });
        }else{$(".errorBox").show().html("手机号码格式错误");}
    }else{$(".errorBox").show().html(chkres["errmsg"]);}
}

function _getAddressJson(){
    var provinces = ['请选择省份','北京市','上海市','广东省','天津市','重庆市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广西壮族自治区','海南省','四川省','贵州省','云南省','西藏藏族自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔族自治区'];
    var citys = [['请选择城市'],
    ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区", "其他区"],
    ["黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明区", "其他区"],
    ["广州市","深圳市","清远市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市","惠州市","东莞市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"],
    ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区",  "滨海新区", "宁河区", "静海区", "蓟州区"],
    ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区",  "渝北区", "巴南区", "黔江区", "长寿区", "綦江区", "潼南区", "铜梁区", "大足区", "荣昌区", "璧山区", "梁平区", "城口县", "丰都县", "垫江县", "武隆区", "忠县", "开州区", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "江津区", "合川区", "永川区", "南川区",  "其他区"],
    ["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","保定市","衡水市","沧州市","邢台市","邯郸市"],
    ["太原市","朔州市","大同市","阳泉市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市"],
    ["呼和浩特市","包头市","乌海市","赤峰市","通辽市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","锡林郭勒盟","阿拉善盟"],
    ["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","本溪市","辽阳市","鞍山市","丹东市","大连市","营口市","盘锦市","锦州市","葫芦岛市"],
    ["长春市","白城市","松原市","吉林市","四平市","辽源市","通化市","白山市","延边州"],
    ["哈尔滨市","齐齐哈尔市","七台河市","黑河市","大庆市","鹤岗市","伊春市","佳木斯市","双鸭山市","鸡西市","牡丹江市","绥化市","大兴安岭地区"],
    ["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市"],
    ["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市"],
    ["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","池州市","宣城市"],
    ["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市"],
    ["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市"],
    ["济南市","青岛市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市"],
    ["郑州市","开封市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","济源市"],
    ["武汉市","十堰市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","襄阳市","随州市","仙桃市","潜江市","天门市","神农架林区","恩施州"],
    ["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西州"],
    ["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","河池市","来宾市","贺州市"],
    ["海口市","三亚市","三沙市","五指山市","琼海市","儋州市","文昌市","万宁市","东方市","定安县","屯昌县","澄迈县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"],
    ["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","宜宾市","攀枝花市","巴中市","达州市","资阳市","眉山市","雅安市","阿坝州","甘孜州","凉山州"],
    ["贵阳市","六盘水市","遵义市","安顺市","毕节市","铜仁市","黔东南苗族侗族自治州","黔南布依族苗族自治州","黔西南布依族苗族自治州"],
    ["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","德宏州","怒江州","迪庆州","大理州","楚雄州","红河州","文山州","西双版纳州"],
    ["拉萨市","那曲市","昌都市","林芝市","山南市","日喀则市","阿里地区"],
    ["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","榆林市","安康市","商洛市"],
    ["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","宁夏回族自治州","甘南藏族自治州"],
    ["西宁市","海东市","海北州","海南州","黄南州","果洛州","玉树州","海西州"],
    ["银川市","石嘴山市","吴忠市","固原市","中卫市"],
    ["乌鲁木齐市","克拉玛依市","吐鲁番市","喀什地区","阿克苏地区","和田地区","哈密市","克孜勒苏柯州","博尔塔拉州","昌吉州","巴音郭楞州","伊犁州","塔城地区","阿勒泰地区","可克达拉市","石河子市","阿拉尔市","图木舒克市","五家渠市","北屯市","铁门关市","昆玉市"]];
    return {'provinces':provinces,'citys':citys}
}
function _uptProvince(obj){
    var province=$(obj).val();
    if(!isempty(province)&&province!="请选择省份"){
        var addJson=_getAddressJson();
        var idx=addJson.provinces.indexOf(province);//所选省份在Json数组中得下标
        if(idx>-1){
            var html='';
            $.each(addJson.citys[idx],function(idx,item){
                html+='<option value="'+item+'">'+item+'</option>'
            });
            $("#addBox_city").html(html);
        }
    }
}

function _uptProvinceAndCity(obj) {
    var province=obj.province;
    var city=obj.city;
    if(!isempty(province)&&province!="请选择省份") {
        var addJson=_getAddressJson();
        var idx = addJson.provinces.indexOf(province);//所选省份在Json数组中得下标
        if (idx > -1) {
            var html = '';
            $.each(addJson.citys[idx], function (idx, item) {
                if(item===city){
                    html += '<option value="' + item + '" selected="selected">' + item + '</option>'
                }else {
                    html += '<option value="' + item + '">' + item + '</option>'
                }
            });
            $("#addBox_city").html(html);
            $("#addBox_province").val(province);
            $("#addBox_city").val(city)
        }
    }
}

function _delAddressBox(id, userid, type){
	bide._conf("确定删除？",_delAddress, {
	    addid: id,
        userid: userid,
        type: type
    });
}

function _delAddress(obj){
	_DoAjaxAsyncTrue("DELETE", obj, "/webapi/v1/mem/address", function(res){
        if(res.isok){
			_reload();
        }
    });
}

function _setDefaultBox(id, type) {
    bide._conf("确定变更默认地址？", _setDefault, {
        addid: id,
        cat: type,
        isdefault: 1
    })

}

function _setDefault(obj) {
    _DoAjaxAsyncTrue("PUT", obj, "/webapi/v1/mem/address", function (res){
        if(res.isok){
            bide._warn("修改默认地址成功.");
            _reload()
        }
    })
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