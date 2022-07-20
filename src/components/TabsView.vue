<template>
<div class="P1">
  <TabNav :tabs="['Personal','Job']" :selected="selected" @selected="setSelected">
    <Tab :isSelected="selected === 'Personal'">
    
       <div>
      <p>Personal Data</p>

      <p style="margin-left: 20px;">Basic Information</p>
      <table class="center">
        <tr><td>
           
    <label for="employeeid" style="margin-left: 20px;">Employee Id</label><br>
    <input type="text" name="employeeid" for="employeeid"  placeholder="Employee Id" style="margin-left: 20px;"  v-model="person.employeeid"   ></td>
    
    <td><label for="empstatus" style="margin-left: 20px;">Status</label><br>
    <select name="empstatus" for="empstatus" id="empstatus"  style="width: 225px;padding: 14px 20px;margin-left: 20px;"   v-model="person.empstatus">
       
        <option disabled selected value>Status</option>
        <option value="Active" >Active</option>
        <option value="Inactive" >Inactive</option>
    </select></td></tr>
   
    <tr><td><label for="firstname" style="margin-left: 20px;">First Name</label><br>
    <input type="text" for="firstname"   name="firstname"  placeholder="First Name" style="margin-left: 20px;" v-model="person.firstname" ></td>
    
    <td><label for="lastname" style="margin-left: 20px;">Last Name</label><br>
    <input type="text" for="lastname" name="lastname" placeholder="Last Name"  style="margin-left: 20px;" v-model="person.lastname" > </td></tr>
    
     <tr><td><label for="fullname" style="margin-left: 20px;">Full Name</label><br>
    <input type="text" for="fullname"  name="fullname"  placeholder="Full Name"  style="margin-left: 20px;" v-model="person.fullname" ></td>
    
     <td><label for="dateofbirth" style="margin-left: 20px;">Date Of Birth</label><br>
    <input  name="dateofbirth" for="dateofbirth" type="date" placeholder="Date Of Birth" style="padding: 10px 20px;width:225px;margin-left: 20px;"  v-model="person.dateofbirth" ></td></tr>
   
    <tr><td><label for="ssn" style="margin-left: 20px;">SSN</label><br>
    <input  name="ssn" for="ssn"  type="text" placeholder="SSN" style="padding: 10px 20px;width:225px;margin-left: 20px;"  v-model="person.ssn" ></td>
   
    <td><label for="taxfilenumber" style="margin-left: 20px;">Tax File Number</label><br>
    <input  name="taxfilenumber" for="taxfilenumber"   type="text" placeholder="Tax File Number" style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.taxfilenumber" ></td></tr></table>
    
    <hr class="hr">
     <p style="margin-left: 20px;">Address</p>
     <table class="center">
      <tr>

    

     <td><label for="addressline1" style="margin-left: 20px;">AddressLine 1</label><br>
    <input type="text" for="addressline1" name="addressline1"  placeholder="AddressLine 1" style="margin-left: 20px;" v-model="person.addressline1" ></td>
    
       
     <td><label for="addressline2" style="margin-left: 20px;">Addressline 2</label><br>
    <input type="text" for="addressline2" name="addressline2" placeholder="Addressline 2" style="margin-left: 20px;" v-model="person.addressline2" ></td></tr>
    
    <tr><td><label for="city" style="margin-left: 20px;">City</label><br>
    <input type="text" for="city" name="city"  placeholder="City" style="margin-left: 20px;" v-model="person.city"></td>
     
     
     <td><label for="state" style="margin-left: 20px;">State</label><br>
    <input type="text" for="state" name="state"  placeholder="State" style="margin-left: 20px;" v-model="person.state"></td></tr>
     
     
    <tr><td><label for="country" style="margin-left: 20px;">Country</label><br>
    <input type="text" for="country" name="country"  placeholder="country" style="margin-left: 20px;" v-model="person.country" ></td>
    
     

     <td><label for="zipcode" style="margin-left: 20px;">Zipcode</label><br>
    <input type="text" for="zipcode" name="zipcode" placeholder="Zipcode" style="margin-left: 20px;" v-model="person.zipcode"></td></tr></table>
    
     <hr class="hr">
     <p style="margin-left: 20px;">Contact</p>
     <table class="center"><tr>
     

    <td><label for="contactnumber" style="margin-left: 20px;">Phone Number</label><br>
    <input type="text" for="contactnumber" name="contactnumber" placeholder="Phone Number" style="margin-left: 20px;" v-model="person.contactnumber" ></td>
    
     <td><label for="emergencynumber" style="margin-left: 20px;"> Alternate Phone Number</label><br>
    <input type="text" for="emergencynumber" name="emergencynumber"  placeholder="Alternate Phone Number" style="margin-left: 20px;" v-model="person.emergencynumber" ></td>
    
    
       <td><label for="emailaddress" style="margin-left: 20px;">Email Id</label><br>
    <input type="email" for="emailaddress" name="emailaddress" placeholder="Email Id" style="margin-left: 20px;" v-model="person.emailaddress" ></td></tr></table> <br>
    
     <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="personalhandleupdate()" >Update</button>
<hr class="hr">

    <p style="margin-left: 20px;">Education </p>
    <table class="center">
      <tr>
       
    <td><label for="university" style="margin-left: 20px;">University</label><br>
    <input type="text" for="university" name="university"  placeholder="University" style="margin-left: 20px;" v-model="person.university" ></td>
     
    
    <td><label for="highestdegree" style="margin-left: 20px;">Stream</label><br>
    <input type="text" for="highestdegree" name="highestdegree" placeholder="Stream" style="margin-left: 20px;" v-model="person.highestdegree" ></td></tr><br>
    
    
    <tr><td><input  name="degreestartdate" placeholder="start date" id="degreestartdate" type="text"  style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.degreestartdate" ></td>
    <td><input  name="degreeenddate" placeholder="end date" id="degreeenddate" type="text"  style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.degreeenddate" ></td></tr>
      
      
      <tr><td><label for="specialization" style="margin-left: 20px;">Course</label><br>
    <input type="text" for="specialization" name="specialization"  placeholder="Course" style="margin-left: 20px;" v-model="person.specialization" ></td>
    
     
    <td><label for="gpa" style="margin-left: 0px;">CGPA</label><br>
    <input type="number" for="gpa" name="gpa"  placeholder="CGPA" style="margin-left: 0px;border-radius: 11px;width: 80px;text-align: center;" v-model="person.gpa" ></td></tr></table> <br>   
    
    <!-- <td><label for="gpa" style="margin-left: 360px;top: -57px;">CGPA</label><br>
    <input type="number" for="gpa" name="gpa"  placeholder="CGPA" style="margin-left: 360px;border-radius: 11px;width: 80px;text-align: center;top: -57px;" v-model="person.gpa" ></td> -->
    <!-- </tr> </table> <br>    -->
    
    
    
    <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="educationupdate(empdata)" >Update</button>
  <hr class="hr">
    <p style="margin-left: 20px;">Visa Information</p>
    <!-- <div class="child-4"> -->
                        <!-- <h4>Visa Information</h4> -->
                              
                            <table>

                                <thead style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Date</th>
                                <th>Visa Status</th>
                                <th>Issuing country</th>
                                <th>Expiration</th>
                                <th>Status</th>
                                </thead>
                                   <!-- <template  v-for="(empdata,employeeid) in responsedata" :key="employeeid" > -->
                                   
                                       <tr> <td>{{rowdata.date}}</td>
                                    <td>{{rowdata.visastatus}}</td>
                                    <td>{{rowdata.issuingcountry}}</td>
                                     <td>{{rowdata.expirationdate}}</td>
                                     <td>{{rowdata.status}}</td>   
                                       <td><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="visaupdate()">Update</button></td></tr></table>
 <!-- </template>   -->



                              
                            
   </div>


    
    
       
        
    
       
    
    
     
 

    
      </Tab>
      <Tab :isSelected="selected === 'Job'">
        
        <h2>Job Details</h2>
                    <div>
                            <h4>Hire Date:</h4>
                        </div>
                        <div>
                         <input type="text" name="hiredate" for="hiredate" placeholder="Hire Date" style="margin-left: 20px;" v-model="person.startdate">   
                        </div>
                  
                     <div class="child-4">
                        <h4>Employement Status</h4><br>
             
                            <table>

                                <thead class="thead" style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Effective Date</th>
                                <th>employement Status</th>
                                <th>Comment</th>
                                </thead>
                            <br>
                    
                        <tr>
                         <td><input type="text" name="effectivedate" for="effectivedate" placeholder="Effective Date"  v-model="person.effectivedate"> </td>
                         <td> <input type="text" name="employementstatus" for="employementstatus" placeholder="Employement Status" style="margin-left: 20px;" v-model="person.employementstatus"></td>
                         
                          <td><input type="text" name="comment" for="comment" placeholder="Comment" style="margin-left: 20px;" v-model="person.comment">  </td>
                        
                          
                         <td> <span><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
margin-left:160px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="jobhandleupdate()">Update</button></span> </td></tr>
                    </table>
                        </div><br>
                        
                               <div class="child-4">
                        <h4>Job Information</h4>
                              
                            <table>

                                <thead style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Effective Date</th>
                                <th>Location</th>
                                <th>Client Name</th>


                                <th>Job Title</th>
                                <th>Reports To</th>
                                </thead>
                                <tr>
                                <!-- <template v-for="(empdata,employeeid) in responsedata" :key="employeeid" > -->
                                    <td>{{rowdata.jobeffectivedate}}</td>
                                    <td>{{rowdata.location}}</td>
                                    <td>{{rowdata.clientname}}</td>
                                     <td>{{rowdata.jobtitle}}</td>
                                     <td>{{rowdata.reportsto}}</td> 
                                     <td><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="jobinfo()" >Update</button></td></tr>
                                <!-- </template> -->
                            </table>
                        </div><br>
                        
                        <div class="child-4">
                        <h4>Compensation</h4>
                           
                            <table>
                                <thead style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Effective Date</th>
                                <th>Pay Schedule</th>
                                <th>Pay Type</th>
                                <th>Pay Rate</th>
                                <th>Overtime</th>
                                <th>Overtime Rate</th>
                                <th>Change Reason</th>
                                
                                </thead>
                                <tr>
                                <!-- <template v-for="(empdata,index) in responsedata" :key="index" > -->
                                    <td>{{rowdata.compensationeffectivedate}}</td>
                                    <td>{{rowdata.payschedule}}</td>
                                    <td>{{rowdata.paytype}}</td>
                                     <td>{{rowdata.payrate}}</td>
                                     <td>{{rowdata.overtime}}</td> 
                                     <td>{{rowdata.overtimerate}}</td> 
                                     <td>{{rowdata.changereason}}</td> 
                                     <td><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="compinfo()" >Update</button></td></tr>
                                <!-- </template> -->
                            </table>
                            
                     
                        
                </div>
              
               
       
      </Tab>
     
  </TabNav>
</div>
</template>

<script>
import loginapi from '@/services/loginapi';
import TabNav from './TabNav';
import Tab from './Tab';
export default {
    name:"TabsView",
    components:{
      TabNav,
      Tab
    },
    data(){
      return{
        selected:'Personal',
         person:null,
         
      }
    },
    created(){
      this.person=(this.$route.params);
        console.log(this.person);
        
  this.rowdata=this.$route.params;
        
        // this.rowdata=(this.$route.params);
    },
    methods:{
      setSelected(tab){
        this.selected = tab;
        },
         
        personalhandleupdate() {
        //  this.v$.$touch();
     // console.log(this.person.firstName); // logs the input value
      const senddata={
"employeeid": parseInt(this.person.employeeid),
"empstatus": this.person.empstatus,
"firstname": this.person.firstname,
"lastname": this.person.lastname,
"fullname": this.person.fullname,
"dateofbirth": this.person.dateofbirth,
"ssn": this.person.ssn,
"taxfilenumber": parseInt(this.person.taxfilenumber),
"addressline1": this.person.addressline1,
"addressline2": this.person.addressline2,
"city": this.person.city,
"state": this.person.state,
"country": this.person.country,
"zipcode": parseInt(this.person.zipcode),
"contactnumber": parseInt(this.person.contactnumber),
"emergencynumber": parseInt(this.person.emergencynumber),
"emailaddress": this.person.emailaddress,
      }
console.log(senddata);
// if(!this.v$.$invalid){
    
      loginapi.updateempdata(senddata,this.person.id).then(response=>{
        //  console.log(response,response.status,response.data.firstname,this.person.FirstName);
if(response.data.status == "success" && response.data.statuscode == 200 ){
         console.log(response);
          alert("User Details Updated");
          this.$router.push('TabsView');
          

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
    jobhandleupdate(){
        const senddata={
            "startdate":this.person.startdate,
            "effectivedate":this.person.EffectiveDate,
            "employementstatus":this.person.employementstatus,
            "comment":this.person.Comment,
        }
        console.log(senddata);
        loginapi.updateempdata(senddata,this.person.id).then(response=>{
         console.log(response,response.status,response.data.firstName,this.person.firstName);
         if(response.data.status == "success" && response.data.statuscode == 200 ){

         console.log(response);
          alert("User Details Updated");
          this.$router.push('TabsView');
    

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
     educationupdate(rowdata){  
                this.$router.push({name:"EducationUpdate",params:rowdata});

            },
            visaupdate(rowdata){  
                this.$router.push({name:"VisaUpdate",params:rowdata});

            },
            jobinfo(rowdata){  
                this.$router.push({name:"jobupdate",params:rowdata});

            },
             compinfo(rowdata){  
                this.$router.push({name:"compensationupdate",params:rowdata});

            }
      }
    }


    



</script>

<style>
.P1{
    border-radius: 25px;
  box-sizing: border-box;
  width: 80%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
margin-left: 120px;
 text-align:justify;
 overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
.center{
  margin-left: auto;
  margin-right: auto;
}

</style>