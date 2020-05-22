import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import { i18n as messages } from './i18n'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueI18n)

new Vue({
  i18n: new VueI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages
  }),
  router,
  render: h => h(App)
}).$mount('#app')
