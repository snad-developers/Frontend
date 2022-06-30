<template>
     <div style="margin-bottom: 16px;"><span style="margin: 10px;"><b>File Name</b></span>
     <select style="margin:5px;border-radius:18px;border-color:black" name="Entity" id="Entity" class=""  v-model="filename">
     <option disabled selected value  >Select Questions </option>        
     <option value="0">Employee Data</option>
      <option value="1">Time Sheet (Outstanding Receivavles Collectkons)</option>
      <option value="2">Immigration Expenses</option>
       <option value="3">Management Expenses</option>
       <option value="4">Payroll</option>
       <option value="5">Employee Expenses</option>
     </select>
     
     </div>
    <input type="file" accept=".csv" @change="handleFileUpload( $event )"/>
   
      
<div class="scrollWrapper">
    <table v-if="parsed" style="width: 100%;">
    <thead>
        <tr>
            <th v-for="(header, key) in content.meta.fields"
                v-bind:key="'header-'+key">
                {{ header }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(row, rowKey) in content.data"
            v-bind:key="'row-'+rowKey">
                <td v-for="(column, columnKey) in content.meta.fields"
                    v-bind:key="'row-'+rowKey+'-column-'+columnKey">
                        <input v-model="content.data[rowKey][column]"/>
                </td>
        </tr>
    </tbody>
</table>
</div>
<p v-if="insertmessage">{{insertmessage}}</p>
<button  style="margin: 24px;" @click.prevent="submitUpdates">Submit </button>

<button  style="margin: 24px;" @click.prevent="getaccessdata">Access Data </button>

<div class="scrollWrapper">
    <table v-if="show" align="center" class="table-content" id="update" style="  border-spacing: 0;
    box-shadow: 0 2px 15px rgba(64,64,64,.7);
    border-radius: 10px 10px 0 0;
    overflow: hidden; width:950px;
    margin-left: 400px;
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:white">
    <thead style=" background-color:rgb(240, 232, 232); color:grey; fill-opacity: initial;">
        <tr>
            <th>
               EmpID
            </th>
            <th>
               Gender
            </th>
            <th>
               Jobtitle
            </th>
            <th>
               Sum
            </th>
        </tr>
    </thead>
    <tbody>
          <template v-for="(data,index) in showdata" :key="index" > 
            <tr>

<td>{{data.employeeid}}</td>
<td>{{data.gender}}</td>
<td>{{data.jobtitle}}</td>
<td>{{data.sum}}</td>


       </tr>
       
</template>
       
    </tbody>
</table>
</div>
   
</template>
<script>
import loginapi from '../services/loginapi';
import Papa from 'papaparse';
export default {
  name: "FileUpload",
  data() {
    return {
       file: '',
        content: [],
        parsed: false,
        filename:'',
        show:false,
        showdata:[],
        insertmessage:''
    };
  },
  methods: {
handleFileUpload( event ){
    this.file = event.target.files[0];
    this.parseFile();
},
parseFile(){
    Papa.parse( this.file, {
        header: true,
        skipEmptyLines: true,
        complete: function( results ){
            this.content = results;
            console.log(this.content.data)
            this.parsed = true;
        }.bind(this)
    } );
},
getaccessdata(){
   this.responsedata=loginapi.accessdata().then(response=>{
 console.log(response)
  console.log(response.data.result)
 if(response && response.data.result){
      this.show=true;
      console.log(response.data.result)
this.showdata=response.data.result;
  
 }
   })
},
submitUpdates(){  
    var data;
    if(this.filename=='0'){
 data=this.content.data;
}
if(this.filename=='1'){
 data=this.content.data
for (var i=0; i<data.length; i++){
    data[i].clientid=parseInt(data[i].clientid)
    data[i].employeeid=parseInt(data[i].employeeid)
    data[i].noofhours=parseInt(data[i].noofhours)
    data[i].payrate=parseInt(data[i].payrate)
    data[i].revenuerate=parseInt(data[i].revenuerate)
    data[i].operationalcost=parseInt(data[i].operationalcost)
    data[i].receivables=parseInt(data[i].receivables)
    data[i].createdby=parseInt(data[i].createdby)
    data[i].updatedby=parseInt(data[i].updatedby)
   
}
}
if(this.filename=='2'){
 data=this.content.data
for (var i=0; i<data.length; i++){
    data[i].mgmtempid=parseInt(data[i].mgmtempid)
    data[i].amt=parseInt(data[i].amt)
    data[i].approvedby=parseInt(data[i].approvedby)
    data[i].createdby=parseInt(data[i].createdby)
    data[i].updatedby=parseInt(data[i].updatedby)
   
}
}
console.log(data)
      let sdata = {

 "FileUploadData":data,
 "filename":this.filename,

}
console.log(sdata)
   this.responsedata=loginapi.fileUpload(sdata).then(response=>{
 console.log(response)
 this.insertmessage=response.data.message;

   })
   
}

  }
};
</script>


<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

div.scrollWrapper{

  height:380px;
  width:100%;
  overflow:scroll;
}

.container {
    text-align: left;
}

code {
    background-color: #eee;
    border: 1px solid #999;
    display: block;
    padding: 20px;
}

#app .form {
    text-align: left;
}
</style>

