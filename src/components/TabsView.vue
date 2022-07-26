<template>
<a href="/activeemplydata"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
   <br>
   <br>
<div class="P1">
  <TabNav :tabs="['Personal','Job']" :selected="selected" @selected="setSelected">
    <Tab :isSelected="selected === 'Personal'">
    <h4>Basic Information</h4>
       <div class="comp"><br>
      
      
      <table class="center">
        <tr><td>
           
    <label for="employeeid" style="margin-left: 20px;">Employee Id</label><br>
    <input type="text" name="employeeid" for="employeeid" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" placeholder="Employee Id" style="margin-left: 20px;"  v-model="person.employeeid"   ></td>
    
    <td><label for="empstatus" style="margin-left: 20px;">Status</label><br>
    <select name="empstatus" for="empstatus" id="empstatus"  style="width: 225px;padding: 14px 20px;margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true"   v-model="person.empstatus">
       
        <option disabled selected value>Status</option>
        <option value="Active" >Active</option>
        <option value="Inactive" >Inactive</option>
    </select></td></tr>
   
    <tr><td><label for="firstname" style="margin-left: 20px;">First Name</label><br>
    <input type="text" for="firstname"   name="firstname"  placeholder="First Name" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.firstname" ></td>
    
    <td><label for="lastname" style="margin-left: 20px;">Last Name</label><br>
    <input type="text" for="lastname" name="lastname" placeholder="Last Name"  style="margin-left: 20px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.lastname" > </td></tr>
    
     <tr><td><label for="fullname" style="margin-left: 20px;">Full Name</label><br>
    <input type="text" for="fullname"  name="fullname"  placeholder="Full Name"  style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.fullname" ></td>
    
     <td><label for="dateofbirth" style="margin-left: 20px;">Date Of Birth</label><br>
    <input  name="dateofbirth" for="dateofbirth" type="date" placeholder="Date Of Birth" style="padding: 10px 20px;width:225px;margin-left: 20px;"   :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.dateofbirth" ></td></tr>
   
    <tr><td><label for="ssn" style="margin-left: 20px;">SSN</label><br>
    <input  name="ssn" for="ssn"  type="text" placeholder="SSN" style="padding: 10px 20px;width:225px;margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.ssn" ></td>
   
    <td><label for="taxfilenumber" style="margin-left: 20px;">Tax File Number</label><br>
    <input  name="taxfilenumber" for="taxfilenumber"   type="text" placeholder="Tax File Number" style="padding: 10px 20px;width:225px;margin-left: 20px;" v-model="person.taxfilenumber" ></td></tr></table>
       </div>
    <hr class="hr">
    <div>
      <div v-if="logid.role=='Payroll Admin' ||logid.role=='Admin' ||  logid.role=='HR Manager'">
     <h4>Address</h4>
     <div class="comp"><br>
     <table class="center">

      <tr>

    

     <td><label for="addressline1" style="margin-left: 20px;">AddressLine 1</label><br>
    <input type="text" for="addressline1" name="addressline1"  placeholder="AddressLine 1" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.addressline1" ></td>
    
       
     <td><label for="addressline2" style="margin-left: 20px;">Addressline 2</label><br>
    <input type="text" for="addressline2" name="addressline2" placeholder="Addressline 2" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.addressline2" ></td></tr>
    
    <tr><td><label for="city" style="margin-left: 20px;">City</label><br>
    <input type="text" for="city" name="city"  placeholder="City" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.city"></td>
     
     
     <td><label for="state" style="margin-left: 20px;">State</label><br>
    <input type="text" for="state" name="state"  placeholder="State" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.state"></td></tr>
     
     
    <tr><td><label for="country" style="margin-left: 20px;">Country</label><br>
    <input type="text" for="country" name="country"  placeholder="country" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.country" ></td>
    
     

     <td><label for="zipcode" style="margin-left: 20px;">Zipcode</label><br>
    <input type="text" for="zipcode" name="zipcode" placeholder="Zipcode" style="margin-left: 20px;" v-model="person.zipcode"></td></tr></table>
     </div>
      </div>
     <hr class="hr">
     <div  v-if="logid.role=='Payroll Admin' ||logid.role=='Admin' ||  logid.role=='HR Manager'">
     <h4>Contact Details</h4>
     <table class="center"><tr>
     

    <td><label for="contactnumber" style="margin-left: 20px;">Phone Number</label><br>
    <input type="text" for="contactnumber" name="contactnumber" placeholder="Phone Number" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.contactnumber" ></td>
    
     <td><label for="emergencynumber" style="margin-left: 20px;"> Emergency Phone Number</label><br>
    <input type="text" for="emergencynumber" name="emergencynumber"  placeholder="Emergency Phone Number" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.emergencynumber" ></td>
    
    
       <td><label for="emailaddress" style="margin-left: 20px;">Email Id</label><br>
    <input type="email" for="emailaddress" name="emailaddress" placeholder="Email Id" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.emailaddress" ></td></tr></table> <br>
    
     <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="personalhandleupdate()" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true">Update</button>
<hr class="hr">
</div>
    </div>
<div  v-if="logid.role=='Payroll Admin' ||logid.role=='Admin' ||  logid.role=='HR Manager'">

     <h4>Education Information </h4>
      <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
margin-left:740px;
padding: 10px;
 border: 0px solid rgb(153, 148, 148) ;top: -35px;" @click.prevent="educationupdate(rowdata)">Add New Education Information</button> 

    
   
 
                               <table>

                                <thead style="background-color:rgb(223, 181, 188); color:grey;  margin-left: 30px; ">
                                <th>University</th>
                                <th>Highest Degree</th>
                                <th>Specialization</th>
                                <th>GPA</th>
                                <th>Degree Startdate</th>
                                <th>Degree Enddate</th>
                                </thead>
                                <template v-for="(rowdata,index) in responsedata" :key="index" > 
                                   
                                    <tr >
                                     <!-- <td>{{rowdata.date}}</td> -->
                                    <td>{{rowdata.university}}</td>
                                    <td>{{rowdata.highestdegree}}</td>
                                    <td>{{rowdata.specialization}}</td>
                                    <td>{{rowdata.gpa}}</td>
                                    <td>{{rowdata.degreestartdate}}</td>
                                    <td>{{rowdata.degreeenddate}}</td>
                                    </tr> </template></table> 
                                      
    
    


        
   
   
  <hr class="hr">
</div>
    <h4>Visa Information</h4>
    <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
margin-left:770px;
padding: 10px;
 border: 0px solid rgb(153, 148, 148) ;top: -35px;" @click.prevent="visaupdate(rowdata)">Add New Visainformation</button> 

                         
<table>


                                
        
        <thead style="background-color:rgb(223, 181, 188); color:grey;  margin-left: 30px; ">
        <tr>
            
            <th>Date</th>
            <th>Visastatus</th>
            <th>Issuingcountry</th>
            <th>Issueddate</th>
            <th>Expirationdate</th>
            <th>Status</th>
            
        </tr>
        </thead>
         
        <tbody >
  
       <template v-for="(rowdata,index) in resdata" :key="index" > 
           
        <tr>
<td>{{rowdata.date}}</td>
<td>{{rowdata.visastatus}}</td>
<td>{{rowdata.issuingcountry}}</td>
<td>{{rowdata.issueddate}}</td>
<td>{{rowdata.expirationdate}}</td>
<td>{{rowdata.status}}</td>
 </tr>
 </template>
 </tbody>
 </table> 
 
      

                              
                            
   


    
    
       
        
    
       
    
    
     
 

    
      </Tab>
  
      <Tab :isSelected="selected === 'Job'">
        
        <!-- <h2>Job Details</h2><br> -->
                    <div class="job"><br>
                      <table>
                        <tr>
                            <td><h4 style="margin-left:0px">Hire Date:</h4></td>
                           <td> <input type="text" name="hiredate" for="hiredate" placeholder="Hire Date" style="margin-left:10px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.startdate"></td></tr></table><br>
                            
                        
                         <!-- <input type="text" name="hiredate" for="hiredate" placeholder="Hire Date" style="margin-left: 50px;" v-model="person.startdate">    -->
                        </div>
                  
                     <div class="child-4">
                        <h4>Employement Status</h4>
             
                            <table>

                                <thead class="thead" style="background-color:rgb(223, 181, 188); color:grey;left:0px;">
                                <th>Effective Date</th>
                                <th>employement Status</th>
                                <th>Comment</th>
                                </thead>
                                <br>
                            
                    
                        <tr>
                         <td><input type="text" name="effectivedate" for="effectivedate" placeholder="Effective Date"   :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.effectivedate"> </td>
                         <td> <input type="text" name="employementstatus" for="employementstatus" placeholder="Employement Status" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.employementstatus"></td>
                         
                          <td><input type="text" name="comment" for="comment" placeholder="Comment" style="margin-left: 20px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true" v-model="person.comment">  </td>
                        
                          
                         <td> <span><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
margin-left:135px;
border: 0px solid rgb(153, 148, 148) ;top:-0px;" @click.prevent="jobhandleupdate()" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true">Update</button></span> </td></tr>
                    </table>
                        </div><br>
                        <hr class="hr">
    <h4>Job Details</h4>
    <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
margin-left:800px;
padding: 10px;
 border: 0px solid rgb(153, 148, 148) ;top: -35px;" @click.prevent="jobinfo(rowdata)">Add New Job Details</button> 

                              

                             <table>

        <thead style="background-color:rgb(223, 181, 188);text-align:center;s color:grey; ">
        <tr>
            
            <th>EffectiveDate</th>
            <th>Location</th>
            <th>ClientName</th>
            <th>JobTitle</th>
            <th>Reportsto</th>
           
        </tr>
        </thead>
         
        <tbody >
  
       <template v-for="(rowdata,index) in rdata" :key="index" > 
           
        <tr>
<td>{{rowdata.effectivedate}}</td>
<td>{{rowdata.location}}</td>
<td>{{rowdata.clientname}}</td>
<td>{{rowdata.jobtitle}}</td>
<td>{{rowdata.reportsto}}</td>

       </tr>
 </template>
 </tbody>
   
       
        
       
    </table> 
 




                             <hr class="hr">
    <h4>Compensation Details</h4>
    <button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
margin-left:720px;
padding: 10px;
 border: 0px solid rgb(153, 148, 148) ;top: -35px;" @click.prevent="cominfo(rowdata)" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager') ? false: true">Add New Compensation Details</button> 

          
  
<table>

        <thead style="background-color:rgb(223, 181, 188);text-align:center;s color:grey; ">
        <tr>
            
            <th>EffectiveDate</th>
            <th>payschedule</th>
            <th>Paytype</th>
            <th>Payrate</th>
            <th>Overtime</th>
            <th>Overtimerate</th>
            <th>Changereason</th>
            <th>Comment</th>
            
        </tr>
        </thead>
         
        <tbody >
  
       <template v-for="(rowdata,index) in cdata" :key="index" > 
           
        <tr>
<td>{{rowdata.effectivedate}}</td>
<td>{{rowdata.payschedule}}</td>
<td>{{rowdata.paytype}}</td>
<td>{{rowdata.payrate}}</td>
<td>{{rowdata.overtime}}</td>
<td>{{rowdata.overtimerate}}</td>
<td>{{rowdata.changereason}}</td>
<td>{{rowdata.comment}}</td>


       </tr>
  </template>
 </tbody>
   
       
        
       
    </table> 
  



                        
                        
              
               
       
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
         rowdata:null,
         responsedata:[],
         resdata:[],
         rdata:[],
         cdata:[],
         logid:null
         
         
      }
    },
    mounted(){
     // this.edfetch();

    },
    created(){
      this.person=(this.$route.params);
        console.log("person",this.person);
        const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
        this.logid=userdetails;
        this.rowdata=this.$route.params;
        this.edfetch();
        this.visafetch();
        this.jobfetch();
        this.compfetch();
        

  console.log("rowdata",this.rowdata)
  
      
  
        // this.rowdata=(this.$route.params);
    },
    methods:{
      edfetch(){
        var sdata={
          "employeeid":parseInt(this.rowdata.employeeid)
        }
        loginapi.educationvalues(sdata).then(response=>{
          // if(this.id==this.rowdata.id)
          this.responsedata=response.data
          console.log(response);
        })

      },
      visafetch(){
        var sdata={
         "employeeid":parseInt(this.rowdata.employeeid) 
        }
        loginapi.visainformation(sdata).then(response=>{
          // if(this.id==this.rowdata.id)
          this.resdata=response.data
          console.log(response);
        })
      },
      jobfetch(){
        var sdata={
         "employeeid":parseInt(this.rowdata.employeeid) 
        }
        loginapi.jobinformation(sdata).then(response=>{
          // if(this.id==this.rowdata.id)
          this.rdata=response.data
          console.log(response);
        })
      },
      compfetch(){
        var sdata={
         "employeeid":parseInt(this.rowdata.employeeid) 
        }
        loginapi.compensation(sdata).then(response=>{
          // if(this.id==this.rowdata.id)
          this.cdata=response.data
          console.log(response);
        })
      },
    

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
                this.$router.push({name:"EducationUpdate",params:this.rowdata});

            },
            visaupdate(rowdata){  
                this.$router.push({name:"VisaUpdate",params:this.rowdata});

            },
            jobinfo(rowdata){  
               
                if(this.logid.role=='Admin' || this.logid.role=='HR Manager'){
                  this.$router.push({name:"jobupdate",params:this.rowdata});
                }

            },
             compinfo(rowdata){  
              
               if(this.logid.role=='Admin' || this.logid.role=='HR Manager'){
                   this.$router.push({name:"compensationupdate",params:this.rowdata});
                }

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
 /* text-align:justify; */
 overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
/* .center{
  margin-left: auto;
  margin-right: auto;
} */
.job{
  margin-left: 0%;
  text-align: left;
}
p,h4{
  text-align: left;
}
.comp{
  border-radius: 25px;
  box-sizing: border-box;
  width: 60%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
  margin-left: 200px;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
  .EduUpd{
  border-radius: 25px;
  box-sizing: border-box;
  width: 60%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
  margin-left: 200px;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
   
   
 }
.box-backgroundcolor:hover {
  background-color: coral;
}


</style>