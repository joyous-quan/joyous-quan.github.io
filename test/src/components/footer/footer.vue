<template>
<div>
    <header class="to-top" @click="totop">
        <span class="img-box to-top-icon"><img src="/static/img/footer/to-top.png" alt=""></span><br>置顶
    </header>
    <section class="layout warranty">
        <ul>
            <li>
                <span class="img-box footer-icon"><img src="/static/img/footer/footer_1.png" alt=""></span>价格优惠
            </li>
            <li>
                <span class="img-box footer-icon"><img src="/static/img/footer/footer_2.png" alt=""></span>快速交付
            </li>
            <li>
                <span class="img-box footer-icon"><img src="/static/img/footer/footer_3.png" alt=""></span>质量保证
            </li>
            <li>
                <span class="img-box footer-icon"><img src="/static/img/footer/footer_4.png" alt=""></span>专业技术支持
            </li>
        </ul>
    </section>
    <section class="layout footer-nav">
        <nav class="nav-left">
            <router-link tag="a" to="/about">关于我们</router-link>
            <router-link tag="a" to="/about/contact">联系我们</router-link>
            <router-link tag="a" to="/about/service">我们的服务</router-link>
            <router-link tag="a" to="/terminology">药理学术语</router-link>
            <router-link tag="a" to="/about/abbreviations">缩略词</router-link>
            <router-link tag="a" to="/about/qualityManual">质量手册</router-link>
            <router-link tag="a" to="/about/inquireForm">询价单</router-link>
        </nav>
        <nav class="nav-right">
            <router-link tag="a" to="/about/howToOrder">如何购买</router-link>
            <router-link tag="a" to="/about/termsConditions">条款和条件</router-link>
            <router-link tag="a" to="/about/freightPolicy">运费和政策</router-link>
            <router-link tag="a" to="/privacy">隐私政策</router-link>
            <router-link tag="a" to="/about/molarity">摩尔浓度计算器</router-link>
            <router-link tag="a" to="/about/sitemap">网站地图</router-link>
        </nav>
    </section>
    <footer class="layout footer-msg">
        <div class="footer-msg-top">
            <div class="img-box brochure-img">
                <img src="/static/img/footer/brochure.png" alt="">
            </div>
            <div class="footer-msg-con">
                <a href="javascript:;">
                    <span class="img-box small-icon"><img src="/static/img/footer/footer-iphone.png" alt="user"></span>400-920-2911
                </a>
                <a href="mailto:sales@csnpharm.cn">
                    <span class="img-box small-icon"><img src="/static/img/footer/footer-email.png" alt="user"></span>sales@csnpharm.cn
                </a>
                <a href="www.csnpharm.cn">
                    <span class="img-box small-icon"><img src="/static/img/footer/footer-web.png" alt="user"></span>www.csnpharm.cn
                </a>
                <a href="javascript:;">
                    <span class="img-box small-icon"><img src="/static/img/footer/footer-address.png" alt="user"></span>上海市浦东新区陶桥路488号5幢
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="img-box"><img src="/static/img/footer/footer.png" alt=""></p>
            &copy;2017 - 2018 csnpharm版权所有。 仅供研究使用!
        </div>
    </footer>
</div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods : {
        totop(){
           document.body.scrollTop = document.documentElement.scrollTop = 0; 
        }
    }
}
</script>
<style scoped>

/* ------------ footer stytle start ------------ */
/* 回到顶部 */
.to-top {
    background: #000;
    height: 4.39rem;
    color: #fff;
    font-size: 1rem;
    text-align: center;
}
.to-top-icon {
    height: 1rem;
    width: 1rem;
    margin-top: .65rem;
}
/* 价格优惠 */
.warranty{
    background: #fff;
    height: 12.08rem;
    margin-top: .56rem;
}
.warranty ul{
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.warranty li {
    width: 49%;
    height: 5rem;
    border: .08rem solid #e0e0e0;
    border-radius: .5rem;
    font-size: 1.22rem;
    text-indent: 4%;
    line-height: 5rem;
    margin-top: .7rem;
}
.footer-icon {
    display: inline-block;
    width:4rem;
}
.footer-icon img {
    position: relative;
    top: .9rem;
    width: 2.64rem;
    height: 2.64rem;
}
/* 关于我们 */
.footer-nav {
    height: 24.54rem;
    background: #4a4d52;
}
.footer-nav nav {
    overflow: hidden;
    float: left;
    padding-top: .5rem;
}
.nav-left { width:52%; }
.footer-nav nav a {
    display: block;
    height: 3.35rem;
    line-height: 3.35rem;
    font-size: 1rem;
    color: #fff;
}
/* 地址信息 */
.footer-msg {
    height: 22rem;
    background: #202122;
    color: #fff;
}
.footer-msg-top {
    padding: 2.2rem 0 1.8rem;
    display: flex;
}
.brochure-img {
    width: 28%;
    height: 10.83rem;
    line-height: 10.83rem;
    margin-right: 1.45rem;
    margin-top: .3rem;
}
.brochure-img img {
    height:100%;
}
.footer-msg-con a{
    display:block;
    height: 2.9rem;
    line-height: 2.9rem;
    color:#fff;
    font-size: 1rem;
    white-space: nowrap;
}
.footer-msg-con a .img-box {
    position: relative;
    top: .4rem;
    margin-right: .3rem;
}
.footer-bottom { text-align: center; font-size: .9rem;  }
.footer-bottom p { margin-bottom: .7rem;}

</style>