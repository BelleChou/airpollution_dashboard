// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
Vue.use(ElementUI) // Vue全局使用
Vue.config.productionTip = false
import '@/style/style.scss'
import echarts from 'echarts' 
Vue.prototype.$echarts = echarts //引入组件
//添加字符云，前提要有echarts
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'wKln3QG3LFd7rh6FF3zdf3tFB7aQaEgQ'
})

window.axios = require('axios');
//window.axios.defaults.baseURL= 'https://bellechou.github.io/demo/dist';
window.axios.defaults.baseURL = 'http://127.0.0.1:3000'


console.log(window.axios.defaults.baseURL);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
