<template>
    <h2>Employee Expenses</h2>

    <div class="">

    <a href="/employeexpensedata"><button style="margin-left:-1000px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
    <div align="left">
        <span>
            Name: {{this.empresponse.firstname+" "+this.empresponse.lastname}}
        </span>
        <br>
        <span>
            Employee ID: {{this.empresponse.employeeid}}

        </span>
        <br>
        <span>
            Total: {{this.empresponse.sum}}
        </span>
    </div>
    
    <table align="center" class="table-content" id="update" style="  border-spacing: 0;
        box-shadow: 0 2px 15px rgba(64,64,64,.7);
        border-radius: 10px 10px 0 0;
        overflow: hidden; width:60%;
        margin-left:20%;
        margin-right: 20%;
        margin-top: 20px;
        margin-bottom: 50px;
        background-color:white;
        align-content: center;"
        
        >


        <thead style=" background-color:rgb(223, 181, 188); color:grey; fill-opacity: initial;">
            
            <th>
               S No.
            </th>
            <th>
               Expense Type
            </th>
            <th>
               Amount
            </th>
             
           
        
        </thead>


        <tbody>
            <!-- <template v-for="(data,index) in showdata" :key="index" > 
                <tr>

                    <td>{{data.employeeid}}</td>
                    <td>{{data.firstname}}</td>
                    <td>{{data.lastname}}</td>
                    <td>$ {{data.sum}}</td>
                </tr>
       
            </template> -->
        
        </tbody>
    
    
    </table>


    </div>

</template>

<script>

export default {
    name:'empExpdetails',

    data:function(){
        return{
            empresponse:null,
        }
    },

    created(){
        const userdetails=JSON.parse(localStorage.getItem('empdetails')) ? JSON.parse(localStorage.getItem('empdetails')) : "";
        this.empresponse=userdetails,
        console.log(this.empresponse)

    }


}
</script>

<style>

</style>