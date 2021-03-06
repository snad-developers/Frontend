import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue';
import forgotpassword from '../components/forgotpassword.vue';
import securityquestions from '../components/securityquestions.vue';
import resetpassword from '../components/resetpassword.vue';
import registrationPage from '../components/registrationPage .vue';
import Ldbpage from '../components/Ldbpage.vue';
import payrollaccessdata from '../components/payrollaccessdata.vue';
import reportpage from '../components/reportpage.vue';
import activeemplydata from '../components/activeemplydata.vue';
import amdpage from '../components/amdpage.vue';
import employeedata from '../components/employeedata.vue';
import orgndata from '../components/orgndata.vue';
import launchpage from '../components/launchpage.vue';
import About from '../components/About.vue';
import HomePage from '../components/HomePage.vue';
import penReq from '../components/penReq.vue';
import viewDetails from '../components/viewDetails';
import updateData from '../components/updateData';
import RegistrationOne from '../components/RegistrationOne.vue';
import RegistrationTwo from '../components/RegistrationTwo.vue';
import RegistrationThree from '../components/RegistrationThree.vue';
import receiVables from '../components/receiVables.vue'
import managmentexpenses from '../components/managmentexpenses.vue'
import employeexpensedata from '../components/employeexpensedata.vue'
import operationalCost from '../components/operationalCost.vue';
import PersonalData from '../components/PersonalData.vue';
import jobupdate from '../components/jobupdate.vue';
import compensationupdate from '../components/compensationupdate.vue';
import EducationUpdate from '../components/EducationUpdate.vue';
import empExpdetails from '../components/empExpdetails.vue';
import NewInvoices from '../components/NewInvoices.vue';


import newEmp from '../components/newEmp.vue';
import JobTab from'../components/JobTab.vue';
import VisaUpdate from'../components/VisaUpdate.vue';
import TabsView from'../components/TabsView.vue';


function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
console.log(localStorage.getItem('currentUser'))
if(localStorage.getItem('currentUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/managmentexpenses',
    name: 'managmentexpenses',
    component: managmentexpenses,
    beforeEnter : guardMyroute,
    meta: {title: 'managmentexpenses'}
  },
  {
    path: '/employeexpensedata',
    name: 'employeexpensedata',
    component: employeexpensedata,
    beforeEnter : guardMyroute,
    meta: {title: 'employeexpensedata'}
  },
  {
    path: '/payrollaccessdata',
    name: 'payrollaccessdata',
    component: payrollaccessdata,
    beforeEnter : guardMyroute,
    meta: {title: 'payrollaccessdata'}
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
    path: '/EducationUpdate',
    name: 'EducationUpdate',
    component: EducationUpdate
  },
  {
    path: '/jobupdate',
    name: 'jobupdate',
    component: jobupdate
  },
  {
    path: '/VisaUpdate',
    name: 'VisaUpdate',
    component: VisaUpdate
  },
  {
    path: '/compensationupdate',
    name: 'compensationupdate',
    component: compensationupdate
  },
  {
    path: '/NewInvoices',
    name: 'NewInvoices',
    component: NewInvoices,
    beforeEnter : guardMyroute,
    meta: {title: 'NewInvoices'}
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
    path: '/PersonalData',
    name: 'PersonalData',
    component: PersonalData
  },
  
  {
    path: '/Ldbpage',
    name: 'Ldbpage',
    component: Ldbpage,
    beforeEnter : guardMyroute,
    meta: {title: 'Ldbpage'}
  },
  {
    path: '/newEmp',
    name: 'newEmp',
    component: newEmp,
    beforeEnter : guardMyroute,
    meta: {title: 'newEmp'}
  },
  {
    path: '/PersonalData',
    name: 'PersonalData',
    component: PersonalData,
    beforeEnter : guardMyroute,
    meta: {title: 'PersonalData'} 
  },
  {
    path: '/JobTab',
    name: 'JobTab',
    component: JobTab,
    // beforeEnter : guardMyroute,
    // meta: {title: 'PersonalData'} 
  },
  {
    path: '/jobupdate',
    name: 'jobupdate',
    component: jobupdate
    
  },
  {
    path: '/TabsView',
    name: 'TabsView',
    component: TabsView
    
  },
     {
     path: '/VisaUpdate',
       name: 'VisaUpdate',
      component: VisaUpdate
      
     },
  {
    path: '/compensationupdate',
    name: 'compensationupdate',
    component: compensationupdate
    
  },
  {
    path: '/EducationUpdate',
    name: 'EducationUpdate',
    component: EducationUpdate
    
  },
 
  {
    path: '/reportpage',
    name: 'reportpage',
    component: reportpage,
    beforeEnter : guardMyroute,
    meta: {title: 'reportpage'}
  },
  {
    path: '/activeemplydata',
    name: 'activeemplydata',
    component: activeemplydata,
    beforeEnter : guardMyroute,
    meta: {title: 'activeemplydata'}
  },
  {
    path: '/amdpage',
    name: 'amdpage',
    component: amdpage,
    beforeEnter : guardMyroute,
    meta: {title: 'amdpage'}
  },
  {
    path: '/employeedata',
    name: 'employeedata',
    component: employeedata,
    beforeEnter : guardMyroute,
    meta: {title: 'employeedata'}
    
  },
  {
    path: '/empExpdetails',
    name: 'empExpdetails',
    component: empExpdetails,
    beforeEnter : guardMyroute,
    meta: {title: 'empExpdetails'}
    
  },
  {
    path: '/launchpage',
    name: 'launchpage',
    component: launchpage,
    beforeEnter : guardMyroute,
    meta: {title: 'launchpage'}
  },
  {
    path: '/orgndata',
    name: 'orgndata',
    component: orgndata,
    beforeEnter : guardMyroute,
    meta: {title: 'orgndata'}
  },
  {
    path: '/About',
    name: 'About',
    component: About
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
    path: '/RegistrationTwo',
    name: 'RegistrationTwo',
    component: RegistrationTwo
  },
  {
    path: '/RegistrationThree',
    name: 'RegistrationThree',
    component: RegistrationThree
  },
  {
    path: '/RegistrationOne',
    name: 'RegistrationOne',
    component: RegistrationOne
  },
  {
    path: '/penReq',
    name: 'penReq',
    component: penReq,
    beforeEnter : guardMyroute,
    meta: {title: 'penReq'}
  },

  {
    path: '/viewDetails',
    name: 'viewDetails',
    component: viewDetails,
    beforeEnter : guardMyroute,
    meta: {title: 'viewDetails'}
  },

  {
    path: '/updateData',
    name: 'updateData',
    component: updateData,
    beforeEnter : guardMyroute,
    meta: {title: 'updateData'}
  },
 
  {
    path: '/receiVables',
    name: 'receiVables',
    component: receiVables,
    beforeEnter : guardMyroute,
    meta: {title: 'receiVables'}
  },

  {
    path: '/operationalCost',
    name: 'operationalCost',
    component: operationalCost,
    beforeEnter : guardMyroute,
    meta: {title: 'operationalCost'}
  },



 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default  router
