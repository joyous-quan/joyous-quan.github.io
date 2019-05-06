<template>
<div>
  <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">缩略语</a>
	    </div>
	</nav>
	<div class="layout page-title">缩略语</div>
	<div class="about-common abbreviations-con">
		<mt-navbar v-model="selected" class="tab-menu">
		  <mt-tab-item id="1"><span>用药途径</span></mt-tab-item>
		  <mt-tab-item id="2"><span>靶点</span></mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
	       <table class="tab-content">
	           <tbody>
	               <tr>
	                   <td width="28%"><b>Route</b></td><td width="15%"><b>Abbreviation</b></td><td><b>Description</b></td>
	               </tr>
	               <tr>
	                   <td>Intracerebroventricular</td><td>i.c.v.</td><td>Into the ventricles of the brain</td>
	               </tr>
	               <tr>
	                   <td>Intra-arterial</td><td>i.a.</td><td>Into the lumen of an artery</td>
	               </tr>
	               <tr>
	                   <td>Intracerebral</td><td>i.c.</td><td>Into the brain</td>
	               </tr>
	               <tr>
	                   <td>Intradermal</td><td>i.d.</td><td>Into the dermal layer of the skin</td>
	               </tr>
	               <tr>
	                   <td>ntramuscular</td><td>i.m.</td><td>Into a skeletal muscle</td>
	               </tr>
	               <tr>
	                   <td>Intragastric</td><td>i.g.</td><td>Into the stomach</td>
	               </tr>
	               <tr>
	                   <td>Intraperitoneal</td><td>i.t.</td><td>Into the spinal canal</td>
	               </tr>
	               <tr>
	                   <td>Intravenous</td><td>i.v.</td><td>Into a vein</td>
	               </tr>
	               <tr>
	                   <td>Oral</td><td>p.o.</td><td>By mouth</td>
	               </tr>
	               <tr>
	                   <td>Subcutaneous</td><td>s.c.</td><td>Under the skin</td>
	               </tr>
	               <tr>
	                   <td></td><td>q.d.</td><td>once a day</td>
	               </tr>
	               <tr>
	                   <td></td><td>b.i.d.</td><td>twice a day</td>
	               </tr>
	               <tr>
	                   <td></td><td>t.i.d</td><td>three times a day</td>
	               </tr>
	           </tbody>
	       </table>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
	       <table class="tab-content">
	           <tbody>
	               <tr>
	                   <td width="28%"><b>缩写</b></td><td><b>描述</b></td>
	               </tr>
	               <tr>
	                   <td>ABL</td><td>V-abl Abelson鼠白血病病毒致癌基因同源物1</td>
	               </tr>
	               <tr>
	                   <td>ALK</td><td>间变性淋巴瘤激酶</td>
	               </tr>
	               <tr>
	                   <td>ATM</td><td>共济失调毛细血管扩张症突变</td>
	               </tr>
	               <tr>
	                   <td>B-Raf</td><td>B-Raf原癌基因丝氨酸/苏氨酸蛋白激酶（B-RAF），也称为V-raf鼠肉瘤病毒致癌基因同源物B1</td>
	               </tr>
	               <tr>
	                   <td>Bcl-2</td><td>B-cell lymphoma 2</td>
	               </tr>
	               <tr>
	                   <td>bcr</td><td>断点簇区域</td>
	               </tr>
	               <tr>
	                   <td>Caspase</td><td>半胱氨酸 - 天冬氨酸蛋白酶或半胱氨酸依赖的天冬氨酸指导的蛋白酶</td>
	               </tr>
	               <tr>
	                   <td>CCR5</td><td>co-receptors chemokine receptor 5</td>
	               </tr>
	               <tr>
	                   <td>CDK</td><td>细胞周期蛋白依赖性激酶</td>
	               </tr>
	               <tr>
	                   <td>CFTR增效剂</td><td>囊性纤维化跨膜传导调节因子</td>
	               </tr>
	               <tr>
	                   <td>C-试剂盒</td><td>CD117，也称为KIT或C-kit受体</td>
	               </tr>
	               <tr>
	                   <td>c-Met</td><td>间充质上皮转换因子</td>
	               </tr>
	               <tr>
	                   <td>DNA-PK</td><td>DNA依赖性蛋白激酶</td>
	               </tr>
	               <tr>
	                   <td>DPP-4</td><td>二肽基肽酶-4</td>
	               </tr>
	               <tr>
	                   <td>EGFR</td><td>表皮生长因子受体</td>
	               </tr>
	               <tr>
	                   <td>FGFR</td><td>成纤维细胞生长因子受体</td>
	               </tr>
	               <tr>
	                   <td>FLT-3</td><td>Fibroblast growth factor receptor</td>
	               </tr>
	               <tr>
	                   <td>FTS</td><td>farnesyl thiosalicylic</td>
	               </tr>
	               <tr>
	                   <td>GSK-3</td><td>Glycogen synthase kinase 3</td>
	               </tr>
	               <tr>
	                   <td>HER2</td><td>Human Epidermal growth factor Receptor 2</td>
	               </tr>
	               <tr>
	                   <td>Hedgehong</td><td>一种称为Hedgehog（Hh）的细胞间信号分子</td>
	               </tr>
	               <tr>
	                   <td>HDAC</td><td>组蛋白去乙酰化酶</td>
	               </tr>
	               <tr>
	                   <td>HIF</td><td>缺氧诱导因子</td>
	               </tr>
	               <tr>
	                   <td>HSP-70</td><td>热休克蛋白-70</td>
	               </tr>
	               <tr>
	                   <td>HSP-90</td><td>热休克蛋白-90</td>
	               </tr>
	               <tr>
	                   <td>IGF-1R</td><td>胰岛素样生长因子1受体</td>
	               </tr>
	               <tr>
	                   <td>JAk</td><td>Janus激酶</td>
	               </tr>
	               <tr>
	                   <td>JNk</td><td>c-Jun N末端激酶</td>
	               </tr>
	               <tr>
	                   <td>KSP</td><td>驱动蛋白纺锤体蛋白</td>
	               </tr>
	               <tr>
	                   <td>MAPK</td><td>丝裂原活化蛋白激酶</td>
	               </tr>
	               <tr>
	                   <td>MEK</td><td>MAPK / ERK激酶</td>
	               </tr>
	               <tr>
	                   <td>mGlu2/3</td><td>受体代谢型谷氨酸受体</td>
	               </tr>
	               <tr>
	                   <td>mTOR</td><td>哺乳动物雷帕霉素的靶标</td>
	               </tr>
	               <tr>
	                   <td>NF-KB</td><td>Nuclear factor Îº B</td>
	               </tr>
	               <tr>
	                   <td>p38 MAPK</td><td>丝裂原活化蛋白激酶</td>
	               </tr>
	               <tr>
	                   <td>p53</td><td>蛋白质53或肿瘤蛋白质53</td>
	               </tr>
	               <tr>
	                   <td>PARP</td><td>聚（ADP-核糖）聚合酶</td>
	               </tr>
	               <tr>
	                   <td>PDGFR</td><td>血小板衍生生长因子受体</td>
	               </tr>
	               <tr>
	                   <td>PDK-1</td><td>磷脂酰肌醇依赖性激酶-1</td>
	               </tr>
	               <tr>
	                   <td>Rho</td><td>I factor</td>
	               </tr>
	               <tr>
	                   <td>PI3K</td><td>磷脂酰肌醇3-激酶</td>
	               </tr>
	               <tr>
	                   <td>PKC</td><td>蛋白激酶C.</td>
	               </tr>
	               <tr>
	                   <td>PLK</td><td>Polo样激酶</td>
	               </tr>
	               <tr>
	                   <td>Ras</td><td>肾素 - 血管紧张素系统</td>
	               </tr>
	               <tr>
	                   <td>PNA聚合酶I</td><td>RNAP或RNApol</td>
	               </tr>
	               <tr>
	                   <td>S1PR1</td><td>鞘氨醇-1-磷酸受体1又称S1P1或EDG1 （内皮分化基因1）</td>
	               </tr>
	               <tr>
	                   <td>sPLA2</td><td>分泌的磷脂酶A2</td>
	               </tr>
	               <tr>
	                   <td>SRC</td><td>劳氏肉瘤癌基因细胞同系物</td>
	               </tr>
	               <tr>
	                   <td>Stat</td><td>信号转导和转录激活因子</td>
	               </tr>
	               <tr>
	                   <td>Survivin</td><td>也称细胞病毒抑制剂凋亡重复含有5或BIRC5</td>
	               </tr>
	               <tr>
	                   <td>TGF-β</td><td>转变生长因子</td>
	               </tr>
	               <tr>
	                   <td>TNF-α</td><td>肿瘤坏死因子</td>
	               </tr>
	               <tr>
	                   <td>VEGFR-PDGFR</td><td>血管内皮生长因子受体 - 血小板衍生生长因子受体</td>
	               </tr>
	               <tr> 
	                   <td>WEE1</td><td>小细胞蛋白，一种有丝分裂抑制剂激酶</td>
	               </tr>
	               <tr> 
	                   <td>Wnt</td><td>信号Wg（无翼）和Int的组合</td>
	               </tr>
	           </tbody>
	       </table>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
	<footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'abbreviations',
    data () {
        return { 
        	selected: "2"
        }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>
.abbreviations-con {
	background: #fff;
	padding: 0 4% 2rem;
	margin-bottom: .56rem;
}
.tab-content td {
	height: 4rem;
	line-height: 1.8rem;
	border-bottom: .08rem solid #e0e0e0;
	border-right: .08rem solid #e0e0e0;
	padding: 0 .8rem;
	color: #555;
	font-size: 1rem;
}
.tab-content td:first-child {
	padding-left:0;
}
.tab-content td:last-child {
	border-right: none;
}
.tab-content tr:first-child td {
	border-top: .08rem solid #e0e0e0;
}
</style>
