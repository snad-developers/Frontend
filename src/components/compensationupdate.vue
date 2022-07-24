<template>
<h2>Update compensation</h2>
<div class="comp">
<label for="effectivedate" style="margin-left: 20px;">Effective date</label><br>
<input  name="effective date" id="effective date" type="date" v-model="person.effectivedate" style="padding: 10px 20px;width:225px;margin-left: 20px;"><br>

 <label for="payschedule" style="margin-left: 20px;">Pay schedule</label><br>
                            <select name="payschedule" id="payschedule" v-model="person.payschedule" style="margin-left: 20px;padding: 14px;width: 30%;" >
                               
                                <option value="Every other week">Every other week</option>
                                <option value="Every month">Every month</option>
                                <option value="Twice a Month">Twice a Month</option>
                            </select><br>

 <label for="paytype" style="margin-left: 20px;">Paytype</label><br>
    <select name="paytype" id="paytype" v-model="person.paytype" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
       
        <option value="Salary" >Salary</option>
        <option value="Hourly" >Hourly</option>
        <option value="Commissiononly" >Commission only</option>
    </select><br>

 <label for="payrate" style="margin-left: 20px;">Pay Rate</label><br>
    <input type="text" name="payrate" id="payrate" placeholder="Payrate" v-model="person.payrate" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
    <br>

     <label for="overtime" style="margin-left: 20px;">Overtime Status</label><br>
    <select name="overtime" id="overtime" v-model="person.overtime" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
       
        <option value="Exempt" >Exempt</option>
        <option value="Non-exempt" >Non-exempt</option>

    </select><br>

    <label for="changereason" style="margin-left: 20px;">Change Reason</label><br>
    <select name="changereason" id="changereason" v-model="person.changereason" style="width: 225px;padding: 14px 20px;margin-left: 20px;">
       
        <option value="promotion">Promotion</option>
        <option value="relocated">Relocated</option>
        <option value="payincrease">Pay Increase</option>
        <option value="titlechange">Title Change</option>
        

        
    </select><br>

     <label for="comment" style="margin-left: 20px;">Comment</label><br>
     <textarea name="comment" id="comment" v-model="person.comment" cols="50" rows="4"></textarea>

   <button  @click="cominfo" style="margin-left: 326px;margin-top:0%; background-color: blue;color: antiquewhite;">
                            <span class="btnText">Update Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>




</div>

</template>
<script>
import loginapi from '@/services/loginapi';

export default {
    name:"compensationupdate",
    data(){
        return{
            person:null,
            response:[],
        
               
        }
    },
     created(){
        this.person=(this.$route.params);
        console.log(this.person);
         this.responsedata=this.$route.params;
        
    
    },

    
    methods: {
    cominfo() {
        //  this.v$.$touch();
     // console.log(this.person.firstName); // logs the input value
      const senddata={
    "effectivedate": this.person.effectivedate,
    "payschedule": this.person.payschedule,
    "paytype": this.person.paytype,
    "payrate": this.person.payrate,
    "overtime": this.person.overtime,
    "overtimerate": this.person.overtimerate,
    "changereason":this.person.changereason,
    "comment":this.person.comment,
    "employeeid":parseInt(this.person.employeeid)
      }
       console.log(senddata);
        loginapi.updateempdata(senddata,this.person.id).then(response=>{
         console.log(response,response.status,response.data.firstName,this.person.firstName);
         if(response.data.status == "success" && response.data.statuscode == 200 ){

         console.log(response);
          alert("User Details Updated");
          this.$router.push('activeemplydata');
    

// //  senddata(e);
//  this.$router.push('login');
 }
  if(response.data.status == "faliure" && response.data.statuscode == 201 ){
         console.log(response);
          alert("Failure ");
         // this.$router.push('PersonalData');
          

// //  senddata(e);
//  this.$router.push('login');
 }
  });
    }
    }


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