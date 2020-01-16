import { setPublicPath } from 'systemjs-webpack-interop';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

setPublicPath('program1')

Vue.config.productionTip = false;

let appOptions = {
  render: (h) => h(App)
}
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions
});

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;

export function bootstrap(props) {
  appOptions.store = props.store
  appOptions.router = router
  return vueLifecycles.bootstrap(props);
}

export function mount(props) {
  appOptions.router = router
  return vueLifecycles.mount(props);
}

export function unmount(props) {
  return vueLifecycles.unmount(props);
}
