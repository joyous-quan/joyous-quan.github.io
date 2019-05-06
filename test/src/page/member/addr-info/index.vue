<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">地址信息</span>
	</header>
	<section class="addr-info-con">
    <div class="layout addr-info-card">
        <header>账单地址</header>
        <article>
            <p>
                <span class="user-name">陈小小</span>15000113269
                <br><span class="color-red">(默认)</span>上海 上海市 浦东新区 惠南镇陶桥路488号5幢惠南镇陶桥路488号5幢，201203
            </p>
            <router-link to="/member/editBilling" tag="a">编辑</router-link>
        </article>
        <article>
            <p>
                <span class="user-name">陈小小</span>15000113269
                <br>上海 上海市 浦东新区 惠南镇陶桥路488号5幢惠南镇陶桥路488号5幢，201203
            </p>
            <router-link to="/member/editBilling" tag="a">编辑</router-link>
        </article>   
        <router-link class="add-addr" to="/member/editBilling" tag="a">
            <i class="iconfont icon-zengjia"></i> 新增账单地址
        </router-link>
    </div>
    <div class="layout addr-info-card">
        <header>送货地址</header>
        <article>
            <p>
                <span class="user-name">陈小小</span>15000113269
                <br><span class="color-red">(默认)</span>上海 上海市 浦东新区 惠南镇陶桥路488号5幢惠南镇陶桥路488号5幢，201203
            </p>
            <router-link to="/member/editShipping" tag="a">编辑</router-link>
        </article> 
        <router-link class="add-addr" to="/member/editShipping" tag="a">
            <i class="iconfont icon-zengjia"></i> 新增送货地址
        </router-link>
    </div>
</section>
</div>
</template>
<script>
export default {
    name: 'addrInfo',
    data () {
        return { }
    } 
}
</script>
<style scoped>
.addr-info-con {
    background: none;
}
.addr-info-card {
    background: #fff;
    font-size: 1.11rem;
    margin-top: .56rem;
}
.addr-info-card header {
    height: 3.75rem;
    line-height: 3.75rem;
    border-bottom: .08rem solid #f3f3f3;
    color: #aaa;
}
.addr-info-card article {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: space-between;
    border-bottom: .08rem solid #f3f3f3;
}
.addr-info-card article p{
    width:80%;
    padding-right: 1rem;
    line-height: 2rem;
    margin: .5rem 0;
}
.user-name {
    display: inline-block;
    padding-right: .8rem;
    font-size: 1.33rem;
}
.color-red { color: #eb6132; }
.addr-info-card article a{
    width: 3.2rem;
    display: block;
    height: 2.5rem; 
    line-height: 2.5rem; 
    margin-top: 6%;
    padding-left: .6rem;
    border-left: .08rem solid #f3f3f3;
    color: #aaa;
}
.add-addr {
    display: block;
    text-align: center;
    color: #aaa;
    padding: .5rem 0 .8rem;
}
.add-addr i{
    position: relative;
    top: .15rem;
    font-size: 1.6rem;
}
.addr-msg dt {
	font-size: .9rem;
	color:#555;
	border-bottom: .08rem solid #f3f3f3;
	height: 3.75rem;
	line-height: 3.75rem;
}
.addr-msg dd {
	font-size: 1.11rem;
}
.addr-msg dd span {
	color:#000;
	font-size: 1.33rem;
}	
</style>
