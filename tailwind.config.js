module.exports = {
  content: [
    // './assets/**/*.js',
    // './templates/**/*.html.twig',
    // "./vue/**/*.js",
    // "./vue/**/*.css",
    // "./vue/**/*.scss",
    './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    './node_modules/@vueform/builder/**/*.js',
    './node_modules/@vueform/builder/**/*.css'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    require('@vueform/vueform/tailwind'),
    require('@vueform/builder/tailwind')
  ]
};
