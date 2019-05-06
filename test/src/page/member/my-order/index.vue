<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">我的订单</span>
	</header>
	<section class="my-order-con">
	    <ul class="com-card order-card">
	        <li>
	            <a href="javascript:;" class="img-box small-icon">
	                <img src="/static/img/member/bell.png" alt="">
	            </a>
	            <span>
	                您的订单将保留48小时
	            </span>
	        </li>
	        <li>
	            <p><span>订单编号</span>25212522133</p>
	            <p><span class="width6">客户订单号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>总价</span>RMB420</p>
	            <p><span class="width6">订单状态</span>已支付</p>
	        </li>
	        <li class="look-details">
	            <router-link tag="a" to="/member/orderDetails">
	                查看订单详情
	                <Icon type="ios-arrow-forward" />
	            </router-link>
	        </li>
	    </ul>
	    <ul class="com-card order-card">
	        <li>
	            <a href="javascript:;" class="img-box small-icon">
	                <img src="/static/img/member/time.png" alt="">
	            </a>
	            <span>
	                您的订单正在处理中，很快就会发出去
	            </span>
	        </li>
	        <li>
	            <p><span>订单编号</span>25212522133</p>
	            <p><span class="width6">客户订单号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>总价</span>RMB420</p>
	            <p><span class="width6">订单状态</span>已支付</p>
	        </li>
	        <li class="look-details">
	            <router-link tag="a" to="/member/orderDetails">
	                查看订单详情
	                <Icon type="ios-arrow-forward" />
	            </router-link>
	        </li>
	    </ul>
	    <ul class="com-card order-card">
	        <li>
	            <a href="javascript:;" class="img-box small-icon">
	                <img src="/static/img/member/time.png" alt="">
	            </a>
	            <span>
	                您的订单正在处理中，很快就会发出去
	            </span>
	        </li>
	        <li>
	            <p><span>订单编号</span>25212522133</p>
	            <p><span class="width6">客户订单号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>总价</span>RMB420</p>
	            <p><span class="width6">订单状态</span>已支付</p>
	        </li>
	        <li class="look-details">
	            <router-link tag="a" to="/member/orderDetails">
	                查看订单详情
	                <Icon type="ios-arrow-forward" />
	            </router-link>
	        </li>
	    </ul>
	    <ul class="com-card order-card">
	        <li>
	            <a href="javascript:;" class="img-box small-icon">
	                <img src="/static/img/member/bell.png" alt="">
	            </a>
	            <span>
	                您的订单将保留48小时
	            </span>
	        </li>
	        <li>
	            <p><span>订单编号</span>25212522133</p>
	            <p><span class="width6">客户订单号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>总价</span>RMB420</p>
	            <p><span class="width6">订单状态</span>已支付</p>
	        </li>
	        <li class="look-details">
	            <router-link tag="a" to="/member/orderDetails">
	                查看订单详情
	                <Icon type="ios-arrow-forward" />
	            </router-link>
	        </li>
	    </ul>
	    <ul class="com-card order-card">
	        <li>
	            <a class="img-box small-icon">
	                <img src="/static/img/member/time.png" alt="">
	            </a>
	            <span>
	                您的订单正在处理中，很快就会发出去
	            </span>
	        </li>
	        <li>
	            <p><span>订单编号</span>25212522133</p>
	            <p><span class="width6">客户订单号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>总价</span>RMB420</p>
	            <p><span class="width6">订单状态</span>已支付</p>
	        </li>
	        <li class="look-details">
	            <router-link tag="a" to="/member/orderDetails">
	                查看订单详情
	                <Icon type="ios-arrow-forward" />
	            </router-link>
	        </li>
	    </ul>
	</section>

</div>
</template>
<script>
export default {
    name: 'myOrder',
    data () {
        return { 
        	list: ""
        }
    },
    computed: {
    	
    }
}
</script>
<style scoped>


</style>
