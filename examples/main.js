import Vue from 'vue'
import App from './App.vue'
import vk4Ui from '../packages'

Vue.config.productionTip = false
Vue.use(vk4Ui)
new Vue({
  render: h => h(App),
}).$mount('#app')
