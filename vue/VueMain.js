import './styles/vueFormStyle.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import { createPinia } from 'pinia';
import router from './routing/routing';
import i18n from './i18n';
import Vueform from '@vueform/vueform/plugin';
import vueformConfig from './../vueform.config';
import vueformBuilderConfig from './../builder.config';
import vueFormBuilder from '@vueform/builder';
import BaseTimer from './components/vueFormCustomElements/BaseTimer';

const pinia = createPinia();
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(pinia).use(router)
  .use(i18n)
  .use(Vueform, vueformConfig)
  .use(vueFormBuilder, vueformBuilderConfig)
  .component('BaseTimer', BaseTimer)
  .mount('#app');
