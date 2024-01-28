// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import { BootstrapVue} from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import 'firebase/firebase-firestore'
export default function (Vue, {appOptions, router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  // });
  
  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
 
  
}
const app = firebase.initializeApp({
  apiKey: "AIzaSyCIsxxubMl-gc1f-JFKWcafeQlJfHHHzos",
  authDomain: "fullfillment-project.firebaseapp.com",
  projectId: "fullfillment-project",
  storageBucket: "fullfillment-project.appspot.com",
  messagingSenderId: "79998338571",
  appId: "1:79998338571:web:d5574b992a39184024690e",
  measurementId: "G-WWS7T7W89L"
});
export const auth = app.auth();