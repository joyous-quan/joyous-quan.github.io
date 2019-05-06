<template>
<div> 	
  <header-t></header-t>
	<div style="margin-bottom: .56rem">
    <!-- 主体 -->
        <nav class="layout">
            <div class="breadcrumb">
                <a href="/">首页</a><span> /</span>
                <a href="javascript:;" class="current">我的购物车</a>
            </div>
        </nav> 
        <div class="layout page-title">
            我的购物车
        </div>
		<mt-cell-swipe class="swiper-left"
			:right="[{
			    content: `<span class='spanT'>加入<br>收藏</span>`,
			    style: { background: '#f3f3f3', color: '#222' },
			    handler: () => this.$messagebox('delete')
			},{
			    content: `<span class='spanB'>删除</span>`,
			    style: { background: 'red', color: '#fff' },
			    handler: () => this.$messagebox('delete')
			}]">
		  	<table class="swiper-table">
                <colgroup>
                    <col width="40%">
                    <col width="30%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td>CSN13849</td>
                        <td>1062368-62-0</td>
                        <td align="right">1mg</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="products-name">
                            <a href="javascript:;">Pyrrolobenzodiazepine Dimer Pyrrolobenzodiazepine Dimer</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="price">
                            RMB <b>336.00</b>
                        </td>
                        <td>
                           <div class="number">
                                <span class="minus">-</span>
                                <input type="number" value="1" min="1">
                                <span class="add">+</span>
                           </div>
                        </td>
                    </tr>
                </tbody>
            </table>
		</mt-cell-swipe>
        <mt-cell-swipe class="swiper-left"
            :right="[{
                content: `<span class='spanT'>加入<br>收藏</span>`,
                style: { background: '#f3f3f3', color: '#222' },
                handler: () => this.$messagebox('delete')
            },{
                content: `<span class='spanB'>删除</span>`,
                style: { background: 'red', color: '#fff' },
                handler: () => this.$messagebox('delete')
            }]">
            <table class="swiper-table">
                <colgroup>
                    <col width="40%">
                    <col width="30%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td>CSN13849</td>
                        <td>1062368-62-0</td>
                        <td align="right">1mg</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="products-name">
                            <a href="javascript:;">Pyrrolobenzodiazepine Dimer Pyrrolobenzodiazepine Dimer</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="price">RMB <b>336.00</b></td>
                        <td>
                           <div class="number">
                                <span class="minus">-</span>
                                <input type="number" value="1" min="1">
                                <span class="add">+</span>
                           </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </mt-cell-swipe>
        <mt-cell-swipe class="swiper-left"
            :right="[{
                content: `<span class='spanT'>加入<br>收藏</span>`,
                style: { background: '#f3f3f3', color: '#222' },
                handler: () => this.$messagebox('delete')
            },{
                content: `<span class='spanB'>删除</span>`,
                style: { background: 'red', color: '#fff' },
                handler: () => this.$messagebox('delete')
            }]">
            <table class="swiper-table">
                <colgroup>
                    <col width="40%">
                    <col width="30%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td>CSN13849</td>
                        <td>1062368-62-0</td>
                        <td align="right">1mg</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="products-name">
                            <a href="javascript:;">Pyrrolobenzodiazepine Dimer Pyrrolobenzodiazepine Dimer</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="price">RMB <b>336.00</b></td>
                        <td>
                           <div class="number">
                                <span class="minus">-</span>
                                <input type="number" value="1" min="1">
                                <span class="add">+</span>
                           </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </mt-cell-swipe>
        <footer class="settlement-con">
            <ul>
                <li class="border-B">小计(4项)：RMB1344.00</li>
                <li class="border-B">运费：RMB149.00</li>
                <li class="total">合计：RMB1493.00</li>
                <li><button type="submit" class="btn btn-red">结算</button></li>
            </ul>
        </footer>
	</div>
  <footer-b></footer-b>
</div>
</template>
<script>
import headerT from '@/components/header/header'
import footerB from '@/components/footer/footer'
export default {
    name: 'cart',
    data () {
        return { }
    },
    components: {
        headerT,footerB
    } 
}
</script>
<style scoped>
.swiper-left { margin-top:0; }
.swipe-table td {
    font-size: 1.11rem;
}
.swiper-table tr:last-child td {
    border-color: #ddd;
}
.price {
    color: #eb6132;
}
.number {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    float: right;
    font-size: 1.5rem;
}
.number input {
    border: none;
    background: #f3f3f3;
    height: 1.5rem;
    width: 2.5rem;
    text-align: center;
    font-size: 1.11rem;
}
.number span {
    padding: 0 .5rem;
    line-height: 1.5rem;
    font-size: 1.2rem;
}
.number .minus {
    transform: scaleX(1.2);
}
.settlement-con {
    background: #fff;
}
.settlement-con ul {
    height: 9.83rem;
    padding:0 5%;
}
.settlement-con ul li {
    width: 50%;
    float: left;
    height: 4.56rem;
    line-height: 4.56rem;
    font-size: 1.22rem
}
.settlement-con ul li.total {
    font-size: 1.33rem;
}
.settlement-con .btn {
    margin-top: .56rem;
}
</style>
