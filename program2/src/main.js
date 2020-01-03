import { setPublicPath } from 'systemjs-webpack-interop';
import Vue from 'vue';
import VueX from 'vuex';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

setPublicPath('program2')
Vue.use(VueX);
Vue.config.productionTip = false;

let appOptions = {
  render: (h) => h(App),
  router
}
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions
});

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;

export function bootstrap(props) {
  // console.log(props.store)
  // appOptions.store = new VueX.Store(props.store);
  appOptions.store = props.store
  return vueLifecycles.bootstrap(props);
}

export function mount(props) {
  return vueLifecycles.mount(props);
}

export function unmount(props) {
  return vueLifecycles.unmount(props);
}
