<template>

<h2 style="width:100% ;">Add Job Information</h2>
<a href="/activeemplydata"><button style="left:-36%;color:white;background-color:blue;border-radius:22px;width:50px;cursor: pointer;">Back</button></a>
<div class="JOB">
                              <br>
                              
                          
<label for="jobeffectivedate" style="margin-left: 20px;">Effective date</label><br>
<input  name="jobeffectivedate" id="jobeffective date" type="date" v-model="person.jobeffectivedate" style="padding: 10px 20px;width:225px;margin-left: 20px;"
:class="
                                    v$.person.jobeffectivedate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                "><br>
<label for="clientname" style="margin-left: 20px;">ClientName</label><br>
<!-- <input  name="clientname" id="clientname" type="text" v-model="person.clientname" style="padding: 10px 20px;width:225px;margin-left: 20px;" -->
<select name="clientname"   v-model="person.clientname" style="width: 225px;padding: 10px 20px;margin-left: 20px;"
:class="
                                    v$.person.clientname.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
       <option disabled selected value  > Select Client </option>
                            <template v-for="(response,index) in clientresponse" :key="index" >
                                <option >{{response.clientname}}</option>
                            </template>

    </select><br>
                                
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.jobeffectivedate.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p><p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.clientname.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>

    <label for="jobtitle" style="margin-left: 20px;">Job Title</label><br>
    <select name="jobtitle"   v-model="person.jobtitle" style="width: 225px;padding: 10px 20px;margin-left: 20px;"
    :class="
                                    v$.person.jobtitle.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
        <option value="Productanalyst">ProductAnalyst</option>
        <option value="SoftwareEngineer">SoftwareEngineer</option>
        <option value="Marketingmanager">MarketingManager</option>
        <option value="Financialanalyst">FinancialAnalyst</option>
        <option value="Datascientist">DataScientist</option>
        <option value="Cloudengineer">CloudEngineer</option>
        <option value="Businessanalyst">BusinessAnalyst</option>
        <option value="Operationsmanager">OperationsManager</option>

    </select><br>

    <label for="reportsto" style="margin-left: 20px;">Reports To</label><br>
     
     <select name="reportsto"   v-model="person.reportsto" style="width: 225px;padding: 10px 20px;margin-left: 20px;"
     :class="
                                    v$.person.reportsto.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                ">
                                <option disabled selected value  > Select Reportsto </option>
                            <template v-for="(response,index) in nameresponse" :key="index" >
                                <option >{{response.fullname}}</option>
                            </template>

    </select><br>
                              
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.jobtitle.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                                <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.reportsto.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>


<label for="location" style="margin-left: 20px;">Location</label><br>
     <select name="location" id="location" v-model="person.location" style="margin-left: 20px;padding: 10px;width: 300px;"
     :class="
                                    v$.person.location.$error === true
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
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia, Federated States of</option>
                                <option value="Moldova">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                <option value="Saint LUCIA">Saint LUCIA</option>
                                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                <option value="Span">Spain</option>
                                <option value="SriLanka">Sri Lanka</option>
                                <option value="St. Helena">St. Helena</option>
                                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syrian Arab Republic</option>
                                <option value="Taiwan">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Viet Nam</option>
                                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select><br><br>
                            <p style="margin-left:70px"
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.location.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                             



    
    



<button  @click=" jobinfo" style=" right:-42%;background-color: blue;color: antiquewhite;">
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
    name:"jobupdate",
    data(){
        return{
            person:null,
            response:[],
            clientresponse:[],
            nameresponse:[],
              v$: useVuelidate(),
              clientname:null,
              fullname:null,
        
               
        }
    },

 created(){
  this.person=(this.$route.params);
  console.log(this.person);
  this.responsedata=this.$route.params;
       this.clientfetch();
       this.namefetch();

  
 },
 
     validations(){
    return{
      person:{
                jobtitle:{
                    required:helpers.withMessage("Please Select Job Title",required),
                    $autoDirty: true,
                },
                 location:{
                    required:helpers.withMessage("Please Select Job Location",required),
                    $autoDirty: true,
                },
                jobeffectivedate:{
                    required:helpers.withMessage("Please Enter Effectivedate",required),
                    $autoDirty: true,
                },
                clientname:{
                    required:helpers.withMessage("Please Enter Client Name",required),
                    $autoDirty: true,
                },
                 reportsto:{
                    required:helpers.withMessage("Please Enter Reportsto",required),
                    $autoDirty: true,
                },
      }
    }
     },
      methods:{
          clientfetch(){
            loginapi.getclient().then(response=>{
                this.clientresponse=response.data
                console.log(this.clientresponse)
            })
        },
        namefetch(){
            loginapi.getempvalues().then(response=>{
                this.nameresponse=response.data
                console.log(this.nameresponse)
            })
        },
     jinsert(){
         const senddata={
    
     "effectivedate":this.person.effectivedate,
     "location":this.person.location,
     "clientname":this.person.clientname,
     "jobtitle":this.person.jobtitle,
     "reportsto":this.person.reportsto,
     "employeeid":this.person.employeeid

   }
   console.log(senddata);
       loginapi.jobinsert(senddata).then(response=>{
                console.log(response);
      //  console.log(response,response.status,response.data.firstName,this.person.firstName);
                if(response.data.status == "success" && response.data.statuscode == 200){
                    console.log(response);
                    alert("Details saved successfully ")
                    //this.sendEmail(e);
                    this.$router.push('activeemplydata');
                }if(response.data.status == "faliure" && response.data.statuscode == 201 ){
         console.log(response);
          alert("Failure ");
         
 }
        });

        },
    jobinfo(){
         const senddata={
    
     "jobeffectivedate":this.person.jobeffectivedate,
     "location":this.person.location,
     "clientname":this.person.clientname,
     "jobtitle":this.person.jobtitle,
     "reportsto":this.person.reportsto,
     "employeeid":parseInt(this.person.employeeid)

   }
    console.log(senddata);
        loginapi.updateempdata(senddata,this.person.id).then(response=>{
         console.log(response,response.status,response.data.firstName,this.person.firstName);
         if(response.data.status == "success" && response.data.statuscode == 200 ){

         console.log(response);
          alert("User Details Added");
          this.$router.push('activeemplydata');
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
.JOB{
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