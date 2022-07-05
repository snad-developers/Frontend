<template>
<div class="sidebar">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
   <a href="/launchpage" style="margin-left:-24px"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" style="margin-left:-30px" ><i class="fa fa-fw fa-wrench"></i> Load Data</a>
  <a href="/amdpage" style="margin-left:3px"><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href="" style="margin-left:16px"><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br><br><br><br><br><br>
   <a href="/login"><i class="uil uil-sign-in-alt"></i>Logout</a>

</div>

<div class="B1">
 
   <a href="/amdpage" class="b1" >Employee Data</a>
    <a href="/orgndata" class="b1">Organisation Data</a>
    <a href="/penReq" class="b1">Pending Requests</a>
</div>
<table style="margin-left:17%" class="orgndata">
  <td class="orgndata">
<div class="addentity">
 <h4 style="margin-left:-360px;box-sizing:border-box;background-color:rgb(223, 181, 188);padding:15px;margin:0px"><b>Entities</b></h4>
 <input type="text" placeholder="Enter Entity Name" class="tbox" v-model="person.entity">
 <button class="addbtn" @click.prevent ="entityhandle"> Add Entity</button>

  <template  v-for="(entity,index) in entitydata" :key="index">
  <li style="text-align: left; margin-left: 10%;">{{entity.entity}}</li>
  </template>

</div>
</td>

<td class="orgndata">
<div class="subentity">
 <h4 style="margin-left:-36px;box-sizing:border-box;background-color:rgb(223, 181, 188);padding:15px;margin:0px"><b>Roles</b></h4>
 <input type="text" placeholder="Enter Role Name" class="tbox" v-model="person.role">
 <button class="addbtn" @click.prevent="rolehandle"> Add Role</button>

    <template  v-for="(role,index) in rolesdata" :key="index">
  <li style="text-align: left; margin-left: 10%;">{{role.roles}}</li>
  </template>


</div>
</td>

<td class="expdata">
<div class="expenses">
 <h4 style="margin-left:-36px;box-sizing:border-box;background-color:#F3F6F9;padding:15px;margin:0px"><b>Expenses</b></h4>
 <input type="text" placeholder="Expense Name" class="expbox" v-model="person.expense">
  <input type="text" placeholder="Expense Code" class="expbox" v-model="person.expcode">

 <button class="addbtn" @click.prevent="exphandle"> Add Expense</button>

<table align="center" class="expdata" id="expdata" style="  border-spacing: 0;
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:95%;
    margin-left:0 ;
    margin-top: 0;
    margin-bottom: 0;
    background-color:white;
    align-content: center;"
    >
    <thead style=" background-color:#F3F6F9; color:grey; fill-opacity: initial;width:100%">
        <tr align="left" >
            <th style="margin-left:30px">
              Expense Name
            </th>
            <th>
              Expense Code
            </th>
           
           
        </tr>
    </thead>
    <tbody align="left" style="margin-left:30px" >
          <template v-for="(data,index) in expdata" :key="index" > 
            <tr>

<td>{{data.expenses}}</td>
<td>{{data.expensecode}}</td>



       </tr>
       
</template>
       
    </tbody>
</table>


</div>
</td>
</table>

</template>


<script>
import loginapi from '@/services/loginapi'
import { resolveComponent } from '@vue/runtime-core';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name :'orgndata',
    data:function(){
      return{
        entitydata:[],
        rolesdata:[],
        expdata:[],
        person:{
          role:"",
          entity:"",
          expense:"",
          expcode:"",
        }
      }
    },

    mounted() {
      this.orgn();
      this.role();
      this.expense();

    },

    created() {
      this.orgn();
      this.role();
      this.expense();

    },

    methods:{
      orgn(){
        loginapi.orgndatagetvalues().then(response=>{
          this.entitydata=response.data;
          console.log(this.entitydata)
        });
      },

      role(){
        loginapi.rolesgetvalues().then(response=>{
          this.rolesdata=response.data;
          console.log(this.rolesdata)
        });
      },
      expense(){
        loginapi.expgetvalues().then(response=>{
          this.expdata=response.data;
          console.log(this.expdata)
        });

      },

      entityhandle(){
        const sdata ={
          "entity":this.person.entity
        }
        if(!this.person.entity==""){
          console.log(sdata);
        loginapi.orgndatapost(sdata).then(response =>{
          if(response.status==201 ){
            console.log(response);
            alert("Entity Updated Successfully");
            document.location.reload(true)
          }
        });
        }
        else{
          alert("Please enter Entity")
        }
      },

      rolehandle(){
        const sdata ={
          "roles":this.person.role
        }
        if(!this.person.role==""){
          console.log(sdata);
        loginapi.rolespost(sdata).then(response =>{
          if(response.status==201 ){
            console.log(response);
            alert("Role Updated Successfully");
            document.location.reload(true)
          }
        });
        }
        else{
          alert("Please enter Role")
        }
      },

      exphandle(){
        const sdata ={
          "expenses":this.person.expense,
          "expensecode":this.person.expcode
        }
       if(!this.person.expense=="" && !this.person.expcode==""){
         console.log(sdata);
        loginapi.expdatapost(sdata).then(response =>{
          if(response.status==201 ){
            console.log(response);
            alert("Expense Updated Successfully");
            document.location.reload(true)
          }
        });
       }
       else{
        alert('Please enter Expense name and Expense code')
       }
      },

    }


}
</script>

<style>
.addentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 375px;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;

   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
  }
.subentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 360px;

  height: fit-content;
  background-color:white;
  margin-top: -14.5%;
  margin: 0;
  padding-bottom: 2%;

   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15); 
  }  
  .expenses{
  border-radius: 25px;
  box-sizing: border-box;
  width: 95%;
  margin-right: 1%;

  height: fit-content;
  background-color:white;
  margin-top: -14.5%;
  margin:0 ;
  padding-bottom: 0%;

   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15); 
  }  


.tbox{
  margin:1%;
  width:45%;
  
} 
.expbox{
  margin:1%;
  width:30%;
  
}  
.addbtn{
  margin: 20px;
  cursor: pointer;
  border-radius: 25px;
    width: 25%;
    padding: 10px;
    background-color: blue;
    color:white;
}
.li{
  position: relative;
  
}
.orgndata table{
  padding:1% ;
}
#expdata td, th {
    border-top: 0.5px solid rgb(240, 232, 232);

    padding: 5px;
    padding-left: 10px;
}

</style>
