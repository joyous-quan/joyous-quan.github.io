<template>
<div>
  	<header-t></header-t>
	<div>
	<!-- 主体 -->
		<nav class="layout">
		    <div class="breadcrumb">
		        <a href="/">首页</a><span> /</span>
		        <a href="javascript:;" class="current">用户中心</a>
		    </div>
		</nav> 
		<div class="layout page-title">
		    用户中心
		</div>
		<ul class="layout member-con">
		    <li>
		        <router-link to="/member/myOrder" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/order.png" alt="">
		            </span>
		            <span class="member-txt">我的订单</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		    <li>
		        <router-link to="/member/myInquire" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/inquire.png" alt="">
		            </span>
		            <span class="member-txt">我的询单</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		    <li>
		        <router-link to="/member/myFavorite" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/my-favorite.png" alt="">
		            </span>
		            <span class="member-txt">我的收藏</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		    <li>
		        <router-link to="/member/personalInfo" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/user.png" alt="">
		            </span>
		            <span class="member-txt">个人信息</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		    <li>
		        <router-link to="/member/addrInfo" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/addr.png" alt="">
		            </span>
		            <span class="member-txt">地址信息</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		    <li>
		        <router-link to="/member/changePassword" tag="a">
		            <span class="img-box small-icon">
		                <img src="/static/img/member/password.png" alt="">
		            </span>
		            <span class="member-txt">密码修改</span>
		            <Icon type="ios-arrow-forward" />
		        </router-link>
		    </li>
		</ul>
	</div>
    <footer-b></footer-b>
</div>
</template>
<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'
export default {
    name: 'member',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    } 
}
</script>
<style scoped>
.member-con {
	background: #fff;
	margin-bottom: .56rem;
}
.member-con li a {
	position: relative;
	display: block;
	overflow: hidden;
	-webkit-box-sizing: border-box; /* Safari */
	-moz-box-sizing: border-box; /* Firefox */
	box-sizing: border-box;
	height: 4.45rem;
	width: 100%;
	padding-top: 1.5rem;
	border-bottom: .08rem solid #f3f3f3;
}
.member-con li:last-child a {
	border: none;
}
.member-con a i {
	position: absolute;
	right: 0;
	padding-right: .5rem;
	font-size: 1.33rem;
	color:#c6c6c6;
	margin-top:.3rem;
}
.member-txt {
	position: relative;
	left: .5rem;
	bottom: .4rem;
	font-size: 1.22rem;
	color: #666;
}
	
</style>
