<template>
<!DOCTYPE html>
<!--=== Coding by CodingLab | www.codinglabweb.com === -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!----======== CSS ======== -->
    <link rel="stylesheet" href="style.css">
     
    <!----===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!--<title>Responsive Regisration Form </title>--> 
</head>
<body>
    <div class="container" style ="margin-left: 41px; width:110%;">
        

        <form action="#">
             
            <div class="form first" style="border-radius: 20px; background-color:white; margin-top:70px" >
                <br>
                <div class="hello" style="font-size:35px">
                 <header>Users Details</header>
                 </div>
                 <br>
                <div class="details personal">
                    <br>
                    
                    <!-- <span class="title">Personal Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                            <label for="F" style="margin-left: -845px;
    font-size: 20px;
<!-- <!-- }">First Name :  </label>
                            <input type="text" name="firstName"   v-model=this.rowdata.firstName style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                        <br>
                       

                        <div class="input-field">
                            <label for="" style="margin-left: -120px;
    font-size: 20px; top:-82px;">LastName: </label>
                            <input type="text" v-model=this.rowdata.lastName style="outline: none;
    font-size: 14px;
    top:-82px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                        <br>

                        <div class="input-field">
                             <label for="" style="margin-left: -826px; top:-60px;
    font-size: 20px;">Entity:  </label>   
                              <input type="text" v-model=this.rowdata.entity style="outline: none;
    font-size: 14px;
    font-weight: 400;
    top:-60px;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                        <br>

                        <div class="input-field">
                           
        <label for="" style="margin-left: -853px; top:-31px;
    font-size: 20px;">Gender: </label> 
                           <input type="text" v-model=this.rowdata.gender style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-33px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly> 
                        </div>

                        <div class="input-field">
                         <label for="" style="margin-left: 599px;top: -301px;
    position: relative;
    font-size: 20px;">Role: </label>
                            <input type="text" v-model=this.rowdata.role style="outline: none;
    font-size: 14px;
    top:-301px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>  
                            
                        </div>

                        <div class="input-field" >
                            <label for="" style="margin-left: -878px; top:-45px;
    font-size: 20px;">Address1: </label> 
                            <input type="text" v-model=this.rowdata.address1 style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-44px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                        <br>
                        <div class="input-field">
                           <label for="" style="margin-left: -115px;top:-121px;
    font-size: 20px;">Address2: </label> 
      <input type="text" v-model=this.rowdata.address2  style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-122px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                          <div class="input-field">
                          <label for="" style="margin-left: 608px;position: relative;
    top: -277px;
    font-size: 20px;">Country: </label>
      <input type="text" v-model=this.rowdata.country  style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-277px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                         </div>
                          <div class="input-field">
                         <label for="" style="margin-left: 645px;top: -235px;
    position: relative;
    font-size: 20px;">state: </label>
                            <input type="text" v-model=this.rowdata.state style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    top:-235px;
    height: 42px;
    margin: 8px 0;" readonly> 
                            
                        </div>
                              <div class="input-field"  >
                           <label for="" style="margin-left: -74px;position: relative;
    top: -507px;
    font-size: 20px;">City: </label>
                              <input type="text" v-model=this.rowdata.city style="outline: none;
    font-size: 14px;
    top:-506px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>  
                        </div>
                         </div>
                              <div class="input-field">
                            <label for="" style="margin-left: 593px;
    top: -561px;font-size:20px
    <!-- font-size: 20px;" >Zipcode: </label> 
                              <input type="text" v-model=this.rowdata.zipcode style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-562px
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    border-radius:20px;
    margin: 8px 0;" readonly>
                        </div>
                         <div class="input-field">
                            <label for="" style="margin-left: -127px;position: relative;
    top: -515px;font-size:20px
    <!-- font-size: 20px;" >Company Id: </label> 
                              <input type="text" v-model=this.rowdata.idnumber style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-511px;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    border-radius:20px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                        
                        
                       <!-- <a href="/penReq"><button  class="back"  style="margin-left: -102px;
    top: -337px; margin:0%;  width: 14%;
    padding: 12px;
    background-color:blue;
    border-radius: 20px;">back</button></a> -->

                   
                </div>
               

                <!-- <div class="details ID">
                    

                  
                        <div class="input-field">
                                <label for="role">Role</label>
      <select name="entity" id ="repeat1" required  placeholder="entity" align="right" class="user">
<option disabled selected value  >  </option>
<option value ="Management">Management</option>
<option value ="Department heads">Department heads</option>
<option value ="Department heads">Department heads</option>
<option value ="Accounting clerks">Accounting clerks</option>
<option value ="Resource managers">Department heads</option>
<option value ="Admin">Admin</option>
<option value ="Payroll Admin">Payroll Admin</option>
<option value ="HR Manager">HR Manager</option>
<option value ="HR Analyst">HR Analyst</option>
<option value ="Payroll Analyst">Payroll Analyst</option>
</select>
                         </div> -->

                        <!-- <div class="input-field">
                            <label for="company id">Company Id</label>
      <input type="text" class="company" placeholder="Company Id" required style="
    margin-bottom: -8px;" >
                        </div>

                        <div class="input-field">
                             <label for="user id">User id</label>
                             <input type="text" class="username" placeholder="User Id" required style="width: 100%; 
    margin-bottom: -8px;" >
                        </div> -->

                      <!-- <div class="input-field">
                             <label for="create password">Create Password</label>
      <input type="text" class="phone" placeholder="Create Password" required >
                        </div>

                        <div class="input-field">
                              <label for="confirm  password"> Confirm Password</label>
      <input type="text" class="phone" placeholder="Confirm Password" required >
                        </div> -->

                        -->
                    <!-- </div> -->

                   <!-- <button class="sumbit" style="margin-left: 326px;">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    
                </div> 
            </div> -->

            <!-- <div class="form second">
                <div class="details address">
                    <span class="title">Address Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Address Type</label>
                            <input type="text" placeholder="Permanent or Temporary" required>
                        </div>

                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter nationality" required>
                        </div>

                        <div class="input-field">
                            <label>State</label>
                            <input type="text" placeholder="Enter your state" required>
                        </div>

                        <div class="input-field">
                            <label>District</label>
                            <input type="text" placeholder="Enter your district" required>
                        </div>

                        <div class="input-field">
                            <label>Block Number</label>
                            <input type="number" placeholder="Enter block number" required>
                        </div>

                        <div class="input-field">
                            <label>Ward Number</label>
                            <input type="number" placeholder="Enter ward number" required>
                        </div>
                    </div>
                </div>

                <div class="details family">
                    <span class="title">Family Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Father Name</label>
                            <input type="text" placeholder="Enter father name" required>
                        </div>

                        <div class="input-field">
                            <label>Mother Name</label>
                            <input type="text" placeholder="Enter mother name" required>
                        </div>

                        <div class="input-field">
                            <label>Grandfather</label>
                            <input type="text" placeholder="Enter grandfther name" required>
                        </div>

                        <div class="input-field">
                            <label>Spouse Name</label>
                            <input type="text" placeholder="Enter spouse name" required>
                        </div>

                        <div class="input-field">
                            <label>Father in Law</label>
                            <input type="text" placeholder="Father in law name" required>
                        </div>

                        <div class="input-field">
                            <label>Mother in Law</label>
                            <input type="text" placeholder="Mother in law name" required>
                        </div>
                    </div>

                    <div class="buttons">
                        <div class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Back</span>
                        </div>
                        
                        <button class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>  -->
            <!-- </div> -->
            </div>
            
            
            
        </form>
        
    </div>
    
   <!--<script src="script.js"></script>-->
</body>
</html>
  <a href="/penReq"><button  class="back"  style="margin-left: -102px;
    top: -337px; margin:0%;  width: 14%;
    padding: 12px;
    background-color:blue;
    border-radius: 20px;">back</button></a>
   
</template>

<script>


    export default {
        name:'viewDetails',
        data() {
        return{
            rowdata:null,
        }
        },

        created(){
             this.rowdata=(this.$route.params);
            console.log(this.rowdata);
            
        }
    }

</script>

<style>
*{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    position: relative;
}
.form {
    background-color:white;
    width: 87%;
    border-radius: 33px;
}


</style>

