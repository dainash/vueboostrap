import Vue from 'vue'
import Router from 'vue-router'
import App from './layouts/main.vue'
import routes from './routes'
import store from './store'

const router = new Router({
    routes // short for routes: routes
});

Vue.use(Router);

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
