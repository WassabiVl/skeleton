import en from '@vueform/vueform/locales/en';
import de from '@vueform/vueform/locales/de';
import tailwind from '@vueform/vueform/themes/tailwind';
import builder from '@vueform/builder/plugin';
import TimerElement from './vue/components/vueFormCustomElements/TimerElement';
import OneStripElement from './vue/components/vueFormCustomElements/OneStripElement.vue';
import CustomQualityElement from './vue/components/vueFormCustomElements/CustomQualityElement.vue';
import TwoStripElement from './vue/components/vueFormCustomElements/TwoStripElement.vue';
import CartridgeElement from './vue/components/vueFormCustomElements/CartridgeElement.vue';
import QuasarCalenderElement from './vue/components/vueFormCustomElements/QuasarCalenderElement.vue';
import { defineConfig } from '@vueform/vueform';

export default defineConfig({
  elements: [
    TimerElement,
    OneStripElement,
    TwoStripElement,
    CartridgeElement,
    CustomQualityElement,
    QuasarCalenderElement
  ],
  theme: tailwind,
  locales: { en, de },
  locale: 'en',
  plugins: [
    builder
  ]
});
