<template>
<router-view>
  <div id="top">
<img width="100" height="100" src="@/assets/snadicon.png" alt="" align="left" id="top">
<div id="profi" align="right">
<img width="60" height="60" src="@/assets/profile.png" alt="" id="profile" align="right">
    <table align="right" id="prof">
        <tr><td><label>Lahari Kolipara</label></td></tr>
        <tr><td><label>Admin</label></td></tr>
    </table>
</div>
</div>
<table align="center" id="LDB">
    <h1> Select the data you want load </h1>
  
  <select name="selection" id="selection" class="entity" >
   <option value="Select">Select</option>
    <option value="Payroll">payroll</option>
    <option value="Client">Client</option>
    <option value="Timesheet">Timesheet</option>
    <option value="Employee expenses">Employee expenses</option>
    <option value="Employee data">Employee data</option>
    <option value="Immigration expenses">Immigration expenses</option>
    <option value="Management expenses">Management expenses</option>
  </select>
  <br><br>
  <input id="ldb" name="empexpense" type="file">
               
  <input id ="upload" type="submit" value="Upload" @click="Upload" >
                
</table>
<form class="top-left"> 
    <table class="lt" align="left">
    <tr>
        <td>
            <router-link to="/dashpage"><button class="left">Dashboard</button></router-link>

        </td>
    </tr>
    <tr>
        <td>  
            <router-link to="/Ldbpage"> <button class="left">Load Data in Batch </button></router-link>
        </td>

    </tr>
    <tr>
        <td>
            <router-link to="/amdpage"><button class="left">Amend Details</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td> 
            <router-link to="/reportpage"><button class="left">Reporting Portal</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td>
           <router-link to="/login"><button id="log">LogOut</button></router-link> 
           
   
        </td>
        
    </tr>

    </table>
  
    <div id="otpt">
      <router-view/>
    </div>

  

</form>  

 
</router-view>
<routerview/>                
</template>
<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name :'Ldbpage',
}
</script>


<style>
input#upload {
  width: 200px;
  text-align: center;
  color: blue;
  background-color: #4011fe; 
  border: solid white;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: solid;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
   font-family: sans-serif;
}
table.LDB {
  text-align: right;
  color: black;
   font-family: sans-serif;
}
.snadicon {
   cursor:pointer;
    font-family: sans-serif;
}
button#log {
    background-color: rgb(234, 231, 231);
    height: 50px;
    font-size:medium;
    border: 10px;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9px;
    width: 200px;
    margin-top: 180px;
    margin-bottom: 15px;
    align-self: auto;
     font-family: sans-serif;
}
button.left {
    background-color: rgb(134, 255, 255);
    font-size: large;
    color: rgb(2, 2, 2);
    padding: 1px 20px;
    padding-bottom: 10px;
    margin: 1px 0px ;
    margin-bottom: 2px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(0, 0, 0);
    width: 200px;
    height: 80px;
    opacity: 0.9px;
     font-family: sans-serif;
}
.lt {
    display: inline-table ;
    padding-top: 20px;
     font-family: sans-serif;
    
    
}
form.left {
    width:100%;
    padding-top: 0;
    padding-right: 0px;
    padding-left: 25px;
    color: rgb(18, 18, 18);
    margin-top: 0px;
    background: white;
    display: inline-block; 
    margin-bottom: 15px;
    border-radius: 10px;
     font-family: sans-serif;
}
 
#otpt {
    margin-top: 50px;
    margin-left: 10px;
    border-left: 100%;
     font-family: sans-serif;
}
#profile {
    align-self: auto;
     font-family: sans-serif;
}
table#prof {
    padding-left: 20px;
  font-family: sans-serif;
 margin-left: 0px;
}


div#profi {
    margin-right: 100px;
     font-family: sans-serif;

}
</style>