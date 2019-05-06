<template>
<div>
    <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">条款和条件</a>
    </div>
</nav>
<div class="layout page-title">
    条款和条件
</div>
<div class="about-common terms-con">
    <section>
        <article><span class="tips-red"></span>在以下条款和条件中，“Csnpharm”指Csnpharm LLC（香港湾仔港湾道6-8号瑞安中心3楼313室）。以下定义的条款和条件适用于Csnpharm品牌产品和服务以及Csnpharm代表其他供应商分发的产品。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>本网站的内容，如文字，图形，图像信息和其他材料（“内容”）受版权法和其他知识产权法保护，其中的所有知识产权属于Csnpharm，或已获得许可。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>所有Csnpharm产品均在非cGMP条件下生产，仅供实验室研究使用，不得用于任何人类或兽医用途。它们只能由技术合格的人员或在他们的直接监督下使用。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>所有文本，图形，按钮图标，图像（统称为“内容”）均属于Csnpharm LLC。本网站上所有内容的收集，整理和组装（“编译”）仅属于Csnpharm LLC。内容和汇编均受美国和国际版权法保护。Csnpharm授权您使用本网站上的内容仅用于购买我们的产品或以其他方式宣传我们的产品，但您不得将该内容与Csnpharm或任何Csnpharm产品竞争使用。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>csnpharm.cn和Csnpharm是注册商标。未经我们明确的书面同意，严禁使用我们的任何商标或服务标志。您不得以任何可能引起混淆的方式使用我们的商标或服务标记与任何产品或服务相关联。您不得以任何贬低或损害我们信誉的方式使用我们的商标或服务标记。未经事先明确同意，您不得在meta标签中使用我们的任何商标或服务标记。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>Csnpharm网站的所有用户均被视为已完全接受这些条款和条件。</article>
    </section>
    <section>
        <article><span class="tips-red"></span>这些条款中的任何内容均不旨在向第三方提供执行任何条款的任何权利。</article>
    </section>
    
</div>
    <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'termsConditions',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>
.terms-con article {
	position: relative;
	padding: 1rem;
}
.terms-con article span {
	position: absolute;
	left:0; top: 1.3rem;
}
.quality-con p {
	padding: 1rem 0;
	font-size: 1.11rem;
	color: #2180be;
}
.quality-con p span { margin-right: .6rem; }
.inquiry-form-con p {
	padding: .4rem 0;
}
</style>
