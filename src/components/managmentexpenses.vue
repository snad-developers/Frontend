<template>
<h2 style="width:100%">Management Expenses</h2>

  <div class="">
    <router-link to="launchpage"><button style="right: 30%; align-items: flex-start; color:white;background-color:blue;border-radius:22px;width:50px;cursor: pointer;">Back</button></router-link>
    <table  class="table-content" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:60%;
    align-items: center;
    margin-left: 20%;
    margin-right: 20%;
    
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white">
    <thead style=" background-color:rgb(223, 181, 188); color:grey; fill-opacity: initial;">
        <tr>
            <th>
               EMPLOYEE ID
            </th>
            <th>
               FIRST NAME
            </th>
            <th>
               LAST NAME
            </th>
             <th>
               TOTAL MANAGEMENT EXPENSES
            </th>
           
        </tr>
    </thead>
    <tbody>
          <template v-for="(data,index) in showdata" :key="index" > 
            <tr>

<td>{{data.employeeid}}</td>
<td>{{data.firstname}}</td>
<td>{{data.lastname}}</td>
<td>$ {{data.sum}}</td>


       </tr>
       
</template>
       
    </tbody>
</table>
</div>
   
</template>

<script>
import loginapi from '@/services/loginapi'
export default {
    name: "receiVables",
    data(){
        return{
            showdata:[],
        }
    },
    mounted(){
        this.getaccessdata();
    },
     created(){
        this.getaccessdata();
    },

    methods:{
       getaccessdata(){
   this.responsedata=loginapi.managmentaccessdata().then(response=>{
 console.log(response)
  console.log(response.data.result)
 if(response && response.data.result){
      console.log(response.data.result)
this.showdata=response.data.result;
  
 }
   });
},
    }

}
</script>

<style scoped>

</style>