<template>
    <h2>User Details</h2>
    <div>
        <label for="">FirstName: {{rowdata.firstName}}</label> 
        <br>
        <label for="">LastName: {{rowdata.lastName}}</label> 
        <br>
        <label for="">Entity: {{rowdata.entity}}</label> 
        <br>
        <label for="">Id Number: {{rowdata.idnumber}}</label> 
        <br>
        <label for="">Email: {{rowdata.email}}</label> 
        <br>
        <label for="">Phone Number: {{rowdata.phoneNumber}}</label> 
        <br>
        <label for="">Date of Birth: {{rowdata.dateofBirth}}</label> 
        <br>
        <label for="">Gender: {{rowdata.gender}}</label> 
        <br>
        <label for="">Role: {{rowdata.role}}</label> 
        <br>
        <label for="">Address1: {{rowdata.address1}}</label> 
        <br>
        <label for="">Address2: {{rowdata.address2}}</label> 
        <br>
        <label for="">Country: {{rowdata.country}}</label> 
        <br>
        <label for="">City: {{rowdata.city}}</label> 
        <br>
        <label for="">Zipcode: {{rowdata.zipcode}}</label> 
        <!-- <label for="">FirstName: {{rowdata.firstName}}</label> 
        <label for="">FirstName: {{rowdata.firstName}}</label>  -->
           
    </div>

    <router-link to="penReq"> <button>Back</button> </router-link>
   
</template>

<script>

``
    export default {
        name:'viewDetails',
        data() {
        return{
            rowdata:null,
        }
        },

        created(){
             this.rowdata=(this.$route.params);
            console.log(this.rowdata);
            
        }
    }

</script>

<style>


</style>