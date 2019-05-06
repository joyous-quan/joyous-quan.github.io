<template>
<div>
	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">我们如何使用收集的信息</span>
	</header>
	<ul class="privacy-policy-con use-info">
	    <li class="use-info-title">
	        Csnpharm可能出于以下目的收集和使用用户的个人信息：  
	    </li>
	    <li class="sub-title">
	        <a href="javascript:;" title="">
	            <span class="tips-red"></span>
	            改善客户服务
	        </a>
	        <p>
	           用户信息用于处理通过本网站发出的订单。您提供的信息还有助于我们更有效地响应您的客户服务请求和支持需求。 
	        </p>
	    </li>
	    <li class="sub-title">
	        <a href="javascript:;" title="">
	            <span class="tips-red"></span>
	            个性化用户体验
	        </a>
	        <p>
	           用户信息用于通过自定义站点来个性化客户体验，以显示相关信息并允许访问用户的交易和支持信息。我们可能会使用汇总信息来了解我们的用户如何作为一个群体使用我们网站上提供的服务和资源。 
	        </p>
	    </li>
	    <li class="sub-title">
	        <a href="javascript:;" title="">
	            <span class="tips-red"></span>
	            定期发送电子邮件
	        </a>
	        <p>
	           我们可能会使用用户提供的电子邮件地址发送与其订单相关的信息和更新。联系信息也可用于响应他们的询问，问题和/或其他请求。 
	        </p>
	    </li>
	</ul>
</div>
</template>
<script>
export default {
    name: 'useInfo',
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
	font-size: 1rem;
}
.privacy-policy-con li a {
	font-size: 1.33rem;
}
.privacy-policy li a{
	line-height: 4.45rem;
}
.privacy-policy-con .sub-title i {
	top: 0;
	padding-right: 2rem;
}
.use-info-title {
	height: 4.45rem;
	line-height: 4.45rem;
}
.use-info {
	margin-top: .56rem;
}
.use-info .sub-title p {
	line-height: 1.8rem;
}
.use-info .sub-title {
	padding-top: .5rem;
	padding-bottom: 1rem;
}
.use-info .sub-title a {
	line-height: 2.5rem;
}

</style>