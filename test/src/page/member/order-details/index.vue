<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">订单详情</span>
</header>
<section>
    <dl class="com-card order-detial-status">
        <dt class="float-L">
            <a href="javascript:;" class="img-box small-icon">
                <img src="/static/img/member/time.png" alt="">
            </a>
            <span>您的订单正在处理...</span>
        </dt>
        <dt class="float-R">
            <span>订单状态：</span>已支付
        </dt>
    </dl>
    <ul class="com-card order-card">
        <li>
            <p><span>订单编号</span>25212522133</p>
            <p><span class="width6">客户订单号</span>856623212</p>
        </li>
        <li>
            <span>下单时间</span>2018-09-01 11:10:56
        </li>
        <li>
            <span>付款</span>2018-09-01 11:11:56
        </li>
        <li>
            <span>到货时间</span>2018-09-03 11:10:56
        </li>
    </ul>
    <dl class="com-card trace-msg">
        <dd class="trace-msg-title">跟踪信息</dd>
        <dd>
            <p class="float-L">
                送货地址
            </p>
            <div class="float-L">
                陈小小 15000113269 <br>
                上海 上海市 浦东新区 惠南镇陶桥路488号5幢，201203
            </div>
        </dd>
        <dd>
            <p class="float-L">
                运输方式
            </p>
            <div class="float-L">
                顺丰快递
            </div>
        </dd>
        <dd>
            <p class="float-L">
                物流公司
            </p>
            <div class="float-L">
                UPS xxxxxxxxxxxxxxxxxxxxxx
            </div>
        </dd>
    </dl>
    <div class="com-card product-list">
        <table>
            <thead>
                <tr>
                    <td colspan="2">产品清单</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2">
                        <p>
                            <i>CSN20045</i>
                            <i>1222490-34-7</i>
                            <i>1mg</i>
                        </p>
                        <p>
                            <a href="" class="product-name">1-Isopropyl-5-(4,4,5,5-tetramethyl-1,3,2-dioxaborolan-2-yl)-1H-pyrazole</a>
                        </p>
                        <p>
                            <span class="price">RNB <b>336</b></span>
                            <i class="count">1</i>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>
                            <i>CSN20045</i>
                            <i>1222490-34-7</i>
                            <i>1mg</i>
                        </p>
                        <p>
                            <a href="" class="product-name">1-Isopropyl-5-(4,4,5,5-tetramethyl-1,3,2-dioxaborolan-2-yl)-1H-pyrazole</a>
                        </p>
                        <p>
                            <span class="price">RNB <b>336</b></span>
                            <i class="count">1</i>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>
                            <i>CSN20045</i>
                            <i>1222490-34-7</i>
                            <i>1mg</i>
                        </p>
                        <p>
                            <a href="" class="product-name">1-Isopropyl-5-(4,4,5,5-tetramethyl-1,3,2-dioxaborolan-2-yl)-1H-pyrazole</a>
                        </p>
                        <p>
                            <span class="price">RNB <b>336</b></span>
                            <i class="count">1</i>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="color555">
                        小计 ( 4项 ) : <span>RMB1680.00</span>
                    </td>
                    <td class="color555">
                        运费 : <span>RMB45.00</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="total">
                        合计 : <span>RMB1725.00</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <dl class="com-card addr-msg">
        <dt>账单地址</dt>
        <dd>
            <span>陈小小</span> 15000113269 <br>
            上海 上海市 浦东新区 惠南镇陶桥路488号5幢，201203惠南镇陶桥路488号5幢，201203
        </dd>
        <dt>送货地址</dt>
        <dd>
            <span>陈小小</span> 15000113269 <br>
            上海 上海市 浦东新区 惠南镇陶桥路488号5幢，201203
        </dd>
    </dl>
</section>

</div>
</template>
<script>
export default {
    name: 'myOrder',
    data () {
        return { 
        	
        }
    }
}
</script>
<style scoped>
.order-detial-status{
	height: 3.75rem;
	line-height: 3.75rem;
	overflow: hidden;
}
.trace-msg dd,.addr-msg dd {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	overflow: hidden;
	min-height: 3.75rem; 
	padding: .8rem 0;
	border-bottom: .08rem solid #f3f3f3;
}
.trace-msg-title {
	height: 5.33rem;
	line-height: 3.75rem;
}
.trace-msg .float-L {
	line-height: 1.6rem; 
}
.trace-msg  p.float-L { 
	padding-right: 1rem;
	font-size: .9rem;
	color: #555;
}
.trace-msg  div.float-L {
	max-width: 84%;
}
.product-list thead td {
	line-height: 3.75rem;
}
.product-list td {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	height: 3.75rem;
	padding: .8rem 0;
	border-bottom: .08rem solid #f3f3f3;
}
.product-list td p{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: space-between;
	padding-top: .8rem;
}
.product-list td .product-name {
	font-size: 1.33rem;
}
.product-list p i {
	font-style:normal;
}
.count {
	min-width: 2.2rem;
	text-align: center; 
}
.product-list .price b {
	color: #000;
	font-size: 1.33rem;
}
.product-list .color555 {
	color:#555;
}
.product-list td.total,.product-list td.total span {
	color: #000;
	font-size: 1.33rem;
}
/*地址信息*/
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
