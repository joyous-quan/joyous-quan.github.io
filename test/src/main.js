// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import '../config/rem'
//import '../static/js/jquery.min.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../style/style.css'
import '../static/iconfont/iconfont.css'
//import { InfiniteScroll } from 'mint-ui'



Vue.use(iView)
Vue.use(Mint)

//Vue.use(InfiniteScroll);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
