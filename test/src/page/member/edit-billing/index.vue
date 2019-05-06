<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">编辑账单地址</span>
        <a href="javascript:;" class="save">保存</a>
    </header>
    <section class="info-com edit-addr-con edit-message-con billing-addr-con">
        <article class="layout white-bg ">
            <p><span>姓名</span><input type="text" name="" value="陈先生"></p>
            <p><span>手机号码</span><input type="text" name="" value="13412345678"></p>
            <p class="position-r">
                <span>选择地区</span>
                <select name="">
                    <option value="">multiple</option>
                    <option value="">multiple</option>
                </select>
                <i class="iconfont icon-gengduo"></i>
            </p>
            <p><span>详细地址</span><input type="text" name="" value=""></p>
            <p><span>邮政编码</span><input type="text" name="" value="335500"></p>
        </article>
        <div class="layout set-default">
            设为默认地址 
            <span class="float-R">
                <mt-switch v-model="check"></mt-switch>
            </span>
        </div>
        <a href="" class="layout del-addr">
            删除账单地址 
        </a>
    </section>
</div>
</template>
<script>
export default {
    name: 'editBilling',
    data () {
        return {
            check : true
        }
    } 
}
</script>
<style scoped>

</style>
