import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import Vuetify from 'vuetify';
import VueFroala from 'vue-froala-wysiwyg'
import VuePageTransition from 'vue-page-transition'
import VueExpandableImage from 'vue-expandable-image'
import '~/plugins'
import '~/components'
require('froala-editor/js/froala_editor.pkgd.min.js')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')
require('froala-editor/js/plugins.pkgd.min')
require('froala-editor/js/languages/ru')


// Import and use Vue Froala lib.
Vue.use(VuePageTransition)
Vue.use(VueFroala)
Vue.use(Vuetify);
Vue.config.productionTip = false
Vue.use(VueExpandableImage)
// window.base_url = 'http://localhost:8000/'
window.BASE_URL = 'https://jsonplaceholder.typicode.com/'
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  vuetify: new Vuetify(),
  ...App
})
