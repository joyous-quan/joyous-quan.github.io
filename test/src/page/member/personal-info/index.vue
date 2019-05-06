<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">个人信息</span>
	</header>
	<section class="info-com">
	    <article class="layout white-bg ">
	        <p><span>ID</span>1055</p>
	        <p><span>性名</span>陈先生</p>
	        <p><span>邮箱</span>luozhenzhen@bidepharmatech.com</p>
	        <div class="edit">
		        <router-link to="/member/personalInfoEdit" tag="a"><i class="iconfont icon-edit"></i><span> 编辑</span></router-link>
	        </div>
	    </article>
	</section>

</div>
</template>
<script>
export default {
    name: 'personalInfo',
    data () {
        return { }
    } 
}
</script>
<style scoped>
.info-com p span { width: 12%; }
.info-com input{ width: 86%; }
.edit {
	text-align: right;
	height: 3.75rem;
	line-height: 3.75rem;
}
.edit a {
	padding-right: .6rem;
	color: #aaa;
}
.edit i {
	font-size: 2.4rem;
}
.edit span {
	position: relative;
	bottom: .5rem;
}
	
</style>
