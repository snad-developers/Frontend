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

<div class="addentity">
 <h4 style="margin-left:-360px;box-sizing:border-box;background-color:#F3F6F9;padding:15px;margin:0px"><b>Entities</b></h4>
 <input type="text" placeholder="Enter Entity Name" class="tbox" v-model="person.entity">
 <button class="addbtn" @click.prevent ="entityhandle"> Add Entity</button>

  <template  v-for="(entity,index) in entitydata" :key="index">
  <li style="text-align: left; margin-left: 10%;">{{entity.entity}}</li>
  </template>

</div>
<div class="subentity">
 <h4 style="margin-left:-36px;box-sizing:border-box;background-color:#F3F6F9;padding:15px;margin:0px"><b>Roles</b></h4>
 <input type="text" placeholder="Enter Role Name" class="tbox" v-model="person.role">
 <button class="addbtn" @click.prevent="rolehandle"> Add Role</button>

    <template  v-for="(role,index) in rolesdata" :key="index">
  <li style="text-align: left; margin-left: 10%;">{{role.roles}}</li>
  </template>

</div>
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
        person:{
          role:"",
          entity:"",
        }
      }
    },

    mounted() {
      this.orgn();
      this.role();

    },

    created() {
      this.orgn();
      this.role();
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

      entityhandle(){
        const sdata ={
          "entity":this.person.entity
        }
        console.log(sdata);
        loginapi.orgndatapost(sdata).then(response =>{
          if(response.status==201 ){
            console.log(response);
            alert("Entity Updated Successfully");
            document.location.reload(true)
          }
        });
      },

       rolehandle(){
        const sdata ={
          "roles":this.person.role
        }
        console.log(sdata);
        loginapi.rolespost(sdata).then(response =>{
          if(response.status==201 ){
            console.log(response);
            alert("Role Updated Successfully");
            document.location.reload(true)
          }
        });
      }
    }


}
</script>

<style>
.addentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 410px;
  height: auto;
  background-color:white;
  margin-top: 27px;
  margin-left: 330px; 
  padding-bottom: 2%;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
  }
.subentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 410px;
  height: auto;
  background-color:white;
  margin-top: -14.5%;
  margin-left: 800px;
  padding-bottom: 2%;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15); 
  }  
.tbox{
  margin-left: 10px;
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
</style>
