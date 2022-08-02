<template>
 <div id="App">
  <router-view />
    </div>


 
</template>


<script>
// import JobUpdate from './components/JobUpdate';
import loginapi from './services/loginapi';
export default {
  name: "App",
  
  components: {
    // JobUpdate,
    
    
     
  },


    created(){
      console.log("created")
      this.GetloginDetails();
    },
   methods: {
    GetloginDetails(){
      loginapi.loginservice("").then(response=>{
          if(response.data.status == "success" && response.data.statuscode == 200  ){
                 localStorage.setItem("currentUser",response.data.loginedIn);
                   localStorage.setItem("UserDetails",JSON.stringify(response.data.logindetails));
                
          }
      })
    }
   }

  
}
</script>

<style>
/* body {
  margin: 0 !important;
  background: white;
  
}
.homepage{
  margin-right: -80%;
} */

</style>