<template>
<div class="maincontainer">
 <div class="sidebar">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
 <a href="/launchpage" style="margin-left:-24px"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" style="margin-left:-30px" ><i class="fa fa-fw fa-wrench" ></i> Load Data</a>
  <a href="/amdpage" style="margin-left:3px" v-if="logid.role=='Admin'"><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href="" style="margin-left:16px"><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br><br><br>
   <a href="" @click.prevent="logout"><i class="uil uil-sign-in-alt"></i>Logout</a>

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
  <div class="welcome-header" v-if="logid">
   <h2 class="welcome"><b>Welcome back, {{logid.firstName}}</b></h2>
  <div class="profile">
    <!-- <img alt="" src="../assets/snadicon.png" /> -->
      <h6 style="margin-bottom:0;font-size:15px;font-family: sans-serif;">{{logid.firstName}} {{logid.lastName}}</h6>
       <h6 style="margin-bottom:0;font-size:14px;font-family: sans-serif; color: grey;" >{{logid.role}}</h6> 

  
    
  </div>
  </div>
 <div class="gross-container">
<!-- <div class="Expenses" >
    <h3>Gross profit</h3>
    <h3>Before taxes</h3>
    <p>$ 180,000</p>
  <h6 style="color: yellow;">Acess data</h6>
   
</div> -->

<div class="box-container">
    <div>
      <div @click="access" v-bind:class="[(this.logid.role=='Admin' || this.logid.role=='HR Manager' || this.logid.role=='Payroll Admin' || this.logid.role== 'Department Head' || this.logid.role=='Executive Board' || this.logid.role=='Director' || this.logid.role== 'Manager' )? 'box-backgroundcolor box-color': 'box-color']"  style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
         <h3>Active Employees</h3>
            <p><i class="uil uil-user" style="margin-left:0"></i> {{activeemp}}</p>
        <!-- <router-link to="/activeemplydata" > <a @click="() =>togglepopup"><h6 style="color: blue;">Acess data</h6></a></router-link>  -->
     </div>
    <div @click="expense" v-bind:class="[(  this.logid.role=='Payroll Admin'   || this.logid.role=='Executive Board')? 'box-backgroundcolor box-color': 'box-color']" style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
            <h3> Employee Expenses</h3>
            <p>${{(empexpensestotal/1000).toFixed(2)}}K</p>
          <!-- <router-link to="/employeexpensedata" ><h6 style="color: blue;">Acess data</h6></router-link> -->
        
    </div>
     </div> 
       <div>
     <div   @click="receivables" v-bind:class="[(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board')? 'box-backgroundcolor box-color': 'box-color']" style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
            <h3>Outstanding Receivables</h3>
            <p>$ {{(Receivables/1000).toFixed(1)}}K</p>
             <!-- <router-link to="/receiVables"><h6 style="color: blue;">Acess data</h6></router-link>  -->
             
        
    </div>
   
  
     <div  @click="managment" v-bind:class="[(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board')? 'box-backgroundcolor box-color': 'box-color']" style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
            <h3>Management Expenses</h3>
            <p>$ {{(mgmtexpensestotal/1000).toFixed(2)}}K</p>
           <!-- <router-link to="/managmentexpenses"> <h6 style="color: blue;">Acess data</h6>
           <slot/></router-link> -->
    </div>
       </div>
       <div>
      <div  @click="payroll" v-bind:class="[(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board')? 'box-backgroundcolor box-color': 'box-color']" style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
            <h3>Payroll Expenses</h3>
            <p>$ {{(payrollexpensestotal/1000).toFixed(2)}}K</p>
           <!-- <router-link to="/payrollaccessdata"><h6 style="color: blue;">Acess data</h6></router-link> -->
        
    </div>
     <div  @click="cost"  v-bind:class="[(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board')? 'box-backgroundcolor box-color': 'box-color']" style="overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);">
            <h3>Operational Costs</h3>
            <p>$ {{(operationalcount/1000).toFixed(2)}}K </p>
          <!-- <router-link to="/operationalCost">  <h6 style="color: blue;">Acess data</h6></router-link> -->
        
    </div>
       </div>
    
   </div>
 </div>  
 



    
  
</div>
<div class="Bargraph"  v-if="data.length>0">
     <GChart
      type="ColumnChart"
      :options="options"
      :data="data"
    />   
    </div>
  





</template>
<script>
// import { get } from 'http';
// import { } from 'process'
import { GChart } from "vue-google-charts";
import loginapi from '../services/loginapi';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'launchpage',
    components: {
    GChart
  },
       data:function(){
  return {
     responsedata:[],
     activeemp:null,
     Receivables:null,
     payrollexpensestotal:null,
     empexpensestotal:null,
     mgmtexpensestotal:null,
    logid:null,
    operationalcount:0,
    data: [
      // ['Element', 'Density', { role: 'style' }],
      //    ['Outstandingreceivables',this.Receivables, '#3CB371'],
      //    ['Payrollexpenses', this.payrollexpensestotal, '#DC143C'],
      //    ['Employeeexpenses', this.empexpensestotal, '#F8D12F'],
      //    ['Managementexpenses', this.mgmtexpensestotal, 'color: #AFEEEE' ],
      //    ['Operationalcost', this.operationalcount, 'color: #6B58E2' ]
       
      ],
      options: {
        width: 990,
        height: 400
      }
  }
       },
 
         mounted() {
  this.empdatafetch();
   //this.GetloginDetails();
   this.getaccessdata();
  },
    created () {
        this.empdatafetch();
      //this.GetloginDetails();
       const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
      this.logid=userdetails,
      this.getaccessdata();
      },
      methods:{
        access(){
          // alert("access")
           this.$router.push({name:"activeemplydata"}); 
          
         
            

        },
               expense (){
          // alert("access")
          
          if( this.logid.role=='Payroll Admin'   || this.logid.role=='Executive Board' ){
            
            this.$router.push({name:"employeexpensedata"}); 
          }
        
         
            

        },
        receivables(){
          // alert("access")
          
          if(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board'){
            
            this.$router.push({name:"receiVables"}); 
          }
         
            

        },
        managment(){
          // alert("access")
          
          if(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board'){
            
            this.$router.push({name:"managmentexpenses"}); 
          }
         
            

        },
         payroll(){
          // alert("access")
          
          if(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board'){
            
            this.$router.push({name:"payrollaccessdata"}); 
          }
         
            

        },
                 cost(){
          // alert("access")
          
          if(this.logid.role=='Admin' || this.logid.role=='Payroll Admin' || this.logid.role=='Executive Board'){
            
            this.$router.push({name:"operationalCost"}); 
          }
         
            

        },
        

  logout(){
localStorage.removeItem('UserDetails')
localStorage.removeItem('currentUser')
  this.$router.push({name:"login"});
  },
  empdatafetch() {
 loginapi.dashboarddata().then(response=>{
this.responsedata=response.data;
//console.log(this.responsedata)
this.activeemp=response.data.activeemp;
this.Receivables=response.data.receivablestotal;
this.payrollexpensestotal=response.data.payrollexpensestotal;
this.empexpensestotal=response.data.empexpensestotal;
this.mgmtexpensestotal=response.data.mgmtexpensestotal;
 this.data=[ 
        ['Element', ' ', { role: 'style' }],

         ['Outstanding receivables',this.Receivables, '#3CB371'],
         ['Payroll expenses', this.payrollexpensestotal, '#DC143C'],
         ['Employee expenses', this.empexpensestotal, '#F8D12F'],
         ['Management expenses', this.mgmtexpensestotal, 'color: #AFEEEE' ],
         ['Operationalcost', this.operationalcount, 'color: #6B58E2' ]]

 });
      },
        getaccessdata(){
   this.responsedata=loginapi.operationalaccess().then(response=>{
 console.log(response)
  console.log(response.data.result)
 if(response && response.data.result){
      console.log(response.data.result)
var showdata=response.data.result;

      for(var i =0; i<showdata.length; i++){
        this.operationalcount=this.operationalcount+parseInt(showdata[i].totalexpenses);
      }
      console.log(this.operationalcount)
     
  
 }
   });
},



       
        }

        
    
        
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
.box-backgroundcolor:hover {
  background-color: coral;
}
.Expenses{
 box-sizing: border-box;
  font-family: sans-serif;
border-radius:25px;
background-color: blue;
padding: 30px;
    width: 18%;
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
    width: 60%;
}
.box-color{
  border-radius: 25px;
    background-color: white;
    padding: 8px;
    margin-bottom: 25px;
    width: 100%;
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
.profile{
  display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.Bargraph{
  width:40%;
  margin-left: 260px;

}

g > rect:nth-of-type(2) {

display: none !important;

}
</style>