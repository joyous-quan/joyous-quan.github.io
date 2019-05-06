<template>
<div>
    <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">联系我们</a>
	    </div>
	</nav>
	<div class="about-common contact-us-con">
	    <section>
	        <header>联系我们</header>
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
	            <a href="mailto:sales@csnpharm.cn">
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
	    <section>
	        <header>中国分销商（上海毕得医药科技有限公司）</header>
	        <div>
	            <a href="javascript:;">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/iphone.png" alt="Tel">
	                </span>
	                400-164-7117
	            </a>
	            <a href="mailto:sales@csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/email.png" alt="Email">
	                </span>
	                sales@csnpharm.cn
	            </a>
	            <a href="mailto:sales@csnpharm.cn">
	                <span class="img-box small-icon">
	                    <img src="/static/img/header/web.png" alt="Web">
	                </span>
	                www.csnpharm.cn
	            </a>
	        </div>
	        <a class="addr margin-B" href="javascript:;">
	            <span class="img-box small-icon">
	                <img src="/static/img/header/addr.png" alt="addr">
	            </span>上海市杨浦区理工大学国家大学科技园杨浦区翔殷路128号1号楼A座101室
	        </a>
	    </section>
	    <section class="white-bg inquiry-form">
	        <p class="inquiry-form-title">询价 <span>*必填项</span></p>
	        <input type="text" class="ipt" placeholder="*姓名">
	        <input type="text" class="ipt" placeholder="*邮箱">
	        <input type="text" class="ipt" placeholder="*电话">
	        <textarea class="ipt" placeholder="*留言内容"></textarea>
	        <button class="btn btn-red">提交</button>
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
.contact-us-con header { border-bottom: none; }
.contact-us-con a { 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	position: relative;
	height: 3rem; 
	padding-left: 2.2rem;
}
.contact-us-con div a {
	width: 50%;
	float: left;
}
.contact-us-con .addr { margin-bottom: 2rem; }
.contact-us-con .img-box {
	position: absolute;
	top: 0;
	left: 0;
}
</style>
