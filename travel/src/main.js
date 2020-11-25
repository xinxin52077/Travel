import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'

// 解决移动端1像素边框问题
import './assets/border.css'

// 解决移动端300毫秒点击延迟的问题
import fastClick from 'fastclick'

// 引入iconfont
import './assets/iconfont.css'

// 引入轮播插件vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;

// 绑定fastclick
fastClick.attach(document.body);

// 使用轮播插件
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
