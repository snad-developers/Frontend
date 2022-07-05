<template>
<!--=== Coding by CodingLab | www.codinglabweb.com === -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!----======== CSS ======== -->
    <link rel="stylesheet" href="style.css">
     
    <!----===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!--<title>Responsive Regisration Form </title>--> 
   
</head>

   

    <div class="container" style ="margin-left: 37px; width:98%;">
        

        <form action="#">
             
            <div class="form first" style="border-radius: 20px; background-color:white; margin-top:70px;width:80%;margin-left:10%;padding:5%;overflow: hidden;box-shadow: 0 0 15px rgba(0,0,0,0.15);" >
                <br>
                 <h2  style="  border-spacing: 0;

 overflow: hidden; width:950px;

    margin-left:-86px ;

    margin-top: -10%;

    margin-bottom: 50px;

    text-align:center;

    width:1224px;padding:2%;

    background-color: #dfb5bc">User Details</h2>
                 <br>
                <div class="details personal">
                    <br>
                    
                    <!-- <span class="title">Personal Details</span> -->

                    <div class="fields">
                        <div class="input-field">
                            <label for="F" style="margin-left: -845px;
    font-size: 20px;right:-3%
<!-- <!-- }">First Name   </label>
                            <input type="text" name="firstName"   v-model=this.rowdata.firstName style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-37px" readonly>
                        </div>
                        <br>
                       

                        <div class="input-field">
                            <label for="" style="margin-left: -120px;
    font-size: 20px; top:-82px;right:-5%">LastName</label>
                            <input type="text" v-model=this.rowdata.lastName style="outline: none;
    font-size: 14px;
    top:-82px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-65px" readonly>
                        </div>
                        <br>

                        <div class="input-field">
                             <label for="" style="margin-left: -826px; top:-60px;
    font-size: 20px;right:-4%">Entity </label>   
                              <input type="text" v-model=this.rowdata.entity style="outline: none;
    font-size: 14px;
    font-weight: 400;
    top:-60px;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-50px" readonly>
                        </div>
                        <br>

                        <div class="input-field">
                           
        <label for="" style="margin-left: -853px; top:-31px;
    font-size: 20px;right:-4.5%">Gender </label> 
                           <input type="text" v-model=this.rowdata.gender style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-33px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-57px" readonly> 
                        </div>

                        <div class="input-field">
                         <label for="" style="margin-left: 599px;top: -301px;
    position: relative;
    font-size: 20px;right:-7%">Role</label>
                            <input type="text" v-model=this.rowdata.role style="outline: none;
    font-size: 14px;
    top:-301px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-8%" readonly>  
                            
                        </div>

                        <div class="input-field" >
                            <label for="" style="margin-left: -878px; top:-45px;
    font-size: 20px;right:-4%">Address Line1 </label> 
                            <input type="text" v-model=this.rowdata.address1 style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-44px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-40px" readonly>
                        </div>
                        <br>
                        <div class="input-field">
                           <label for="" style="margin-left: -115px;top:-121px;
    font-size: 20px;right:-3%">Address Line 2 </label> 
      <input type="text" v-model=this.rowdata.address2  style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-122px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-37px" readonly>
                        </div>
                          <div class="input-field">
                          <label for="" style="margin-left: 608px;position: relative;
    top: -277px;
    font-size: 20px;right:-5%">Country</label>
      <input type="text" v-model=this.rowdata.country  style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-277px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-68px" readonly>
                         </div>
                          <div class="input-field">
                         <label for="" style="margin-left: 645px;top: -235px;
    position: relative;
    font-size: 20px;right:-5%">State </label>
                            <input type="text" v-model=this.rowdata.state style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    top:-235px;
    height: 42px;
    margin: 8px 0;right:-59px" readonly> 
                            
                        </div>
                              <div class="input-field"  >
                           <label for="" style="margin-left: -74px;position: relative;
    top: -507px;
    font-size: 20px;right:-5%">City </label>
                              <input type="text" v-model=this.rowdata.city style="outline: none;
    font-size: 14px;
    top:-506px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;right:-67px" readonly>  
                        </div>
                         </div>
                              <div class="input-field">
                            <label for="" style="margin-left: 593px;
    top: -561px;font-size:20px
    <!-- font-size: 20px;right:-6%" >Zipcode </label> 
                              <input type="text" v-model=this.rowdata.zipcode style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-562px
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    border-radius:20px;
    margin: 8px 0;right:-69px" readonly>
                        </div>
                         <div class="input-field">
                            <label for="" style="margin-left: -127px;position: relative;
    top: -515px;font-size:20px
    <!-- font-size: 20px;right:-5%" >Company Id </label> 
                              <input type="text" v-model=this.rowdata.idnumber style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    top:-511px;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    border-radius:20px;
    height: 42px;
    margin: 8px 0;right:-57px" readonly>
                        </div>
                        
                        
                   
            </div>
            
          </div>  
            
        </form>
        
    </div>
    
 <a href="/penReq"><button  class="back"  style="margin-left: -102px;
    top: -337px; margin:0%;  width: 14%;
    padding: 12px;
    background-color:blue;
    border-radius: 20px; cursor: pointer;">back</button></a>


</html>

  
</template>

<script>


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
.form {
    background-color:white;
    width: 87%;
    border-radius: 33px;
}


</style>