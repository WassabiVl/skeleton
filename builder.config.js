import custom from './simlpe.builder.config';
import { defineConfig } from '@vueform/builder';

export default defineConfig({
  categories: [
    {
      label: 'Fields',
      key: 'fields'
    },
    {
      label: 'Static',
      key: 'static'
    },
    {
      label: 'Structure',
      key: 'structure'
    },
    {
      label: 'Custom',
      key: 'custom'
    }
  ],
  element: {
    types: {
      custom
      // ...
    }
  }
});
