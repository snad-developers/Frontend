<template>
    <h2>User Details</h2>
    <div class="details">
        <label for="" style="margin-left:-200px">FirstName:{{rowdata.firstName}}</label> 
        <br>
        <label for="" style="margin-left:-200px">LastName: {{rowdata.lastName}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Entity: {{rowdata.entity}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Id Number: {{rowdata.idnumber}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Email: {{rowdata.email}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Phone Number: {{rowdata.phoneNumber}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Date of Birth: {{rowdata.dateofBirth}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Gender: {{rowdata.gender}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Role: {{rowdata.role}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Address1: {{rowdata.address1}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Address2: {{rowdata.address2}}</label> 
        <br>
        <label for="" style="margin-left:-200px">Country: {{rowdata.country}}</label> 
        <br>
        <label for="" style="margin-left:-200px">FirstName: {{rowdata.state}}</label> 
        <br>
        <label for="" style="margin-left:-200px">City: {{rowdata.city}}</label> 
        <br>
        <label for="" style="margin-left:-200px" >Zipcode: {{rowdata.zipcode}}</label> 
        <br>
        <!-- <label for="">FirstName: {{rowdata.firstName}}</label>  --> 
           
    </div>

    <a href="/penReq"><button>Back</button></a>
   
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
*{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    position: relative;
}


</style>