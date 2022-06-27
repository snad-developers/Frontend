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
    <h2>Login here </h2>
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
     
      <input required style="margin: 7px -17px 12px 0px;" type="email" class="user" placeholder="UserId" v-model="person.UserId"
            :class="
              v$.person.UserId.$error === true
                ? 'text-fields-error'
                : 'text-fields'
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
      <i class="uil uil-eye" style="margin-left:-20px;"></i>
  <input  style="margin: 7px 0px 12px 0px" type="password"   placeholder="Password"  class="user" 
      v-model="person.Password"
            :class="
              v$.person.Password.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
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
     <select style="margin: 7px 0px 12px 0px;border-color: black;border-radius:20px;padding:13.5px"  name="Entity" id="Entity" class="user"  v-model="person.Entity"
            :class="
              v$.person.Entity.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
     <option disabled selected value>Entity</option>
      <option value="Averon Solutions">Averon Solutions</option>
      <option value="SNAD">SNAD</option>
     </select>
    </label>

    <div class="main-div">
      <div>
       <input type="checkbox" id="Remember me" value="Remember me" >
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
      message:""
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
           $autoDirty: true },

        Entity: { 
          required:helpers.withMessage("Please Select Entity", required), 
          $autoDirty: true },

        rmemberMe: {  $autoDirty: true },

      },
  
    };
  },
 methods: {
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

  },
   
}
</script> 

<style>
.font-thin{
  font-size: 14px;
  color: #c40b0b;
}
.main-container{
  display: flex;
  flex-direction: row;
}
.child-div1{
  width: 65%;
}
.child-div2{
  width: 35%;
}

div{
  text-align: center;
}
.backbtn{
    text-align: left;
}

input[type=email]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
}
input[type=password]{

    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
select{
    width: 28%;
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
input[type=button]{
    width: 10%; 
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color: rgb(119, 6, 6);
    color: white;
     font-family: sans-serif;
}
.button{
    
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #634ed8;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;
}
.button1{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
     font-family: sans-serif;
     transition: 0.5s;
}

 

.img{
  text-align: left 2px;
  margin-left:-10px ;
  margin-bottom: 10px;
}

.backbtn{
  align-items: baseline;
   font-family: sans-serif;
}
input[type="checkbox"] {
  -webkit-appearance: checkbox;
     -moz-appearance: checkbox;
          appearance: checkbox;
  display: inline-block;
  font-family: sans-serif;
 width: auto;
}
.FG{
   text-justify: auto;
   text-align: right;
}
body{
  background:-webkit-linear-gradient(left #bb8c9a) ;
  margin: 15px;
  margin-top: 50px;
  position: relative;
   font-family: sans-serif;

}  
.loginhere,
.loginhere * {
  box-sizing: border-box;
  font-family: sans-serif;
  margin:0px;


  
  

  
}


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


.imgs{
  display: block;
  max-width: 125px;
  margin: 0 auto;
}
.forms{
  padding: 30px;


}





.user::placeholder{
  color: #090808;

}

.regis{
   box-sizing: border-box;
  font-family: sans-serif;
  margin-right: 75%;
  background: #eeee;
  margin-left: 5%;
  border-radius: 25px;


  
  
}
.form{
  background-color: #dddddd;
}


.main-div{
      display: flex;
    justify-content: space-around;
}
p{
  margin: 0px;
}
.child-div1{
  margin:0px !important
}
.input i{
  left: 0px;
  right: 10px;
}
.regis1{
  color:#0a090a;
}
.regis1:hover{
  color: #4ec6d8;
  transition-duration: 0.6s;
}



</style>
