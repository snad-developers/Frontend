// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import vuelidate from 'vuelidate'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import vuelidate from 'vuelidate'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';


//createApp(App).use(router).mount('#app')
createApp(App).use(router,VueAxios,axios,vuelidate).mount('#app')

// eslint-disable-next-line no-undef
//vue.use(vuelidate);