<template>
<form action="">
    
            <div class="container">
                <div class="box-1">
                    <h3>Personal</h3>
            
                    <div class="child-1">
                        <div >
                            <label align="left" for="empid">Employee Number<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div>
                            <input required type="number" name="empid" v-model="person.empid" style="padding:5% ;border-radius:15px"
                                :class="
                                    v$.person.empid.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.empid.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                    </div>

                    <div class="child-1">
                        <div>
                            <label for="name">Name<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div style="display: flex;"> 
                            <div>
                                <input required type="text" name="firstname" v-model="person.firstname" placeholder="First Name*"
                                :class="
                                    v$.person.firstname.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.firstname.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p>                         
                            </div>      
                            
                            <div>
                                <input required type="text" name="lastname" v-model="person.lastname" placeholder="Last Name*"
                                :class="
                                    v$.person.lastname.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.lastname.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p>
                            </div>
                             
                        </div>
                    </div>
                    
                    <div class="child-1">
                        <div>
                            <label for="birthdate">Date of Birth<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div>
                            <input required type="date" name="dateofbirth" v-model="person.dateofbirth"  @blur="isUnique(this.person.dateofbirth)"
                                :class="
                                    v$.person.dateofbirth.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />
                            <span v-if="this.person.age!=''">Age:{{this.person.age}}</span>

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.dateofbirth.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                            <p

            class="text-red-500 text-xs font-thin"

           v-if="!v$.person.dateofbirth.isUnique.$response"

          >
          

            Age should be between 18 to 75

          </p>
                          

                        </div>
                        
                    
                    </div>
                    
                           
                    
                    <div class="child-1">
                        <div>
                            Gender<span style="color: red;font-size: large;">*</span>
                        </div>
                        <div>
                            <select  v-model="person.gender"  style="margin-bottom:1px;border-radius:15px;margin:0px;width: min-content; border: 1px solid black;" align="right" 
                                :class="
                                    v$.person.gender.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                                <option disabled selected value>Select Gender</option>
                                <option value ="Male">Male</option>
                                <option value ="Female">Female</option>
                                <option value ="Others">Others</option>
                            </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.gender.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                    </div>
                    
                    <div class="child-1">
                        <div>
                            <label for="SSN">SSN<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div>
                            <input required type="text" name="SSN" v-model="person.ssn" placeholder="SSN"
                                :class="
                                    v$.person.ssn.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.ssn.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                    </div>

                </div>
<div style="border-block-end: 1px solid #ccc;"></div>
                <div class="box-2">
                    <h3>Address</h3>

                   
                        <div class="child-2">
                            <div style="display:flex">
                                <input required type="text" v-model="person.add1" placeholder="Address Line 1">
                                <input required type="text" v-model="person.add2" placeholder="Address Line 2">
                            </div>
                            
                        </div>

                        <div class="child-2">
                            <div style="display: flex;">
                                <input required type="text" v-model="person.city" placeholder="City">
                                <input required type="text" v-model="person.state" placeholder="State">
                                <input required type="number" v-model="person.zipcode" placeholder="Zipcode" style="padding:1.5% ;border-radius:20px; text-align: center;">
                            </div>
                                
    
                        </div>
                        <div class="child-2">
                            <select v-model="person.country" style="margin-bottom:1px;border-radius:19px;margin:0px;width: 50%; border: 1px solid black;" >
                                <option disabled selected value>Select Country</option>
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
                            </select>
                        </div>

                   
                </div>


                 <div class="box-3">
                    <h3>Contact</h3>
                    <div class="child-3">
                        <div style="display:flex">
                            <div>
                                <input required type="number" v-model="person.mobile"  placeholder="Mobile Number*" style="padding:5% ;border-radius:20px; text-align: center; width:100%;"
                                :class="
                                    v$.person.mobile.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                                />

                                <p
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.mobile.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>

                            </div>
                                    
                            <div style="margin-left:1%">
                                <input required type="email" v-model="person.email" placeholder="Email*"
                                    :class="
                                    v$.person.email.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                                />

                                <p
                                    class="text-red-500 text-xs font-thin"
                                    v-for="error of v$.person.email.$errors"
                                    :key="error.$uid"
                                >
                                    {{ error.$message }}
                                </p>
                            </div>
                   
                            
                        </div>
                         
                    </div>
                </div>

                <div class="box-3">
                    <h3>Compensation</h3>
                    <div class="child-3">
                       <select v-model="person.payschedule"  style="margin-bottom:1px;border-radius:15px;margin:0px;width:100%; border: 1px solid black;" align="right" 
                                :class="
                                    v$.person.payschedule.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                                <option disabled selected value>Select Pay Schedule</option>
                                <option value ="Every Other Week">Every Other Week</option>
                                <option value ="Every Month">Every Month</option>
                                <option value ="Twice A Month">Twice A Month</option>
                                
                            </select>

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.payschedule.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                    </div>

                    <div class="child-3">

                        <select v-model="person.paytype"  style="margin-bottom:1px;border-radius:15px;margin:0px;width:100%; border: 1px solid black;" align="right" 
                                :class="
                                    v$.person.paytype.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                                <option disabled selected value>Select Pay Type</option>
                                <option value ="Salary">Salary</option>
                                <option value ="Hourly">Hourly</option>
                                <option value ="Commission Only">Commission Only</option>
                                
                            </select>

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.paytype.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 


                    </div>

                    <div class="child-3">
                        <input required type="text" v-model="person.payrate" placeholder="Pay Rate*"
                                :class="
                                    v$.person.payrate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.payrate.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                    </div>
                </div>

                <div class="box-4">
                    <h3>Job Information</h3>
                    <div class="child-4">
                        <div>
                            <label for="startdate">Hire Date<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div>
                            <input required type="date"  v-model="person.hiredate" 
                                :class="
                                    v$.person.hiredate.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            />

                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.hiredate.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                    </div>

                   <div class="child-4">
                        <div>
                            <label for="empstatus">Employment Status<span style="color: red;font-size: large;">*</span></label>
                        </div>

                        <div>
                            <select v-model="person.empstatus"  style="margin-bottom:1px;border-radius:15px;margin:0px;width:100%; border: 1px solid black;" align="right" 
                                :class="
                                    v$.person.empstatus.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                                <option disabled selected value>Select Status</option>
                                <option value ="Active">Active</option>
                                <option value ="Inactive">Inactive</option>
                            </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.empstatus.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                   </div>
                    
                    <div class="child-4">
                        <div>
                            <label for="empstatus">Employment Type<span style="color: red;font-size: large;">*</span></label>
                        </div>

                        <div>
                            <select v-model="person.employementstatus"  style="margin-bottom:1px;border-radius:15px;margin:0px;width:100%; border: 1px solid black;" align="right" 
                                :class="
                                    v$.person.employementstatus.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                                <option disabled selected value>Select Employeement Type</option>
                                <option value ="Full Time">Full Time</option>
                                <option value ="Part Time">Part Time</option>
                                <option value ="Intern">Intern</option>

                            </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.employementstatus.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                        </div>
                   </div>

                   <div class="child-4">
                    <div>
                        <label for="jobrole">Job Title<span style="color: red;font-size: large;">*</span></label>
                    </div>
                    <div>
                        <select name="role" for="role"  v-model="person.jobrole"  id ="repeat1" required   placeholder="Role" style="margin-bottom:1px;border-radius:15px;margin:0px;width: min-content; border: 1px solid black;"
                                :class="
                                    v$.person.jobrole.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >


                            <option disabled selected value  > Select Title </option>
                            <option value ="System Admin">System Admin</option>
                            <option value ="HR Anaylst">HR Anaylst</option>
                            <option value ="Recruiting Manager">Recruiting Manager</option>
                            <option value ="Director Operations">Director Operations</option>
                            <option value ="Business Analyst">Business Analyst</option>
                            <option value ="IT Manager">IT Manager</option>
                            <option value ="Executive Board">Executive Board</option>
                            <option value ="Department Head">Department Head</option>
                            <option value ="Payroll Admin">Payroll Admin</option>
                            <option value ="IT Manager">IT Manager</option>
                            <option value ="HR Manager">HR Manager</option>
                            <option value ="Software Developer">Software Developer</option>
                            <option value ="Tester">Tester</option>
                           

                           
                            


                        </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.jobrole.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 
                    </div>
                    </div>

                    <div class="child-4">
                        <div>
                            <label for="supervisor id">Supervisor Id<span style="color: red;font-size: large;">*</span></label>
                        </div>
                        <div>
                            <select name="supervisor" for="supervisor"  v-model="person.supervisor"  id ="repeat1" required   placeholder="Client" style="margin-bottom:1px;border-radius:15px;margin:0px;width: min-content; border: 1px solid black;"
                                :class="
                                    v$.person.supervisor.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                            
                            <option disabled selected value  > Select Client </option>
                            <template v-for="(response,index) in empresponse" :key="index" >
                                <option :value="response.employeeid" >{{response.fullname}}</option>
                            </template>
                            

                        </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.supervisor.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 

                        </div>
                    </div>
                     <div class="child-4">
                        <div> 
                            <label for="client name">Client Name<span style="color: red; font-size: large;">*</span></label>
                        </div>
                        <div> 
                            <select name="client" for="client"  v-model="person.clientname"  id ="repeat1" required   placeholder="Client" style="margin-bottom:1px;border-radius:15px;margin:0px;width: min-content; border: 1px solid black;"
                                :class="
                                    v$.person.clientname.$error === true
                                    ? 'text-fields-error'
                                    : 'text-fields'
                                " 
                            >

                            
                            <option disabled selected value  > Select Client </option>
                            <template v-for="(response,index) in clientresponse" :key="index" >
                                <option >{{response.clientname}}</option>
                            </template>
                            

                        </select>
                            <p
                                class="text-red-500 text-xs font-thin"
                                v-for="error of v$.person.clientname.$errors"
                                :key="error.$uid"
                                >
                                {{ error.$message }}
                            </p> 

                        </div>
                    </div>
                    
                </div>

            </div>
                        <button class="sumbit" @click.prevent="handlesumbit"  style="margin-left: 0;margin-top:0%;margin-bottom:2%;">
                            <span class="btnText">Save Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>


       
</form>
  
</template>

<script>
import useVuelidate from "@vuelidate/core";
import loginapi from '@/services/loginapi';
import { required, helpers, email,numeric,minLength, maxLength} from "@vuelidate/validators";
import * as moment from "moment";

export default {
    name:"newEmp",
    data(){
        return{
            clientresponse:[],
            empresponse:[],
            v$: useVuelidate(),

            person:{
                empid:null,
                firstname:"",
                lastname:"",
                dateofbirth:"",
                gender:"",
                ssn:"",
                add1:"",
                add2:"",
                city:"",
                state:"",
                zipcode:null,
                country:"",
                mobile:null,
                email:"",
                hiredate:"",
                empstatus:"",
                jobrole:"",
                supervisor:null,
                clientname:"",
                payschedule:"",
                paytype:"",
                payrate:"",
                employementstatus:"",
                age:""


            }
        }
    },

    validations(){
        return{
            person:{
                empid:{
                    required:helpers.withMessage("Please Enter Employee Id", required),
                    $autoDirty: true,
                    
                },
                firstname:{
                    required:helpers.withMessage("Please Enter First Name",required),
                    $autoDirty: true,
                },
                lastname:{
                    required:helpers.withMessage("Please Enter Last Name",required),
                    $autoDirty: true,
                },
                dateofbirth: { 
          required: helpers.withMessage("Choose Date of Birth", required), 
          $autoDirty: true,
           isUnique(value) {

          if (value === '') return true

        // standalone validator ideally should not assume a field is required

           var  age = moment(moment.now()).diff(value,"years");

    if(age >=18 &&  age <=75 ){

return true

          }else{

 return false

          }

      }
           },
                ssn:{
                    required:helpers.withMessage("Please Enter SSN",required),
                    $autoDirty: true,
                },
                gender:{
                    required:helpers.withMessage("Please Select Gender",required),
                    $autoDirty: true,
                },
                mobile: { 
                    required: helpers.withMessage("Enter Phone Number", required), 
                    $autoDirty: true,
                    numeric,
                    minLength:helpers.withMessage("Enter Valid Number", minLength(10)) ,
                    maxLength:helpers.withMessage("Enter Valid Number", maxLength(10))
                },
                email: {
                    required: helpers.withMessage("Please Enter Email", required),
                    $autoDirty: true,
                    email: helpers.withMessage("Please enter a valid email id", email),
          
                },
                hiredate:{
                    required:helpers.withMessage("Please Enter Hire Date",required),
                    $autoDirty: true,
                },
                empstatus:{
                    required:helpers.withMessage("Please Select Employee Status",required),
                    $autoDirty: true,
                },
                jobrole:{
                    required:helpers.withMessage("Please Select Job Title",required),
                    $autoDirty: true,
                },
                supervisor:{
                    required:helpers.withMessage("Please Enter Supervisor Id",required),
                    $autoDirty: true,
                },
                clientname:{
                    required:helpers.withMessage("Please Select Client Name",required),
                    $autoDirty: true,
                },
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
                employementstatus:{
                    required:helpers.withMessage("Please Select Employeement Type",required),
                    $autoDirty: true,
                },
                


            }
        }

    },

    mounted(){
        this.clientfetch();
        this.empfetch();
    },

    created(){
        this.clientfetch();
        this.empfetch();
    },

    methods:{
       
        clientfetch(){
            loginapi.getclient().then(response=>{
                this.clientresponse=response.data
                console.log(this.clientresponse)
            })
        },

        empfetch(){
            loginapi.getempvalues().then(response=>{
                this.empresponse=response.data
                console.log(this.empresponse)
            })
        },

       

        isUnique(value) {

          if (value === '') return true

        // standalone validator ideally should not assume a field is required

            this.person.age = moment(moment.now()).diff(value,"years");

    if(this.person.age >=18 &&  this.person.age <=75 ){

return true

          }else{

 return false

          }

      },
        

        handlesumbit() {
     
         //this.v$.$touch();
         
     // console.log(this.person); // logs the input value
      const senddata={
        "employeeid": this.person.empid,
        "firstname": this.person.firstname,
        "lastname": this.person.lastname,
        "fullname": this.person.firstname +" "+ this.person.lastname,
        "empstatus": this.person.empstatus,
        "emailaddress": this.person.email,
        "jobtitle": this.person.jobrole,
        "internalstaff": " ",
        "supervisor": this.person.supervisor,
        "visastatus": "NA",
        "gender": this.person.gender,
        "entity": "NA",
        "dateofbirth": this.person.dateofbirth,
        "clientname": this.person.clientname,
        "clientcode": "NA",
        "startdate": this.person.hiredate,
        "createdby": "NA",
        "updatedby": "NA",
        "immigrationstatus": "NA",
        "highestdegree": "NA",
        "university": "NA",
        "contactnumber": this.person.mobile,
        "addressline1": this.person.add1,
        "addressline2": this.person.add2,
        "city": this.person.city,
        "state": this.person.state,
        "zipcode": this.person.zipcode,
        "country": this.person.country,
        "ssn":this.person.ssn,
        "taxfilenumber": 0,
        "emergencynumber": 0,
        "effectivedate": "NA",
        "location": "NA",
        "reportsto": "NA",
        "payschedule": this.person.payschedule,
        "paytype": this.person.paytype,
        "payrate": this.person.payrate,
        "overtime": "NA",
        "overtimerate": "NA",
        "changereason": "NA",
        "comment": "NA",
        "specialization": "NA",
        "gpa": "NA",
        "degreestartdate": "NA",
        "degreeenddate": "NA",
        "date": "NA",
        "issuingcountry": "NA",
        "issueddate": "NA",
        "expirationdate": "NA",
        "status": "NA",
        "employementstatus": this.person.employementstatus,
        "jobeffectivedate": "NA",
        "compensationeffectivedate": "NA"




}
console.log(senddata);
this.v$.$touch();
    
if(!this.v$.$invalid){
 
       loginapi.newemp(senddata).then(response=>{
                console.log(response);
      //  console.log(response,response.status,response.data.firstName,this.person.firstName);
                if(response.data.status == "success" && response.data.statuscode == 200){
                    console.log(response);
                    alert("Details saved successfully ")
                    //this.sendEmail(e);
                    this.$router.push('activeemplydata');
                }else{
                    this.message=response.data.message;
                }
        });
    }


    },

    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1%;
    margin-inline-start: 20%;
        margin-inline-end: 20%;
        background-color: white;
      margin-top: 2%;
      margin-bottom: 2%;
      border-radius: 25px;
      box-shadow: 0 10px 10px 10px rgba(0,0,0,0.1);


}
.box-1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-block-end: 1px solid #ccc;
        width: 100%;

    

}
.child-1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   padding-bottom: 1%;
   margin-left: 2%;

}
.box-2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block-start: 1%;
    border-block-end: 1px solid #ccc;
    width: 100%;

    

}
.child-2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:1%;
    margin-inline-start:0%;
    margin-left: 2%;


}

.box-3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-block-end: 1px solid #ccc;
    margin-block-start: 1%;
    width: 100%;

    

}
.child-3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:1%;
    margin-inline-start:0%;
    margin-left: 2%;

}

.box-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block-start: 1%;
 width: 100%;

    

}
.child-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom:1%;
    margin-inline-start:0%;
    margin-block-start:0%;
    margin-left: 2%;


}


input{
    margin-right: 8px;
}

button{

    
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width: 200px;
    width: 100%;
    border: 1px solid white;
    outline: none;
    color: #fff;
    border-radius: 5px;
    margin: 25px 0;
    background-color: blue;
    transition: all 0.3s linear;
    cursor: pointer;
}


</style>

