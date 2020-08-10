import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'

// 解决移动端1像素边框问题
import './assets/border.css'

// 解决移动端300毫秒点击延迟的问题
import fastClick from 'fastclick'

Vue.config.productionTip = false;

// 绑定fastclick
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
