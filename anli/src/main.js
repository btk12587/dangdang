import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//使用element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

// 使用vue-ueditor-wrap
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('vue-ueditor-wrap', VueUeditorWrap)

//导入swiper
// import "swiper/swiper-bundle.min.css"
// import "swiper/swiper-bundle.min.js"


axios.defaults.baseURL = '/api'
Vue.use(ElementUI);
Vue.config.productionTip = false

//使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')