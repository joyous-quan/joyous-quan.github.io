<template>
<div>
    <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">网址地图</a>
	    </div>
	</nav>
	<div class="layout page-title">
	    网址地图
	</div>
	<nav class="layout menu">
		<header>信号通路</header>
		<Collapse accordion simple>
	        <Panel name="1">
	            <span class="tips-red"></span>ADCs (3)
	            <div slot="content" class="submenu">
	            	<a href="/"><span class="tips-circle"></span>ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>ADC Linker<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>ADC Linker with Payload<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="2">
	            <span class="tips-red"></span>Anti-infection (20)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="3">
	            <span class="tips-red"></span>Apoptosis (15)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="4">
	            <span class="tips-red"></span>Autophagy (5)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="5">
	            <span class="tips-red"></span>Cell Cycle (35)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="6">
	            <span class="tips-red"></span>Cytoskeleton (16)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="7">
	            <span class="tips-red"></span>DNA Damage (10)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="8">
	            <span class="tips-red"></span>Endocrinology/Hormones (10)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="9">
	            <span class="tips-red"></span>Epigenetics (15)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="10">
	            <span class="tips-red"></span>GPCR/G protein (54)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="11">
	            <span class="tips-red"></span>Immunology/Inflammation (24)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="12">
	            <span class="tips-red"></span>JAK/STAT Signaling (4)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="13">
	            <span class="tips-red"></span>MAPK/ERK Pathway (10)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="14">
	            <span class="tips-red"></span>Membrane Transporter/Ion Channel (30)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="15">
	            <span class="tips-red"></span>Metabolic Enzyme (65)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="16">
	            <span class="tips-red"></span>Neuronal Signaling (30)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="17">
	            <span class="tips-red"></span>NF-kB (0)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="18">
	            <span class="tips-red"></span>PI3K/Akt/mTOR (13)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="19">
	            <span class="tips-red"></span>Protease (10)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="20">
	            <span class="tips-red"></span>Protein Tyrosine Kinase/RTK (31)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="21">
	            <span class="tips-red"></span>Stem Cells/Wnt (19)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="22">
	            <span class="tips-red"></span>Ubiquitin (6)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="23">
	            <span class="tips-red"></span>Biochemical Reagents (3)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	        <Panel name="24">
	            <span class="tips-red"></span>Others (13)
	            <div slot="content" class="submenu">
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            	<a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
	            </div>
	        </Panel>
	    </Collapse>
	</nav>
	<nav class="layout map-con">
	    <ul>
	        <li class="sub-title"><router-link tag="a" to="/about"><span class="tips-red"></span>关于我们</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/contact"><span class="tips-red"></span>联系我们</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/service"><span class="tips-red"></span>我们的服务</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/terminology"><span class="tips-red"></span>药理学术语</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/abbreviations"><span class="tips-red"></span>缩略词</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/qualityManual"><span class="tips-red"></span>质量管理</router-link></li>
	    </ul>
	    <ul>
	        <li class="sub-title"><router-link tag="a" to="/about/howToOrder"><span class="tips-red"></span>如何购买</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/termsConditions"><span class="tips-red"></span>条款和条件</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/freightPolicy"><span class="tips-red"></span>运费和政策</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/privacy"><span class="tips-red"></span>隐私政策</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/molarity"><span class="tips-red"></span>摩尔浓度计算器</router-link></li>
	        <li class="sub-title"><router-link tag="a" to="/about/inquireForm"><span class="tips-red"></span>询价单</router-link></li>
	    </ul>
	</nav>
    <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'sitemap',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>

</style>
