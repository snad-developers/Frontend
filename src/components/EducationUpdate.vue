<template>
<h2>Add Education Information</h2>
<a href="/activeemplydata"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
   
<div class="EduUpd">
    <br>
<label for="university" style="margin-left: 20px;">University</label><br>
<input  name="university" id="university" type="text" v-model="person.university" style="padding: 10px 20px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.university.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.university.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                <br>

<label for="highestdegree" style="margin-left: 20px;">Degree</label><br>
     <select name="highestdegree" id="highestdegree"  v-model="person.highestdegree" style="width: 225px;padding: 14px 20px;margin-left: 20px;"
     :class="
                                    v$.person.highestdegree.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                > 
        
                               
       
        <option  >Bachelors</option>
        <option >Masters</option>
        <option  >Doctorate</option>
        <option  >Associate</option>

     </select>
     <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.highestdegree.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p><br> 

<label for="specialization" style="margin-left: 20px;">Specialization</label><br>
<input  name="specialization" id="specialization" type="text" v-model="person.specialization" style="padding: 10px 20px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.specialization.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.specialization.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p><br>

<label for="gpa" style="margin-left: 260px;top: -57px;">GPA</label><br>
<input type="text" name="gpa"  placeholder="GPA" v-model="person.gpa" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;padding: 2px;"
:class="
                                    v$.person.gpa.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.gpa.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p> <br><br>
  <span  style="top: -74px;"> <label for="degreestartdate" style="margin-left: 20px;">Degree Start Date</label><br> 
<input  name="degreestartdate" id="birthdate" type="date" v-model="person.degreestartdate" style="padding: 10px 20px;width:225px;margin-left: 20px;"
:class="                            
                                    v$.person.degreestartdate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.degreestartdate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>  <br>
                                <label for="degreeenddate" style="margin-left: 20px;">Degree End Date</label><br>
                                 <input  name="degreeenddate" id="birthdate" type="date" v-model="person.degreeenddate" style="padding: 10px 20px;width:225px;margin-left: 20px;"
                                :class="
                                    v$.person.degreeenddate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.degreeenddate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p><br></span>
<button  @click.prevent="educationupdate();" style="margin-left: 326px;margin-top:0%; background-color: blue;color: antiquewhite;">
                            <span class="btnText">Add Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>
</div>

</template>

<script>
import loginapi from '@/services/loginapi';
import useVuelidate from "@vuelidate/core";
import { required,email,numeric,minLength,maxLength, helpers} from "@vuelidate/validators";
import * as moment from "moment";

export default {
    name: "EducationUpdate",
    data(){
        return{
            person:null,
            responsedata:[],
            v$: useVuelidate(),
        }
    },
   
    
    

    created(){
        this.person=(this.$route.params)
          console.log(this.person);
        this.responsedata=this.$route.params;


    },
   
         validations(){
        return{
            person:{
                university:{
                    required:helpers.withMessage("Please Enter University",required),
                    $autoDirty: true,
                },
                highestdegree:{
                    required:helpers.withMessage("Please Select Degree",required),
                    $autoDirty: true,
                },
                specialization:{
                    required:helpers.withMessage("Please Enter Specialization",required),
                    $autoDirty: true,
                },
                gpa:{
                    required:helpers.withMessage("Please Enter GPA",required),
                    $autoDirty: true,
                },
                degreestartdate:{
                    required:helpers.withMessage("Please Enter Start Date",required),
                    $autoDirty: true,
                },
                degreeenddate:{
                    required:helpers.withMessage("Please Enter End Date",required),
                    $autoDirty: true,
                },
            }
        }
    },
       
//         einsert(){
//              const senddata={
//      "university": this.person.university,
//      "highestdegree": this.person.highestdegree,
     
//      "specialization": this.person.specialization,
//      "gpa": this.person.gpa,
//      "degreestartdate": this.person.degreestartdate,
//      "degreeenddate": this.person.degreeenddate,
//      "employeeid":this.person.employeeid,
     
//       }
//        console.log(senddata);
//        loginapi.educationinsert(senddata).then(response=>{
//                 console.log(response);
//       //  console.log(response,response.status,response.data.firstName,this.person.firstName);
//                 if(response.data.status == "success" && response.data.statuscode == 200){
//                     console.log(response);
//                     alert("Details saved successfully ")
//                     //this.sendEmail(e);
//                     this.$router.push('activeemplydata');
//                 }if(response.data.status == "faliure" && response.data.statuscode == 201 ){
//          console.log(response);
//           alert("Failure ");
         
//  }
//         });

//         },
 methods: { 
    educationupdate() {
        
      const senddata={
     "university": this.person.university,
     "highestdegree": this.person.highestdegree,
     "specialization": this.person.specialization,
     "gpa": this.person.gpa,
     "degreestartdate": this.person.degreestartdate,
     "degreeenddate": this.person.degreeenddate,
     "employeeid":parseInt(this.person.employeeid),
      }
       console.log(senddata);
        loginapi.updateempdata(senddata,this.person.id).then(response=>{
         console.log(response,response.status,response.data.firstName,this.person.firstName);
         if(response.data.status == "success" && response.data.statuscode == 200 ){

         console.log(response);
          alert("User Details Added");
          this.$router.push('activeemplydata');
    

// //  senddata(e);
//  this.$router.push('login');
 }
  if(response.data.status == "faliure" && response.data.statuscode == 201 ){
         console.log(response);
          alert("Failure ");
         // this.$router.push('PersonalData');
          

// //  senddata(e);
//  this.$router.push('login');
 }
 });

    // }
    },
    },
     
    }
    


    
 

</script>

<style>
.EduUpd{
  border-radius: 25px;
  box-sizing: border-box;
  width: 50%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
  margin-left: 360px;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
   
}

</style>
