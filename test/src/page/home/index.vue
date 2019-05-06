<template>
<div>
  <header-t></header-t>
  <div>
    <!-- 主体 -->
    <section class="layout link">
        <a class="email" href="mailto:sales@csnpharm.cn">
            <span class="img-box small-icon">
                <img src="/static/img/header/email.png" alt="Email">
            </span>
            sales@csnpharm.cn
        </a>
        <a class="tel" href="javascript:;">
            <span class="img-box small-icon">
                <img src="/static/img/header/iphone.png" alt="Tel">
            </span>
            400-920-2911
        </a>
    </section>
    <section class="layout banner">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item><img src="/static/img/banner_1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="/static/img/banner_2.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="/static/img/banner_3.png" alt=""></mt-swipe-item>
        </mt-swipe>
    </section>
    <section class="layout white-bg">
        <div class="btn-box">
            <router-link to="/login" tag="a" class="btn btn-red">登录</router-link>
            <router-link to="/register" tag="a" class="btn btn-line">注册</router-link>
        </div>
    </section>
    <section class="layout signal-path">
        <header>信号通路</header>
        <router-link to="/" tag="a" class="sub-title">
            <span class="tips-red"></span><b>Ubiquitin Signaling Pathway</b>
            <Icon type="ios-arrow-forward" />
        </router-link>
        <div class="path-img-box">
            <span class="img-box"><img src="/static/img/img.png" alt=""></span>
        </div>
        <router-link to="/" tag="a" class="sub-title">
            <span class="tips-red"></span><b>Stem Cell Signaling Pathway</b>
            <Icon type="ios-arrow-forward" />
        </router-link>
        <div class="path-img-box">
            <span class="img-box"><img src="/static/img/img.png" alt=""></span>
        </div>
        <router-link to="/" tag="a" class="sub-title">
            <span class="tips-red"></span><b>Protein Tyrosine Kinase-RTK Signaling Pathway</b><Icon type="ios-arrow-forward" />
        </router-link>
        <div class="path-img-box">
            <span class="img-box"><img src="/static/img/img.png" alt=""></span>
        </div>
        <router-link to="/" tag="a" class="sub-title">
            <span class="tips-red"></span><b>PI3K-AKT-mTOR Signaling Pathway</b>
            <Icon type="ios-arrow-forward" />
        </router-link>
        <div class="path-img-box margin0">
            <span class="img-box"><img src="/static/img/img.png" alt=""></span>
        </div>

        <div class="btn-box">
            <button class="btn btn-blue"><Icon type="md-add" />查看更多</button>
        </div>
    </section>
  </div>
  <footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'home',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* 邮箱 电话 */
.link {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
  height: 3.78rem;
  background: #fff;
  line-height: 3.78rem;
  font-size: 1.33rem;
  white-space: nowrap;
}
.link .img-box {
  position: relative;
  top: .35rem;
}
.link .email { color: #666; }
.link .tel { color: #eb6132; }
/* banner */
.banner{
  height: 18.2rem;
  overflow: hidden;
}
.banner img{
    margin: 2% 0;
    width: 100%;
    height: 93%;
}
/* 登录 注册 */
.white-bg { margin-bottom: 1rem;  }
.btn-red { margin-right: 1rem; }
/* section   信号通路*/
.signal-path {
  background: #fff; 
}
.signal-path header {
  font-size: 1.67rem;
  height: 4.06rem;
  line-height: 4.06rem;
}
.signal-path a {
  display: block;
  height: 4rem;
  padding-top: .8rem;
  border-top: .08rem solid #e0e0e0;
}
.signal-path a b {
  position: relative;
  top: .3rem;
  display: inline-block;
  width: 91%;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.signal-path .path-img-box {
  border: .05rem solid #e0e0e0;
  height: 18.44rem;
  width: 100%;
  border-radius: .6rem;
  margin-bottom: 1.67rem;
  text-align: center;
  line-height: 18.44rem;
}
.path-img-box .img-box {
  -webkit-box-sizing: border-box; /* Safari */
  -moz-box-sizing: border-box; /* Firefox */
  box-sizing: border-box;
  padding: .05rem;
  height: 100%;
  width: 100%;
}
/* 查看更多 */
.btn-blue i { color:#fff; }

</style>
