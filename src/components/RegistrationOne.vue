<template>
<!-- {{data}}
{{currentStep}} -->
 <form @submit.prevent="passEvent('Next')">
 <div class="main-container2">
      <div class="child-4">
         <div class="id">
      <label for="firstname"></label>
       <input style="margin:10px" type="text" class="user" placeholder="First Name" v-model="person.firstname" v-on:keypress="isLetter($event)"
             :class="
              v$.person.firstname.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.firstname.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      <!-- <input  name="firstname" id="firstname" type="text" for=firstname class="main" placeholder="firstname" required v-model="person.firstname"> -->
      </div>
      <div class="id">
      <label for="EmployeeId"></label>
      <!-- <input  name="companyid" type="text" class="companyid" placeholder="company id" required v-model="person.lastname"> -->
       <input  style="margin:10px" type="text" class="user" placeholder="Employee Id" v-model="person.companyid" 
        :class="
              v$.person.companyid.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
           <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.companyid.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>  
      </div>
        <div class="id">
        <label for="phonenumber"></label>
      <!-- <input  name="phonenumber" type="text" for="phonenumber" class="phone" placeholder="phone number" required v-model="person.companyid"> -->
       <input  style="margin:10px" type="text" class="user" placeholder="Phone Number" v-model="person.phonenumber" 
        :class="
              v$.person.phonenumber.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
           <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.phonenumber.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> 
      </div>
       <div class="id">
         <label for="Entity"></label>
      <!-- <input  name="phonenumber" type="text" for="phonenumber" class="phone" placeholder="phone number" required v-model="person.companyid"> -->
       <select  style="border-radius:18px;margin:10px;width:100%;border: 1px solid black;" align="right" class="user" v-model="person.Entity"
       :class="
              v$.person.Entity.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
     <option  selected value>Select Entity</option>

      <option v-for="(entity,index) in responsedata" :key="index" >{{entity.entity}}</option>
     </select><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
      <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.Entity.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
         </div>
         <div class="child-5">
      <div class="id">
        <label for="lastname"></label>
      <!-- <input name="lastname" type="text" for="lastname" class="last name" placeholder="last name" required v-model="person.userid"> -->
      <input  style="margin:10px" type="text" class="user" placeholder="Last Name" v-model="person.lastname" v-on:keypress="isLetter($event)"
        :class="
              v$.person.lastname.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
           <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.lastname.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>  
     </div>
       <div class="id">
        <label for="Emailid"></label>
      <!-- <input  name="userid" type="text" for="userid" class="username" placeholder="user id" required v-model="person.phonenumber"> -->
       <input  style="margin:10px" type="text" class="user" placeholder="Email Id" v-model="person.userid" 
        :class="
              v$.person.userid.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
           <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.userid.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>  
      </div>
       <div class="id">
        <label for="gender"></label>
      <!-- <input  name="userid" type="text" for="userid" class="username" placeholder="user id" required v-model="person.phonenumber"> -->
           <select    style="margin-bottom:1px;border-radius:20px;margin:10px;width:100%;padding:12px 20px;border: 1px solid black;" v-model="person.gender" align="right" class="user"
              :class="
              v$.person.gender.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
<option disabled selected value>Gender</option>
<option value ="Male">Male</option>
<option value ="Female">Female</option>
<option value ="Others">Others</option>
     </select><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
       <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.gender.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id">
        <label for="dateofBirth"></label>
      <!-- <input  name="userid" type="text" for="userid" class="username" placeholder="user id" required v-model="person.phonenumber"> -->
       <input id="birthdate"  style="margin:10px;width:100%;padding:10px" type="date" placeholder="Date Of Birth"  class="user" v-model="person.dateofBirth" 
            :class="
              v$.person.dateofBirth.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " /><p style="margin-top: -39px;right: -141px;top: -32px;color: red;">*</p>
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.dateofBirth.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> 
          <p

            class="text-red-500 text-xs font-thin"

           v-if="!v$.person.dateofBirth.isUnique.$response"

          >

            Age should be between 18 to 75

          </p>
        
        
      </div>
         </div>

      </div>
  <!-- <button type="button" @click='passEvent'> continue</button> -->
  <!-- <button @click.prevent="passEvent" >Next</button> -->
  <!-- <button class= "butn" v-if="person.currentStep > 1" @click="passEvent">Go Back</button> -->
 <button  class= "butn" :disabled="currentStep === step - 1">Next</button>
 <!-- <button  class="butn" v-if="currentStep < 3" @click.prevent="passEvent">Next</button> -->

 <!-- <button class= "butn" v-else @click="Submit">Submit</button> -->
</form>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import useVuelidate from "@vuelidate/core";
import * as moment from "moment";
import loginapi from '../services/loginapi';
import { required, helpers,email,numeric, minLength, maxLength,} from "@vuelidate/validators";
export default { 
    
     name: 'RegistrationOne',
     props:{
      step:Number,
      currentStep:Number,
      data:Object
     },
      created: function () {
            console.log('user data from parent component:')
            console.log(this.data) //prints out an empty string
        },
             data:function () {
       return {
          v$: useVuelidate(),
          person:{
                 firstname:this.data.firstname,
                 lastname:this.data.lastname,
                 companyid:this.data.companyid,
                 userid:this.data.userid,
                 phonenumber:this.data.phonenumber,
                 Entity:this.data.Entity,
                 dateofBirth:this.data.dateofBirth,
                 gender:this.data.gender

                // currentStep:this.currentStep
        },
        responsedata:[],
      

       }
     },
      mounted(){
      this.fetch();
     
    },

    created(){
      this.fetch();
     
    },
    
      validations() {
    return {
      person: {
        firstname: {
          required: helpers.withMessage("Enter First Name", required),
          $autoDirty: true,
        },

        lastname: {
           required: helpers.withMessage("Enter Last Name", required),
           $autoDirty: true },
        
        companyid: { 
          required: helpers.withMessage("Enter Employee Id", required), 
          $autoDirty: true, 
          maxLength:helpers.withMessage("Employee Id should be 10 charecters ",maxLength(10))},
        
        userid: {
          required: helpers.withMessage("Enter User Id ", required), 
          $autoDirty: true,
          email:helpers.withMessage("Please Enter Valid email id", email) },


        phonenumber: { 
          required: helpers.withMessage("Enter Phone Number", required), 
          $autoDirty: true,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(10)
           },

        Entity: { 
          required: helpers.withMessage("Select Entity ", required), 
          $autoDirty: true },

        dateofBirth: { 
          required: helpers.withMessage("Choose Date of Birth", required), 
          $autoDirty: true,
           isUnique(value) {

          if (value === '') return true

        // standalone validator ideally should not assume a field is required

          var age = moment(moment.now()).diff(value,"years");

    if(age >=18 && age <=75 ){

return true

          }else{

 return false

          }

      }
           },

       

        gender: { 
          required: helpers.withMessage("Gender is required", required), 
          $autoDirty: true },

        //   role: { required: helpers.withMessage("Role is required", required), $autoDirty: true },
        // address1: { required: helpers.withMessage("Addres is required", required), $autoDirty: true },
        //   address2: { required: helpers.withMessage("Address is required", required), $autoDirty: true },
        // country: { required: helpers.withMessage("Country is required", required), $autoDirty: true },
        //   state: { required: helpers.withMessage("State is required", required), $autoDirty: true },
        // city: { required: helpers.withMessage("City is required", required), $autoDirty: true },
        //   zipcode: { required: helpers.withMessage("Zipcode is required", required), $autoDirty: true },
        // password: { required: helpers.withMessage("Password is required", required), $autoDirty: true },
        //    confirmPassword: { required: helpers.withMessage("Conform Password is required", required), $autoDirty: true },
        //   ans1: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // ans2: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        //   ans3: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // ans4: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        //   ans5: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // Entity: { required: helpers.withMessage("Entity is required", required), $autoDirty: true },
      
      },
    };
  },
      methods:{

        isLetter(e) {
          let char = String.fromCharCode(e.keyCode); // Get the character
          if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
          else e.preventDefault(); // If not match, don't add to input text
        },
    passEvent()
    {
      this.v$.$touch();
      if(!this.v$.$invalid){
      this.$emit('ChangeReg1',this.person)
      }
    },
    fetch(){
      loginapi.orgndatagetvalues().then(response=>{
        this.responsedata=response.data
        console.log(this.responsedata)
      })
    },
    
  }
   

}
//      data:function () {
//        return {
//          UserId : '',
//          Password:'',
//          Entity:''

//        }
//      },
//      validations:{
//          // eslint-disable-next-line no-undef
//          UserId:{
//            required,
//            minLength: minLength(8),
//            maxLength: maxLength(16),

//          },
//          Password:{
//            required,
//            minLength: minLength(8),
//            maxLength: maxLength(16),
//          }
//      },
//      methods:{
//            validationStatus: function(validation) {
//              return typeof validation !="undefined" ? validation.$error : false;
//            },

//        Submit: function(){
//          this.$v.$touch();
//          if (this.$v.$pending || this.$v.$error) return;

//          alert('Data Submit');


//        },
//      }  


</script> 

<style >
/* registration page 1 */
@media  (max-width: 600px) and (min-width:390px) {
  .main-container2{
    display:grid !important;
    width: 77% !important;
   
  }
  .register{
    width: 50% !important;
    height: 43% !important;
     overflow-y: scroll !important;
     top: 210px;
     left: -82px;
  }
  h2{
    font-size: 25px !important;
    width: 96%;
  }
  .child-div1{
    bottom: 400px;
    left: 223px;
    font-size: 19px;
  }
  main-container{
    width:100%
  }
}
input[type=text]:focus{
  border-color:rgb(58, 213, 58);
  
}
input[type=email]:focus{
  border-color:rgb(58, 213, 58);
  
}
 .register{
    width:105%;
  height: 105%;
   max-width: 600px;
   margin: 10px auto;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);  
   margin-bottom: 0%;
   font-family: sans-serif;
   background-color:white;
   margin-right:394px;
   margin-top: 10%;
   right: 5%;
   
}
 input[type=date]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
}
.main-container2{
   display: flex;
    flex-direction: row;
    justify-content: space-around;
}




body{
  background:-webkit-linear-gradient(left ,white,rgb(238, 212, 216)) ;
  margin: 15px;
  margin-top: 50px;
  position: relative;
   font-family: sans-serif;

} 


/* registration page 2 */
p{
  font-size: 19px;
}

/* registration page  */
.butn{
    
     width: 20%; 
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
     font-family: sans-serif;
     transition: 0.5s;
}

buttn{
    
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

/* registration page 3 */

.child-div1{
  width: 50%;
  display: flex;
    flex-direction: column;
    justify-content: center;
}
p{
 margin:-2px;
 font-size: 25px;
}
h1{
  margin:-2px;
  font-size: 70px;
}
.user{
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #ffffff;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;

}
















  
  

  


















</style>
