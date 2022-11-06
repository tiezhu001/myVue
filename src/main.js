import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta' // 配置Index.html头部的插件
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
