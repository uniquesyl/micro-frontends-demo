// import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/program1',
      name: 'home',
      component: Home
    },
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