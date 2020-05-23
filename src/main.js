import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { VLazyImagePlugin } from 'v-lazy-image'

import App from './App.vue'
import { i18n as messages } from './i18n'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VLazyImagePlugin)

new Vue({
  i18n: new VueI18n({
    locale: window.sessionStorage.getItem('zenki-lang') || window.navigator.language.slice(0, 2),
    fallbackLocale: 'en',
    messages
  }),
  router,
  render: h => h(App)
}).$mount('#app')
