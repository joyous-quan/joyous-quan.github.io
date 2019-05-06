<template>
<div>
	<!-- header -->
    <header class="header">
        <div class="header-top layout">
            <div class="header-left">
                <a href="javascript:;" class="img-box small-icon menu-icon" @click="seeMenu" >
                    <img src="/static/img/header/menu.png" alt="menu">
                </a>
                <a class="img-box logo" href="/">
                    <img src="/static/img/logo.png" alt="logo">
                </a>
            </div>
            <ul class="header-right">
                <li>
                    <router-link to="/login" tag="a" class="img-box small-icon">
                        <img src="/static/img/header/login.png" alt="login">
                    </router-link>
                </li>
                <li>
                    <router-link to="/member" tag="a" class="img-box small-icon">
                        <img src="/static/img/header/user.png" alt="user">
                    </router-link>
                </li>
                <li class="position-r">
                    <router-link to="/cart" tag="a" class="img-box small-icon">
                        <img src="/static/img/header/cart.png" alt="cart">
                    </router-link>
                    <span class="cart-count">3</span>
                </li>
            </ul>
        </div>
        <div class="header-search">
            <input class="ipt" type="text" placeholder="CAS号; 产品名; 产品号; Target">
            <a href="javascript:;" class="img-box small-icon">
                <img src="/static/img/header/search.png" alt="">
            </a>
        </div>
    </header>

    <!-- 侧边导航 -->
    <aside class="mask sidebar-mask" :class="{ seemenu : isseemenu }">
        <div class="del-sidebar" @click="hideMenu"></div>
        <nav class="popups sidebar">
            <nav class="menu">
                <header>信号通路</header>
                <Collapse accordion simple>
                    <Panel name="1">
                        <span class="tips-red"></span>ADCs (3)
                        <div slot="content" class="submenu">
                            <a href="/"><span class="tips-circle"></span>ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>ADC Linker<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>ADC Linker with Payload<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="2">
                        <span class="tips-red"></span>Anti-infection (20)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="3">
                        <span class="tips-red"></span>Apoptosis (15)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="4">
                        <span class="tips-red"></span>Autophagy (5)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="5">
                        <span class="tips-red"></span>Cell Cycle (35)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="6">
                        <span class="tips-red"></span>Cytoskeleton (16)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="7">
                        <span class="tips-red"></span>DNA Damage (10)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="8">
                        <span class="tips-red"></span>Endocrinology/Hormones (10)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="9">
                        <span class="tips-red"></span>Epigenetics (15)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="10">
                        <span class="tips-red"></span>GPCR/G protein (54)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="11">
                        <span class="tips-red"></span>Immunology/Inflammation (24)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="12">
                        <span class="tips-red"></span>JAK/STAT Signaling (4)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="13">
                        <span class="tips-red"></span>MAPK/ERK Pathway (10)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="14">
                        <span class="tips-red"></span>Membrane Transporter/Ion Channel (30)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="15">
                        <span class="tips-red"></span>Metabolic Enzyme (65)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="16">
                        <span class="tips-red"></span>Neuronal Signaling (30)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="17">
                        <span class="tips-red"></span>NF-kB (0)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="18">
                        <span class="tips-red"></span>PI3K/Akt/mTOR (13)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="19">
                        <span class="tips-red"></span>Protease (10)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="20">
                        <span class="tips-red"></span>Protein Tyrosine Kinase/RTK (31)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="21">
                        <span class="tips-red"></span>Stem Cells/Wnt (19)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="22">
                        <span class="tips-red"></span>Ubiquitin (6)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="23">
                        <span class="tips-red"></span>Biochemical Reagents (3)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                    <Panel name="24">
                        <span class="tips-red"></span>Others (13)
                        <div slot="content" class="submenu">
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                            <a href=""><span class="tips-circle"></span>2ADC Toxin<Icon type="ios-arrow-forward" /></a>
                        </div>
                    </Panel>
                </Collapse>
            </nav>
        </nav>
    </aside> 
</div>
</template>
<script>
export default {
    data () {
        return {
            "isseemenu" : false
        }
    },
    methods : {
        seeMenu(){
            this.isseemenu = true
        },
        hideMenu(){
            this.isseemenu = false
        }
    }
}
</script>
<style scoped>
.seemenu { left:0 }
</style>
