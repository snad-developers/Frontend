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
      <h6>Please reset your password.</h6>
     <div class="forms">
       <div class="forms1">
      <label for="UserId"></label>
      <input type="password" class="text-box" placeholder="Enter New Password" v-model="person.Password"
            :class="
              v$.person.Password.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " style="margin-top:3%;  width:90%">
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Password.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>

           <label for="UserId"></label>
      <input type="password" class="text-box"  placeholder="Confirm Password" v-model="person.Conform"
            :class="
              v$.person.Conform.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " style="margin-top:3%;  width:90%">
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Conform.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
  
  
     
   <br>
    <button  class= "butn" style="width:60%" @click.prevent="submit">Reset Password</button>
    
<p  class="text-red-500 text-xs font-thin" style="padding:6px;">{{message}}</p> 
   
   </div> 
   
      
  </form> 
 
</div>


</div>

</template>


<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers,minLength, sameAs } from "@vuelidate/validators";
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
          minLength:helpers.withMessage("Password should be min 6 char long", minLength(6)),
          
          
        },
         Conform: {
          required: helpers.withMessage("Confirm Password is required", required),
          $autoDirty: true,
          sameAsPassword: helpers.withMessage("Passwords are not Matched", sameAs(this.person.Password))

        },
      
      },
    };
  },
   created() {
    this.GetloginDetails();
            this.id = this.$route.params.id;
        },
 methods: {
   GetloginDetails(){
                 if(localStorage.getItem('currentUser')){
                 this.$router.push({name:"launchpage"});
                 }
        
    },
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
    alert("Password changed successfully, Please Login")
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


<style scoped>
  h1{
      font-family: sans-serif;
  }
  h3{
      font-family: sans-serif;
  }
  /* input[type="text"]{
      font-family: sans-serif;
  }
    input[type="password"]{
      font-family: sans-serif;
  } */
  .butn{
      font-family: sans-serif;
  }
  
  /* .backbtn{
      font-family: sans-serif;
  } */
  .loginhere{
  height: 97%;
   max-width: 400px;
   /* max-height: 5%; */
   margin: 10px auto;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);  
   
   margin-bottom: 0%;
   font-family: sans-serif;
   background-color:white;
   
} 
  .butn{
    

  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  /* background: #634ed8; */
  
  background-color:  rgb(15, 6, 119);
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;
} 
.text-box{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
    
   
} 
  
</style>