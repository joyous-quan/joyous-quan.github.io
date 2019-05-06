<template>
<div>
  	<header class="layout title-con">
	    <a href="JavaScript:history.go(-1)" class="back-icon">
	        <i class="iconfont icon-fanhui"></i>
	    </a>
	    <span class="title-txt">我的收藏</span>
	</header>
	<div>
	<!-- 主体 -->
		<mt-cell-swipe class="swiper-left"
			:right="[{
			    content: `<span class='spanT'>产品<br>置顶</span>`,
			    style: { background: '#f3f3f3', color: '#222' }
			},{
			    content: `<span class='spanT'>取消<br>收藏</span>`,
			    style: { background: 'red', color: '#fff' },
			    handler: () => this.$messagebox('delete')
			}]">
		  	<table>
                <colgroup>
                    <col width="15%">
                    <col>
                    <col width="13%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><span>产品编号</span></td>
                        <td>CSN13849</td>
                        <td><span>CAS号</span></td>
                        <td>1062368-62-0</td>
                    </tr>
                    <tr>
                        <td><span>产品名</span></td>
                        <td colspan="3">
                            <a href="javascript:;" class="product-red-name">(R)-(+)-2-Methyl-2-propanesulfinamide</a>
                        </td>
                    </tr>
                    <tr>
                        <td><span>描述</span></td>
                        <td colspan="3">
                            <p class="description">LDN-193189 hydrochloride is a selective BMP signaling inhibitor,LDN-193189 hydrochloride is a selective BMP signaling inhibitor
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
		</mt-cell-swipe>
		<mt-cell-swipe class="swiper-left"
			:right="[{
			    content: `<span class='spanT'>产品<br>置顶</span>`,
			    style: { background: '#f3f3f3', color: '#222' }
			},{
			    content: `<span class='spanT'>取消<br>收藏</span>`,
			    style: { background: 'red', color: '#fff' },
			    handler: () => this.$messagebox('delete')
			}]">
		  	<table>
                <colgroup>
                    <col width="15%">
                    <col>
                    <col width="13%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><span>产品编号</span></td>
                        <td>CSN13849</td>
                        <td><span>CAS号</span></td>
                        <td>1062368-62-0</td>
                    </tr>
                    <tr>
                        <td><span>产品名</span></td>
                        <td colspan="3">
                            <a href="javascript:;" class="product-red-name">(R)-(+)-2-Methyl</a>
                        </td>
                    </tr>
                    <tr>
                        <td><span>描述</span></td>
                        <td colspan="3">
                            <p class="description">LDN-193189 hydrochloride is a selective BMP signaling inhibitor,LDN-193189 hydrochloride is a selective BMP signaling inhibitor
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </mt-cell-swipe>
		<mt-cell-swipe class="swiper-left"
			:right="[{
			    content: `<span class='spanT'>产品<br>置顶</span>`,
			    style: { background: '#f3f3f3', color: '#222' },
			    handler: () => this.$messagebox('delete')
			},{
			    content: `<span class='spanT'>取消<br>收藏</span>`,
			    style: { background: 'red', color: '#fff' },
			    handler: () => this.$messagebox('delete')
			}]">
		  	<table>
                <colgroup>
                    <col width="15%">
                    <col>
                    <col width="13%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><span>产品编号</span></td>
                        <td>CSN13849</td>
                        <td><span>CAS号</span></td>
                        <td>1062368-62-0</td>
                    </tr>
                    <tr>
                        <td><span>产品名</span></td>
                        <td colspan="3">
                            <a href="javascript:;" class="product-red-name">1-Methyl-3-1-Methyl-3-(4,4,5,5-tetramethyl-1,3,2-dioxaborolan-2-yl)-1H-pyrazole</a>
                        </td>
                    </tr>
                    <tr>
                        <td><span>描述</span></td>
                        <td colspan="3">
                            <p class="description">LDN-193189 hydrochloride is a selective BMP signaling inhibitor,LDN-193189 hydrochloride is a selective BMP signaling inhibitor
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
		</mt-cell-swipe>
		<mt-cell-swipe class="swiper-left"
			:right="[{
			    content: `<span class='spanT'>产品<br>置顶</span>`,
			    style: { background: '#f3f3f3', color: '#222' },
			    handler: () => this.$messagebox('delete')
			},{
			    content: `<span class='spanT'>取消<br>收藏</span>`,
			    style: { background: 'red', color: '#fff' },
			    handler: () => this.$messagebox('delete')
			}]">
		  	<table>
                <colgroup>
                    <col width="15%">
                    <col>
                    <col width="13%">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><span>产品编号</span></td>
                        <td>CSN13849</td>
                        <td><span>CAS号</span></td>
                        <td>1062368-62-0</td>
                    </tr>
                    <tr>
                        <td><span>产品名</span></td>
                        <td colspan="3">
                            <a href="javascript:;" class="product-red-name">(R)-(+)-2-Methyl-2-propanesulfinamide</a>
                        </td>
                    </tr>
                    <tr>
                        <td><span>描述</span></td>
                        <td colspan="3">
                            <p class="description">LDN-193189 hydrochloride is a selective BMP signaling inhibitor,LDN-193189 hydrochloride is a selective BMP signaling inhibitor
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
		</mt-cell-swipe>
	</div>
</div>
</template>
<script>
export default {
    name: 'myFavorite',
    data () {
        return { }
    } 
}
</script>
<style scoped>
</style>
