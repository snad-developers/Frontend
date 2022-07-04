<template>
<!-- {{data}}
{{currentStep}} -->
<form @submit.prevent="passEvent()">
    <div class="forms main-container2" >
      <div class="child-4" style="width:50%">
        
        <div style="margin:18px;">
  <label for="Select Questions">
    What is your favourite food/dish ?
     <!-- <select name="Select Questions" value="Select Questions" id="Select Questions"  class="user" v-model="person.question1"
      :class="
              v$.person.question1.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
    
     </select>
     <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question1.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
  </label>
  </div>
      <div class="" style="margin:36px;">
  <label for="Select Questions">
    Who is your childhood hero ?
     <!-- <select name="Select Questions" value="Select Questions" id="Select Questions"  class="user" v-model="person.question2"
      :class="
              v$.person.question2.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
        </select>
         <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question2.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
        </label>
        
        </div>
   
     
 
      <div class="" style="margin-top: 43px;margin-bottom: 35px;">
  <label for="Select Questions">
    What is the name of your favourite pet ?
     <!-- <select name="Select Questions" value="Select Questions" id="Select Questions"  class="user" v-model="person.question3"
      :class="
              v$.person.question3.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
      <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question3.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
     </label>
     </div>
  
        <div class="" style="margin:18px;">
  <label for="Select Questions">
    In what city you were born ?
     <!-- <select name="Select Questions" value="Select Questions" id="Select Questions"  class="user" v-model="person.question4"
      :class="
              v$.person.question4.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>

   
     </select>
      <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question4.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
     </label>
</div>
        <div class="" style="margin-top: 38px;">
  <label for="Select Questions">
    What is the name of your first school ?
     <!-- <select name="Select Questions" value="Select Questions" id="Select Questions"  class="user" v-model="person.question5"
      :class="
              v$.person.question5.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
      <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question5.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
  </label>
         </div>
      
      
      </div>
      <div class="child-5" style="width:50%;">
  
 <div class="id" style="margin:8px;" >
    <label for="ans1"></label>
    <input  type="text" for="ans1" class="user" placeholder="Give your answer" v-model="person.ans1"
     :class="
              v$.person.ans1.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            "> 
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.ans1.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id"  style="margin:8px;" >
            <label for="ans2"></label>
    <input  type="text" for="ans2" placeholder="Give your answer" class="user" v-model="person.ans2"
     :class="
              v$.person.ans2.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.ans2.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id"  style="margin:13px;">
            <label for="ans3"></label>
    <input  type="text" for="ans3" placeholder="Give your answer" class="user" v-model="person.ans3"
     :class="
              v$.person.ans3.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.ans3.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id"  style="margin:13px;">
            <label for="ans4"></label>
    <input  type="text" for="ans4" placeholder="Give your answer" class="user" v-model="person.ans4"
     :class="
              v$.person.ans4.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.ans4.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
       <div class="id"  style="margin:13px;">
            <label for="ans5"></label>
    <input type="text" for="ans5" placeholder="Give your answer" class="user" v-model="person.ans5"
     :class="
              v$.person.ans5.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
             <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.ans5.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
         </div>
    


</div>
<button class= "butn"  :disabled="currentStep === 0" @click.prevent="passEvent(person.buttonvalue='Prev')">Go Back</button>

 <button  class= "butn"  @click.prevent="passEvent(person.buttonvalue='submit')">Submit</button>
</form>
</template>

<script>
// import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import useVuelidate from "@vuelidate/core";
//import loginapi from '../services/loginapi';
import { required, helpers } from "@vuelidate/validators";
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "RegistrationThree",
      props:{
 currentStep:Number,
       data:Object
     
     },
       created: function () {
            console.log('created')
            console.log(this.data) //prints out an empty string
        },
    
     computed:function () {
     console.log("computed")
            console.log(this.data)
     },
     mounted () {
 console.log("mounted")
            console.log(this.data)
     },
       data:function () {
       return {
        v$: useVuelidate(),
          person:{
                 ans1:this.data.ans1,
                 ans2:this.data.ans2,
                 ans3:this.data.ans3,
                 ans4:this.data.ans4,
                 ans5:this.data.ans5,
                //  question1:"",
                //   question2:"",
                //    question3:"",
                //     question4:"",
                //      question5:"",
                  buttonvalue:""
        },
        

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
        //    role: { required: helpers.withMessage("Role is required", required), $autoDirty: true },
        // AdressLine1: { required: helpers.withMessage("Address is required", required), $autoDirty: true },
        //   AdressLine2: { required: helpers.withMessage("Address is required", required), $autoDirty: true },
        // country: { required: helpers.withMessage("Country is required", required), $autoDirty: true },
        //   state: { required: helpers.withMessage("State is required", required), $autoDirty: true },
        // city: { required: helpers.withMessage("City is required", required), $autoDirty: true },
        //   zipcode: { required: helpers.withMessage("Zipcode is required", required), $autoDirty: true },
        // createpwd: { required: helpers.withMessage("Password is required", required), $autoDirty: true },
        //    confirmpwd: { required: helpers.withMessage("Conform Password is required", required), $autoDirty: true },
          ans1: { required: helpers.withMessage("Please give Answer ", required), $autoDirty: true },
        ans2: { required: helpers.withMessage("Please give Answer ", required), $autoDirty: true },
          ans3: { required: helpers.withMessage("Please give Answer ", required), $autoDirty: true },
        ans4: { required: helpers.withMessage("Please give Answer ", required), $autoDirty: true },
          ans5: { required: helpers.withMessage("Please give Answer ", required), $autoDirty: true },
        //    question1: { required: helpers.withMessage("Question is required", required), $autoDirty: true },
        // question2: { required: helpers.withMessage("Question is required", required), $autoDirty: true },
        //   question3: { required: helpers.withMessage("Question is required", required), $autoDirty: true },
        // question4: { required: helpers.withMessage("Question is required", required), $autoDirty: true },
        //   question5: { required: helpers.withMessage("Question is required", required), $autoDirty: true },
        // Entity: { required: helpers.withMessage("Entity is required", required), $autoDirty: true },
      
      },
    };
  },
         methods:{
    passEvent()
    {
     // this.person.buttonvalue=data;
      // this.person.buttonvalue=data;
       this.v$.$touch();
      if(!this.v$.$invalid){
      this.$emit('ChangeReg3',this.person)
      }
    },
  
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
    justify-content: center;
}
.child-div1{
  width: 50%;
  display: flex;
    flex-direction: column;
    justify-content: center;
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
.child-div4{
    width: 50%;
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
  background-color: aqua;
   font-family: sans-serif;
} */
=======

>>>>>>> b23bd1771c9167445932a94f1a9a8afabfb1300c
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



  
  

  

p{
 margin:-2px;
 font-size: 25px;
}
h1{
  margin:-2px;
  font-size: 70px;
}
.register{
    width:77%;
  height: 97%;
   max-width: 600px;
   /* max-height: 5%; */
   margin: 10px auto;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);  
   /* margin-left:519px ; */
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
  padding: 23px;
  


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
