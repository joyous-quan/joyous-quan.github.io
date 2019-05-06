<template>
<div>
  <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">如何订购</a>
	    </div>
	</nav>
	<div class="layout page-title">
	    如何订购
	</div>
	<div class="about-common how-order-con">
	    <section>
	        <header><span class="tips-red"></span>网上订购</header>
	        <article>
	            <p>按照在线购买流程图轻松下订单。</p>
	            <p><span class="tips-circle-red">1</span>登录/注册</p>
	            <p><span class="tips-circle-red">2</span>将产品添加到我的购物车</p>
	            <p><span class="tips-circle-red">3</span>留言订购</p>
	        </article>
	    </section>
	    <section class="contact-us-con">
	        <header class="margin-B"><span class="tips-red"></span>线下订购</header>
	        <div>
	            <a href="javascript:;">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/iphone.png" alt="Tel">
	                </span>
	                400-920-2911
	            </a>
	            <a href="mailto:sales@csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/email.png" alt="Email">
	                </span>
	                sales@csnpharm.cn
	            </a>
	            <a href="www.csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/web.png" alt="Web">
	                </span>
	                www.csnpharm.cn
	            </a>
	            <a href="mailto:tech@csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/email.png" alt="Email">
	                </span>
	                tech@csnpharm.cn
	            </a>
	        </div>
	        <a class="margin-B" href="javascript:;">
	            <span class="img-box small-icon">
	                <img src="/static/img/header/addr.png" alt="addr">
	            </span>
	            上海市浦东新区陶桥路488号5幢，邮编201203
	        </a>
	    </section>
	</div>
	<footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'howToOrder',
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
.how-order-con article p {
	padding: .5rem 0;
	font-size: 1.11rem;
}
.tips-circle-red {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    line-height: 2rem;
    margin: 0 .65rem;
    border-radius: 1rem;
    background: #ea5413;
    text-align: center;
    color:#fff;
}
.contact-us-con a {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	position: relative;
	height: 3rem;
	font-size: 1rem; 
}
.contact-us-con div a {
	width: 50%;
	float: left;
}
.small-icon { margin-right: .5rem; }
.small-icon img { 
	position: relative;
	top: .5rem;
}
</style>