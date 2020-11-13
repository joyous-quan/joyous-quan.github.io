/**
 * Created by bd2010141 on 2019/11/7.
 */
$(document).ready(function(){
    if($(".fixed-head").length==0 && $(window).width()>1024){
        $("body").append('<div class="fixed-head">\
            <div class="layout header-bottom padding-T5">\
                <div class="Logo float-L">\
                <a href="/"><h1><img src="/static/img/logo.png" alt="医药中间体"></h1></a>\
                </div>\
                <div class="width1010 float-R">\
                    <div class="float-L">\
                        <div class="search-box">\
                            <div class="inputborder">\
                            <input class="search-ipt ipt_scroll" type="text" placeholder="CAS号; 产品号; MDL号; 产品名">\
                            <label class="lab_uploadImg" title="上传结构图搜索"><img src="/static/img/uploadImg.png"><input type="file" onchange="_upadSearchImg(this)" accept="image/*"></label>\
                            <span id="onclick" onclick="_openSearchHtml(0)"><img src="https://www.bidepharm.com/static/img/search.png"></span>\
                            </div>\
                            <a href="/search/StructureSearch.html">结构搜索</a>\
                            <div class="dv_keyword_list">\
                            <textarea class="keyword_text" spellcheck="false" placeholder="一行一个关键字"></textarea>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
       </div>');
    }
    $(".ipt_scroll").bind("keypress",function(event){
		if(event.keyCode=="13"&&$(this).val().length>2){
			_openSearchHtml(0);//打开搜索页面
		}
	});
    $(window).scroll(function (){
        var st = $(this).scrollTop(),sh = 500;
        if(st >= sh){
            $('.fixed-head').addClass('fixed-head-show');
            $(".header .search-ipt").removeAttr("id");
            $(".ipt_scroll").attr("id","pro_keyword");
        } else {
            $('.fixed-head').removeClass('fixed-head-show');
            $(".ipt_scroll").removeAttr("id");
            $(".header .search-ipt").attr("id","pro_keyword");
        }
    });
});