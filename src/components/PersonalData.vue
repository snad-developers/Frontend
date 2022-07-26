<template>
<p>Personal Data</p>
 <a href="/activeemplydata"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
   
<div class="PersonalData">

    
    <div class="P1">
       
        <p style="margin-left: 20px;">Basic Information</p>
    <label for="employeeid" style="margin-left: 20px;">Employee Id{{logid}}</label><br>
    <input type="text" name="employeeid" for="employeeid"  placeholder="Employee Id" style="margin-left: 20px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board' ) ? false: true" v-model="person.employeeid" r><br>
       
    <label for="empstatus" style="margin-left: 20px;">Status</label><br>
    <select name="empstatus" for="empstatus" id="empstatus"  style="width: 225px;padding: 14px 20px;margin-left: 20px;" v-model="person.empstatus">
       
        <option disabled selected value>Status</option>
        <option value="Active" >Active</option>
        <option value="Inactive" >Inactive</option>
    </select><br>

     <label for="firstname" style="margin-left: 20px;">First Name</label><br>
    <input type="text" for="firstname"   name="firstname"  placeholder="First Name" style="margin-left: 20px;" v-model="person.firstname" ><br>
      
     <label for="lastname" style="margin-left: 20px;">Last Name</label><br>
    <input type="text" for="lastname" name="lastname" placeholder="Last Name"  style="margin-left: 20px;" v-model="person.lastname"> <br>
     
    <label for="fullname" style="margin-left: 20px;">Full Name</label><br>
    <input type="text" for="fullname"  name="fullname"  placeholder="Full Name"  style="margin-left: 20px;" v-model="person.fullname" ><br>
    
    <label for="dateofbirth" style="margin-left: 20px;">Date Of Birth</label><br>
    <input  name="dateofbirth" for="dateofbirth" type="text" style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.dateofbirth" ><br>
    
    <label for="ssn" style="margin-left: 20px;">SSN</label><br>
    <input  name="ssn" for="ssn"  type="text" placeholder="SSN" style="padding: 10px 20px;width:225px;margin-left: 20px;"  v-model="person.ssn"><br>
    
    <label for="taxfilenumber" style="margin-left: 20px;">Tax File Number</label><br>
    <input  name="taxfilenumber" for="taxfilenumber"   type="text" placeholder="Tax File Number" style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.taxfilenumber"><br><br>
      <hr class="hr">
     <p style="margin-left: 20px;">Address</p>
    

     <label for="addressline1" style="margin-left: 20px;">AddressLine 1</label><br>
    <input type="text" for="addressline1" name="addressline1"  placeholder="AddressLine 1" style="margin-left: 20px;" v-model="person.addressline1" ><br>
       
     <label for="addressline2" style="margin-left: 20px;">Addressline 2</label><br>
    <input type="text" for="addressline2" name="addressline2" placeholder="Addressline 2" style="margin-left: 20px;" v-model="person.addressline2" ><br>
      
     <label for="city" style="margin-left: 20px;">City</label><br>
    <input type="text" for="city" name="city"  placeholder="City" style="margin-left: 20px;" v-model="person.city"><br>
     
     <label for="state" style="margin-left: 20px;">State</label><br>
    <input type="text" for="state" name="state"  placeholder="State" style="margin-left: 20px;" v-model="person.state" ><br>
     
    <label for="country" style="margin-left: 20px;">Country</label><br>
    <input type="text" for="country" name="country"  placeholder="country" style="margin-left: 20px;" v-model="person.country"><br>
     

     <label for="zipcode" style="margin-left: 20px;">Zipcode</label><br>
    <input type="text" for="zipcode" name="zipcode" placeholder="Zipcode" style="margin-left: 20px;" v-model="person.zipcode"><br>
    
    
    <hr class="hr">
     <p style="margin-left: 20px;">Contact</p>
     

    <label for="contactnumber" style="margin-left: 20px;">Phone Number</label><br>
    <input type="text" for="contactnumber" name="contactnumber" placeholder="Phone Number" style="margin-left: 20px;" v-model="person.contactnumber"><br>
     
     <label for="emergencynumber" style="margin-left: 20px;"> Emergency Phone Number</label><br>
    <input type="text" for="emergencynumber" name="emergencynumber"  placeholder="Emergency Phone Number" style="margin-left: 20px;" v-model="person.emergencynumber" ><br>

        <!-- v-model="person.altPhone" -->
      <label for="emailaddress" style="margin-left: 20px;">Email Id</label><br>
    <input type="email" for="emailaddress" name="emailaddress" placeholder="Email Id" style="margin-left: 20px;"  v-model="person.emailaddress"><br><br>
   <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="handleupdate()" >Update</button>
   <hr class="hr">

    <p style="margin-left: 20px;">Education</p>
       
    <label for="university" style="margin-left: 20px;">University</label><br>
    <input type="text" for="university" name="university"  placeholder="University" style="margin-left: 20px;" v-model="person.university" ><br>
    
    <label for="highestdegree" style="margin-left: 20px;">Stream</label><br>
    <input type="text" for="highestdegree" name="highestdegree" placeholder="Stream" style="margin-left: 20px;" v-model="person.highestdegree"><br>
    
    <label for="specialization" style="margin-left: 20px;">Course</label><br>
    <input type="text" for="specialization" name="specialization"  placeholder="Course" style="margin-left: 20px;" v-model="person.specialization" ><br>
     
    <label for="gpa" style="margin-left: 260px;top: -57px;">CGPA</label><br>
    <input type="number" for="gpa" name="gpa"  placeholder="CGPA" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;" v-model="person.gpa" ><br><br>    
  
    <span  style="top: -50px;"><input  name="degreestartdate" placeholder="start date" id="degreestartdate" type="text"  style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.degreestartdate">-<input  name="degreeenddate" placeholder="end date" id="degreeenddate" type="text"  style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.degreeenddate" ><br></span>
    <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="onhandleupdate(empdata)" >Add</button>
        <hr class="hr">
    <p style="margin-left: 20px;">Visa Information</p>
    <div class="child-4">
                        <h4>Job Information</h4>
                              
                            <table>

                                <thead style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Date</th>
                                <th>Visa Status</th>
                                <th>Issuing country</th>
                                <th>Expiration</th>
                                <th>Status</th>
                                </thead>
                                <tr>
                                <!-- <template v-for="(empdata,employeeid) in responsedata" :key="employeeid" > -->
                                    <td>{{rowdata.date}}</td>
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
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="update(empdata)" >Update</button></td></tr>
                                
                            </table>
                        </div>

    
    
</div>
</div>

</template>
<script>
import loginapi from '@/services/loginapi'
export default {
    name:'PersonalData',
    data(){
      

        return{
             person:null,
             logid:null
           

      

        }
    },

   

    created(){
      this.person=(this.$route.params);
        console.log(this.person);
        
  this.rowdata=this.$route.params;
   const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
      this.logid=userdetails;
        
        // this.rowdata=(this.$route.params);
    },

    methods:{
       handleupdate() {
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
// "university": this.person.university,
// "highestdegree": this.person.highestdegree,
// "specialization": this.person.specialization,
// "gpa": this.person.gpa,
// "degreestartdate":this.person.degreestartdate,
// "degreeenddate":this.person.degreeenddate,
// "date":this.person.date,
// "visastatus":this.person.visastatus,
// "issueddate":this.person.issueddate,
// "expirationdate":this.person.expirationdate,
// "status":this.person.status,
    
}

    
console.log(senddata);
// if(!this.v$.$invalid){
    
      loginapi.updateempdata(senddata,this.person.id).then(response=>{
        //  console.log(response,response.status,response.data.firstname,this.person.FirstName);
if(response.data.status == "success" && response.data.statuscode == 200 ){
         console.log(response);
          alert("User Details Updated");
          this.$router.push('PersonalData');
          

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
     onhandleupdate(rowdata){  
                this.$router.push({name:"EducationUpdate",params:rowdata});

            }
        
    }

}


</script>
<style>

.P1{
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
.hr{
    border: 1px solid black;
}
</style>