$(document).ready(function(){
	$("#aims_header").load("/modules/header.html?t=" + Math.random());
	$("#aims_footer").load("/modules/footer.html?t=" + Math.random());		
})
var clickmessage="图片版权归本公司所有，禁止下载！";

if (document.all || document.getElementById){
	document.onmousedown = disableclick;
}else if (document.layers){
	associateimages();
}

function disableclick(e) {
	if (document.all) {
		if (e.button == 2 || e.button == 3) {
			if (e.srcElement.tagName == "IMG"){
				alert(clickmessage);
				return false;
			}
		}
	}else if (document.layers) {
		if (e.which == 3) {
			alert(clickmessage);
			return false;
		}
	}else if (document.getElementById){
		if (e.which == 3 && e.target.tagName == "IMG"){
			alert(clickmessage);
			return false;
		}
	}
}
function associateimages(){
	for(i = 0; i < document.images.length; i ++)
	document.images.onmousedown = disableclick;
}

