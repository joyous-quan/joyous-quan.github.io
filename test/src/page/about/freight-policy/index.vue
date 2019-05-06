<template>
<div>
    <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">运费和政策</a>
	    </div>
	</nav>
	<div class="about-common">
	    <section>
	        <header>运费和政策</header>
	        <article>采购的库存产品将在您的订单24小时内处理出货。如果要求的产品缺货，我们将尽快补充库存，并与您直接联系更新。小订单在美国的运费和处理费是35美元，在欧盟是45美元，其他国家是85美元。
	        </article>
	        <div class="img-box freight-img">
	            <img src="/static/img/cart/freight.png" alt="">
	        </div>
	    </section>
	</div>
    <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'contact',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>
.freight-img {
    height: 8rem;
    padding: .5rem 1rem 3rem;
}
</style>
