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

<h2 style="margin-left:278px;"><b>Pending Requests</b></h2>
 <table align="center" class="table-content" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:950px;
    margin-left: 360px;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white">

        <thead style=" background-color:#F3F6F9; color:grey; fill-opacity: initial;">
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
            <tr v-if="employeedata.status == 'pending'">

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
margin: 5px;
border: 0.5px solid white ;" @click.prevent="handleview(employeedata)">View</button>

<button style="border-radius:10px;
 background-color: green;
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
margin: 5px;
border: 0.5px solid white ;" @click.prevent="handleapprove(employeedata.id) ">Approve</button>

<button style="border-radius:10px;
 background-color: red;
text-decoration: solid; 
color: white;
cursor: pointer;
padding: 10px;
margin: 5px;
border: 0.5px solid white ;" @click.prevent="handlereject(employeedata.id)">Reject</button></td>

       </tr>
       
</template>
</tbody>
   
       
        
       
    </table> 
  
</template>

<script>
import loginapi from '@/services/loginapi';
export default {
    name:'penReq',
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

                responsedata:[],
                approve: "Approved",
                reject: "Rejected",
                message:"",
                id:"",
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
            
            handleapprove(id){
                console.log(id)

               
                    let sdata ={
                        "status":this.approve,
                        "id":id

                    }
                    this.responsedata= loginapi.approvereq(sdata).then(response=>{
                        console.log(response,"response data");
                        if(response.data){
                            console.log("if condition")
                            if(response.data.status == "success" && response.data.statuscode == 200){
                                alert("User Approved")
                                document.location.reload(true)                          
                            }
                            if(response.data.status == "failure" && response.data.statuscode == 201){
                                this.message== response.data.message
                            }

                        }
                    })
                
            },

            handlereject(id){
                
                    let sdata ={
                        "status":this.reject,
                        "id":id

                    }
                    this.responsedata= loginapi.approvereq(sdata,this.id).then(response=>{
                        console.log(response,"response data");
                        if(response.data){
                            console.log("if condition")
                            if(response.data.status == "success" && response.data.statuscode == 200){
                                alert("User Rejected")
                                document.location.reload(true)                                
                            }
                        if(response.data.status == "failure" && response.data.statuscode == 201){
                            this.message== response.data.message
                        }

                        }
                    })
                
            },

            handleview(rowdata) {
                 this.$router.push({name:"viewDetails",params:rowdata});
                // console.log(rowdata);
              //  const rowdat
            
            }
        
        },

}
</script>

<style>

#update td, th {
    border-top: 0.5px solid rgb(240, 232, 232);

    padding: 10px;
}

</style>