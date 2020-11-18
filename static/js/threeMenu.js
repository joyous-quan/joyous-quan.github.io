/**
 * Created by bd2010141 on 2018/8/31.
 */
$(document).ready(function(){
    _closeKeyword();//清除搜索条件
    //分类提示框
    $(".public-option-tab > a").click(function(){
        setTimeout(function(){_selSubMenuPro();},200);
    });
    $(".tips-content li").click(function(event){
        $(".public-option-tab > a").removeClass("current");
        $(this).parent().siblings(".tips-txt").html($(this).find("span").html());
        $(".tips-content").hide();
        setTimeout(function(){_selSubMenuPro();},200);
    });
    $(".a_close").click(function(){
        _closeKeyword();//清除搜索条件
    });


});
//清除搜索条件
function _closeKeyword(){
    $(".public-option-tab .current").removeClass("current");
    $(".default").addClass("current");
    $(".purity").html("纯度");
    $(".size").html("规格");
    $(".dv_list,#dvPage").remove();
    $(".dv_pro_list,.page").show();
}
//筛选该三级菜单下的产品列表
function _selSubMenuPro(pageindex){
    if($(".dv_list").length==0){
        $(".dv_pro_list,.page").hide();
        $(".public-option").after('<div class="single-menu-detail-con dv_list"></div><div class="clear"></div>');
        $(".page").after('<div id="dvPage" class="pages"></div>');
    }
    $(".dv_list").html('<p class="textC p_loading"><img src="/static/img/loading.gif"/></p>');
    page.pageindex=isempty(pageindex)?1:parseInt(pageindex);
    var subMenuid=$("#subMenuid").val();
    if(!isempty(subMenuid)){
        var isStock=$(".inStock").hasClass("current")?true:false;
        var isSales=$(".sales").hasClass("current")?true:false;
        var purity=$(".purity").text();
        var size=$(".size").text();
        if(purity=="纯度" ||purity=="请选择"){purity="";}
        if(size=="规格" ||size=="请选择"){size="";}
        /*_DoAjaxAsyncTrue("GET",{subMenuid:subMenuid,isStock:isStock,isSales:isSales,purity:purity,size:size,pageindex:page.pageindex,pagesize:20},"/webapi/v1/SubMenuProductListBySearch",function(res){
            if(res.result.length>0){*/
                var html='';
                $(".sp_count").html(res.total);
                $.each(res.result,function(idx,item){
                    var stock="";
                    if(item.p_ishasstock){stock="常备库存";}
                    html+='<dl class="product-card">'+
                        '<dt'+
                            '<div class="img-box"><img src="'+_getProimg(item.p_cas,item.p_id)+'" alt="'+item.p_cas+'"></div>'+
                            '<div class="product-name">'+
                                '<a href="/products/'+item.s_url+'">'+
                                    '<span class="product-EN-name">'+item.p_name_en+'</span>'+
                                    '<span class="product-CN-name">'+item.p_name_cn+'</span>'+
                                '</a>'+
                            '</div>'+
                        '</dt>'+
                        '<dd>'+
                            '<p><span class="float-L">'+item.p_bd+'</span><span>'+item.p_cas+'</span><span class="float-R">'+item.p_purity+'</span></p>'+
                            '<p class="border-B">'+
                                '<span class="float-L"><b>￥'+(!isempty(item.pr_rmb)?item.pr_rmb.toFixed(2):"暂无")+'</b></span><span class="align-C">'+item.pr_size+'</span><span class="color-blue float-R">'+stock+'</span>'+
                            '</p>'+
                        '</dd>'+
                    '</dl>';
                });
                $(".dv_list").html(html);
                page._initial('_selSubMenuPro');
           /* }else{
                $(".sp_count").html('0');
                $(".dv_list").html('<p class="textC" style="height: 200px;line-height: 200px;">暂无数据</p>');
            }
        });*/
    }
}