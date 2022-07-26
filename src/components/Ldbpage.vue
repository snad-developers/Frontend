<template>
   <div class="sidebar">
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
   <a href="/launchpage" style="margin-left:-24px"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/Ldbpage" style="margin-left:-30px" ><i class="fa fa-fw fa-wrench"></i> Load Data</a>
  <a href="/amdpage" style="margin-left:3px" v-if="logid.role=='Admin'"><i class="fa fa-fw fa-user"></i>Amend Details</a>
  <a href="" style="margin-left:16px"><i class="fa fa-fw fa-envelope"></i>Reporting portal</a><br><br><br><br><br><br><br>
    <a href="/login"><i class="uil uil-sign-in-alt"></i>Logout</a>
</div>
<div class="main-box">
    <div class="child-part1">
    <!-- <input type="checkbox" id="check"> -->
    <!-- <label for="check">
      <i class="fas fa-bars" id="btn" style="margin-left:-642px"></i>
      <i class="fas fa-times" id="cancel" style="margin-left:-370px"></i>
    </label> -->
    </div>
 


      <!-- <a href="#" style="background-color:white" class="active">
        <i class="fas fa-sliders-h"></i>
        <span>Services</span>
      </a>
      <a href="#">
        <i class="far fa-envelope"></i>
        <span>Contact</span>
      </a> -->
    </div>
   <div class="child-div2" style="margin-left: -1050px">
   
    
 
  <form  class="loginhere" style="right:-178px;" >
    <br>
    <br>
    <!-- <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div> -->
    <h2>Select the data you want to Load </h2>

     <div class="forms" style="padding:10px">
 <input type="radio" id="html" name="fav_language" value="Client" style="margin-left: -287px; " :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" required @click="(filename='0')">
 <label for="html" style="margin:2px">Client</label><br><br>
 <input type="radio" id="css" name="fav_language" value="CSS" style="margin-left: -269px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board' || logid.role=='Payroll Admin') ? false : true"  @click="(filename='1')">
 <label for="css"  style="margin:2px">Pay Roll</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -249px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" @click="(filename='2')">
 <label for="javascript"  style="margin:2px">Time Sheet</label><br><br>
 <input type="radio" id="javas" name="fav_language" value="JavaScript" style="margin-left: -172px;"  :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" @click="(filename='3')">
 <label for="javas"  style="margin:2px">Management Expenses</label><br><br>
 <input type="radio" id="script" name="fav_language" value="JavaScript" style="margin-left: -222px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" @click="(filename='4')">
 <label for="script"  style="margin:2px">Employee Data</label><br><br>
 <input type="radio" id="jav" name="fav_language" value="JavaScript" style="margin-left: -186px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" @click="(filename='5')">
 <label for="jav"  style="margin:2px">Employee Expenses</label><br><br>
 <input type="radio" id="ascript" name="fav_language" value="JavaScript" style="margin-left: -173px;" :disabled="(logid.role=='Admin'|| logid.role=='HR Manager' || logid.role=='Executive Board') ? false : true" @click="(filename='6')">
 <label for="ascript"  style="margin:2px">Immigration Expenses</label><br><br>

 
  <input id="ldb" name="empexpense" required  type="file" accept=".csv" @change="handleFileUpload( $event )" requried>
  <b-alert><input id ="upload" type="submit" value="Upload" @click.prevent="validatefields"  style="border-radius: 25px;
    width: 25%;
    padding: 10px;
    background-color: blue;
    color:white" ></b-alert>
     <p  style="color: red;">{{validate_message}}</p>

    <p v-if="show" style="color: green;">{{insertmessage}}</p>
        <p v-if="!show" style="color: red;">{{insertmessage}}</p>

     

       
               
   </div> 
  </form> 
  <br><br><br>
  <div class="scrollWrapper" v-if="parsed && insertmessage">
  <h4>Rejected Records</h4>
    <table v-if="parsed && insertmessage" style="width: 100%;border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:100%;
    margin-left:0% ;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white;">
    <thead style=" background-color:rgb(223, 181, 188); color:grey; fill-opacity: initial;text-align: justify; ">
        <tr>
            <th v-for="(header, key) in content.meta.fields"
                v-bind:key="'header-'+key" style="border: 1px solid;">
                {{ header }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row, rowKey) in content.data"
            v-bind:key="'row-'+rowKey" >
                <td v-for="(column, columnKey) in content.meta.fields"
                    v-bind:key="'row-'+rowKey+'-column-'+columnKey" style="border: 1px solid;">
                    {{content.data[rowKey][column]}}
                        <!-- <input v-model="content.data[rowKey][column]"/> -->
                </td>
        </tr>
    </tbody>
</table>
</div>
  </div> 
  
</template>

<script>
// eslint-disable-next-line no-unused-vars
//import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import loginapi from '../services/loginapi';
import Papa from 'papaparse';
export default { 
    // eslint-disable-next-line vue/multi-word-component-names
     name: "login",
      data() {
    return {
       file: '',
        content: [],
        parsed: false,
        filename:'',
        show:false,
        showdata:[],
        insertmessage:'',
        validate_message:'',
        logid:null
        
    };
    
  },
   created () {
      
      
       const userdetails=JSON.parse(localStorage.getItem('UserDetails')) ? JSON.parse(localStorage.getItem('UserDetails')) : "";
      this.logid=userdetails
      
      },

//      validations:{
//          // eslint-disable-next-line no-undef
//          UserId:{
//            required,
//            minLength: minLength(8),
//            maxLength: maxLength(16),

//          },
//          Password:{
//            required,
//            minLength: minLength(8),
//            maxLength: maxLength(16),
//          }
//      },
   methods: {
handleFileUpload( event ){
    this.file = event.target.files[0];
    this.parseFile();
},
parseFile(){
    Papa.parse( this.file, {
        header: true,
        skipEmptyLines: true,
        complete: function( results ){
            this.content = results;
            console.log(this.content.data)
            this.parsed = true;
        }.bind(this)
    } );
},

validatefields(){
  
    if(!this.filename &&  !this.content.data){
      this.validate_message="Please Select File Name  and choose file";
    
    }
     else if(!this.filename){
      this.validate_message="Please Select File Name";
    }
    else if(!this.content.data){
    this.validate_message="Choose File ";
    }
    else if(this.filename &&  this.content.data.length > 0){
      this.submitUpdates()
    }


},

submitUpdates(){  
    var data;
        if(this.filename=='0'){
          console.log("client data")
 data=this.content.data;
 for (var i=0; i<data.length; i++){
    data[i].clientcode=parseInt(data[i].clientcode);
    data[i].taxfederal=parseInt(data[i].taxfederal);
   
}
}
    if(this.filename=='1'){
       console.log("payroll")
 data=this.content.data;
 for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid);
    data[i].noofhours=parseInt(data[i].noofhours);
    data[i].payrate=parseInt(data[i].payrate);
    data[i].grosspay=parseInt(data[i].grosspay);
    data[i].payrollexpense=parseInt(data[i].payrollexpense);
    data[i].insurancebycompany=parseInt(data[i].insurancebycompany);
    data[i].totalpayroll=parseInt(data[i].totalpayroll);
    data[i].createdby=parseInt(data[i].createdby);
    data[i].updatedby=parseInt(data[i].updatedby);
   
}
}
if(this.filename=='2'){
   console.log("time sheet")
 data=this.content.data
for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid);
    data[i].clientid=parseInt(data[i].clientid);
    data[i].noofhours=parseInt(data[i].noofhours);
    data[i].payrate=parseInt(data[i].payrate);
    data[i].revenuerate=parseInt(data[i].revenuerate);
    data[i].operationalcost=parseInt(data[i].operationalcost);
    data[i].receivables=parseInt(data[i].receivables);
    data[i].createdby=parseInt(data[i].createdby);
    data[i].updatedby=parseInt(data[i].updatedby);
   
}
}
    if(this.filename=='3'){
       console.log("management expenses")
 data=this.content.data;
 for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid);
    data[i].amount=parseInt(data[i].amount);
    data[i].approvedby=parseInt(data[i].approvedby);
    data[i].createdby=parseInt(data[i].createdby);
   
}
}
    if(this.filename=='4'){
       console.log("employee data")
 data=this.content.data;
  for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid);
    data[i].supervisor=parseInt(data[i].supervisor);
    data[i].contactnumber=parseInt(data[i].contactnumber);
   
}
}
    if(this.filename=='5'){
       console.log("employee expenses")
 data=this.content.data;
 for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid);
    data[i].clientcode=parseInt(data[i].clientcode);
    data[i].amount=parseInt(data[i].amount);
    data[i].approvedby=parseInt(data[i].approvedby);
    data[i].createdby=parseInt(data[i].createdby);
    data[i].updatedby=parseInt(data[i].updatedby);
   
}
}

if(this.filename=='6'){
   console.log("immigration expenses")
 data=this.content.data
for (var i=0; i<data.length; i++){
    data[i].employeeid=parseInt(data[i].employeeid)
    data[i].amount=parseInt(data[i].amount)
    data[i].approvedby=parseInt(data[i].approvedby)
    data[i].createdby=parseInt(data[i].createdby)
    data[i].updatedby=parseInt(data[i].updatedby)
   
}
}
console.log(data)
      let sdata = {

 "FileUploadData":data,
 "filename":this.filename,
 "FileData":data

}
console.log(sdata)
   this.responsedata=loginapi.fileUpload(sdata).then(response=>{
 console.log(response)
 if(response.data.statuscode==200){
  this.show=true
 }
 else{
  this.show=false
 }
 this.content.data=response.data.duplicaterecords
 this.insertmessage=response.data.message;
//  alert(this.insertmessage);
 this.validate_message="";

   })
   
}
   }
}

</script> 

<style>
div.scrollWrapper{

  height:380px;
width: 39%;
  overflow:scroll;
  margin-left: 45%;
}
.main-container{
  display: flex;
  flex-direction: row;
}
.child-div1{
  width: 200%;
}
.child-div2{
  width: 200%;
}

div{
  text-align: center;
}
.backbtn{
    text-align: left;
}

input[type=text]{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
   
}
input[type=password]{

    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
select{
    width: 28%;
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
     font-family: sans-serif;
}
input[type=button]{
    width: 10%; 
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color: rgb(119, 6, 6);
    color: white;
     font-family: sans-serif;
}
.button{
    
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #634ed8;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;
}
.button1{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
     font-family: sans-serif;
     transition: 0.5s;
}

 

.img{
  text-align: left 2px;
  margin-left:-10px ;
  margin-bottom: 10px;
}

.backbtn{
  align-items: baseline;
   font-family: sans-serif;
}
input[type="checkbox"] {
  -webkit-appearance: checkbox;
     -moz-appearance: checkbox;
          appearance: checkbox;
  display: inline-block;
  font-family: sans-serif;
 width: auto;
}
.FG{
   text-justify: auto;
   text-align: right;
}
body{
  background:-webkit-linear-gradient(left #bb8c9a) ;
  margin: 15px;
  margin-top: 50px;
  position: relative;
   font-family: sans-serif;

}  
.loginhere,
.loginhere * {
  box-sizing: border-box;
  font-family: sans-serif;
  margin:0px;


  
  

  
}

.loginhere{
  height: 97%;
   width: 500px;
   /* max-height: 5%; */
   margin: 10px auto;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);  
   
   margin-bottom: 0%;
   font-family: sans-serif;
   background-color:white;
   
}


.imgs{
  display: block;
  max-width: 125px;
  margin: 0 auto;
}
.forms{
  padding: 10px;
}
.user::placeholder{
  color: #aaaaaa;

}

.regis{
   box-sizing: border-box;
  font-family: sans-serif;
  margin-right: 75%;
  background: #eeee;
  margin-left: 5%;
  border-radius: 25px;


  
  
}
.form{
  background-color: #dddddd;
}

.main-div{
      display: flex;
    justify-content: space-around;
}
p{
  margin: 0px;
}
.child-div1{
  margin:0px !important
}

body {font-family: "Lato", sans-serif;}

.sidebar {
  height: 50%;
  width: 255px;
  position: relative;
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
  margin: 100px;
}

.sidebar a:hover {
  color: black;
  box-sizing:border-box;
}
.img{
  margin-left: 2px;
}




</style>
