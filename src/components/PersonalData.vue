<template>
<p>Personal Data</p>

<div class="PersonalData">
    
    <div class="P1">
       
        <p style="margin-left: 20px;">Basic Information</p>
    <label for="Employee Id" style="margin-left: 20px;">Employee Id</label><br>
    <input type="text"  placeholder="Employee Id" style="margin-left: 20px;"><br>

    <label for="Status" style="margin-left: 20px;">Status</label><br>
    <select name="Status" id="Status" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        <option disabled selected value>Status</option>
        <option value="Active" >Active</option>
        <option value="Inactive" >Inactive</option>
    </select><br>

     <label for="FirstName" style="margin-left: 20px;">First Name</label><br>
    <input type="text"  placeholder="First Name" style="margin-left: 20px;"><br>

     <label for="LastName" style="margin-left: 20px;">Last Name</label><br>
    <input type="text" placeholder="Last Name" style="margin-left: 20px;"><br>

    <label for="FullName" style="margin-left: 20px;">Full Name</label><br>
    <input type="text"  placeholder="Full Name" style="margin-left: 20px;"><br>

    <label for="birthdate" style="margin-left: 20px;">Date Of Birth</label><br>
    <input  name="Date of Birth" id="birthdate" type="date" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>
    
    <hr class="hr">

    
    <p style="margin-left: 20px;">Address</p>
     <label for="AddressLine1" style="margin-left: 20px;">AddressLine 1</label><br>
    <input type="text"  placeholder="AddressLine 1" style="margin-left: 20px;"><br>

     <label for="Addressline2" style="margin-left: 20px;">Addressline 2</label><br>
    <input type="text"  placeholder="Addressline 2" style="margin-left: 20px;"><br>

     <label for="City" style="margin-left: 20px;">City</label><br>
    <input type="text"  placeholder="City" style="margin-left: 20px;"><br>

     <label for="State" style="margin-left: 20px;">State</label><br>
    <input type="text"  placeholder="State" style="margin-left: 20px;"><br>

     <label for="Zipcode" style="margin-left: 20px;">Zipcode</label><br>
    <input type="text"  placeholder="Zipcode" style="margin-left: 20px;"><br>

    <hr class="hr">
    
     <p style="margin-left: 20px;">Contact</p>

    <label for="Phone" style="margin-left: 20px;">Phone Number</label><br>
    <input type="text"  placeholder="Phone Number" style="margin-left: 20px;"><br>

     <label for="Phone" style="margin-left: 20px;"> Alternate Phone Number</label><br>
    <input type="text"  placeholder="Alternate Phone Number" style="margin-left: 20px;"><br>


      <label for="EmailId" style="margin-left: 20px;">Email Id</label><br>
    <input type="email"  placeholder="Email Id" style="margin-left: 20px;"><br>
   
   <hr class="hr">

    <p style="margin-left: 20px;">Education</p>
       <p style="margin-left: 75px;">Master's</p>
    <label for="University" style="margin-left: 20px;">University</label><br>
    <input type="text"  placeholder="University" style="margin-left: 20px;"><br>

    <label for="Stream" style="margin-left: 20px;">Stream</label><br>
    <input type="text"  placeholder="Stream" style="margin-left: 20px;"><br>

    <label for="Course" style="margin-left: 20px;">Course</label><br>
    <input type="text"  placeholder="Course" style="margin-left: 20px;"><br>

    <label for="CGPA" style="margin-left: 260px;top: -57px;">CGPA</label><br>
    <input type="number"  placeholder="CGPA" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;"><br><br>    
    
    <span  style="top: -50px;"><input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;">-<input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;"><br></span>
  
  <hr class="hr">
  
    <p style="margin-left: 20px;">UG</p>
    <label for="University" style="margin-left: 20px;">University</label><br>
    <input type="text"  placeholder="University" style="margin-left: 20px;"><br>

    <label for="Stream" style="margin-left: 20px;">Stream</label><br>
    <input type="text"  placeholder="Stream" style="margin-left: 20px;"><br>

    <label for="Course" style="margin-left: 20px;">Course</label><br>
    <input type="text"  placeholder="Course" style="margin-left: 20px;"><br>

    <label for="CGPA" style="margin-left: 260px;top: -57px;">CGPA</label><br>
    <input type="number"  placeholder="CGPA" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;"><br><br>

    <span style="top: -50px;"><input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;">-<input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;"><br></span>
</div>




    




</div>
</template>
<script>


</script>
<style>

.P1{
    border-radius: 25px;
  box-sizing: border-box;
  width: 50%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
margin-left: 360px;
 text-align:justify;
 overflow: hidden;
   box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
.hr{
    border: 1px solid black;
}
</style>