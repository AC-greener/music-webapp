import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

fastclick.attch(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})