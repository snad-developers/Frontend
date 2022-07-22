<template>
<router-view>
<h2> Active Employee Data </h2>
<br>
<br>

<div id="demo">
  <div class="search">
  <input type="text" v-model="search" placeholder="Search..." style="text-align: left;width: 38%;" /> <br> <br>
  </div>  
</div>
<div class="main-container">
   <a href="/launchpage"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
   
   <router-link to="newEmp">
   <button v-if="logid.role=='Admin' ||logid.role=='HR Manager'" style="margin-left: 90%;padding: 0.5%; color:white;background-color:blue;border-radius:22px;width:max-content;cursor: pointer;">New Employee</button>

   </router-link>
    <table  class="table-content" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:100%;
    margin-left:0% ;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white">
      
        <!-- <div id=""> -->
          <thead style=" background-color:rgb(223, 181, 188); color:grey; fill-opacity: initial;text-align: justify; ">
         
        <!-- <tr> -->
            <th> Employee Number</th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
            <th> Contact Number </th>
            <th> Role </th>
        <!-- </tr> -->
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
       <tr class="emp"  @click="active(employeedata)" v-if="employeedata.empstatus == 'Active'">
   
        <td>{{employeedata.employeeid}}</td>
<td>{{employeedata.firstname}}</td>
<td>{{employeedata.lastname}}</td>
<td>{{employeedata.emailaddress}}</td>
<td>{{employeedata.contactnumber}}</td>
<td>{{employeedata.jobtitle}}</td>

    
       </tr>
 
     
    </template> 
      
   
       
        <!-- </div> -->
        
       
    </table><br><br><br> 
   
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
      responsedata:[],
      logid :null,
       search: ''
   
     
      }
      },
        mounted() {
  this.fetch();
  },
    created () {
        this.fetch();
          const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
      this.logid=userdetails;
      },
      methods:{
         active(data){

          
          
        
            
            // this.$router.push({name:"newEmp"}); 
             this.$router.push({name:"TabsView",params:data});

          
         
            

        },
  fetch() {
 loginapi.empgetvalues().then(response=>{
this.responsedata=response.data;
console.log(this.responsedata)
console.log(this.responsedata.employementstatus)
 });
      },
     
        },
 computed: {
    responsedata() {
     let se = []
     if(this.search !== '') {
      se = this.responsedata.filter(p => 
        p.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
        p.lastname.toLowerCase().includes(this.search.toLowerCase()) ||
        p.emailaddress.toLowerCase().includes(this.search.toLowerCase()) ||
        p.jobtitle.toLowerCase().includes(this.search.toLowerCase()) ||
        p.employeeid === Number(this.search)
      )
     } else {
      se = this.responsedata
     }
     return se
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
.break{
   border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}
 td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {background-color: coral;}


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