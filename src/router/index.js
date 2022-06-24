import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue';
import forgotpassword from '../components/forgotpassword.vue';
import securityquestions from '../components/securityquestions.vue';
import resetpassword from '../components/resetpassword.vue';
import registrationPage from '../components/registrationPage .vue';
import dashpage from '../components/dashpage.vue';
import Ldbpage from '../components/Ldbpage.vue';
import padpage from '../components/padpage.vue';
import reportpage from '../components/reportpage.vue';
import activeemplydata from '../components/activeemplydata.vue';
import amdpage from '../components/amdpage.vue';
import employeedata from '../components/employeedata.vue';
import orgndata from '../components/orgndata.vue';
import launchpage from '../components/launchpage.vue';
import About from '../components/About.vue';
import securityquestions1 from '../components/securityquestions1.vue';
import HomePage from '../components/HomePage.vue';
import penReq from '../components/penReq.vue';
import viewDetails from '../components/viewDetails';

import registrationpage2 from '../components/registrationpage2.vue';
import registrationpage3 from '../components/registrationpage3.vue';
import registrationPage1 from '../components/registrationPage1.vue';
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: forgotpassword
  },
  {
    path: '/securityquestions/:id',
    name: 'securityquestions',
    component: securityquestions
  },
  
  
  {
    path: '/resetpassword/:id',
    name: 'resetpassword',
    component: resetpassword
  },
  {
    path: '/registrationPage',
    name: 'registrationPage',
    component: registrationPage
  },
  {
    path: '/dashpage',
    name: 'dashpage',
    component: dashpage
  },
  {
    path: '/Ldbpage',
    name: 'Ldbpage',
    component: Ldbpage
  },
  {
    path: '/padpage',
    name: 'padpage',
    component: padpage
  },
  {
    path: '/reportpage',
    name: 'reportpage',
    component: reportpage
  },
  {
    path: '/activeemplydata',
    name: 'activeemplydata',
    component: activeemplydata
  },
  {
    path: '/amdpage',
    name: 'amdpage',
    component: amdpage
  },
  {
    path: '/employeedata',
    name: 'employeedata',
    component: employeedata
  },
  {
    path: '/launchpage',
    name: 'launchpage',
    component: launchpage
  },
  {
    path: '/orgndata',
    name: 'orgndata',
    component: orgndata
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/securityquestions1',
    name: 'securityquestions1',
    component: securityquestions1
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/',
    redirect:HomePage
    
  },
  

  {
    path: '/registrationpage2',
    name: 'registrationpage2',
    component: registrationpage2
  },
  {
    path: '/registrationpage3',
    name: 'registrationpage3',
    component: registrationpage3
  },
  {
    path: '/registrationpage1',
    name: 'registrationpage1',
    component: registrationPage1
  },
  {
    path: '/penReq',
    name: 'penReq',
    component: penReq
  },

  {
    path: '/viewDetails',
    name: 'viewDetails',
    component: viewDetails
  }
 
 



 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default  router
