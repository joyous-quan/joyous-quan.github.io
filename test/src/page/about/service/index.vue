<template>
<div>
    <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">我们的服务</a>
	    </div>
	</nav>
	<div class="layout page-title">
	    我们的服务
	</div>
	<div class="about-common">
	    <section>
	        <header><span class="tips-red"></span>产品库存</header>
	        <article>Csnpharm致力于为客户提供各种高质量的生物活性小分子，包括抑制剂，拮抗剂，激动剂和调节剂。我们拥有全面的产品线，并提供专业的售后服务，以实现客户满意度。</article>
	        <article>我们的产品已广泛应用于生物制药研究和开发的各个领域，特别是在癌症，感染，自身免疫性疾病，糖尿病，心血管疾病和神经退行性疾病等研究重点领域。我们的技术支持团队根据信号通路的基本生物学理论将产品分为细胞凋亡，表观遗传学，Wnt / Hedgehog / Notch，PI3K / Akt / mTOR等，涵盖了疾病发病机理的各个方面。</article>
	    </section>
	    <section>
	        <header><span class="tips-red"></span>批量和定制合成服务</header>
	        <article>
	            <b>产品与我们的目录材料具有相同的技术规格，但包装尺寸较大。或者我们目录中未包含的产品。</b>
	        </article>
	        <article>Csnpharm拥有经验丰富的定制合成化学家团队，由令人印象深刻的博士团队领导。通过这个团队，我们有能力支持复杂标记分子的多步合成的各种化学项目，包括代谢物和类固醇。遵循科技创新，挑战传统思维，Csnpharm一直致力于开发超越国际成本和可靠性标准的优质产品，打造最先进的合成路线。凭借在制备大量不同生物活性分子方面的丰富经验，我们提供了更快速的新产品合成。这就是为什么我们始终能够比任何其他公司更快地提供您的定制合成化合物。
	        </article>
	        <article>Csnpharm能够为批量购买的产品提供有竞争力的折扣，产品的批量为mg或Kg，可作为单个或多个项目。折扣通常以标准单位尺寸的五倍施加，并随着数量的增加而逐渐增加。如果您感兴趣的产品目前无法使用，我们将很乐意考虑您的任何要求。
	        </article>
	        <article>您的地区由Csnpharm经销商独家提供。请填写下面的表格，包括您的批量数量要求。您的批量查询将直接发送给选定的经销商。
	        </article>
	    </section>
	</div>
    <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'service',
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
