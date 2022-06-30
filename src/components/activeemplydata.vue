<template>
<router-view>
<h2> Active Employee Data </h2>
<br>
<br>
<div class="main-container">
    <table  class="table-content" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 15px 15px 0 0;
    overflow: hidden; width:100%">
     
        <!-- <div id=""> -->
          <thead>
         
        <tr>
            <td> Employee Number</td>
            <td> First Name </td>
            <td> Last Name </td>
            <td> Email </td>
            <td> Contact Number </td>
            <td> Role </td>
        </tr>
        </thead>
         <!-- <tr>
            <td> Employee Number</td>
            <td> First Name </td>
            <td> Last Name </td>
            <td> Email </td>
            <td> Contact Number </td>
            <td> Role </td>
            <td> Client name </td>
            <td> Entity </td>
            <td> Action </td>
        </tr> -->
   <template  v-for="(employeedata,index) in responsedata" :key="index">
       <tr v-if="employeedata.empstatus == 'Active'">
   
        <td >{{employeedata.employeeid}}</td>
<td>{{employeedata.firstname}}</td>
<td>{{employeedata.lastname}}</td>
<td>{{employeedata.emailaddress}}</td>
<td>{{employeedata.contactnumber}}</td>
<td>{{employeedata.jobtitle}}</td>
    
       </tr>
 
     
    </template> 
      
   
       
        <!-- </div> -->
        
       
    </table><br><br><br> 
    <a href="/launchpage"><button style="margin-left:-1200px;color:white;background-color:blue">back</button></a>
</div>
</router-view>
<router-view/>
</template>

<script>
import loginapi from '../services/loginapi';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'activeemplydata',
        data:function(){
   return {
//  name:'jack',
//       characters:['me','you','anand','nikhil'],
//       employeedata:[
        
//          { EmployeeNumber:'1000',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//            { EmployeeNumber:'1001',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//             { EmployeeNumber:'1002',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//              { EmployeeNumber:'1003',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
//       ],
      responsedata:[]
      }
      },
        mounted() {
  this.fetch();
  },
    created () {
        this.fetch();
      },
      methods:{
  fetch() {
 loginapi.empgetvalues().then(response=>{
this.responsedata=response.data;
console.log(this.responsedata)
 });
      }
        
        },
    
    }
</script>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 25px;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  border-radius:25px;
 ;
  
}
* {
  font-family: sans-serif; /* Change your font family */
}
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}
.content-table th,
.content-table td {
  padding: 12px 15px;
}
.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

.main-container{
    width: 87%;
    display: flex;
    flex-direction: column;
    margin-left: 105px;
}

/* #customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:hover {background-color: #ddd;}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white; */
/* } */
</style>