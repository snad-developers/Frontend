<template>
<!-- {{data}}
{{currentStep}} -->
<form @submit.prevent="passEvent()">
  <div class="forms main-container2" >
      <div class="child-4">
         <div class="id">
      <label for="AdressLine1"></label>
      <!-- <input  type="text" for="AdressLine1" class="main" placeholder="Adress Line1" required v-model="person.AdressLine1" ref="AdressLine1"> -->
        <input style="margin:10px" type="text" placeholder="Address Line1" class="user" v-model="person.AdressLine1" 
             :class="
              v$.person.AdressLine1.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.AdressLine1.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
      <div class="id">
      <label for="city"></label>
      <!-- <input  type="text" for="city" class="company" placeholder="city" required v-model="person.city"> -->
        <input pattern="[a-zA-Z]+" style="margin:10px" type="text" class="user" placeholder="City" v-model="person.city" 
             :class="
              v$.person.city.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.city.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
        <div class="id">
        <label for="zipcode"></label>
      <!-- <input  type="text" for="zipcode" class="phone" placeholder="zip code" required v-model="person.zipcode"> -->
        <input  style="margin:10px" type="text" placeholder="ZipCode" class="user" v-model="person.zipcode" 
             :class="
              v$.person.zipcode.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.zipcode.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
              <div class="id">
        <label for="createpwd"></label>
      <!-- <input  type="text" for="createpwd" class="phone" placeholder="create password" required v-model="person.createpwd"> -->
        <input  style="margin:10px" type="password" placeholder="Password" class="user" v-model="person.createpwd" 
             :class="
              v$.person.createpwd.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.createpwd.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
             <div class="">
       <label for="role"></label>
      <select style="border-color:black;border-radius:20px;margin:10px;width:226px;padding:12px 20px" align="right" class="user" v-model="person.role"
       :class="
              v$.person.role.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
<option selected value  > Select Role </option>
      <option v-for="(role,index) in responsedata" :key="index" >{{role.roles}}</option>
</select>
  <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.role.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>

         </div>
         <div class="child-5">
 <div class="id">
        <label for="AdressLine2"></label>
      <!-- <input  type="text" for="AdressLine2" class="last name" placeholder="Adress Line2" required  v-model="person.AdressLine2"> -->
        <input  style="margin:10px" type="text" placeholder="Address Line2" class="user" v-model="person.AdressLine2" 
             :class="
              v$.person.AdressLine2.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.AdressLine2.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id">
        <label for="state"></label>
      <!-- <input  type="text" for="state" class="username" placeholder="state" required v-model="person.state"> -->
        <input  pattern="[a-zA-Z]+" style="margin:10px" type="text" class="user" placeholder="State" v-model="person.state" 
             :class="
              v$.person.state.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.state.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
              <div class="id">
        <label for="country"></label>
      <!-- <input  type="text" for="country" class="phone" placeholder="country" required v-model="person.country"> -->
        <input pattern="[a-zA-Z]+" style="margin:10px" type="text" class="user" placeholder="Country" v-model="person.country" 
             :class="
              v$.person.country.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.country.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
                    <div class="id">
        <label for="confirmpwd"></label>
      <!-- <input  type="text" for="confirmpwd" class="phone" placeholder="confirm password" required v-model="person.confirmpwd"> -->
        <input  style="margin:10px" type="password" class="user" placeholder="Confirm Password" v-model="person.confirmpwd" 
             :class="
              v$.person.confirmpwd.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "/>
              <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.confirmpwd.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
         </div>
         </div>
          <button class= "butn"  :disabled="currentStep === 0" @click.prevent="passEvent(person.buttonvalue='Prev')">Go Back</button>

 <button  class= "butn" :disabled="currentStep === step - 1" @click.prevent="passEvent(person.buttonvalue='Next')">Next</button>
 <!-- <button @click.prevent="currentStep--" :disabled="currentStep === 0">Prev</button>
  <button @click.prevent="currentStep++" :disabled="currentStep === steps.length - 1">Next</button> -->
</form>


</template>

<script>
// import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import useVuelidate from "@vuelidate/core";
import loginapi from '../services/loginapi';
import { required, helpers, minLength, numeric, } from "@vuelidate/validators";

export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "RegistrationTwo",
  //    setup() {
   
  //   return { 
      
  //   };
  // },
   props:{
     step:Number,
       currentStep:Number,
       data:Object
      
     },
    created: function () {
            console.log('user data from parent component:')
            console.log(this.data) //prints out an empty string
        },
//      computed:function () {
//      console.log("computed")
//             console.log(this.data)
//      },
//      mounted () {
//  console.log("mounted")
//             console.log(this.data)
//      },
      data:function () {
       return {
         v$: useVuelidate(),
          person:{
                 AdressLine1:this.data.AdressLine1,
                 AdressLine2:this.data.AdressLine2,
                 city:this.data.city,
                 state:this.data.state,
                 zipcode:this.data.zipcode,
                 country:this.data.country,
                  role:this.data.role,
                 createpwd:this.data.createpwd,
                 confirmpwd:this.data.confirmpwd,
                  buttonvalue:""
        },
        responsedata:[]
        

       }
     },
       validations() {
    return {
      person: {
        // firstname: {
        //   required: helpers.withMessage("First Name is required", required),
        //   $autoDirty: true,
        // },
        // lastname: { required: helpers.withMessage("Last Name is required", required), $autoDirty: true },
        // companyid: { required: helpers.withMessage("Company Id is required", required), $autoDirty: true },
        //   userid: { required: helpers.withMessage("User Id is required", required), $autoDirty: true },
        // phonenumber: { required: helpers.withMessage("Phone Number is required", required), $autoDirty: true },
        //   dateofBirth: { required: helpers.withMessage("Date of Birth is required", required), $autoDirty: true },
        // gender: { required: helpers.withMessage("Gender is required", required), $autoDirty: true },
           role: { 
            required: helpers.withMessage("Etner Role", required), 
            $autoDirty: true 
          },

          AdressLine1: { 
            // required: helpers.withMessage("Enter Address Line 1", required), 
            $autoDirty: true 
          },

          AdressLine2: { 
            // required: helpers.withMessage("Enter Address Line 2", required), 
            $autoDirty: true 
          },

          country: { 
            // required: helpers.withMessage("Enter Country Name", required), 
            $autoDirty: true 
          },

          state: { 
            // required: helpers.withMessage("Enter State Name", required), 
            $autoDirty: true
          },

          city: { 
            // required: helpers.withMessage("Enter City Name", required), 
            $autoDirty: true 
          },

          zipcode: { 
            // required: helpers.withMessage("Enter Zipcode", required), 
            $autoDirty: true,
            numeric,
            minLength:helpers.withMessage("Zipcode shoud have min 5 numbers", minLength(5) ) 
          },

          createpwd: { 
            required: helpers.withMessage("Enter Password ", required), 
            $autoDirty: true,
            minLength: helpers.withMessage("Password Must be 6 char ", minLength(6)) 
          },


          confirmpwd: { 
            required: helpers.withMessage("Enter Confirm Password", required), 
            $autoDirty: true,
            // sameAs: helpers.withMessage("confirm password and create Password should be same", sameAs('createpwd'))  
          },
        //   ans1: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // ans2: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        //   ans3: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // ans4: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        //   ans5: { required: helpers.withMessage("Answer is required", required), $autoDirty: true },
        // Entity: { required: helpers.withMessage("Entity is required", required), $autoDirty: true },
      
      },
    };
  },
   mounted(){
      this.fetch();
    },

    created(){
      this.fetch();
    },

      methods:{
      
    passEvent()
    {
     // this.person.buttonvalue=data;
       this.v$.$touch();
      if(!this.v$.$invalid){
      this.$emit('ChangeReg2',this.person)
      }
    },
    fetch(){
      loginapi.rolesgetvalues().then(response=>{
        this.responsedata=response.data
        console.log(this.responsedata)
      })
    }
  
  }
}
// // eslint-disable-next-line no-unused-vars
// import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
// export default { 
//     // eslint-disable-next-line vue/multi-word-component-names
//      name: "login",
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
// }

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

input[type=text]{
    
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
   margin-left:519px ;
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
.forms1{
  margin-bottom: 0px;
  color: #c51414;
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
.user:focus{
  border-color: #46d40e;

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
