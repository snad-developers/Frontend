<template>
<div class = "main-container"> 

  <div class="child-div1">
  <h1><b>ANALYZE</b></h1>
  <p>TODAY'S CHALLANGES</p>
  
  <h1><b>ENVISION</b></h1>
  <P>TOMMOROW'S INNOVATION</P>

  </div>
  
   <div class="child-div2">
   
    
 
  <form  class="loginhere"  >
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h2>Forgot Password? </h2>
      <h3>Please reset your password.</h3>
     <div class="forms">
       <div class="forms1">
      <label for="UserId"></label>
      <input type="text" class="user" placeholder="Enter New Password" v-model="person.Password"
            :class="
              v$.person.Password.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Password.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>

           <label for="UserId"></label>
      <input type="text" class="user" placeholder="Conform Password" v-model="person.Conform"
            :class="
              v$.person.Conform.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Conform.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
  
  
     
   <br>
    <button  class= "button" @click.prevent="submit">Reset Password</button>
    
<p  class="text-red-500 text-xs font-thin" style="padding:6px;">{{message}}</p> 
   
   </div> 
   
      
  </form> 
 
</div>


</div>

</template>


<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import loginapi from '../services/loginapi';
export default {
 // eslint-disable-next-line vue/multi-word-component-names
   name:'resetpassword',  
        data() {
    return {
      v$: useVuelidate(),
      person: {
        Password: null,
        Conform:null
      
      },
      message:"",
       id:""
   
    };
  },
 

  validations() {
    return {
      person: {
        Password: {
          required: helpers.withMessage("Password is required", required),
          $autoDirty: true,
        },
         Conform: {
          required: helpers.withMessage("Conform Password is required", required),
          $autoDirty: true,
        },
      
      },
    };
  },
   created() {
            this.id = this.$route.params.id;
        },
 methods: {
    submit() {
       this.v$.$touch();
       console.log(this.v$)
       if(!this.v$.$invalid){
        let sdata ={

"password":this.person.Password,
"confirmPassword":this.person.Conform
}
 this.responsedata=loginapi.resetpassword(sdata,this.id).then(response=>{
console.log(response,"response data");
if(response.data){
  console.log("if condition")
 if(response.data.status == "success" && response.data.statuscode == 200){
    this.$router.push({ name: 'login'})

 }
  if(response.data.status == "failure" && response.data.statuscode == 201){
  this.message=response.data.message
 }

}
  
       })

       }
 },

  }, 
}
</script>


<style>
  h1{
      font-family: sans-serif;
  }
  h3{
      font-family: sans-serif;
  }
  input[type="text"]{
      font-family: sans-serif;
  }
    input[type="password"]{
      font-family: sans-serif;
  }
  button{
      font-family: sans-serif;
  }
  
  .backbtn{
      font-family: sans-serif;
  }
  
</style>