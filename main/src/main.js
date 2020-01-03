// import './set-public-path'
import Vue from 'vue';
import Vuex from 'vuex';
// import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import store from './store';

Vue.use(Vuex);
// Vue.use(VueRouter);
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
    store
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
