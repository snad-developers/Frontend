<template>
<a href="/amdpage"><button style="margin-left:-1100px;color:white;background-color:blue;border-radius:22px;width:6%;bottom:20px;border:;height: 5%;box-shadow: grey;cursor: pointer;margin-top: 5%;">Back</button></a>
   <div class="container" style ="margin-left: 291px;margin-top:20px;border-radius:25px">
     <h2 style="border-spacing: 0;overflow: hidden; width:100%;margin-left:-31px ;margin-top: -40px;margin-bottom: 50px;text-align:center;width:901px;border-radius:22px 22px 0 0;padding:7px;background-color: #dfb5bc">User Details</h2>

        <form action="#">
            <div class="form first">
                <div class="details personal" style="margin-top:0px;width:114%">
                       
                    <!-- <span class="title">Personal Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                            <label for="firstname">First Name</label>
                            <input type="text" for="firstName" name="firstName" placeholder="Enter your Name" required v-model="person.firstName" style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;">
                        </div>

                        <div class="input-field">
                            <label for="lastName">Last Name</label>
                            <input type="text" name="lastName" for="LastName" placeholder="Enter your Name" required v-model="person.lastName"  style=" border-radius: 20px;">
                        </div>
                        <div class="input-field">
                            <label for="idnumber">Employee Id</label>
                            <input type="text" name="idnumber" for="idnumber" placeholder="Enter your Employee Id" required v-model="person.idnumber" style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;">
                        </div>

                        <div class="input-field">
                             <label for="address1">Address Line 1</label>
                              <input type="text" for="address1" name="address1" class="last name" placeholder="Adress Line 1" required v-model="person.address1"  style=" border-radius: 20px;">
                        </div>
                         <div class="input-field">
                             <label for="address2">Address Line 2</label>
                              <input type="text" for="address2" name="address2" class="last name" placeholder="Adress Line 2" required v-model="person.address2"  style=" border-radius: 20px;">
                        </div>


                        <div class="input-field">
                            <label for="city">City</label>
                           <input for="city" name="city" type="text" class="company" placeholder="City" required v-model="person.city"   style=" border-radius: 20px;">
                        </div>

                        <div class="input-field">
                            <label for="gender">Gender</label>
                            <select required name="gender" for="gender" v-model="person.gender" style="width: 100%; border-radius:20px;">
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div class="input-field" >
                           <label for="state">State</label>
                            <input for="state" name="state" type="text" class="username" placeholder="State" required v-model="person.state" style="width: 100%;  border-radius:20px;" >
                        </div>
                        <div class="input-field">
                           <label for="zipcode">Zip Code</label>
      <input type="text" for="zipcode" name="zipcode" class="phone" placeholder="Zip Zode" required v-model="person.zipcode" style=" border-radius:20px;">
                        </div>
                          <div class="input-field">
                           <label for="country">Country</label>
      <input type="text" for="country" name="country" class="phone" placeholder="Country" required v-model="person.country" style=" border-radius:20px;">
                         </div>


        <div class="input-field">
        <lable for="Entity">Entity</lable>
      <select name="Entity" for="Entity" id ="repeat1" required v-model="person.entity"  placeholder="Entity" align="right" class="user" style=" border-radius:20px;">
       
      <option disabled selected value  > Choose Entity </option>
            <option v-for="(entity,index) in entityresponse" :key="index" >{{entity.entity}}</option>

     </select>
   
     </div>


                         </div>
                       

                   
                </div>

                <div class="details ID">
                    <!-- <span class="title">Identity Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                                <label for="role" style="right:-15px">Role</label>
      <select name="role" for="role" id ="repeat1" required v-model="person.role"  placeholder="Role" align="right" class="user" style=" border-radius:20px;width:261px">
<option selected value  > Choose Role </option>
      <option v-for="(entity,index) in roleresponse" :key="index" >{{entity.roles}}</option>

</select>
                         </div>

                        

                        <div class="input-field" style="margin-right:-95px">
                             <label for="email" style="top:-89px">Email Id</label>
                             <input type="email" name="email" for="email" class="username" placeholder="Email Id" required v-model="person.email" style="width: 260px; 
    margin-bottom: -8px; top:-92px; text-align:center;  border-radius:20px;margin-left:-9px;" >
                        </div>
                        <div class="input-field">
                             <label for="phoneNumber" style=" margin-left:-403px;">Phone Number</label>
                             <input type="text" name="PhoneNumber" for="PhoneNumber" class="username" placeholder="Phone Number" required v-model="person.phoneNumber" style="width: 112%;right:-16% 
    margin-bottom: -8px; top:3px; margin-left:-248px; border-radius:20px;">
                        </div>

                      <div class="input-field">
                             <label for="password" style="margin-right:-1175px; top:-81px;">Create Password</label>
      <input type="text" for="password" name="password" class="phone" placeholder="Create Password" required v-model="person.password" style="left:570px; top:-83px; border-radius:20px;width:115%" >
                        </div>

                        <div class="input-field">
                              <label for="confirmPassword" style="left:-483px;"> Confirm Password</label>
      <input type="text" for="password" name="password" class="phone" placeholder="Confirm Password" required v-model="person.confirmPassword" style="left:-500px; border-radius:20px;text-align:center;width:113%">
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

                   <button class="sumbit" @click.prevent="handleupdate"  style="margin-left: 326px;margin-top:0%">
                            <span class="btnText">Update Details</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    
                </div> 
                </form>
                </div>
</template>

<script>
import loginapi from '../services/loginapi';
export default {
    name:"updateData",
    data(){
        return{
            person:null,
            entityresponse:[],
            roleresponse:[]
            
        }
    },
    mounted(){
         this.entityfetch();
        this.rolefetch();
    },
    created(){
        this.person=(this.$route.params);
        console.log(this.person);
        this.entityfetch();
        this.rolefetch();
    
    },
    
    methods: {
    handleupdate() {
        //  this.v$.$touch();
     // console.log(this.person.firstName); // logs the input value
      const senddata={
    "firstName": this.person.firstName,
    "lastName": this.person.lastName,
    "idnumber": this.person.idnumber,
"email": this.person.email,
"phoneNumber": this.person.phoneNumber,
"dateofBirth": this.person.dateofBirth,
"gender": this.person.gender,
"role": this.person.role,
"address1": this.person.address1,
"address2": this.person.address2,
"country": this.person.country,
"state": this.person.state,
"city": this.person.city,
"zipcode": this.person.zipcode,
"password": this.person.password,
"confirmPassword": this.person.confirmPassword,
"ans1": this.person.ans1,
"ans2": this.person.ans2,
"ans3": this.person.ans3,
"ans4": this.person.ans4,
"ans5": this.person.ans5,
"entity":this.person.entity,
"status":this.person.status
}
    
console.log(senddata);
// if(!this.v$.$invalid){
    
      loginapi.updatereg(senddata,this.person.id).then(response=>{
         console.log(response,response.status,response.data.firstName,this.person.firstName);
if(response.status == 200 && response.data.firstName == this.person.firstName && response.data.firstName){
         console.log(response);
          alert("User Details Updated");
          this.$router.push('amdPage');
          
// //  senddata(e);
//  this.$router.push('login');
 }
 });
    // }
    },
    entityfetch(){
        loginapi.orgndatagetvalues().then(response=>{
        this.entityresponse=response.data
        console.log(this.entityresponse)
        })
    },
     rolefetch(){
        loginapi.rolesgetvalues().then(response=>{
        this.roleresponse=response.data
        console.log(this.roleresponse)
        })
    },
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
    font-family: sans-serif;
}
body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    

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
    background-color: blue;
    transition: all 0.3s linear;
    cursor: pointer;
}
.container form .btnText{
    font-size: 14px;
    font-weight: 400;
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
