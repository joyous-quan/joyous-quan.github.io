<template>
<div>
	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">隐私政策</span>
	</header>
	<section class="layout white-bg">
	    <article class="privacy-policy-txt">
	        本隐私政策管理Csnpharm收集、使用、维护和披露从www.csnpharm.cn网站(以下简称“网站”)的用户(每位“用户”)收集的信息的方式。本隐私政策适用于本网站及Csnpharm提供的所有产品和服务。
	    </article>
	</section>
	<ul class="privacy-policy-con privacy-policy">
	    <li class="sub-title">
	        <router-link tag="a" to="/privacy/identifyingInfo">
	            <span class="tips-red"></span>
	            个人识别信息
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/nonIdentifyingInfo">
	            <span class="tips-red"></span>
	            非个人识别信息
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/webCookie">
	            <span class="tips-red"></span>
	            网络浏览器cookie
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/useInfo">
	            <span class="tips-red"></span>
	            我们如何使用收集的信息
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/protectInfo">
	            <span class="tips-red"></span>
	            我们如何保护您的信息
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/shareInfo">
	            <span class="tips-red"></span>
	            分享您的个人信息
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/policyChange">
	            <span class="tips-red"></span>
	            本隐私政策的变更
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/acceptTerms">
	            <span class="tips-red"></span>
	            您接受这些条款
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	    <li class="sub-title">
	         <router-link tag="a" to="/privacy/contactUs">
	            <span class="tips-red"></span>
	            联系我们
	            <Icon type="ios-arrow-forward" />
	        </router-link>
	    </li>
	</ul>
</div>
</template>
<script>
export default {
    name: 'privacy',
    data () {
        return { }
    }
}
</script>
<style scoped>
.privacy-policy-con li {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding:0 4%;
	background: #fff;
	margin-bottom: .56rem;
}
.privacy-policy-con li a {
	font-size: 1.33rem;
	height: 4.45rem;
	line-height: 4.45rem;
}
.sub-title i {
	float: right;
	padding-right: .5rem;
	font-size: 1.33rem;
	color:#c6c6c6;
	margin-top:1.6rem; 
}
</style>