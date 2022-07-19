<template>
<h2>Update compensation</h2>
<div class="comp">
<label for="Effectivedate" style="margin-left: 20px;">Effective date</label><br>
<input  name="Effective date" id="Effective date" type="date" v-model="Effectivedate" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

 <label for="Payschedule" style="margin-left: 20px;">Pay schedule</label><br>
                            <select name="Payschedule" id="Payschedule" style="margin-left: 20px;padding: 14px;width: 30%;" >
                                <option disabled selected value>Select Country</option>
                                <option value="Every other week">Every other week</option>
                                <option value="Every month">Every month</option>
                                <option value="Twice a Month">Twice a Month</option>
                            </select><br>

 <label for="Paytype" style="margin-left: 20px;">Paytype</label><br>
    <select name="Paytype" id="Paytype"  v-model="Paytype" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        <option disabled selected value>Paytype</option>
        <option value="Salary" >Salary</option>
        <option value="Hourly" >Hourly</option>
        <option value="Commissiononly" >Commission only</option>
    </select><br>

 <label for="Payrate" style="margin-left: 20px;">Pay Rate</label><br>
    <select name="Payrate" id="Payrate"  v-model="Department" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
    </select><br>

     <label for="Overtimestatus" style="margin-left: 20px;">Overtime Status</label><br>
    <select name="Overtimestatus" id="Overtimestatus"  v-model="Department" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        <option disabled selected value>Overtime Status</option>
        <option value="Exempt" >Exempt</option>
        <option value="Non-exempt" >Non-exempt</option>

    </select><br>

    <label for="Changereason" style="margin-left: 20px;">Change Reason</label><br>
    <select name="Changereason" id="Changereason" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
        <option disabled selected value>Change Reason</option>
        <option value="promotion" >Promotion</option>
        <option value="relocated" >Relocated</option>
        <option value="payincrease" >Pay Increase</option>
        <option value="titlechange" >Title Change</option>
        <option value="na" >NA</option>


        
    </select><br>

     <label for="Comment" style="margin-left: 20px;">Comment</label><br>
     <textarea name="Comment" id="Comment" cols="50" rows="4"></textarea>

   <button  @click="submit" style="margin-left: 326px;margin-top:0%; background-color: blue;color: antiquewhite;">
                            <span class="btnText">Update Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>




</div>

</template>
<script>
export default {
    name:"compensationupdate",

}
</script>

<style>
.comp{
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