import custom from './simlpe.builder.config';

export default {
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
};
