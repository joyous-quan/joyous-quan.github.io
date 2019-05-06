<template>
<div class="layout">
    <header>
        <a href="JavaScript:history.go(-1)" class="back-icon">
            <i class="iconfont icon-fanhui"></i>
        </a>
        <div class="logo-box">
            <a href="/" class="img-box logo">
                <img src="/static/img/logo.png" alt="">
            </a>
        </div>
    </header>
    <section class="login-register-con">
        <div class="con-txt">
            输入您用于登录的相同电子邮件地址您在csnpharm.cn上的账户。我们会发邮件给你一个链接在那里你可以很容易地创建一个新的密码。如果您无法访问您的帐户，请随时与<a href="/about/contact">我们联系</a>。
        </div>
        <div class="input-box">
            <input type="text" name="email" placeholder="邮箱">
        </div>
        <div class="btn-box">
            <button class="btn btn-red">提交</button>
        </div>
    </section>
</div>
</template>
<script>
export default {
    name: 'forgot',
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
