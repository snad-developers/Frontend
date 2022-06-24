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
    <h2>Forgot Password? </h2>
      <h3>Please answer the below security questions to reset password</h3>
     <div class="forms">
       <div class="forms1">
       <label for="Entity" placeholder="Select Question" >
     <select  name="Entity" id="Entity" class="user"  v-model="person.question1"
            :class="
              v$.person.question1.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
             <option disabled selected value  >Select Questions </option>
     <option value="1">What is your favourite food/dish ?</option>
      <option value="2">Who is your childhood hero ?</option>
      <option value="3">What is the name of your favourite pet ?</option>
       <option value="4">In what city you were born ?</option>
      <option value="5">What is the name of your first school ?</option>
     </select>
        <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question1.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
    </label>

      
      <input type="text" class="user" placeholder="Answer" v-model="person.answer1"
            :class="
              v$.person.answer1.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.answer1.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>

             <label for="Entity" placeholder="Select Question" >
     <select  name="Entity" id="Entity" class="user"  v-model="person.question2"
            :class="
              v$.person.question2.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
      <option disabled selected value  >Select Questions </option>
     <option value="1">What is your favourite food/dish ?</option>
      <option value="2">Who is your childhood hero ?</option>
      <option value="3">What is the name of your favourite pet ?</option>
       <option value="4">In what city you were born ?</option>
      <option value="5">What is the name of your first school ?</option>
     </select>
        <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question2.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
    </label>

      
      <input type="text" class="user" placeholder="Answer" v-model="person.answer2"
            :class="
              v$.person.answer2.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.answer2.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
             <label for="Entity" placeholder="Select Question" >
     <select  name="Entity" id="Entity" class="user"  v-model="person.question3"
            :class="
              v$.person.question3.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            ">
     <option disabled selected value  >Select Questions </option>        
     <option value="1">What is your favourite food/dish ?</option>
      <option value="2">Who is your childhood hero ?</option>
      <option value="3">What is the name of your favourite pet ?</option>
       <option value="4">In what city you were born ?</option>
      <option value="5">What is the name of your first school ?</option>
     </select>
        <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.question3.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
    </label>

      
      <input type="text" class="user" placeholder="Answer" v-model="person.answer3"
            :class="
              v$.person.answer3.$error === true
                ? 'text-fields-error'
                : 'text-fields'
            " >
 <p
            class="text-red-500 text-xs font-thin"
            v-for="error of v$.person.answer3.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
      </div>
  
  
     
   <br>
    <button  class= "button" @click.prevent="submit">Continue </button>
    
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
     name: 'securityquestions',
           data() {
    return {
      v$: useVuelidate(),
      person: {
        question1: null,
        question2: null,
        question3: null,
        answer1:null,
        answer2:null,
        answer3:null,
       
      },
      message:"",
       id:""
    };
  },
 

  validations() {
    return {
      person: {
        question1: {
          required: helpers.withMessage("Select Question", required),
          $autoDirty: true,
        },
        answer1: {
          required: helpers.withMessage("Answer is required", required),
          $autoDirty: true,
        },
          question2: {
          required: helpers.withMessage("Select Question", required),
          $autoDirty: true,
        },
        answer2: {
          required: helpers.withMessage("Answer is required", required),
          $autoDirty: true,
        },
          question3: {
          required: helpers.withMessage("Select Question", required),
          $autoDirty: true,
        },
        answer3: {
          required: helpers.withMessage("Answer is required", required),
          $autoDirty: true,
        }
      },
    };
  },
   created() {
            this.id = this.$route.params.id;
        },
 methods: {
    submit() {
       this.v$.$touch();
       if(!this.v$.$invalid){
        let sdata = {

 "ans1":this.person.answer1,
 "ans2":this.person.answer2,
 "ans3":this.person.answer3,

}
console.log(sdata)
 this.responsedata=loginapi.securityanscheck(sdata,this.id).then(response=>{
console.log(response,"response data");
if(response.data){
  console.log("if condition")
 if(response.data.status == "success" && response.data.statuscode == 200){
    this.$router.push({ name: 'resetpassword', params: { id: response.data.mailid}});
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




</style>
