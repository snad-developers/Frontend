<template>

            <div class="" style="border-radius: 20px; background-color:white; margin-top:70px;width:60%; margin-left:302px; box-shadow: 0 0 15px rgb(0 0 0 / 15%); height:527px;" >>
    <form>
        <h2   style="  border-spacing: 0;
 overflow: hidden; 
    margin-left:0px ;
    margin-top: -26px;
    margin-bottom: 50px;
    text-align:center;
    width:810px;
    border-radius:20px 20px 0px 0px;
    background-color: #dfb5bc">View Details</h2>
    <div class="fields">
        <div class="input">
                            <label for="F" style="margin-left: -845px;
    font-size: 16px;right:-169px;
<!-- <!-- }">First Name</label>
                            <input type="text" name="firstName"   v-model=this.rowdata.firstName style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;right:-177px;
    margin: 8px 0;" readonly>
                        </div>
                         <div class="">
                            <label for="" style="margin-left: 66px;
    font-size: 16px; top:-58px; right:10px;">LastName</label>
                            <input type="text" v-model=this.rowdata.lastName style="outline: none;
    font-size: 9px;
    top:-64px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                         <div class="">
                             <label for="" style="margin-left: -450px; top:-41px;
    font-size: 16px; right:6px">Entity </label>   
                              <input type="text" v-model=this.rowdata.entity style="outline: none;
    font-size: 9px;
    font-weight: 400;
    top:-39px;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                          <div class="input">
                           
        <label for="" style="margin-left: -439px; top:-20px;
    font-size: 16px; right:13px;">Gender </label> 
                           <input type="text" v-model=this.rowdata.gender style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:24px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0; right:11px;" readonly> 
                        </div>
                         <div class="input">
                         <label for="" style="margin-left: 572px;top: -234px;
    position: relative;
    font-size: 16px; righr:10px;">Role</label>
                            <input type="text" v-model=this.rowdata.role style="outline: none;
    font-size: 9px;
    top:-237px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>  
                            
                        </div>
                         <div class="" >
                            <label for="" style="margin-left: -508px; top:-66px;
    font-size: 16px;">Address Line1 </label> 
                            <input type="text" v-model=this.rowdata.address1 style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:-64px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                         <div class="">
                           <label for="" style="margin-left: 56px;top:-121px;
    font-size: 16px;">Address Line2 </label> 
      <input type="text" v-model=this.rowdata.address2  style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:-124px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly>
                        </div>
                         <label for="" style="margin-left: 608px;position: relative;
    top: -285px;
    font-size: 16px; right:89px;">Country</label>
      <input type="text" v-model=this.rowdata.country  style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:-248px;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0; left:324px;" readonly>
     <label for=""  style="margin-left: 645px;top: -235px;
    position: relative;
    font-size: 20px;">State </label>
                            <input type="text" v-model=this.rowdata.state class="state" style="outline: none;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    top:-235px;
    height: 42px;
    margin: 8px 0;" readonly> 
      <label for="" style="margin-left: -74px;position: relative;
    top: -445px;
    font-size: 16px; right:7px;">City </label>
                              <input type="text" v-model=this.rowdata.city style="outline: none;
    font-size: 9px;
    top:-448px;
    font-weight: 400;
    color: #333;
    border-radius: 20px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 8px 0;" readonly> 
    <label for="" style="margin-left: 555px;
    top: -505px;font-size:20px
    <!-- font-size: 16px; right:38px;" >Zipcode </label> 
                              <input type="text" v-model=this.rowdata.zipcode style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:-517px
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    border-radius:20px;
    margin: 8px 0;
    right:14px;
    margin-left:549px;" readonly>
     <label for="" style="margin-left: -127px;position: relative;
    top: -430px;font-size:20px
    <!-- font-size: 16px; right:369px;" >Company Id </label> 
                              <input type="text" v-model=this.rowdata.idnumber style="outline: none;
    font-size: 9px;
    font-weight: 400;
    color: #333;
    top:-495px;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    border-radius:20px;
    height: 42px;
    margin: 8px 0; right:-136px;" readonly>
     <a href="/penReq"><button  class="back"  style="margin-left: -102px;
    top: -337px; margin:0%;  width: 14%;
    padding: 12px;
    background-color:blue;
    border-radius: 20px;">back</button></a>


    </div>

    </form>
</div>


       
   
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

