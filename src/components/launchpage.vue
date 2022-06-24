<template>
<div class="maincontainer">
 <div class="sidebar">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
  <a href="/launchpage"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" ><i class="fa fa-fw fa-wrench"></i> Load Data</a>
  <a href="/amdpage"><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href=""><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br><br><br><br><br><br>
  <a href="/login"><i class="fa fa-fw fa-login"></i>Logout</a>

</div>
      <!-- <a href="#" style="background-color:white" class="active">
        <i class="far fa-question-circle"></i>
        <span>About</span>
      </a> -->

      <!-- <a href="#" style="background-color:white" class="active">
        <i class="fas fa-sliders-h"></i>
        <span>Services</span>
      </a>
      <a href="#">
        <i class="far fa-envelope"></i>
        <span>Contact</span>
      </a> -->
    </div>
    
<div class="welcomediv">
  <div class="welcome-header">
   <h2 class="welcome"><b>Welcome back, Lahari</b></h2>
  <div>
    <!-- <img alt="" src="../assets/snadicon.png" /> -->
    <h4>Lahari Kolipara</h4>
    <h4>Department head</h4>
  </div>
  </div>
 <div class="gross-container">
<div class="Expenses" >
    <h3>Gross profit</h3>
    <h3>Before taxes</h3>
    <p>$ 180,000</p>
  <h6 style="color: yellow;">Acess data</h6>
   
</div>

<div class="box-container">
    <div>
      <div class="box-color">
         <h3>Active Employees</h3>
            <p>{{activeemp}}</p>
            <router-link to="/activeemplydata" >
             <h6 style="color: blue;">Acess data</h6>
            </router-link>
        <!-- <router-link to="/activeemplydata" > <a @click="() =>togglepopup"><h6 style="color: blue;">Acess data</h6></a></router-link>  -->
     </div>
    <div class="box-color">
            <h3> Employee Expenses</h3>
            <p>${{empexpensestotal}}</p>
          <router-link to="/emplyexpensesData" ><h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
     </div> 
       <div>
     <div class="box-color">
            <h3>Outstanding Receivables</h3>
            <p>$ {{Receivables}}</p>
             <h6 style="color: blue;">Acess data</h6>
        
    </div>
   
  
     <div class="box-color">
            <h3>Management Expenses</h3>
            <p>$ {{mgmtexpensestotal}}</p>
           <router-link to="/mngmtexpensesData"> <h6 style="color: blue;">Acess data</h6>
           <slot/></router-link>
    </div>
       </div>
       <div>
      <div class="box-color">
            <h3>Payroll Expenses</h3>
            <p>$ {{payrollexpensestotal}}</p>
           <router-link to="/payrollData"><h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
     <div class="box-color">
            <h3>Operational Costs</h3>
            <p>$ 68 k</p>
          <router-link to="/operationalCost">  <h6 style="color: blue;">Acess data</h6></router-link>
        
    </div>
    </div>
   </div>
 </div>  



    
  
</div>
  





</template>
<script>
// import { get } from 'http';
// import { } from 'process'
import loginapi from '../services/loginapi';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'launchpage',
       data:function(){
  return {
     responsedata:[],
     activeemp:null,
     Receivables:null,
     payrollexpensestotal:null,
     empexpensestotal:null,
     mgmtexpensestotal:null
  }
       },
 
         mounted() {
  this.empdatafetch();
  },
    created () {
        this.empdatafetch();
      },
      methods:{
  empdatafetch() {
 loginapi.dashboarddata().then(response=>{
this.responsedata=response.data;
//console.log(this.responsedata)
this.activeemp=response.data.activeemp;
this.Receivables=response.data.receivablestotal;
this.payrollexpensestotal=response.data.payrollexpensestotal;
this.empexpensestotal=response.data.empexpensestotal;
this.mgmtexpensestotal=response.data.mgmtexpensestotal;
 });
      }
        
        },
    
        
      }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans:600&display=swap');
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
child-part1{
    width: 15%;
}
child-part2{
   max-width:24%;
    padding:21px;
    border-radius: 25px;
    margin-left:411px;
    margin-top:-382px;
    
}
.h6{
    color:blue;
}
   
.gros{
     box-sizing: border-box;
  font-family: sans-serif;
  
  background-color: blue;
margin-right:85px;
  
  padding: 20px;
}
.receive{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:18%;
border-radius:25px;
background-color:  white;
padding: 8px;
margin-left: 631px;
margin-left: 631px;
    margin-top: -123px;
    
  
  
}
.Expenses{
 box-sizing: border-box;
  font-family: sans-serif;
border-radius:25px;
background-color: blue;
padding: 55px;
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 92%;
    margin-left: 270px;
}
.Expenses1{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:18%;
border-radius:25px;
background-color: white;
padding: 20px;
margin-left: 623px;
    margin-top: 10px;
}
.Expenses2{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:18%;
border-radius:25px;
background-color:  white;
padding: 8px;
margin-left: 875px;
    margin-top: -209px;
}
.Expenses3{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:18%;
border-radius:25px;
background-color: white;
padding: 12px;
margin-left: 875px;
    margin-top: 19px;
}
.Expenses4{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:16%;
border-radius:25px;
background-color:  white;
padding: 12px;
margin-top: -182px;
    margin-left: 1130px;
}
.Expenses5{
 box-sizing: border-box;
  font-family: sans-serif;
  
width:16%;
border-radius:25px;
background-color:  white;
padding: 12px;
margin-top: 12px;
    margin-left: 1130px;
}
  

#check{
  display: none;
}
label #btn,label #cancel{
  position: absolute;
 
  color: white;
  border-radius: 5px;
  border: 1px solid #262626;
  margin: 15px 30px;
  font-size: 29px;
  background: #262626;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
 
}
label #cancel{
  opacity: 0;
  visibility: hidden;
}

#check:checked ~ label #btn{
  margin-left: 245px;
  opacity: 0;
  visibility: hidden;
}
#check:checked ~ label #cancel{
  margin-left: 245px;
  opacity: 1;
  visibility: visible;
}

.box-container{
      display: flex;
    justify-content: space-evenly;
    width: 75%;
}
.box-color{
  border-radius: 25px;
    background-color: white;
    padding: 8px;
    margin-bottom: 25px;
}
.gross-container{
    display: flex;
    justify-content: space-around;
        width: 100%;
}
.sidebar{
      display: flex;
    flex-direction: column;
    width: 300px;
}
.maincontainer{
  display: flex;
}
.welcomediv{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.welcome-header{
  display: flex;
    justify-content: space-between;
    margin: 30px;
    margin-left: 270px;
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
  margin: 20px;
}

.sidebar a:hover {
  color: black;
  box-sizing:border-box;
}
.img{
  margin-left: 2px;
}
</style>