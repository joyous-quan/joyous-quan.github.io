$(document).ready(function(){
	$("#header_bld").load("/templates/modules/new_header.html?t=" + Math.random());
	$("#footer_bld").load("/templates/modules/new_footer.html?t=" + Math.random());	
	$("#header_old").load("/templates/modules/old_header.html?t=" + Math.random());
	$("#footer_old").load("/templates/modules/old_footer.html?t=" + Math.random());	
/*	$("#side_cart").load("/templates/modules/side_cart.html?t=" + Math.random());*/	
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

function isempty(v){ 
	switch (typeof v)
	{ 
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

function _domKey13(funcname){
    $(document).keypress(function(e) {
        if(e.which == 13) {
            funcname();
        }
    })
}

function _chkEmail(val){
    return /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(val)?true:false;
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

function _chkPassword(val){
    return /^(?!\d+$)(?![a-zA-Z]+$)[\dA-Za-z]{6,18}$/.test(val)?true:false;
}