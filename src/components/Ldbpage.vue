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
   <div class="child-div2" style="margin-left: 251px">
   
    
 
  <form  class="loginhere" >
    <br>
    <br>
    <!-- <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div> -->
    <h2>Select the data you want Load </h2>
     <div class="forms" style="padding:10px">
 <input type="radio" id="html" name="fav_language" value="Client" style="margin-left: -287px; " required>
 <label for="html" style="margin:2px">Client</label><br><br>
 <input type="radio" id="css" name="fav_language" value="CSS" style="margin-left: -269px;">
 <label for="css"  style="margin:2px">Pay Roll</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -249px;">
 <label for="javascript"  style="margin:2px">Time Sheet</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -172px;">
 <label for="javascript"  style="margin:2px">Managment Expenses</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -222px;">
 <label for="javascript"  style="margin:2px">Employee Data</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -186px;">
 <label for="javascript"  style="margin:2px">Employee Expenses</label><br><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript" style="margin-left: -173px;">
 <label for="javascript"  style="margin:2px">Immigration Expenses</label><br><br>
 
  <input id="ldb" name="empexpense" type="file" required>
  <b-alert><input id ="upload" type="submit" value="Upload" @click="Upload"  style="border-radius: 25px;
    width: 25%;
    padding: 10px;
    background-color: blue;
    color:white"></b-alert>
     

       
               
   </div> 
  </form> 
  </div> 
  
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {required, minLength, maxLength, between} from 'vuelidate/lib/validators'
export default { 
    // eslint-disable-next-line vue/multi-word-component-names
     name: "login",
//      data:function () {
//        return {
//          UserId : '',
//          Password:'',
//          Entity:''

//        }
//      },
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
//      methods:{
//            validationStatus: function(validation) {
//              return typeof validation !="undefined" ? validation.$error : false;
//            },

//        Submit: function(){
//          this.$v.$touch();
//          if (this.$v.$pending || this.$v.$error) return;

//          alert('Data Submit');


//        },
//      }  
}

</script> 

<style>

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
h1{
  /* text-align: center; */
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
p{
  /* margin: 0px !important; */
}
h1{
  /* margin: 0px !important; */
}
.loginhere{
  height: 97%;
   width: 400px;
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
h1{
  /* font-family: sans-serif; */
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
h1{
  /* text-align: center  ;
  margin-left:-600px;
  font-size:50px;
  margin-top: 20px; */
  

}
p{
  /* text-align: center  ;
  margin-left:-600px;
  font-size: 30px; */
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
