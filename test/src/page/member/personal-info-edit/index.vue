<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">编辑个人信息</span>
	</header>
	<section class="info-com">
	    <article class="layout white-bg ">
	        <p><span>ID</span><input type="text" name="" value="1055"></p>
	        <p><span>性名</span><input type="text" name="" value="陈先生"></p>
	        <p><span>邮箱</span><input type="text" name="" value="luozhenzhen@bidepharmatech.com"></p>
	    </article>
	    <div class="edit-btn-box">
	        <button class="btn btn-red"> 保存 </button>
	    </div>
	</section>

</div>
</template>
<script>
export default {
    name: 'personalInfoEdit',
    data () {
        return { }
    } 
}
</script>
<style scoped>


.info-com p:last-child { border-bottom: none; }
.info-com p span { width: 12%; }
.info-com input{ width: 86%; }
.edit-btn-box { padding: 1rem 5%; }
	
</style>
