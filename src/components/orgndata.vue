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
 <h4>Add Entity</h4>
 <input type="text" placeholder="Enter Entity Name" class="tbox">
 <button class="addbtn"> Add Entity</button>

  <li style="margin-left:-315px;">Averon Solutions</li>
  <li style="margin-left:-315px;">SNAD</li>
 
</div>
<div class="subentity">
 <h4>Add Role</h4>
 <input type="text" placeholder="Enter Role Name" class="tbox">
 <button class="addbtn"> Add Entity</button>

  <li style="margin-left:-315px;">Client</li>
  <li style="margin-left:-315px;" >Pay Roll</li>
  <li style="margin-left:-315px;" >Management</li>
  <li style="margin-left:-315px;" >Department Head</li>
  <li  style="margin-left:-315px;" >Accounting Clerk</li>
  <li style="margin-left:-315px;" >Admin</li>
  <li  style="margin-left:-315px;" >Payroll Admin</li>
  <li style="margin-left:-315px;" >HR Manager</li>
  <li style="margin-left:-315px;" >HR Analyst</li>
  <li style="margin-left:-315px;" >Payroll Analyst</li>
        

</div>
</template>


<script>
import loginapi from '@/services/loginapi'
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name :'orgndata',
    data:function(){
      return{
        entitydata:[],
        rolesdata:[]
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
      }
    }


}
</script>
<style>
.addentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 500px;
  height: 250px;
  background-color:white;
  margin-top: 150px;
  margin-left: 350px; 
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
  }
.subentity{
  border-radius: 25px;
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  background-color:white;
  margin-top: -260px;
  margin-left: 900px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15); 
  }  
.tbox{
  margin-left: -120px;
}  
.addbtn{
  margin: 20px;
  cursor: pointer;
}
.li{
  position: relative;
  
}

</style>