import Vue from 'vue'
import VueRouter from 'vue-router'
import haifen from '../views/haifen.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: haifen
}]

const router = new VueRouter({
    routes
})

export default router