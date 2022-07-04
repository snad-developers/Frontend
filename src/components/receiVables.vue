<template>
<h2>Outstanding Receivables Collections</h2>

  <div class="">
    <a href="/launchpage"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%">back</button></a>
    <table align="center" class="table-content" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:950px;
    margin-left:300px ;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white">
    <thead style=" background-color:#F3F6F9; color:grey; fill-opacity: initial;">
        <tr>
            <th>
               ClientID
            </th>
            <th>
               Client Name
            </th>
            <th>
               Receivables
            </th>
           
        </tr>
    </thead>
    <tbody>
          <template v-for="(data,index) in showdata" :key="index" > 
            <tr>

<td>{{data.clientid}}</td>
<td>{{data.clientname}}</td>
<td>{{data.sum}}</td>


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
   this.responsedata=loginapi.accessdata().then(response=>{
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

<style>

</style>