<template>
<div>
  <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">质量手册</a>
	    </div>
	</nav>
	<div class="about-common quality-con">
	    <section>
	        <header>质量手册</header>
	        <article>
	            Csnpharm致力于成为生命科学和创新技术的研究，开发和制造领域的全球领先供应商。为了实现我们的战略愿景，我们必须满足并超越客户的要求。我们通过建立和维护卓越的质量和质量保证标准来实现这一目标。
	        </article>
	        <article>
	            查找Csnpharm Quality Manual.s的详细信息。
	            <p><span class="img-box small-icon"><img src="/static/img/products/PDF.png"></span>质量手册</p>
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
    name: 'qualityManual',
    data () {
        return { 
        	
        }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>
.small-icon { margin-right: .5rem; }
.small-icon img { 
	position: relative;
	top: .5rem;
}
</style>
