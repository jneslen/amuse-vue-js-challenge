import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import { LayoutPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(LayoutPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
