<template>
    <h2>Employee Expenses</h2>

    <div class="">

    <a href="/employeexpensedata"><button style="margin-left:-1000px;color:white;background-color:blue;border-radius:22px;width:5%;cursor: pointer;">Back</button></a>
    <div class="container">
        <div class="child">
            Name: {{this.empresponse.firstname+" "+this.empresponse.lastname}}
        </div>
        <br>
        <div class="child">
             Employee ID: {{this.empresponse.employeeid}}

        </div>
        <br>
        <div class="child">
            Total: {{this.empresponse.sum}}
        </div>
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
                Expense Date
            </th>
            <th>
               Expense Type
            </th>
            <th>
               Amount
            </th>
            <th>
                Invoice
            </th>
           
        
        </thead>


        <tbody>
            <template v-for="(data,index) in empexpdetails" :key="index" > 
                <tr>

                    <td>{{index+1}}</td>
                    <td>
                        {{data.expensedate}}
                    </td>
                    <td>{{data.expenses}}</td>
                    <td>$ {{data.amount}}</td>
                    <td><a href="https://www.freshbooks.com/wp-content/uploads/invoice-template-pdf-white.png">Click Here</a></td>
                </tr>
       
            </template>
        
        </tbody>
    
    
    </table>


    </div>

</template>

<script>
import loginapi from '@/services/loginapi';

export default {
    name:'empExpdetails',

    data:function(){
        return{
            empresponse:null,
            empexpdetails:null,
        }
    },

    created(){
        const userdetails=JSON.parse(localStorage.getItem('empdetails')) ? JSON.parse(localStorage.getItem('empdetails')) : "";
        this.empresponse=userdetails,
        console.log(this.empresponse)
        this.getexpdetails();

    },

    methods:{
        getexpdetails(){
            let sdata={
                "empid":parseInt(this.empresponse.employeeid)
            }
            console.log(sdata);
            loginapi.expdetails(sdata).then(response=>{
                
                if(response.data.status == "success" && response.data.statuscode == 200){
                    console.log(response);
                    this.empexpdetails= response.data.result
                    console.log(this.empexpdetails)

                }
                if(response.data.status == "Failure" && response.data.statuscode == 201){
                    alert(response.data.message)
                }
            });

        }

    }


}
</script>

<style scoped>
.container{
    display:flex; 
    align-items: center; 
    width: 100%;
    padding-top: 1%;
    margin-left: 13%;
}

.child{
    padding: 1% 9% 0% 9%;
    
}

</style>

