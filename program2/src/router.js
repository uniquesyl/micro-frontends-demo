import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/program2',
      name: 'home',
      component: Home
    },
    {
      path: '/program2/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   // console.log(router.app)
//   if(router.app.$options && router.app.$options.store){
//     router.app.$options.store.commit('increment')
//   }
//   next()
// })
export default router