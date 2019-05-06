<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">修改密码</span>
	    <a href="javascript:;" class="save">保存</a>
	</header>
	<section class="info-com change-password-con">
	    <article class="layout">
	        <p><span>当前密码</span><input type="password" value="123456"></p>
	        <p><span>新密码</span><input type="password" value="123456"></p>
	        <p><span>确认新密码</span><input type="password" value="123456"></p>
	    </article>
	</section>
</div>
</template>
<script>
export default {
    name: 'changePassword',
    data () {
        return { }
    } 
}
</script>
<style scoped>

.info-com p span {
	width: 12%;
}
.change-password-con p span {
	width: 21%;
}
.change-password-con input {
	width: 77%;
}
</style>
