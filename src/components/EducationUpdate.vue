<template>
<h2>Update Education Information</h2>
<div class="EduUpd">
<label for="University" style="margin-left: 20px;">University</label><br>
<input  name="University" id="University" type="text" v-model="text" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

<label for="Degree" style="margin-left: 20px;">Degree</label><br>
    <select name="Degree" id="Degree"  v-model="Degree" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        <option disabled selected value>Degree</option>
        <option value="Bachelor's" >Bachelor's</option>
        <option value="Master's" >Master's</option>
        <option value="Doctorate" >Doctorate</option>
        <option value="Associate's" >Associate's</option>

    </select><br>

<label for="Specialization" style="margin-left: 20px;">Specialization</label><br>
<input  name="Specialization" id="Specialization" type="text" v-model="Specialization" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

<label for="CGPA" style="margin-left: 260px;top: -57px;">CGPA</label><br>
<input type="number"  placeholder="CGPA" style="margin-left: 260px;border-radius: 11px;width: 80px;text-align: center;top: -57px;"><br><br>    
    
<span  style="top: -50px;"><input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;">-<input  name="startdate" id="birthdate" type="date"  style="padding: 10px 20px;width:225px;margin-left: 20px;"><br></span>
</div>

</template>

<script>
export default {
    name: "EducationUpdate"
}

</script>

<style>
.EduUpd{
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

</style>
