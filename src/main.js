import Vue from 'vue'
import App from './App.vue'
// import { routes } from "../src/routes/routes.js";



// Vue.use(VueRouter);
// const router = new VueRouter({
//     routes: routes,
// });

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')