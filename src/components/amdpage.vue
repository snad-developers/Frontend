<template>
<div class="sidebar">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
  <a href="/launchpage"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" ><i class="fa fa-fw fa-wrench"></i> Load Data</a>
  <a href="/amdpage"><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href=""><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br><br><br><br><br><br>
  <a href="/login"><i class="uil uil-sign-in-alt"></i>Logout</a>
</div>
<div class="B1">
 
   <a href="/amdpage" class="b1" >Employee Data</a>
 
    <a href="/orgndata" class="b1">Organisation Data</a>
    <a href="/penReq" class="b1">Pending Requests</a>
</div>

    <table align="center" class="table-content" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:1200px;
    margin-left: 300px;
    background-color:white">

        <thead style="background-color:rgb(240, 232, 232); color:grey; ">
        <tr>
            <!-- <td> S No</td> -->
            <th> First Name </th>
            <th> Last Name </th>
            <th> Email </th>
            <th> Role </th>
            <th> Entity </th>
            <th>Action</th>
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
        <tbody >
  
       <template v-for="(employeedata,index) in responsedata" :key="index" > 
            <tr v-if="employeedata.status == 'Approved'">

        <!-- <td >{{}}</td> -->
<td>{{employeedata.firstName}}</td>
<td>{{employeedata.lastName}}</td>
<td>{{employeedata.email}}</td>
<td>{{employeedata.role}}</td>
<td>{{employeedata.entity}}</td>
<td><button style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
border: 0px solid rgb(153, 148, 148) ;" @click.prevent="handleupdate(employeedata)" >Update</button></td>

       </tr>
</template>
</tbody>
   
       
        
       
    </table> 




<!-- <form class="left"> 
    <table class="lt" align="left">
    <tr>
        <td>
            <router-link to="/dashpage"><button class="left">Dashboard</button></router-link>

        </td>
    </tr>
    <tr>
        <td>  
            <router-link to="/Ldbpage"> <button class="left">Load Data in Batch </button></router-link>
        </td>

    </tr>
    <tr>
        <td>
            <router-link to="/amdpage"><button class="left">Amend Details</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td> 
            <router-link to="/reportpage"><button class="left">Reporting Portal</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td>
           <router-link to="/login"><button id="log">LogOut</button></router-link> 
           
   
        </td>
        
    </tr>

    </table>
  
    <div id="otpt">
      <router-view/>
    </div>

  

</form>   -->

</template>

<script>
import loginapi from '@/services/loginapi';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'amdpage',

        data:function(){
            return {
                // name:'jack',
                // characters:['me','you','anand','nikhil'],
                // employeedata:[
        
                //     { EmployeeNumber:'1000',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
                //     { EmployeeNumber:'1001',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
                //     { EmployeeNumber:'1002',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
                //     { EmployeeNumber:'1003',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
                // ],

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

                loginapi.getvalues().then(response=>{

                    this.responsedata=response.data;

                    //  console.log(response);
                    //  console.log("response" , this.responsedata)

                    });
            },

            handleupdate(rowdata){  
                this.$router.push({name:"updateData",params:rowdata});

            }
        
        },
    }

</script>

<style>
    table.amd {
        /* position: ; */
         font-family: sans-serif;
         margin-left: 100px;
    }
    button.amd {
        width: 200px;
        height: 50px;
        font-size: large;
        border: solid;
        border-radius: 15px;
        margin: 50px;
        cursor: pointer;
        background-color:rgba(104, 251, 112, 0.525);
        margin-top: 100px;
         font-family: sans-serif;
    }
    .snadicon {
   cursor:pointer;

   
}

#update td, th {
    border-top: 0.5px solid rgb(153, 148, 148);

    padding: 10px;
}
button#log {
    background-color: rgb(234, 231, 231);
    height: 50px;
    font-size:medium;
    border: 10px;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9px;
    width: 200px;
    margin-top: 180px;
    margin-bottom: 15px;
    align-self: auto;
     font-family: sans-serif;
}
button.left {
    background-color: rgb(134, 255, 255);
    font-size: large;
    color: rgb(2, 2, 2);
    padding: 1px 20px;
    padding-bottom: 10px;
    margin: 1px 0px ;
    margin-bottom: 2px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgba(8, 77, 179, 0.864);
    width: 200px;
    height: 80px;
    opacity: 0.9px;
     font-family: sans-serif;
}
.lt {
    display: inline-table ;
    padding-top: 20px;
     font-family: sans-serif;
    
    
}
form.left {
    width:100%;
    padding-top: 0;
    padding-right: 0px;
    padding-left: 25px;
    color: rgb(18, 18, 18);
    margin-top: 0px;
    background: white;
    display: inline-block; 
    margin-bottom: 15px;
    border-radius: 10px;
     font-family: sans-serif;
}
 
#otpt {
    margin-top: 50px;
    margin-left: 10px;
    border-left: 100%;
     font-family: sans-serif;
}
#profile {
    align-self: auto;
     font-family: sans-serif;
}
table#prof {
    padding-left: 20px;
    margin-left: 0px;
     font-family: sans-serif;
}


div#profi {
    margin-right: 100px;
     font-family: sans-serif;

}

body {font-family: "Lato", sans-serif;}

.sidebar {
  height: 150%;
  width: 255px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:white;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
    /* margin-top: 100px; */
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  margin: 50px;
}

.sidebar a:hover {
  color: black;
  box-sizing:border-box;
}
.img{
  margin-left: 2px;
}

.B1{
    position: relative;
    margin-left: -20%;
    margin-top: 2%;
    
}
.B1 .a{
    margin: 200px;
}
.b1{
  background-color:white;
  border: none;
  color:black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.6s;
  border-radius: 15px;
}
.b1:hover{
   background-color: rgb(24, 89, 220);
   color:black;
   
}

</style>