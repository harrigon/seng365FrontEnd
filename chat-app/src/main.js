import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';
import Users from './Users.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
Vue.use(VueResource);
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.http.options.emulateJSON = true;
//holy shit thankyou Stefan
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/users/:userId",
        name: "user",
        component: Users
    },
    {
        path: "/:projectId",
        name: "project",
        component: Home
    },
    {
        path: "/users",
        name: "users",
        component: Users
    }
];

const router = new VueRouter({
    routes:routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})




