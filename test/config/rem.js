(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*
datasheet 
h2 { text-align:center;}
td b {line-height:20px;去掉}

分子库总
.subTitle { font-size:18px}
分子库5个页面
.dv_cnt li > span {width:140px}


产品详情
.dl_storage {
    width: 225px;}
td IP PO { width:32px}
last td {max-width:75px; white-space: normal;}



http://www.csnpharm.cn/antibacterial.html
<tr>
<th class="pa0" width="120" height="44">Cat. No.</th>
<th>Product Name</th>
<th width="140">CAS No.</th>
<th width="650">Information</th>
</tr>
.ingredientTable {
    width: 100%;
    }
.ingredientTable tbody tr td {
    height: 38px;
    color: #555555;
    font-size: 12px;
    border-bottom: 1px solid #dbdbdb;
    text-align: justify;
    padding-right: 26px;}


*/