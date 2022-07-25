<template>
<!-- <form action=""> -->
    
            <!-- <div class="container"> -->
                <div class="Personal Data">
    
                  <div class="P1">
                    <h2>Job Details</h2>
                    <div>
                            <h4>Hire Date:</h4>
                        </div>
                        <div>
                         <input type="text" name="hiredate" for="hiredate" placeholder="Hire Date" style="margin-left: 20px;" v-model="person.startdate">   
                        </div>
                  
                     <div class="child-4">
                        <h4>Employement Status</h4><br>
             
                            <!-- <table>
                                <thead style="background-color:rgb(223, 181, 188); color:grey; ">
                                <th>Effective Date</th>
                                <th>Employment Status</th>
                                <th>Comment</th>
                                </thead>
                            
                            </table> -->
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
                         <!-- <select name="employementstatus" id="employementstatus" required placeholder="Employement Status" v-model="person.employementstatus" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        
        <option disabled selected value>Employement Status</option>
        <option  value="active" >Active</option>
        <option  value="inactive">In Active</option>
                         </select> -->
                          <td><input type="text" name="comment" for="comment" placeholder="Comment" style="margin-left: 20px;" v-model="person.comment">  </td>
                        
                          
                         <td> <span><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
margin-left:260px;
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
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="jhandleupdate()" >Update</button></td></tr>
                                <!-- </template> -->
                            </table>
                        </div><br>
                        
                        <div class="child-4">
                        <h4>Compensation</h4>
                           
                            <table>
                                <thead style="background-color:rgb(223, 181, 188); color:grey;     left: 36px;">
                                <th>Effective Date</th>
                                <th>Pay Schedule</th>
                                <th>Pay Type</th>
                                <th>Pay Rate</th>
                                <th>Overtime</th>
                                <th>Overtime Rate</th>
                                <th>Change Reason</th>
                                <!-- <th>Comment</th> -->
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
border: 0px solid rgb(153, 148, 148) ;" @click.prevent=" compUpdate()" >Update</button></td></tr>
                                <!-- </template> -->
                            </table>
                            
                     
                        
                </div>
                </div>
                </div>    
                   
       
<!-- </form> -->
  
</template>

<script>
import loginapi from '@/services/loginapi';

export default {
    name:"JobTab",

  data(){
    return{
        person:null,
        responsedata:[],
        rowdata:[],
               
    }

 },
 mounted(){
    this.fetch();
 },
 created(){
  this.person=(this.$route.params);
  console.log(this.person);
  this.fetch();
  this.rowdata=this.$route.params;
 },
 methods:{
     fetch() {

                loginapi.empgetvalues().then(response=>{

                    this.responsedata=response.data;

                     console.log(response);
                     console.log("response" , this.responsedata)

                });
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
 });

    // }
    },
    
    },
     jhandleupdate(rowdata){  
                this.$router.push({name:"jobupdate",params:rowdata});

            },
             compUpdate(rowdata){  
                this.$router.push({name:"compensationupdate",params:rowdata});

            }
    }
 

  
</script>

<style scoped>
.P1{
    border-radius: 25px;
  box-sizing: border-box;
  width: 80%;
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
.thead{
    width: 500px;
}
/* .container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin-inline-start: 2%;


} */
/* .box-1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-block-end: 1px solid #ccc;

    

}
.child-1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5%;

}
.box-2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block-start: 2%;
    border-block-end: 1px solid #ccc;

    

}
.child-2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:2%;
    margin-inline-start:0%;

}

.box-3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-block-end: 1px solid #ccc;
    margin-block-start: 2%;

    

}
.child-3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:5%;
    margin-inline-start:0%;

}

.box-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block-start: 2%;
    border-block-end: 1px solid #ccc;

    

}
.child-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:5%;
    margin-inline-start:0%;
    margin-block-start:5%;

} */

lable,h2,h3,h4{
    font-weight: bold;
    
}


</style>>

