<template>
<div>
  <header-t></header-t>
  <div>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">关于我们</a>
	    </div>
	</nav>
	<div class="layout page-title">关于我们</div>
	<div class="about-common about-con">
	    <section>
	        <header><span class="tips-red"></span>Csnpharm概述</header>
	        <article>Csnpharm提供各种高质量的研究化学品和生物化学品，包括新型生命科学试剂，参比化合物和用于实验室和科学用途的天然化合物。Csnpharm拥有知识渊博，友好的客户服务和技术支持团队，在生命科学行业拥有多年​​的经验。Csnpharm将成为您研究和科学项目的称职和值得信赖的合作伙伴。</article>
	    </section>
	    <section>
	        <header><span class="tips-red"></span>质量</header>
	        <article>产品质量是我们成功的关键，我们为提供最高档次的产品而感到自豪。我们强大的质量控制和保证政策，计划和程序确保了产品的标识，质量，纯度和活动。我们对我们的产品进行彻底的分析测试 - 包括HNMR，LC-MS和HPLC-稳定性测试和活性测定，这些测试的结果可供客户使用。</article>
	    </section>
	    <section>
	        <header><span class="tips-red"></span>经验</header>
	        <article>我们的化学家在分子合成和大量结构多样化和合成挑战分子的制备方面经验丰富。我们与需求差异很大的客户合作，我们在满足这些需求方面非常成功。</article>
	    </section>
	    <section>
	        <header><span class="tips-red"></span>服务</header>
	        <article>
	            <p><span class="tips-circle"></span>结构和综合多样的生物活性化合物</p>
	            <p><span class="tips-circle"></span>灵活的订单量从毫克到千克规模</p>
	            <p class="margin-B"><span class="tips-circle"></span>按时交付产品</p>
	            我们以客户为中心，并希望听到您关于我们的产品和服务可能更好地帮助您。
	        </article>
	    </section>
	</div>
  </div>
  <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'about',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style>

</style>
