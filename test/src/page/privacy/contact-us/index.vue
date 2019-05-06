<template>
<div>
	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">联系我们</span>
	</header>
	<section class="layout white-bg">
	    <article class="privacy-policy-txt contact-us-con">
	        如果您对本隐私政策，本网站的做法或您与本网站的交易有任何疑问，请联系我们：    
	        <p class="contact-us-title">Csnpharm</p>
	        <div class="flex">
	            <a class="tel" href="javascript:;">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/iphone.png" alt="Tel">
	                </span>
	                400-920-2911
	            </a>
	            <a class="email" href="mailto:sales@csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/email.png" alt="Email">
	                </span>
	                sales@csnpharm.cn
	            </a>
	        </div>
	        <a class="email" href="mailto:sales@csnpharm.cn">
	            <span class="img-box small-icon">
	                <img src="/static/img/header/web.png" alt="Web">
	            </span>
	            www.csnpharm.cn
	        </a>
	        <a class="tel" href="javascript:;">
	            <span class="img-box small-icon">
	                <img src="/static/img/header/addr.png" alt="addr">
	            </span>
	            上海市浦东新区陶桥路488号5幢，邮编201203
	        </a>
	    </article>
	</section>
</div>
</template>
<script>
export default {
    name: 'shareInfo',
    data () {
        return { }
    }
}
</script>
<style scoped>
.contact-us-title {
	margin-top: 1rem;
	font-size: 1.33rem;
	height: 2.65rem;
}
.contact-us-con .flex{
	justify-content: space-between;
}
.contact-us-con a {
	display: block;
	height: 3rem;
}
.contact-us-con .img-box {
	position: relative;
	top: .5rem;
	margin-right: .3rem;
}

</style>