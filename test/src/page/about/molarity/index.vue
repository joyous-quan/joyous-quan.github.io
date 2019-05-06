<template>
<div>
  <header-t></header-t>
    <!-- 主体 -->
	<nav class="layout">
	    <div class="breadcrumb">
	        <a href="/index.html">首页</a><span> /</span>
	        <a href="" class="current">摩尔浓度计算器</a>
	    </div>
	</nav>
	<div class="about-common molarity-con">
	    <section>
	        <header class="margin-B">摩尔浓度计算器</header>
	        <ul class="molarity">
	            <li>
	                计算溶液所需的质量、体积或浓度。Csnpharm物质量浓度计算器基于以下公式:
	            </li>
	            <li class="margin-top">
	                浓度 (mol/L) × 体积 (L) × 分子量 (g/mol)=质量 (g)
	            </li>
	            <li>
	                <p>
	                    <span>质量</span>
	                </p>
	                <div class="ipt-kuang">
	                    <i class="iconfont icon-sanjiao_down_s"> </i>
	                    <input type="text" class="ipt">
	                    <select id="concUnits" name="concUnits">
	                        <option value="">fM</option> 
	                        <option value="">pM</option> 
	                        <option value="">nM</option> 
	                        <option value="">μM</option> 
	                        <option selected="" value="">mM</option> 
	                        <option value="">M</option>
	                    </select>
	                </div>
	                <p>
	                    <span class="molarity-txt">浓度</span>
	                    <i class="iconfont icon-cha"></i>
	                </p>
	                <div class="ipt-kuang">
	                    <i class="iconfont icon-sanjiao_down_s"> </i>
	                    <input type="text" class="ipt">
	                    <select id="volUnits" name="volUnits">
	                        <option value="">nL</option> 
	                        <option value="">μL</option> 
	                        <option selected="" value="">mL</option> 
	                        <option value="">L</option>
	                    </select>
	                </div>
	                <p>
	                    <span class="molarity-txt">体积</span>
	                    <i class="iconfont icon-cha"></i>
	                </p>
	                <div class="ipt-kuang">
	                    <i class="iconfont icon-sanjiao_down_s"> </i>
	                    <input type="text" class="ipt">
	                    <select id="massUnits" name="massUnits">
	                        <option value="">pg</option> 
	                        <option value="">ng</option> 
	                        <option value="">μg</option> 
	                        <option selected="" value="">mg</option> 
	                        <option value="">g</option> 
	                        <option value="">kg</option>
	                    </select>
	                </div>
	                <p>
	                    <span class="molarity-txt">分子量</span>
	                    <i class="iconfont icon-shuzhibiaochi"></i>
	                </p>
	                <input type="text" readonly>
	                <br>
	                    *在准备库存解决方案时，请始终使用所发现的产物的分子量通过标签和MSDS / COA(可在产品页面上获得)。
	                <button class="btn btn-blue margin-B">计算</button>
	            </li>
	        </ul>
	    </section>
	</div>
	<footer-b></footer-b>
</div>
</template>

<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'

export default {
    name: 'molarity',
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
.molarity p {
	margin: .56rem 0;
}
.molarity .margin-top {
	margin-top: .8rem;
}
.molarity .iconfont {
	color: #b6b6b6;
}
.molarity .ipt-kuang .iconfont {
	position: absolute;
}
.molarity p .molarity-txt {
	display: inline-block;
	width: 45%;
}
.molarity .ipt-kuang {
    background: #f3f3f3;
	height: 4rem;
	line-height: 4rem;
	position: relative;
	text-align: right;
}
.ipt-kuang i {
	font-size: 2rem;
	color: #555555;
	position: absolute;
	right: 3.8rem;
}
.molarity input {
	width: 100%;
	height: 4rem;
	background: none;
	-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #f3f3f3;
    background: #f3f3f3;
    padding: 0 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    border-radius: 0;
}
.ipt-kuang select {
	position: absolute;
	right: 0;
	top: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding-left: 2.4rem;
	z-index: 9;
	height: 100%;
	width: 20%;
	background: none;
	outline: none;
	border: none;
}
.molarity .btn {
	margin-top: .5rem;
}
</style>