<template>

<h2 style="width: 100%;">Add Visa Information</h2>
<a href="/activeemplydata"><button style=" left:-36%;color:white;background-color:blue;border-radius:22px;width:50px;cursor: pointer;">Back</button></a>
  <div class="visa"><br>
      
      
<label for="date" style="margin-left: 20px;">Date</label><br>
<input  name=" date" id="date" type="date" v-model="person.date" style="padding: 10px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.date.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "><br>
                                
                            

 <label for="visastatus" style="margin-left: 20px;">Visa Type</label><br>
                            <select name="visastatus" id="visastatus" placeholder="Visa Type" v-model="person.visastatus" style="margin-left: 20px;padding: 10px;width: 225px;"
                            :class="
                                    v$.person.visastatus.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "> 
                              
                               <option value="B1">B1</option>
                              <option value="B2">B2</option>
                              <option value="H1B">H1B</option>
                              <option value="H2B">H2B</option>
                              <option value="L1A">L1A</option>
                              <option value="L2A">L2A</option>
                              <option value="permanent">Permanent Resident </option>
                            </select><br>
                             <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.date.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                 <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.visastatus.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>

<label for="issuingcountry" style="margin-left: 20px;">Issuing Country</label><br>
     <select name="issuingcountry" id="issuingcountry" v-model="person.issuingcountry" style="margin-left: 20px;padding: 10px;width: 225px;"
     :class="
                                    v$.person.issuingcountry.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">  
     
                                <option disabled selected value>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antartica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo">Congo, the Democratic Republic of the</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                <option value="Croatia">Croatia (Hrvatska)</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="France Metropolitan">France, Metropolitan</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                <option value="Holy See">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran (Islamic Republic of)</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                <option value="Korea">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
     </select><br>
    <label for="issueddate" style="margin-left: 20px;">Issued Date</label><br>
<input  name=" issueddate" id="issueddate" type="date" v-model="person.issueddate" style="padding: 10px 20px;width:225px;margin-left: 20px;"
 :class="
                                    v$.person.issueddate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "><br>
 <p
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.issuingcountry.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.issueddate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                 <!-- <p

            class="text-red-500 text-xs font-thin"

           v-if="!v$.person.issueddate.isUnique.$response"

          >

            Age should be between 18 to 75

          </p> -->
                                
                                
<label for="expirationdate" style="margin-left: 20px;">Expiration Date</label><br>
<input  name=" expirationdate" id="expirationdate" type="date" v-model="person.expirationdate"   style="padding: 10px 20px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.expirationdate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                 <!-- <span v-if="this.jackson.status!=''">Status:{{Active}}</span> -->
                                 
                                



    <!-- <td> <label for="status" style="margin-left: 20px;">status</label><br>
     <input name="status" id="status"  type="text" v-model="person.status"  style="padding: 10px 20px;width:225px;margin-left: 20px;"
    :class="
                                    v$.person.status.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "></td></tr> -->
                    
                    
                               <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.expirationdate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                  <!-- <p

            class="text-red-500 text-xs font-thin"

           v-if="!v$.person.expirationdate.isUnique.$response"

          >
          

             Age should be between 18 to 75 

          </p> -->
                            
                               <!-- <td> <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.status.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p></td> -->
                            <br><br> 

           
   <button  @click="visaupdate" style=" right:-42%;background-color: blue;color: antiquewhite;">
                            <span class="btnText">Add Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>




</div>

</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required,helpers,email,numeric,minLength,maxLength} from "@vuelidate/validators";
import * as moment from "moment";
import loginapi from '@/services/loginapi';

export default {
    name:"VisaUpdate",
     data(){
        return{
            person:null,
            responsedata:[],
             v$: useVuelidate(),
             jackson:{
                status:null,
             }
            
        
               
        }
    },
     created(){
        this.person=(this.$route.params);
        console.log(this.person);
        this.responsedata=this.$route.params;
        // isUnique(this.person.expirationdate);
       
    
    },

    
   
    validations(){
       return{
      person:{
                date:{
                    required:helpers.withMessage("Please Enter Date",required),
                    $autoDirty: true,
                },
                visastatus:{
                    required:helpers.withMessage("Please Select Visastatus",required),
                    $autoDirty: true,
                },
                issuingcountry:{
                    required:helpers.withMessage("Please Select Country",required),
                    $autoDirty: true,
                },
                issueddate:{
                    required:helpers.withMessage("Please Enter Isseued Date",required),
                    $autoDirty: true,
                     isUnique(value) {

          if (value === '') return true

        // standalone validator ideally should not assume a field is required

         var expirydate = moment(this.person.expirationdate);
          

var issueddate = moment(value);

//var firstDate = moment("2013-12-01", 'YYYY-MM-DD'); //Create date using string-format constructor
//var secondDate = moment("2016-12-01", 'YYYY-MM-DD');
var duration = moment.duration(expirydate.diff(issueddate));
var years = duration.asYears();
console.log(years)
console.log(Math.round(years))
var diff=Math.round(years)

    if(diff >= 5  ){

return true

          }else{

 return false

          }

      }
                },
                expirationdate:{
                    required:helpers.withMessage("Please Enter Expiration Date",required),
                    $autoDirty: true,
                },
                // status:{
                //     required:helpers.withMessage("Please Enter Status",required),
                //     $autoDirty: true,
                // },
      }
      }
      },


   methods: {
    visaupdate() {
        //  this.v$.$touch();
     // console.log(this.person.firstName); // logs the input value
            var expirydate = moment(this.person.expirationdate);
            var status;

var now = moment();

if (now > expirydate) {
  console.log("past")
  status="Inactive"
} else {
  console.log("future")
    status="Active"
}
      const senddata={
    "date": this.person.date,
    "visastatus": this.person.visastatus,
    "issuingcountry": this.person.issuingcountry,
    "issueddate": this.person.issueddate,
    "expirationdate": this.person.expirationdate,
    "status": status,
    "employeeid":parseInt(this.person.employeeid),
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
.visa{
   border-radius: 25px;
  box-sizing: border-box;
  width: 50%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
align-items: center;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
   left: 25%;
  
   
}

</style>