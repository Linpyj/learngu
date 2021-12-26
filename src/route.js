import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Hey from "./components/Hey.vue"
// import Page_2 from "./components/Page_2.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/hey', component: Hey },
    // { path: '/page2', component: Page_2 }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router