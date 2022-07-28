<template>
<h2>ADD Compensation Information</h2>
<a href="/activeemplydata"><button style="margin-left:-1300px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
<div class="comp"><br>
          <table>
         
<tr><td><label for="compensationeffectivedate" style="margin-left: 20px;">Effective date</label><br>
<input  name="compensationeffectivedate" id="compensationeffectivedate" type="date" v-model="person.compensationeffectivedate" style="padding: 10px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.compensationeffectivedate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "></td>

 <td><label for="payschedule" style="margin-left: 20px;">Pay schedule</label><br>
                            <select name="payschedule" id="payschedule" v-model="person.payschedule" style="margin-left: 20px;padding: 10px;width: 92%;"
                            :class="
                                    v$.person.payschedule.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "> 
                               
                                <option value="Every other week">Every other week</option>
                                <option value="Every month">Every month</option>
                                <option value="Twice a Month">Twice a Month</option>
                            </select></td></tr>
                            <tr><td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.compensationeffectivedate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td>
                                <td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.payschedule.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td></tr>

 <tr><td><label for="paytype" style="margin-left: 20px;">Paytype</label><br>
    <select name="paytype" id="paytype" v-model="person.paytype" style="width: 225px;padding: 10px ;margin-left: 20px;"
    :class="
                                    v$.person.paytype.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
       
        <option value="Salary" >Salary</option>
        <option value="Hourly" >Hourly</option>
        <option value="Commissiononly" >Commission only</option>
    </select></td>

 <td><label for="payrate" style="margin-left: 20px;">Pay Rate</label><br>
    <input type="text" name="payrate" id="payrate" placeholder="Payrate" v-model="person.payrate" style="width: 225px;padding: 10px;margin-left: 20px;"
    :class="
                                    v$.person.payrate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
 </td></tr>
 <tr><td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.paytype.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td>
                                <td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.payrate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td></tr>

     <tr><td><label for="overtime" style="margin-left: 20px;">Overtime Status</label><br>
    <select name="overtime" id="overtime" v-model="person.overtime" style="width: 225px;padding: 10px;margin-left: 20px;"
    :class="
                                    v$.person.overtime.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
       
        <option value="Exempt" >Exempt</option>
        <option value="Non-exempt" >Non-exempt</option>

    </select></td>

    <td><label for="changereason" style="margin-left: 20px;">Change Reason</label><br>
    <select name="changereason" id="changereason" v-model="person.changereason" style="width: 225px;padding: 10px ;margin-left: 20px;"
    :class="
                                    v$.person.changereason.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
       
        <option value="promotion">Promotion</option>
        <option value="relocated">Relocated</option>
        <option value="payincrease">PayIncrease</option>
        <option value="titlechange">TitleChange</option>
        

        
    </select></td></tr>
    <tr><td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.overtime.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td>
                                <td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.changereason.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td></tr>

    <tr><td> <label for="comment" style="margin-left: 20px;">Comment</label><br>
     <textarea name="comment" id="comment" v-model="person.comment" cols="30" rows="6" style="margin-left:50px"
     :class="
                                    v$.person.comment.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "></textarea>
     </td></tr>
     <tr><td><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.comment.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td></tr></table>

   <button  @click="cominfo" style="margin-left: 326px;margin-top:0%; background-color: blue;color: antiquewhite;">
                            <span class="btnText">Add Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>




</div>

</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required,email,numeric,minLength,maxLength, helpers} from "@vuelidate/validators";
import * as moment from "moment";
import loginapi from '@/services/loginapi';

export default {
    name:"compensationupdate",
    data(){
        return{
            person:null,
            response:[],
            v$: useVuelidate(),
        
               
        }
    },
     created(){
        this.person=(this.$route.params);
        console.log(this.person);
         this.responsedata=this.$route.params;
        
    
    },

    
   
        validations(){
        return{
            person:{
                 payrate: { 
                    required: helpers.withMessage("Enter Pay Rate", required), 
                    $autoDirty: true,
                    numeric,
                    
                },
                payschedule:{
                    required:helpers.withMessage("Please Select Pay Schedule",required),
                    $autoDirty: true,
                },
                paytype:{
                    required:helpers.withMessage("Please Select Paytype",required),
                    $autoDirty: true,
                },
                compensationeffectivedate:{
                    required:helpers.withMessage("Please Enter Effectivedate",required),
                    $autoDirty: true,
                },
                overtime:{
                    required:helpers.withMessage("Please Enter Overtime",required),
                    $autoDirty: true,
                },
                 overtimerate:{
                    required:helpers.withMessage("Please Enter Overtimerate",required),
                    $autoDirty: true,
                },
                 changereason:{
                    required:helpers.withMessage("Please Select Changereason",required),
                    $autoDirty: true,
                },
                 comment:{
                    required:helpers.withMessage("Please Enter Comment",required),
                    $autoDirty: true,
                },


            }
        }

    },
     methods: {
    cominfo() {
        //  this.v$.$touch();
     // console.log(this.person.firstName); // logs the input value
      const senddata={
    "compensationeffectivedate": this.person.compensationeffectivedate,
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
          alert("User Details Added");
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
  width: 40%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
  margin-left: 200px;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
}
h2{
    margin-right:200px;
}

</style>