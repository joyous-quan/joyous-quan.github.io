/*document.write("<script language='javascript' src='/static/js/tool/tool.js'></script>");
document.write("<script language='javascript' src='/static/js/tool/base64.js'></script>");
document.write('<link rel="stylesheet" href="/static/iconfont/iconfont.css">');*/
var dvpage="dvPage";
var page={
	pageindex:1,
	pagesum:1,
	pagesize:25,
	total:0,
	sort:'',	//排序条件
	query:'',	//查询条件
	_initial:function(function_name){
		//总的页面条数
		var pageshow = "";
		if(page.total>0){
			page.pagesum=page.total%page.pagesize==0?parseInt(page.total/page.pagesize):parseInt(page.total/page.pagesize+1);
			var pagepre =parseInt(page.pageindex)> 1 ? parseInt(page.pageindex) - 1 : 1;
			var hasParameter="(";
			if(function_name.indexOf("(")!=-1){
				hasParameter=""
			}
			pageshow += '<a href="javascript:void(0)" onclick="'+function_name+hasParameter+pagepre +')"><i class="iconfont icon-fanhui"></i></a>'; //上一页图标
			var i_s = 0, i_e = 0;
			if (parseInt(page.pageindex) - 4 <= 0)
			{
				i_s = 1;
				i_e = parseInt(page.pagesum) > 9 ? 9 : parseInt(page.pagesum);
			}
			else if (parseInt(page.pageindex) + 4 > parseInt(page.pagesum))
			{
				i_s = parseInt(page.pagesum) > 9 ? parseInt(page.pagesum) - 9 : 1;
				i_e = parseInt(page.pagesum);
			}
			else
			{
				i_s = parseInt(page.pageindex) - 4;
				i_e = parseInt(page.pageindex) + 4;
			}
			for (var j = i_s; j <= i_e; j++)
			{
				if (parseInt(j) == parseInt(page.pageindex))
				{
					pageshow += "<span class='active'  onclick='"+function_name+hasParameter+j+")'>" + j + "</span>";
				}
				else
				{
					pageshow += "<span onclick='"+function_name+hasParameter+j+")'>" + j + "</span>";
				}
			}
			var pagenext = parseInt(page.pageindex) < parseInt(page.pagesum) ? parseInt(page.pageindex) + 1 : parseInt(page.pageindex);//不能超过总页数
			if(parseInt(page.pagesum)>9){
				pageshow+="<a href='javascript:;'>...</a><a href='javascript:;'>"+parseInt(page.pagesum)+"</a>";
			}
			pageshow += "<a href='javascript:void(0)'  onclick='"+function_name+hasParameter+pagenext +")'><i class='iconfont icon-gengduo'></i></a>";  //下一页图标
		}
		$("#"+dvpage).html(pageshow);
	}
};