<template><br>
<h4>Add New Invoice</h4>

    <div class="comp"><br>
        
<label for="invoicenumber" style="margin-left: 20px;">Invoice Number</label><br>
<input type="text" name="invoicenumber" for="invoicenumber"  placeholder="Invoice Number" style="margin-left: 20px;"  v-model="person.invoicenumber"><br>
<label for="invoicedate" style="margin-left: 20px;">Invoice Date</label><br>
<input type="date" name="invoicedate" for="invoicedate"  placeholder="Invoice Date" style="margin-left: 20px;"  v-model="person.invoicedate"> <br>    
   <label for="invoicestatus" style="margin-left: 20px;">Invoice Status</label><br>
    <select name="invoicestatus" for="invoicestatus" id="invoicestatus"  style="width: 225px;padding: 14px 20px;margin-left: 20px;" v-model="person.invoicestatus">
                                   
                            
    
    
       
        <option value="New">New</option>
        <option value="Inprogress">Inprogress</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
       </select> <br>
        <label for="expensetype" style="margin-left: 20px;">Expense Type</label><br>
    <select name="expensetype" for="expensetype" id="expensetype"  style="width: 225px;padding: 14px 20px;margin-left: 20px;" v-model="person.expensetype">
                                
       <option disabled selected value  > Select Expense Type </option>
                            <template v-for="(response,index) in expenseresponse" :key="index" >
                                <option >{{response.expensetype}}</option>
                            </template>      
    </select><br>
    <label for="invoiceamount" style="margin-left: 20px;">Invoice Amount</label><br>
<input type="text" name="invoiceamount" for="invoiceamount"  placeholder="Invoice Amount" style="margin-left: 20px;"  v-model="person.invoiceamount"><br>

    <label for="currency" style="margin-left: 20px;">Currency</label><br>  
    <select id="currency" name="currency"  style="width: 225px;padding: 14px 20px;margin-left: 20px;" v-model="person.currency">
    <option>select currency</option>
   
    
   
    
    <option value="EUR">Euro</option>
    <option value="INR">Indian Rupee</option>
    <option value="USD">US Dollar</option>
    
    </select>  <br> <br>  
     <input id="ldb" name="empexpense" required  type="file" accept=".csv" @change="handleFileUpload( $event )" requried>
  <b-alert><input id ="upload" type="submit" value="Upload" @click.prevent="validatefields"  style="border-radius: 25px;
    width: 25%;
    padding: 10px;
    background-color: blue;
    color:white" ></b-alert>

     <!-- <button 
       style="border-radius:10px;
 background-color: rgba(8, 77, 179, 0.864);
text-decoration: solid; 
color: white;
cursor: pointer;
 margin-left:100px; 
padding: 10px;
 border: 0px solid rgb(153, 148, 148)" 
    
  @click.prevent="NewInvoices" >Upload Invoices</button> <br>    -->
   <button style="border-radius:10px;
 background-color: blue;
text-decoration: solid; 
color: white;
cursor: pointer;
margin-left:500px;
padding: 10px;
 border: 0px solid rgb(153, 148, 148) ;top: -40px;"   @click.prevent="New">Save</button>                 
       
</div>
</template>
<script>

export default {
  name:"NewInvoices",
    data(){
        return{  
            person:null,
            responsedata:[],
            expenseresponse:[],
            expensetype:null,
        }
    },
     created(){
        this.person=(this.$route.params);
        console.log(this.person);
        this.responsedata=this.$route.params;
        
        // this.expensefetch();
       
    
    },
    method(){
        

    }
}


</script>
<style>
.comp{
  border-radius: 25px;
  box-sizing: border-box;
  width: 50%;
  height: fit-content;
  background-color:white;
  margin-top: 27px;
  margin:0%; 
  padding-bottom: 2%;
  margin-left: 360px;
  text-align:justify;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
   
 }

</style>