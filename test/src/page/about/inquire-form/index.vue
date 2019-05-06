<template>
<div>
  <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">询价单</a>
	    </div>
	</nav>
	<div class="about-common inquiry-form-con">
	    <section class="layout inquiry-form">
	        <p class="inquiry-form-title">询价单<span>*必填项</span></p>
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
    name: 'inquireForm',
    data () {
        return { 
        	
        }
    },
    components: {
        headerT,footerB
    }
}
</script>

<style scoped>

</style>