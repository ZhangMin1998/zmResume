import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import md5 from 'js-md5'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import 'mavon-editor/dist/css/index.css'
import animated from 'animate.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Vue.prototype.$md5 = md5
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(animated)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')