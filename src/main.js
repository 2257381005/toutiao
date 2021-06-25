import Vue from 'vue'
import App from './App.vue'

// rem h5 适配
import 'amfe-flexible'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
