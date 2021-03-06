import { setPublicPath } from 'systemjs-webpack-interop';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

setPublicPath('main')

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
  console.log(props)
  appOptions.store = props.store
  return vueLifecycles.bootstrap(props);
}

export function mount(props) {
  return vueLifecycles.mount(props);
}

export function unmount(props) {
  return vueLifecycles.unmount(props);
}
