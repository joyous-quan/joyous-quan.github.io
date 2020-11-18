
function inquiryClick(){
    $('.logout-inquire-mask').show();
}

$(function(){
    //警告声明:
    $('.precautionary-statements').click(function(){
        var pshtml = '<div class="mask precautionary-statements-mask" style="display:block"><div class="mask_bg"></div><div class="popups products-detail-popups statements_popups"><div class="products-detail-popups-title statements_title"><h2>警告声明</h2><span class="del-mask"><i class="iconfont icon-delete"></i></span></div><div class="products-detail-popups-con statements_con"><table border="0" cellspacing="0"><colgroup><col width="17%"><col></colgroup><tbody><tr class="tr_one"><td colspan="2">一般</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>P101</td><td>如需求医，请随身携带产品容器或标签。</td></tr><tr><td>P102</td><td>切勿让儿童接触。</td></tr><tr><td>P103</td><td>使用前请看明标签。</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">预防</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>P201</td><td>使用前取得专用说明。</td></tr><tr><td>P202</td><td>在所有的安全预防措施被阅读和理解之前不要处理。</td></tr><tr><td>P210</td><td>远离热源、 热表面、 火花、 明火和其他点火源。禁止吸烟。</td></tr><tr><td>P211</td><td>切勿喷洒在明火或其他点火源上。</td></tr><tr><td>P220</td><td>远离服装和其他可燃材料。</td></tr><tr><td>P221</td><td>采取任何预防措施，以避免与可燃物混合。</td></tr><tr><td>P222</td><td>不得与空气接触。</td></tr><tr><td>P223</td><td>由于其与水的剧烈反应和可能引起的火灾，远离任何与水接触的可能。</td></tr><tr><td>P230</td><td>保持湿润。</td></tr><tr><td>P231</td><td>用惰性气体处理。</td></tr><tr><td>P232</td><td>防潮。</td></tr><tr><td>P233</td><td>保持容器密闭。</td></tr><tr><td>P234</td><td>只能在原容器中存放。</td></tr><tr><td>P235</td><td>保持低温。</td></tr><tr><td>P240</td><td>搁置/结合容器和接收设备。</td></tr><tr><td>P241</td><td>使用防爆的电气/通风/照明等设备。</td></tr><tr><td>P242</td><td>只使用不产生火花的工具。</td></tr><tr><td>P243</td><td>采取防止静电放电的措施。</td></tr><tr><td>P244</td><td>阀门及紧固装置不得带有油脂或油剂。</td></tr><tr><td>P250</td><td>不得遭受研磨/冲击/摩擦等</td></tr><tr><td>P251</td><td>高压容器：切勿穿刺或焚烧，即使不再使用。</td></tr><tr><td>P260</td><td>不要吸入 粉尘/烟/气体/气雾/蒸气/喷雾。</td></tr><tr><td>P261</td><td>避免吸入 粉尘/烟/气体/气雾/蒸气/喷雾。</td></tr><tr><td>P262</td><td>严防进入眼中、接触皮肤或衣服。</td></tr><tr><td>P263</td><td>怀孕和哺乳期间避免接触。</td></tr><tr><td>P264</td><td>处理后要彻底清洗......</td></tr><tr><td>P265</td><td>处理后请将皮肤彻底洗净。</td></tr><tr><td>P270</td><td>使用本产品时不要进食、饮水或吸烟。</td></tr><tr><td>P271</td><td>只能在室外或通风良好处使用。</td></tr><tr><td>P272</td><td>受沾染的工作服不得带出工作场地。</td></tr><tr><td>P273</td><td>避免释放到环境中。</td></tr><tr><td>P280</td><td>戴防护手套/穿防护服/戴防护眼罩/戴防护面具。</td></tr><tr><td>P281</td><td>根据需要使用个人防护装备。</td></tr><tr><td>P282</td><td>戴防寒手套和防护面具或防护眼罩。</td></tr><tr><td>P283</td><td>穿防火或阻燃服装。</td></tr><tr><td>P284</td><td>佩戴呼吸防护装置。</td></tr><tr><td>P285</td><td>如果通风不足，请佩戴呼吸防护装置。</td></tr><tr><td>P231 + P232</td><td>在惰性气体下处理。 防潮。</td></tr><tr><td>P235 + P410</td><td>保持凉爽。 避免日晒。</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">响应</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>P301</td><td>如误吞咽：</td></tr><tr><td>P301 + P310</td><td>如误吞咽：立即呼叫解毒中心或医生。</td></tr><tr><td>P301 + P312</td><td>如误吞咽：如感觉不适，呼叫解毒中心或医生/医生。</td></tr><tr><td>P301 + P330 + P331</td><td>如误吞咽： 漱口。不得诱导呕吐</td></tr><tr><td>P302</td><td>如皮肤沾染：</td></tr><tr><td>P302 + P334</td><td>如皮肤沾染：浸入冷水中/用湿绷带包扎。</td></tr><tr><td>P302 + P350</td><td>如皮肤护理：用大量肥皂和水轻轻洗净。</td></tr><tr><td>P302 + P352</td><td>如皮肤沾染：用大量肥皂和水充分清洗。</td></tr><tr><td>P303</td><td>如皮肤(或头发)沾染：</td></tr><tr><td>P303 + P361 + P353</td><td>如皮肤（或头发）沾染：立即去除/脱掉所有沾染的衣服。 用水/淋浴冲洗皮肤。</td></tr><tr><td>P304</td><td>如误吸入：</td></tr><tr><td>P304 + P312</td><td>如误吸入：如感觉不适，呼叫中毒急救中心/医生……</td></tr><tr><td>P304 + P340</td><td>如误吸入：将人转移到空气新鲜处，保持呼吸舒适体位。</td></tr><tr><td>P304 + P341</td><td>如果吸入：如果呼吸困难，将患者移至新鲜空气处并保持呼吸舒适的姿势休息。</td></tr><tr><td>P305</td><td>如进入眼睛：</td></tr><tr><td>P305 + P351 + P338</td><td>如进入眼睛：用水小心冲洗几分钟。如戴隐形眼镜并可方便 地取出，取出隐形眼镜。继续冲洗。</td></tr><tr><td>P306</td><td>如沾染衣服：</td></tr><tr><td>P306 + P360</td><td>如沾染衣服：立即用水充分冲洗沾染的衣服和皮肤，然后脱掉衣服。</td></tr><tr><td>P307</td><td>如果暴露：</td></tr><tr><td>P307 + P311</td><td>如果暴露：呼叫解毒中心或医生/医生。</td></tr><tr><td>P308</td><td>如接触到或相关暴露：</td></tr><tr><td>P308 + P313</td><td>如接触到或相关暴露：求医/就诊。</td></tr><tr><td>P309</td><td>如果暴露或感觉不适：</td></tr><tr><td>P309 + P311</td><td>如果暴露或感觉不适：呼叫解毒中心或医生。</td></tr><tr><td>P310</td><td>立即呼叫中毒急救中心/医生/……</td></tr><tr><td>P311</td><td>呼叫中毒急救中心/医生/……</td></tr><tr><td>P312</td><td>如感觉不适，呼叫中毒急救中心/医生/……</td></tr><tr><td>P313</td><td>求医/就诊。</td></tr><tr><td>P314</td><td>如感觉不适，须求医/就诊。</td></tr><tr><td>P315</td><td>立即求医/就诊。</td></tr><tr><td>P320</td><td>紧急的具体治疗(见本标签上的……)。</td></tr><tr><td>P321</td><td>具体治疗(见本标签上的……)。</td></tr><tr><td>P322</td><td>具体措施(见本标签上的……)。</td></tr><tr><td>P330</td><td>漱口。</td></tr><tr><td>P331</td><td>不得引吐。</td></tr><tr><td>P332</td><td>如发生皮肤刺激：</td></tr><tr><td>P332 + P313</td><td>如发生皮肤刺激：求医/就诊。</td></tr><tr><td>P333</td><td>如发生皮肤刺激或皮疹：</td></tr><tr><td>P333 + P313</td><td>如发生皮肤刺激或皮疹：求医/就诊。</td></tr><tr><td>P334</td><td>浸入冷水中/用湿绷带包扎。</td></tr><tr><td>P335</td><td>掸掉皮肤上的细小颗粒。</td></tr><tr><td>P335 + P334</td><td>刷掉皮肤上的松散颗粒。 浸入凉水中/用湿绷带包裹。</td></tr><tr><td>P336</td><td>用微温水化解冻伤部位。不要搓擦患处。</td></tr><tr><td>P337</td><td>如长时间眼刺激：</td></tr><tr><td>P337 + P313</td><td>如眼刺激持续不退：求医/就诊。</td></tr><tr><td>P338</td><td>如戴隐形眼镜并可方便地取出，取出隐形眼镜。继续冲洗。</td></tr><tr><td>P340</td><td>将人转移到空气新鲜处，保持呼吸舒适体位。</td></tr><tr><td>P341</td><td>如果呼吸困难，将患者移至新鲜空气处并保持呼吸舒适的姿势休息。</td></tr><tr><td>P342</td><td>如有呼吸系统病症：</td></tr><tr><td>P342 + P311</td><td>如出现呼吸系统病症：呼叫中毒急救中心/医生/……</td></tr><tr><td>P350</td><td>用大量肥皂和水轻轻洗净。</td></tr><tr><td>P351</td><td>用水小心冲洗几分钟。</td></tr><tr><td>P352</td><td>用水充分清洗/……</td></tr><tr><td>P353</td><td>用水清洗皮肤/淋浴。</td></tr><tr><td>P360</td><td>立即用水充分冲洗沾染的衣服和皮肤，然后脱掉衣服。</td></tr><tr><td>P361</td><td>立即脱掉所有沾染的衣服。</td></tr><tr><td>P362</td><td>脱掉沾染的衣服。</td></tr><tr><td>P363</td><td>沾染的衣服清洗后方可重新使用。</td></tr><tr><td>P370</td><td>火灾时：</td></tr><tr><td>P370 + P376</td><td>火灾时：如能保证安全，设法堵塞泄漏。</td></tr><tr><td>P370 + P378</td><td>火灾时：使用……灭火。</td></tr><tr><td>P370 + P380</td><td>如果发生火灾：疏散区域。</td></tr><tr><td>P370 + P380 + P375</td><td>火灾时：撤离现场。因有爆炸危险，须远距离灭火。</td></tr><tr><td>P371</td><td>在发生大火和大量泄漏的情况下：</td></tr><tr><td>P371 + P380 + P375</td><td>如发生大火和大量泄漏：撤离现场。因有爆炸危险，须远距离灭火。</td></tr><tr><td>P372</td><td>爆炸危险</td></tr><tr><td>P373</td><td>火烧到爆炸物时切勿救火。</td></tr><tr><td>P374</td><td>在合理的距离内采取正常预防措施进行灭火。</td></tr><tr><td>P375</td><td>因有爆炸危险，须远距离救火。</td></tr><tr><td>P376</td><td>如能保证安全，可设法堵塞泄漏。</td></tr><tr><td>P377</td><td>漏气着火：切勿灭火，除非能够安全地堵塞泄 漏。</td></tr><tr><td>P378</td><td>使用……灭火。</td></tr><tr><td>P380</td><td>撤离现场。</td></tr><tr><td>P381</td><td>在安全的前提下，消除一切火源</td></tr><tr><td>P390</td><td>吸收溢出物，防止材料损坏。</td></tr><tr><td>P391</td><td>收集溢出物。</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">存储</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>P401</td><td>存放须遵照……</td></tr><tr><td>P402</td><td>存放于干燥处。</td></tr><tr><td>P402 + P404</td><td>存放在干燥的地方。存放在密闭容器中。</td></tr><tr><td>P403</td><td>存放于通风良好处。</td></tr><tr><td>P403 + P233</td><td>存放在通风良好的地方。 保持容器密闭。</td></tr><tr><td>P403 + P235</td><td>存放在通风良好的地方。 保持凉爽。</td></tr><tr><td>P404</td><td>存放于密闭的容器中。</td></tr><tr><td>P405</td><td>存放处须加锁。</td></tr><tr><td>P406</td><td>存放于耐腐蚀的容器中。</td></tr><tr><td>P407</td><td>堆垛或托盘之间应留有空隙。</td></tr><tr><td>P410</td><td>防日晒。</td></tr><tr><td>P410 + P403</td><td>避免阳光照射。 存放在通风良好的地方。</td></tr><tr><td>P410 + P412</td><td>防日晒。不可暴露在超过50℃/122℉的温度下。</td></tr><tr><td>P411</td><td>贮存温度不超过……</td></tr><tr><td>P411 + P235</td><td>贮存温度不高于……的环境下。保持凉爽。</td></tr><tr><td>P412</td><td>不要暴露在超过50℃/122℉的温度下。</td></tr><tr><td>P413</td><td>温度不超过……时，贮存散货质量大于……</td></tr><tr><td>P420</td><td>单独存放。</td></tr><tr><td>P422</td><td>将内容存储在……</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">处理</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>P501</td><td>根据……来处置内装物/容器</td></tr><tr><td>P502</td><td>有关回收和循环使用情况，请咨询制造商或供 应商</td></tr></tbody></table></div></div></div>'
        $('body').append(pshtml);
        $('.del-mask').click(function(){
            $('.precautionary-statements-mask').remove();
        });
    })
    //危险声明:
    $('.hazard-statements').click(function(){
        var hshtml = '<div class="mask hazard-statements-mask" style="display:block"><div class="mask_bg"></div><div class="popups products-detail-popups statements_popups"><div class="products-detail-popups-title statements_title"><h2>危险声明</h2><span class="del-mask"><i class="iconfont icon-delete"></i></span></div><div class="products-detail-popups-con statements_con"><table border="0" cellspacing="0"><colgroup><col width="8%"><col></colgroup><tbody><tr class="tr_one"><td colspan="2">物理危险</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>H200</td><td>不稳定爆炸物</td></tr><tr><td>H201</td><td>爆炸物；整体爆炸危险</td></tr><tr><td>H202</td><td>爆炸物；严重迸射危险</td></tr><tr><td>H203</td><td>爆炸物；起火、爆炸或迸射危险</td></tr><tr><td>H204</td><td>起火或迸射危险</td></tr><tr><td>H205</td><td>遇火可能整体爆炸</td></tr><tr><td>H220</td><td>极其易燃气体</td></tr><tr><td>H221</td><td>易燃气体</td></tr><tr><td>H222</td><td>极其易燃气雾剂</td></tr><tr><td>H223</td><td>易燃气雾剂</td></tr><tr><td>H224</td><td>极其易燃液体和蒸气</td></tr><tr><td>H225</td><td>高度易燃液体和蒸气</td></tr><tr><td>H226</td><td>易燃液体和蒸气</td></tr><tr><td>H227</td><td>可燃液体</td></tr><tr><td>H228</td><td>易燃固体</td></tr><tr><td>H240</td><td>加热可能爆炸</td></tr><tr><td>H241</td><td>加热可能起火或爆炸</td></tr><tr><td>H242</td><td>加热可能起火</td></tr><tr><td>H250</td><td>暴露在空气中会自燃</td></tr><tr><td>H251</td><td>自热；可能燃烧</td></tr><tr><td>H252</td><td>数量大时自热；可能燃烧</td></tr><tr><td>H260</td><td>遇水会释放出可燃气体，可能会自燃</td></tr><tr><td>H261</td><td>遇水放出易燃气体</td></tr><tr><td>H270</td><td>可能导致或加剧燃烧；氧化剂</td></tr><tr><td>H271</td><td>可能引起燃烧或爆炸；强氧化剂</td></tr><tr><td>H272</td><td>可能加剧燃烧；氧化剂</td></tr><tr><td>H280</td><td>内装高压气体；遇热可能爆炸</td></tr><tr><td>H281</td><td>内装冷冻气体；可能造成低温灼伤或损伤</td></tr><tr><td>H290</td><td>可能腐蚀金属</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">健康危险</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>H300</td><td>吞咽致命</td></tr><tr><td>H301</td><td>吞咽中毒</td></tr><tr><td>H302</td><td>吞咽有害</td></tr><tr><td>H303</td><td>吞咽可能有害</td></tr><tr><td>H304</td><td>吞咽并进入呼吸道可能致命</td></tr><tr><td>H305</td><td>吞咽并进入呼吸道可能有害</td></tr><tr><td>H310</td><td>和皮肤接触致命</td></tr><tr><td>H311</td><td>和皮肤接触有毒</td></tr><tr><td>H312</td><td>和皮肤接触有害</td></tr><tr><td>H313</td><td>皮肤接触可能有害</td></tr><tr><td>H314</td><td>造成严重皮肤灼伤和眼损伤</td></tr><tr><td>H315</td><td>造成皮肤刺激</td></tr><tr><td>H316</td><td>造成轻微皮肤刺激</td></tr><tr><td>H317</td><td>可能导致皮肤过敏反应</td></tr><tr><td>H318</td><td>造成严重眼损伤</td></tr><tr><td>H319</td><td>造成严重眼刺激</td></tr><tr><td>H320</td><td>造成眼刺激</td></tr><tr><td>H330</td><td>吸入致命</td></tr><tr><td>H331</td><td>吸入有毒</td></tr><tr><td>H332</td><td>吸入有害</td></tr><tr><td>H333</td><td>吸入可能有害</td></tr><tr><td>H334</td><td>吸入可能导致过敏或哮喘病症状或呼吸困难</td></tr><tr><td>H335</td><td>可引起呼吸道刺激</td></tr><tr><td>H336</td><td>可引起昏睡或眩晕</td></tr><tr><td>H340</td><td>可能导致遗传性缺陷</td></tr><tr><td>H341</td><td>怀疑会导致遗传性缺陷</td></tr><tr><td>H350</td><td>可能致癌</td></tr><tr><td>H351</td><td>怀疑会致癌</td></tr><tr><td>H360</td><td>可能对生育能力或胎儿造成伤害</td></tr><tr><td>H361</td><td>怀疑对生育能力或胎儿造成伤害</td></tr><tr><td>H362</td><td>可能对母乳喂养 的儿童造成伤害</td></tr><tr><td>H370</td><td>对器官造成损害</td></tr><tr><td>H371</td><td>可能对器官造成损害</td></tr><tr><td>H372</td><td>长期或重复接触会对器官造成伤害</td></tr><tr><td>H373</td><td>长期或重复接触可能对器官造成伤害</td></tr></tbody><tbody><tr class="tr_one"><td colspan="2">环境危险</td></tr><tr class="tr_bg"><td>编码</td><td>说明</td></tr><tr><td>H400</td><td>对水生生物毒性极大</td></tr><tr><td>H401</td><td>对水生生物有毒</td></tr><tr><td>H402</td><td>对水生生物有害</td></tr><tr><td>H410</td><td>对水生生物毒性极大并具有长期持续影响</td></tr><tr><td>H411</td><td>对水生生物有毒并具有长期持续影响</td></tr><tr><td>H412</td><td>对水生生物有害并具有长期持续影响</td></tr><tr><td>H413</td><td>可能对水生生物造成长期持续有害影响</td></tr><tr><td>H420</td><td>破坏高层大气中的臭氧，危害公共健康和环境</td></tr></tbody></table></div></div></div>'
        $('body').append(hshtml);
        $('.del-mask').click(function(){
            $('.hazard-statements-mask').remove();
        });
    })

    //相关产品，历史记录产品
    $('#related,#history').owlCarousel({
        loop: true,
        margin: 0,
        nav:false,
        dots:true,
        autoplay: true,
        stopOnHover:true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        navRewind: true,
        responsive: {
            0: { items: 2 },
            580: { items: 3 },
            780: { items: 4 },
            1024:{ items: 5 }
        }
    });


    $(".products-small-img li").hover(function(){
        $(".dv_main_img img").attr("src",$(this).find("img").attr("src"));
    });

    $(".cirle").hover(function(){
        $(this).addClass("cirle-active").siblings().removeClass("cirle-active");
    });
    //放大图
    $('.magnifying-glass').click(function () {
        $('.magnifying-img img')[0].src = $('.products-big-img img')[0].src;
        $('.magnifying-img').show();
    });
    $('.magnifying-img').click(function () {
        $('.magnifying-img').hide();
    });

    $('.magnifying-img').mouseleave(function(){
      $('.magnifying-img').hide();
     });

    //图片切换
    $('.products-small-img .img-box').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.products-big-img img')[0].src = $(this).find("img")[0].src;
    });
    $('.rp-img-span').click(function(){ $(this).siblings().addClass('rp-a-img-big');});
    $('.rp-a-img').mouseleave(function(){ $(this).removeClass('rp-a-img-big');});

    //tab 选项卡
    $(".tab-menu li").click(function () {
        var _index = $(this).index();
        $(".tab-content>div").eq(_index).show().siblings().hide();
        $(this).addClass("current").siblings().removeClass("current");
    });
    //显示更多
    $(".tab-content-show .more img,.tab-content-show .more b").click(function () {
        var txt=$(this).parent().find("b").text();
        $(this).parent().find("b").text((txt=="更多"?"收起":"更多"));
        $(this).parent().find("img").toggleClass("rotate90deg");
        if($(this).parents(".tab_yield").length>0){
            $(this).parents(".tab_yield").find('.tr_yield_hide').toggleClass("tr_yield_show");
        }else{
            $(this).parents(".references").find("div").toggleClass("dv_txt_hide");
        }
    });
    //弹出合成路线-下游产品
    $('.downstream-btn').click(function(){
        $('.downstream-mask').show();
    })
    //关闭弹窗
    $('.del-mask,.dv_keyword_mask').click(function () {
        $('.mask').hide()
    }); 

    
})


