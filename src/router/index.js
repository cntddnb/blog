import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "blog" */ '../views/AddBlog.vue')
  },
  {
    path: '/blog/:id',
    name: 'Single',
    component: () => import(/* webpackChunkName: "blog" */ '../views/SingleBlog.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "blog" */ '../views/EditBlog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
