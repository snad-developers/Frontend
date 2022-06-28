<template>
<!-- {{data}}
{{currentStep}} -->
 <form @submit.prevent="passEvent('Next')">
 <div class="forms main-container2">
      <div class="child-4">
         <div class="id">
      <label for="firstname"></label>
       <input style="margin:10px" type="text" placeholder="First Name" v-model="person.firstname" 
             :class="
              v$.person.firstname.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
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
      <label for="companyid"></label>
      <!-- <input  name="companyid" type="text" class="companyid" placeholder="company id" required v-model="person.lastname"> -->
       <input  style="margin:10px" type="text" placeholder="Company Id" v-model="person.companyid" 
        :class="
              v$.person.companyid.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
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
       <input  style="margin:10px" type="text" placeholder="Phone Number" v-model="person.phonenumber" 
        :class="
              v$.person.phonenumber.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
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
       <select  style="border-color:black;border-radius:18px;margin:10px;width:226px;" align="right" class="user" v-model="person.Entity"
       :class="
              v$.person.Entity.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
     <option disabled selected value>Select Entity</option>

      <option value="Averon Solutions">Averon Solutions</option>
      <option value="SNAD">SNAD</option>
     </select>
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
      <input  style="margin:10px" type="text" placeholder="Last Name" v-model="person.lastname" 
        :class="
              v$.person.lastname.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
           <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.lastname.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>  
     </div>
       <div class="id">
        <label for="userid"></label>
      <!-- <input  name="userid" type="text" for="userid" class="username" placeholder="user id" required v-model="person.phonenumber"> -->
       <input  style="margin:10px" type="text" placeholder="User Id" v-model="person.userid" 
        :class="
              v$.person.userid.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
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
           <select    style="margin-bottom:1px;border-color:black;border-radius:20px;margin:10px;width:226px;padding:12px 20px" v-model="person.gender" align="right" class="user"
              :class="
              v$.person.gender.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
<option disabled selected value>Gender</option>
<option value ="Male">Male</option>
<option value ="Female">Female</option>
<option value ="Others">Others</option>
     </select>
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
       <input  style="margin:10px" type="date" placeholder="Date Of Birth" v-model="person.dateofBirth"
            :class="
              v$.person.dateofBirth.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " />
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.dateofBirth.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
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
//import loginapi from '../services/loginapi';
import { required, helpers,email,numeric, minLength, maxLength} from "@vuelidate/validators";
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
        

       }
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
          required: helpers.withMessage("Enter Company Id", required), 
          $autoDirty: true },
        
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
    passEvent()
    {
      this.v$.$touch();
      if(!this.v$.$invalid){
      this.$emit('ChangeReg1',this.person)
      }
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

<style>
.username{
   margin:10px;
   width:74%;

}
.main-container2{
   display: flex;
    flex-direction: row;
    justify-content: space-around;
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

input[type=text] input[type=email]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
}
 
 input[type=date]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
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
<<<<<<< HEAD
/* p::after{
  content: " ";
  position: absolute;
  display: block;
  left: 46%;
  bottom: 0%;
  width:8%;
  height: 2px;
  /* background-color: aqua; */
   /* font-family: sans-serif; */
/* } */
=======

>>>>>>> b23bd1771c9167445932a94f1a9a8afabfb1300c
.img{
  text-align: left 2px;
  margin-left:-10px ;
  margin-bottom: 10px;
}

.backbtn{
  align-items: baselhsl(180, 100%, 50%)252, 255, 255)
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
  background:-webkit-linear-gradient(left ,white,rgb(238, 212, 216)) ;
  margin: 15px;
  margin-top: 50px;
  position: relative;
   font-family: sans-serif;

}  



  
  

  


.register{
  height: 97%;
   max-width: 600px;
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


.user{
  width: 100%;
  margin-bottom: 1px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #ffffff;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;

}



.user::placeholder{
  color: #aaaaaa;

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
.company{
   margin:10px;
}




</style>
