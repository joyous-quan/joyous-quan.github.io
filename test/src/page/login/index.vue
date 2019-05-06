<template>
<div class="layout">
    <header>
        <a href="JavaScript:history.go(-1)" class="back-icon">
            <i class="iconfont icon-fanhui"></i>
        </a>
        <div class="logo-box">
        	<router-link to="/" tag="a" class="img-box logo">
                <img src="/static/img/logo.png">
            </router-link>
        </div>
    </header>
    <section class="login-register-con">
        <div class="input-box">
            <input type="text" class="ipt" placeholder="邮箱">
            <input type="password" class="ipt" placeholder="密码">
            <p class="code-box">
                <input type="text" class="ipt" placeholder="验证码">
                <span class="code">a<i>G</i>c<i>d</i></span>
            </p>
        </div>
        <p class="forgot">
            <router-link tag="a" to="/login/forgot">忘记密码？</router-link>
        </p>
        <div class="btn-box">
            <button class="btn btn-red">登录</button>
        </div>
        <router-link to="/register" tag="div">    
            <button class="btn btn-line register-btn" >注册</button>
        </router-link>
    </section>
</div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            
        }
    } 
}
</script>
<style scoped>
.layout { 
	position:fixed;
	top:0; left:0;
	height:100%;width:100%;
	background: #fff;
	box-sizing: border-box;
}
.back-icon {
	display: inline-block;
	width: 1.75rem;
	height: 1.75rem;
	margin-top: 2rem;
}
.back-icon i {
	font-size: 1.8rem;
	color: #c6c6c6;
}
.logo-box { text-align: center; }
.logo { height: 2.8rem; }
.login-register-con{ padding: 4%; }
.input-box input {
	height: 3.8rem;
	width: 100%;
	margin: .5rem 0;
	text-indent: .8rem;
	font-size: 1rem;
	color: #555;
	border-radius: .1rem;
	background: #f3f3f3;
	border: .08rem solid #f3f3f3;
	resize:none; 
	-webkit-appearance:none;  /*清除浏览器默认的样式 */
	line-height: normal;   /* 光标问题  */
}
/* 搜索提示 placeholder */
.input-box input::-webkit-input-placeholder{ 
  	color: #c0c0c0; /* WebKit browsers */
} 
.input-box input:-moz-placeholder{ 
	color: #c0c0c0; /* Mozilla Firefox 4 to 18 */
} 
.input-box input::-moz-placeholder{ 
  	color: #c0c0c0; /* Mozilla Firefox 19+ */
} 
.input-box input:-ms-input-placeholder{ 
 	color: #c0c0c0; /* Internet Explorer 10+ */ 
}
.code-box { position: relative; }
.code {
	position: absolute;
	right: .45rem;
	top: 1.05rem;
	height: 2.8rem;
	width: 5.56rem;
	background: #48bbfd;
	line-height: 2.8rem;
	text-align: center;
	font-size: 1.5rem;
	color: #fff;
	letter-spacing: .3rem;
}
.forgot {
	text-align: right;
	height: 3rem;
	padding-top: 1rem;
}
.forgot a {
	font-size: 1rem;
	color: #666;
}

.con-txt {
	padding-bottom: 4%;
	text-align: justify;
	font-size: 1.1rem;
	line-height: 1.8rem;
	color: #666;
}
.con-txt a {
	color: #2180be;
}
	
</style>
