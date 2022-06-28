<template>

<div class = "main-container"> 

  <div class="child-div1">
  <h1><b>ANALYZE</b></h1>
  <p>TODAY'S CHALLANGES</p>
  
  <h1><b>ENVISION</b></h1>
  <P>TOMMOROW'S INNOVATION</P>
<!-- {{this.formvalue}} {{formvalue[currentStep]}} -->
  </div>
  
   <div class="child-div4">
   
    
 
  <form  class="register" style="width:105%;height:105%;margin-right:250px">
   
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
   <div class="child-div4">
      

   </div>
    <h2>Signup for new account</h2>
  <component v-bind:is="steps[currentStep].component" :currentStep="currentStep" :step="steps.length"
           :data="formvalue[currentStep]" @ChangeReg1="ChangeReg1($event)" @ChangeReg2="ChangeReg2($event)" @ChangeReg3="ChangeReg3($event)"/>

<div class="my name">
   <!-- <router-link to="registrationpage2"> -->
    <!-- <button  class= "button" @click.prevent="Continue">Continue</button> -->
    <!-- </router-link> -->
       <!-- <button @click.prevent="currentStep--" :disabled="currentStep === 0">Prev</button>
  <button @click.prevent="currentStep++" :disabled="currentStep === steps.length - 1">Next</button> -->

</div>
     
     

   


    
   
    </form>  
   </div> 
   
      
 
</div>


</template>


<script>

import RegistrationOne from './RegistrationOne';
import RegistrationTwo from './RegistrationTwo';
import RegistrationThree from './RegistrationThree';
import loginapi from '../services/loginapi';
//import RegistrationOne from './RegistrationOne.vue';

export default {
 
     name:"RegistrationPage",
 setup() {
    return {
      //RegistrationOne
    }
  },
     data(){

        return{
            currentStep: 0,
            formvalue:[
               {
                 firstname:"",
                 lastname:"",
                 companyid:"",
                 userid:"",
                 phonenumber:"",
                 Entity:"", 
                 dateofBirth:"",
                 gender:"",
                

                },
                {
                    AdressLine1:"",
                    AdressLine2:"",
                    city:"",
                    state:"",
                    zipcode:"",
                    country:"",
                    role:"",
                    createpwd:"",
                    confirmpwd:"",
                   


                },
                {
                    ans1:"",
                    ans2:"",
                    ans3:"",
                    ans4:"",
                    ans5:"",
                    // question1:"",
                    // question2:"",
                    // question3:"",
                    // question4:"",
                    // question5:"",
                    
                    

                }

        ],
            steps:[
                {
                    component: RegistrationOne
                    // lable: 'registrationOne'
                },
                {

                    component: RegistrationTwo
                    // lable: 'registrationTwo'
                },
                {
                    component:RegistrationThree
                    // lable: 'registrationThree'
                }

            ]
                
            }
        },
        methods:{

            Continue(){
                this.currentStep += 1;
            },

            Previous(){

               this.currentStep -= 1;
            },
             ChangeReg1(data)
    {
        console.log("ChangeReg1")
      this.formvalue[this.currentStep].firstname=data.firstname;
      this.formvalue[this.currentStep].lastname=data.lastname
      this.formvalue[this.currentStep].companyid=data.companyid
      this.formvalue[this.currentStep].userid=data.userid
      this.formvalue[this.currentStep].phonenumber=data.phonenumber
       this.formvalue[this.currentStep].Entity=data.Entity
        this.formvalue[this.currentStep].dateofBirth=data.dateofBirth
         this.formvalue[this.currentStep].gender=data.gender
      // this.formvalue[0].currentStep=data.currentStep
        this.Continue();
     // this.currentStep=data.currentStep
    },
    ChangeReg2(data){
         console.log("ChangeReg2",data)
          this.formvalue[this.currentStep].AdressLine1=data.AdressLine1;
      this.formvalue[this.currentStep].AdressLine2=data.AdressLine2
      this.formvalue[this.currentStep].city=data.city
      this.formvalue[this.currentStep].state=data.state
      this.formvalue[this.currentStep].zipcode=data.zipcode
      this.formvalue[this.currentStep].country=data.country
      this.formvalue[this.currentStep].role=data.role
      this.formvalue[this.currentStep].confirmpwd=data.confirmpwd
      this.formvalue[this.currentStep].createpwd=data.createpwd
      if(data.buttonvalue == 'Prev'){
        this.Previous();
      }
         if(data.buttonvalue == 'Next'){
        this.Continue();
      }


    },
     ChangeReg3(data){
         console.log("ChangeReg3",data)
          this.formvalue[this.currentStep].ans1=data.ans1
      this.formvalue[this.currentStep].ans2=data.ans2
      this.formvalue[this.currentStep].ans3=data.ans3
      this.formvalue[this.currentStep].ans4=data.ans4
      this.formvalue[this.currentStep].ans5=data.ans5
    if(data.buttonvalue == 'Prev'){
        this.Previous();
      }
         if(data.buttonvalue == 'submit'){
        console.log('submit')
        this.handleInput();
      }
    },

      handleInput() {
     
         //this.v$.$touch();
         
     // console.log(this.person); // logs the input value
      const senddata={
    "firstName": this.formvalue[0].firstname,
"lastName": this.formvalue[0].lastname,
"idnumber": this.formvalue[0].companyid,
"email": this.formvalue[0].userid,
"phoneNumber": this.formvalue[0].phonenumber,
"dateofBirth": this.formvalue[0].dateofBirth,
"gender": this.formvalue[0].gender,
"role": this.formvalue[1].role,
"address1": this.formvalue[1].AdressLine1,
"address2": this.formvalue[1].AdressLine2,
"country": this.formvalue[1].country,
"state": this.formvalue[1].state,
"city": this.formvalue[1].city,
"zipcode": this.formvalue[1].zipcode,
"password": this.formvalue[1].createpwd,
"confirmPassword": this.formvalue[1].confirmpwd,
"ans1": this.formvalue[2].ans1,
"ans2": this.formvalue[2].ans2,
"ans3": this.formvalue[2].ans3,
"ans4": this.formvalue[2].ans4,
"ans5": this.formvalue[2].ans5,
"entity":this.formvalue[0].Entity,
"status":"pending"
}
console.log(senddata);
// if(!this.v$.$invalid){
      loginapi.createpost(senddata).then(response=>{
      //  console.log(response,response.status,response.data.firstName,this.person.firstName);
if(response.status == 201 && response.data.firstName == this.formvalue[0].firstname && response.data.firstName){
 console.log(response);
 //this.sendEmail(e);
 this.$router.push('login');
}
 });
// }
    },

        },

     components:[
        RegistrationOne,
        RegistrationTwo,
        RegistrationThree,
     ]

}

</script>

<style>


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



</style>