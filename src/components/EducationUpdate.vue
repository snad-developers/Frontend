<template>
<h2>Add Education Information</h2>
<a href="/TabsView"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
   
<div class="EduUpd">
    <br>
<label for="university" style="margin-left: 20px;">University</label><br>
<input  name="university" id="university" type="text" v-model="person.university" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

<label for="highestdegree" style="margin-left: 20px;">Degree</label><br>
     <select name="highestdegree" id="highestdegree"  v-model="person.highestdegree" style="width: 225px;padding: 14px 20px;margin-left: 20px;"> 
        
                               
       
        <option  >Bachelor's</option>
        <option >Master's</option>
        <option  >Doctorate</option>
        <option  >Associate's</option>

     </select><br> 

<label for="specialization" style="margin-left: 20px;">Specialization</label><br>
<input  name="specialization" id="specialization" type="text" v-model="person.specialization" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

<label for="gpa" style="margin-left: 260px;top: -57px;">GPA</label><br>
<input type="text" name="gpa"  placeholder="GPA" v-model="person.gpa" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;padding: 2px;"><br><br>    
    
<span  style="top: -50px;"><input  name="degreestartdate" id="birthdate" type="date" v-model="person.degreestartdate" style="padding: 10px 20px;width:225px;margin-left: 20px;">-<input  name="degreeenddate" id="birthdate" type="date" v-model="person.degreeenddate" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br></span>
<button  @click.prevent="educationupdate();" style="margin-left: 326px;margin-top:0%; background-color: blue;color: antiquewhite;">
                            <span class="btnText">Add Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>
</div>

</template>

<script>
import loginapi from '@/services/loginapi';

export default {
    name: "EducationUpdate",
    data(){
        return{
            person:null,
            responsedata:[],
        }
    },
    created(){
        this.person=(this.$route.params)
          console.log(this.person);
        this.responsedata=this.$route.params;


    },
    methods: { 
       
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
