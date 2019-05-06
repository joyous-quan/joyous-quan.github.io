<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">客户询单问答</span>
	</header>
	<section class="customer-QA-con">
    <div class="layout msg-con">
        <dl class="CSNpharm-service">
            <dt class="CSNpharm-service-img QA-img">
                <img src="" alt="">
            </dt>
            <dd class="customer-QA-box">
                <span class="img-box customer-QA-icon">
                    <img src="/static/img/user-center/left-white-icon.png" alt="">
                </span>
                订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。
            </dd>
        </dl>
        <div class="time">
            <span>2018年08月07日 16:30</span>
        </div>
        <dl class="customer-question">
            <dd class="customer-question-box">
                <span class="img-box customer-QA-icon">
                    <img src="/static/img/user-center/right-red-icon.png" alt="">
                </span>
                订货需要一个星期。
            </dd>
            <dt class="customer-question-img QA-img">
                <img src="" alt="">
            </dt>
        </dl>
        <div class="time">
            <span>2018年08月07日 16:30</span>
        </div>
        <dl class="CSNpharm-service">
            <dt class="CSNpharm-service-img QA-img">
                <img src="" alt="">
            </dt>
            <dd class="customer-QA-box">
                <span class="img-box customer-QA-icon">
                    <img src="/static/img/user-center/left-white-icon.png" alt="">
                </span>
                订货需要一个星期。
            </dd>
        </dl>
        <div class="time">
            <span>2018年08月07日 16:30</span>
        </div>
        <dl class="customer-question">
            <dd class="customer-question-box">
                <span class="img-box customer-QA-icon">
                    <img src="/static/img/user-center/right-red-icon.png" alt="">
                </span>
                订货需要一个星期。订货需要一个星期。订货需要一个星期。订货需要一个星期。
            </dd>
            <dt class="customer-question-img QA-img">
                <img src="" alt="">
            </dt>
        </dl>
        <div class="time">
            <span>2018年08月07日 16:30</span>
        </div>
        <dl class="customer-question">
            <dd class="customer-question-box">
                <span class="img-box customer-QA-icon">
                    <img src="/static/img/user-center/right-red-icon.png" alt="">
                </span>
                订货需要一个星期。
            </dd>
            <dt class="customer-question-img QA-img">
                <img src="" alt="">
            </dt>
        </dl>     
    </div> 
</section>
	
</div>
</template>
<script>
export default {
    name: 'customerReply',
    data () {
        return { }
    } 
}
</script>
<style scoped>
.customer-QA-con {
	margin-top: 1.4rem;
	font-size: 1rem;
}
.QA-img {
	height: 3.11rem;
	width: 3.11rem;
	background: #fff;
	border-radius: .25rem;
}
.msg-con dl {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
}
.msg-con dd {
	position: relative;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	max-width: 74%;
	padding: .6rem .6rem .5rem .8rem;
	min-height: 1.75rem; 
	line-height: 1.75rem;
	border-radius: .6rem;
}
.msg-con dd .img-box {
	position: absolute;
}
.CSNpharm-service dd {
	margin-left: 1.5rem;
	background: #fff;
}
.CSNpharm-service dd .img-box {
	left: -0.75rem;
	top: .8rem;
}
.time {
	text-align: center;
	padding: 1.5rem 0 1rem;
	font-size: 1rem;
	color: #fff;
}
.time span {
	display: inline-block;
	padding: .5rem 1.4rem;
	background: #ddd;
	border-radius: 1.5rem;
}
.customer-question {
	justify-content: flex-end;
}
.customer-question dd {
	margin-right: 1.5rem;
	background: #eb6132;
	color: #fff;
}
.customer-question dd .img-box {
	right: -0.75rem;
	top: .8rem;
}
.customer-QA-icon {
	height: 1rem;
	width: 1rem;
}
</style>
