<template>

<side-menu></side-menu>
 <div class="welcomediv">

<div class="B1">
 
   <a href="/amdpage" class="b1" >Employee Data</a>
 
    <a href="/orgndata" class="b1">Organisation Data</a>
    <a href="/penReq" class="b1">Pending Requests</a>
</div>
<div class="penreq">
 <table align="center" class="table-content scrolldown" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    background-color:white">

        <thead class="head" style=" background-color:rgb(223, 181, 188); color:grey; fill-opacity: initial;">
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
<td>
    <div style="display: flex;"><button style="border-radius:10px;
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
border: 0.5px solid white ;" @click.prevent="handlereject(employeedata.id)">Reject</button>
</div>
</td>

       </tr>
       
 </template>
 </tbody>
   
       
        
       
    </table> 
  </div>
  </div>
</template>

<script>
import loginapi from '@/services/loginapi';
import sidemenu from '../components/common/sidemenu.vue';
export default {
    name:'penReq',
        components: {
    'side-menu':sidemenu
  },
    data:function(){
            return {
                

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
/* .penreq{
z-index: 100;
    width: calc(100% - 280px);
} */
@media only screen and (max-width: 600px){
     .penreq{
        overflow: scroll;
       
     }
    
    
}
@media only screen and (max-width: 600px){
      head{
         overflow: scroll;
        
     }
    
    
}
#update td, th {
    border-top: 0.5px solid rgb(240, 232, 232);

    padding: 10px;
}

 table.scrolldown {
            width: 100%;
              
            /* border-collapse: collapse; */
            /* border-spacing: 0;
            border: 2px solid black; */
        }
          
        /* To display the block as level element */
        table.scrolldown tbody, table.scrolldown thead {
            display: block;
        } 
          
        thead tr th {
            height: 40px; 
            line-height: 40px;
        }
          
        table.scrolldown tbody {
              
            /* Set the height of table body */
            height: 500px; 
              
            /* Set vertical scroll */
            overflow-y: auto;
              
            /* Hide the horizontal scroll */
            overflow-x: hidden; 
        }
          
       
          
        tbody td, thead th {
            width : 200px;
            /* border-right: 2px solid black; */
        }
        td {
            text-align:center;
        }

</style>