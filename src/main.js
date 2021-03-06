import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import "vant/lib/index.css"
import { Lazyload } from 'vant';

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Lazyload, {
    lazyComponent: true
});

Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
