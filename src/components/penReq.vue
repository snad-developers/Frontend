<template>

<h2>Pending Rquests</h2>
 <table align="center" class="table-content" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:1200px;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 50px;">

        <thead style=" background-color:rgb(153, 148, 148); color:white; fill-opacity: initial;">
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
border: 0.5px solid white ;">View</button>

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
                id:""
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
        
        },

}
</script>

<style>

#update td, th {
    border-top: 0.5px solid rgb(153, 148, 148);

    padding: 10px;
}

</style>