
$(function(){
	$("#header").load("/modules/header.html");
	$("#footer").load("/modules/footer.html");	
})

//获取字符串字节长
String.prototype.lenB = function(){
	var cArr = this.match(/[^\x00-\xff]/ig);
	return this.length + (cArr == null ? 0 : cArr.length);
}
String.prototype.Trim = function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.IsEmpty = function(){
	return this.Trim()=="";
}
String.prototype.IsNumeric = function(){
	return !isNaN(parseFloat(this));
}
String.prototype.replaceAll = function (AFindText,ARepText){
	raRegExp = new RegExp(AFindText,"g");
	return this.replace(raRegExp,ARepText);
}
//判断字符串是否为中文
String.prototype.IsChinese = function() {
	var re = /^[\u4E00-\u9FA5]*$/;
	return re.test(this);
}
function isempty (v) {
	switch (typeof v) { 
		case undefined : return true;
		case 'undefined' : return true;
		case 'string' : if(v.Trim().length == 0||v.Trim()=='undefined') return true; break;
		case 'boolean' : if(!v) return true; break;
		case 'number' : if(0 === v) return true; break;
		case 'object' :
			if(null === v) return true;
			if(undefined !== v.length && v.length==0) return true;
			for(var k in v){return false;} return true;
			break;
	} 
	return false;
}

/*弹窗*/
var aBox={
    _warn:function(msg){//提示，手动关闭
        if($(".dv_load_gif").length>0){$(".dv_load_gif").hide();}
        layer.open({
            area: ['350px','200px'],
            fix: false, //不固定
            shadeClose: true,
            title: "Prompt Information",
            btn: ['confirm'],
            btnAlign: 'c',
            yes: function(index, layero){
                layer.closeAll();
            },
            content: msg,
            resize:false
        });
    },
    _conf:function(msg,funcName){//确认
        layer.open({
            area: ['350px','200px'],
            fix: false, //不固定
            shadeClose: true,
            title: "Prompt Information",
            btn: ['confirm','cancel'],
            btnAlign: 'c',
            yes: function(index, layero){
                funcName();
            },
            btn2: function(index, layero){
                layer.closeAll();
            },
            content: msg,
            resize:false
        });
    },
    _warntip:function(msg){//提示信息 自动关闭 3秒后关闭
        var tipHtml='<div style="width: 100%;height: 100%;display:table;">'+
            '<label style="padding:20px;display: table-cell;text-align: center;vertical-align: middle;word-break:break-all;">'+msg+'</label></div>';
        _boxShow('html',350,200,"Prompt Information",tipHtml,3000);
    },
    _cntbox:function(html,title,w,h){//纯内容窗口，只有×关闭
        isempty(w)?w=800:w;
        isempty(h)?h=560:h;
        _boxShow("html",w,h,title,html);
    },
    _urlbox:function(url,title,w,h){//iframe窗口，只有×关闭,cat:html/url
        w=isempty(w)?800:w;
        h=isempty(h)?560:h;
        _boxShow("url",w,h,title,url);
    }
};

//弹出层
function _boxShow(cat,w,h,title,url,time) {
    if (title == null || title == '') {
        title = false;
    }
    if (time == null || time == '') {
        time = 0;
    }
    if (url == null || url == '') {
        url = "error.html";
    }
    if (w == null || w == '') {
        w = ($(window).width());
    }
    if (h == null || h == '') {
        h = ($(window).height());
    }
    var type = (cat == "url") ? 2 : 1;
    layer.open({
        type: type,
        area: [w + 'px', h + 'px'],
        fix: false, //不固定
        //maxmin: true,
        time:time,
        btnAlign: 'c',
        title: title,
        content: url,
        resize:false
    });
}

/*绑定确定键执行的方法*/
function _domKey13(funcname){
    $(document).keypress(function(e) {
        if(e.which == 13) {
            funcname();
        }
    })
}
function _closeAndReload(){//关闭弹窗并刷新父页面
    window.parent.location.reload();
    setTimeout(function(){layer.close();},2000);
}