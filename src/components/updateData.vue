<template>
   <div class="container" style ="margin-left: 222px;">
        <header>Update Details</header>

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <!-- <span class="title">Personal Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                            <label for="firstname">First Name</label>
                            <input type="text" for="firstName" name="firstName" placeholder="Enter your name" required v-model="person.firstName">
                        </div>

                        <div class="input-field">
                            <label for="lastName">Last Name</label>
                            <input type="text" name="lastName" for="LastName" placeholder="Enter your name" required v-model="person.lastName">
                        </div>
                        <div class="input-field">
                            <label for="idnumber">Idnmber</label>
                            <input type="text" name="idnumber" for="idnumber" placeholder="Enter your name" required v-model="person.idnumber">
                        </div>

                        <div class="input-field">
                             <label for="address1">Adress Line1</label>
                              <input type="text" for="address1" name="address1" class="last name" placeholder="Adress Line1" required v-model="person.address1" >
                        </div>
                         <div class="input-field">
                             <label for="address2">Adress Line2</label>
                              <input type="text" for="address2" name="address2" class="last name" placeholder="Adress Line1" required v-model="person.address2" >
                        </div>


                        <div class="input-field">
                            <label for="city">City</label>
                           <input for="city" name="city" type="text" class="company" placeholder="City" required v-model="person.city" >
                        </div>

                        <div class="input-field">
                            <label for="gender">Gender</label>
                            <select required name="gender" for="gender" v-model="person.gender" style="width: 100%;">
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div class="input-field" >
                           <label for="state">State</label>
                            <input for="state" name="state" type="text" class="username" placeholder="State" required v-model="person.state" style="width: 100%;" >
                        </div>
                        <div class="input-field">
                           <label for="zipcode">Zip Code</label>
      <input type="text" for="zipcode" name="zipcode" class="phone" placeholder="Zip Zode" required v-model="person.zipcode" >
                        </div>
                          <div class="input-field">
                           <label for="country">Country</label>
      <input type="text" for="country" name="country" class="phone" placeholder="Country" required v-model="person.country">
                         </div>


        <div class="input-field">
        <lable for="Entity">Entity</lable>
      <select name="Entity" for="Entity" id ="repeat1" required v-model="person.Entity"  placeholder="Entity" align="right" class="user">
       
      <option disabled selected value  > Choose Entity </option>
      <option value="Averon Solutions">Averon Solutions</option>
      <option value="SNAD">SNAD</option>
     </select>
   
     </div>
                         <div class="input-field">
                            <label for="dateofBirth">Date Of Birth</label>
                            <input type="date" name="dateofBirth" for="dateofBirth" placeholder="Date Of Birth" required v-model="person.dateofBirth">
                        </div>
                         


                         </div>
                       

                   
                </div>

                <div class="details ID">
                    <!-- <span class="title">Identity Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                                <label for="role">Role</label>
      <select name="role" for="role" id ="repeat1" required v-model="person.role"  placeholder="entity" align="right" class="user">
<option disabled selected value  > Choose Role </option>
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
                         </div>

                        

                        <div class="input-field">
                             <label for="email">User id</label>
                             <input type="email" name="email" for="email" class="username" placeholder="User Id" required v-model="person.email" style="width: 100%; 
    margin-bottom: -8px;" >
                        </div>
                        <div class="input-field">
                             <label for="phoneNumber">Phone number</label>
                             <input type="text" name="PhoneNumber" for="PhoneNumber" class="username" placeholder="Phone Number" required v-model="person.phoneNumber" style="width: 100%; 
    margin-bottom: -8px;" >
                        </div>

                      <div class="input-field">
                             <label for="password">Create Password</label>
      <input type="password" for="password" name="password" class="phone" placeholder="Create Password" required v-model="person.password" >
                        </div>

                        <div class="input-field">
                              <label for="confirmPassword"> Confirm Password</label>
      <input type="password" for="confirmPassword" name="confirmPassword" class="phone" placeholder="Confirm Password" required v-model="person.confirmPassword">
                        </div>

                       
                    </div>
     <!-- <div>
     <h3 style="text-align: center">Security Questions</h3>
               <h4 style= "text-align= center" >please answer security Quetions </h4>


      <div class="input-field" >
        <lable>What is your favourite food/dish ?</lable>
        <input type="text"    name="ans1" for="ans1" placeholder="Answer" v-model="person.ans1"  /> 
      <br>
        
      
      <label for="ans2"> Who is your childhood hero ?</label>
      <input type="text" for="ans2" name="ans2" placeholder="Answer" v-model="person.ans2"  /> 
      <br>
      
      <lable for="ans3">What is the name of your favourite pet ? </lable>
      <input type="text" for="ans3" name="ans3" placeholder="Answer" v-model="person.ans3"  /> 
      <br>
       
      <label for="ans4"> In which city you were born ? </label>
      <input type="text" for="ans4" name="ans4" placeholder="Answer" v-model="person.ans4"  /> 
      <br>
      
      <lable for="ans5">What is the name of your first school ?</lable>
      <input type="text" for="ans5" name="ans5" placeholder="Answer" v-model="person.ans5"  />
      </div>
      
      
           </div> -->
                </div>

                   <button class="sumbit" @click.prevent="handleInput"  style="margin-left: 326px;">
                            <span class="btnText">Update Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    
                </div> 
                </form>
                </div>
</template>

<script>
export default {
    name:"updateData",
    data(){
        return{
            rowdata:null,


            person:{
                firstName:"",
                Entity:"" ,
                lastName:"",
                idnumber:"",
                email:"",
                phoneNumber:"",
                dateofBirth:"",
                gender:"",
                role:"",
                address1:"",
                address2: "",
                country:"",
                state:"",
                city:"",
                zipcode:"",
                password:"",
                confirmPassword:"",
            }

        }
    },

    created(){
        this.rowdata=(this.$route.params);
    
    }
}
</script>

<style scoped>
/* ===== Google Font Import - Poppins ===== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4070f4;
}
.container{
    position: relative;
    max-width: 900px;
    width: 100%;
    border-radius: 6px;
    padding: 30px;
    margin: 0 15px;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
.container header{
    position: relative;
    font-size: 20px;
    font-weight: 600;
    color: #333;
}
.container header::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 27px;
    border-radius: 8px;
    background-color: #4070f4;
}
.container form{
    position: relative;
    margin-top: 16px;
    min-height: 600px;
    background-color: #fff;
    overflow: hidden;
}
.container form .form{
    position: absolute;
    background-color: #fff;
    transition: 0.3s ease;
}
.container form .form.second{
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
}
form.secActive .form.second{
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0);
}
form.secActive .form.first{
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
}
.container form .title{
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    margin: 6px 0;
    color: #333;
}
.container form .fields{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
form .fields .input-field{
    display: flex;
    width: calc(100% / 3 - 15px);
    flex-direction: column;
    margin: 4px 0;
}
.input-field label{
    font-size: 12px;
    font-weight: 500;
    color: #2e2e2e;
}
.input-field input, select{
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;
}
.input-field input :focus,
.input-field select:focus{
    box-shadow: 0 3px 6px rgba(0,0,0,0.13);
}
.input-field select,
.input-field input[type="date"]{
    color: #707070;
}
.input-field input[type="date"]:valid{
    color: #333;
}
.container form button, .backBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width: 200px;
    width: 100%;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 5px;
    margin: 25px 0;
    background-color: #4070f4;
    transition: all 0.3s linear;
    cursor: pointer;
}
.container form .btnText{
    font-size: 14px;
    font-weight: 400;
}
form button:hover{
    background-color: #265df2;
}
form button i,
form .backBtn i{
    margin: 0 6px;
}
form .backBtn i{
    transform: rotate(180deg);
}
form .buttons{
    display: flex;
    align-items: center;
}
form .buttons button , .backBtn{
    margin-right: 14px;
}

@media (max-width: 750px) {
    .container form{
        overflow-y: scroll;
    }
    .container form::-webkit-scrollbar{
       display: none;
    }
    form .fields .input-field{
        width: calc(100% / 2 - 15px);
    }
}

@media (max-width: 550px) {
    form .fields .input-field{
        width: 100%;
    }
}

</style>
