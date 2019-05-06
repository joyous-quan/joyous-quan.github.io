<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">我的询单</span>
	</header>
	<section class="inquire-con">
	    <ul class="com-card order-card">
	        <li>
	            <p><span>询单编号</span>25212522133</p>
	            <p><span>产品编号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>产品名</span>LDN-193189 Hydrochloride</p>
	        </li>
	        <li>
	            <p><span>数量要求</span>10g</p>
	        </li>
	    </ul>
	    <div class="msg-con">
	        <article class="msg-box">
	            <p><span>客户留言：</span>请问有货吗请问有货吗请问有货吗请问有货吗请问有货吗请问有货吗?</p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span>CSNpharm回复：</span>
	                订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。
	            </p>
	        </article>
	        <article class="msg-box">
	            <p><span>客户留言：</span>请问有货吗?</p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span>CSNpharm回复：</span>
	                订货需要一个星期。
	            </p>
	        </article>
	        <p class="last-p more-msg"><a href="javascript:;">展开更多回复</a></p>
	    </div>
	    <ul class="com-card order-card">
	        <li>
	            <p><span>询单编号</span>25212522133</p>
	            <p><span>产品编号</span>856623212</p>
	        </li>
	        <li>
	            <span>产品名</span>LDN-193189 Hydrochloride
	        </li>
	        <li>
	            <span>数量要求</span>10g
	        </li>
	    </ul>
	    <div class="msg-con">
	        <article class="msg-box">
	            <p><span>客户留言：</span>请问有货吗?</p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span>CSNpharm回复：</span>
	                订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。
	            </p>
	        </article>
	        <article class="msg-box">
	            <p><span>客户留言：</span></span></p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span>CSNpharm回复：</span>
	                订货需要一个星期。
	            </p>
	        </article>
	        <p class="last-p more-msg"><a href="javascript:;">展开更多回复</a></p>
	    </div>
	    <ul class="com-card order-card">
	        <li>
	            <p><span>询单编号</span>25212522133</p>
	            <p><span>产品编号</span>856623212</p>
	        </li>
	        <li>
	            <p><span>产品名</span>LDN-193189 Hydrochloride</p>
	        </li>
	        <li>
	            <p><span>数量要求</span>10g</p>
	        </li>
	    </ul>
	    <div class="msg-con">
	        <article class="msg-box">
	            <p><span>客户留言：</span>请问有货吗?</p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span> CSNpharm回复：</span>
	                订货需要一个星期订货需要一个星期订货需要一个星期。
	            </p>
	        </article>
	        <article class="msg-box">
	            <p><span>客户留言：</span>请问有货吗?</p>
	            <p class="session-box">
	                <a href="javascript:;" class="img-box small-icon up-icon">
	                    <img src="/static/img/user-center/up.png" alt="">
	                </a>
	                <span> CSNpharm回复：</span>
	                订货需要一个星期。
	            </p>
	        </article>
	        <p class="last-p customer-answer"><router-link tag="a" to="/member/customerReply">客户回复</router-link></p>
	    </div>
	</section>
	
</div>
</template>
<script>
export default {
    name: 'myInquire',
    data () {
        return { }
    } 
}
</script>
<style scoped>
.inquire-con .msg-con {
	padding: 0 4%;
	background: #fff;
}
.msg-box {
	padding-top: 1rem;
	line-height: 1.5rem;
	font-size: 1rem;
}
.msg-box p {
	padding: 0 1rem;
}
.msg-box span {
	font-size: .9rem;
	color:#555;
}
.msg-box .session-box {
	position: relative;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	min-height: 3.5rem;
	padding: .8rem 1rem;
	border-radius: .5rem;
	background: #f3f3f3;
	margin-top: 1.5rem;
}
.session-box .up-icon {
	position: absolute;
	top: -1rem;
	left: 18%;
}
.last-p a {
	font-size: 1rem;
	padding: 1rem 0 1.5rem;
	color: #1583d8;
}
.customer-answer{
	text-align: right;
}
</style>
