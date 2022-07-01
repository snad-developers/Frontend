<template>

<div class = "main-container"> 

  <div class="child-div1">
  <h1><b>ANALYZE</b></h1>
  <p>TODAY'S CHALLANGES</p>
  
  <h1><b>ENVISION</b></h1>
  <P>TOMMOROW'S INNOVATION</P>

  </div>
  
  <div class="child-div2">
   
    
 
  <form  class="loginhere">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h2><b>Login here</b></h2>
     <div class="forms" style="padding:30px">
     <p  class="text-red-500 text-xs font-thin" style="padding:6px;">{{message}}</p> 

       <div class="forms1">
         <p
              class="text-red-500 text-xs font-thin"
              v-for="error of v$.person.UserId.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
       <i class="uil uil-user" style="margin-left:-38px"></i>
      <label for="UserId"></label>
    <input style="margin: 7px -17px 12px 0px; " type="email" class="file" placeholder="UserId" v-model="person.UserId"
            :class="
              v$.person.UserId.$error === true
                ? 'text-fields-error'
                :  
      'text-fields'
            " >

      </div>
     
      <div>
    <label for="Password"></label>
    <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Password.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
     
  <input :type="passwordFieldType"  style="margin: 7px 0px 12px 0px;margin-left:-11px"   placeholder="Password"  class="user" 
      v-model="person.Password"
            :class="
              v$.person.Password.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
          <a type="password" @click="switchVisibility"><span class="icon is-small is-right"><i style="margin-left:-20px;"  class="uil" :class="{ 'uil uil-eye-slash': showPassword, 'uil uil-eye': !showPassword }"> </i> 
            </span> 
          </a>
            </div>
         
            
      <p
          class="text-red-500 text-xs font-thin"
          v-for="error of v$.person.Entity.$errors"
          :key="error.$uid" style="font-family:sans-serif"
        >
          {{ error.$message }}
        </p>
    <label for="Entity" placeholder="Entity" >
      <i class="uil uil-clipboard-notes"  style="margin-left:-20px;"></i>
     <select style="margin: 7px 0px 12px 0px;border-radius:20px;padding:13.5px"  name="Entity" id="Entity" class="user"  v-model="person.Entity"
            :class="
              v$.person.Entity.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
     <option disabled selected value>Entity</option>
      <option   v-for="(entity,index) in responsedata" :key="index">{{entity.entity}}</option>
     </select>
    </label>

    <div class="main-div">
      <div>
       <input type="checkbox" id="customCheck" value="Remember me"  class="custom-control-input remember" >
    <label for="remember me"> Remember me</label>
    
</div>
<div>
    <span>
      <a  class="regis1" href="/forgotpassword"><b>Forgot Password</b></a>
    </span>
    </div>
    </div>
  
     
   <br>
    <button  class= "button" @click.prevent="submit">Login </button>
    <h6>OR</h6>
  <i class="uil uil-google" style="margin-left:-5px"></i> <label for="remember me"><b class="regis1">Continue with Google</b></label>
    <h4>Don't have an account? <a  class="regis1" href="/registrationPage"><b>Signup Now</b></a></h4>
    <!-- <a href="/abc">abc</a> -->
   
   </div> 
   
      
  </form>  
  
</div>


</div>

</template>

<script>

// eslint-disable-next-line no-unused-vars
import useVuelidate from "@vuelidate/core";
import { required, helpers, email,    } from "@vuelidate/validators";
import loginapi from '../services/loginapi';
export default { 
    // eslint-disable-next-line vue/multi-word-component-names
     name: "login",

      data() {
        return {
          v$: useVuelidate(),
          person: {
            UserId: null,
            Password: null,
            Entity: null,
            rmemberMe: null,
            logid:null,
          },
          message:"",
          responsedata:[],
          password:"",
          passwordFieldType:"password"
        };
      },
 

    validations() {
      return {
        person: {
          UserId: {
            required: helpers.withMessage("Please Enter Userid", required),
            $autoDirty: true,
            email: helpers.withMessage("Please enter a valid email id", email),
          
          },
          Password: {
            required:helpers.withMessage("Please Enter password", required),
            $autoDirty: true 
          },

          Entity: { 
            required:helpers.withMessage("Please Select Entity", required), 
            $autoDirty: true 
          },

          rmemberMe: {  $autoDirty: true },

        },
  
      };
    },

    mounted(){
      this.fetch();
    },

    created(){
      this.fetch();
    },


 methods: {
  switchVisibility(){
    this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
  },
    submit() {
       this.v$.$touch();
       if(!this.v$.$invalid){
          let sdata = {
            "password":this.person.Password,
            "email":this.person.UserId,
            "entity":this.person.Entity
          }

          this.responsedata=loginapi.loginservice(sdata).then(response=>{
            console.log(response,"response data");
            if(response.data){
              console.log("if condition")
              if(response.data.status == "success" && response.data.statuscode == 200  ){
                this.$router.push({name:"launchpage",params:response.data.logid});
                console.log(this.logid)
              }

              if(response.data.status == "failure" && response.data.statuscode == 201){
                this.message=response.data.message
              }

            }
  
          })

        }
     },

    fetch(){
      loginapi.orgndatagetvalues().then(response=>{
        this.responsedata=response.data
        console.log(this.responsedata)
      })
    }

  },
 

  }

</script> 

<style>

.file{
  border-radius:23px;
  width:100%;
  
}
.file:focus{

 transition-duration: 0.5s;
  border-color:red;
}




</style>
