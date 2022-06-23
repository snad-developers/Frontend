<template>
<div id="top">
<img width="100" height="100" src="@/assets/snadicon.png" alt="" align="left" id="top">
<div id="profi" align="right">
<img width="60" height="60" src="@/assets/profile.png" alt="" id="profile" align="right">
    <table align="right" id="prof">
        <tr><td><label>Lahari Kolipara</label></td></tr>
        <tr><td><label>Admin</label></td></tr>
    </table>
</div>
</div>
 <h1 class="wel">Welcome Back, Lahari </h1>
    <table id="rep" align="right" >
        <tr class="rep" >
            
                <td>
                    <button class="rep1">
                        Total Active Employee
                    </button>
                </td>
                <td>
                    <button class="rep2">
                        22
                    </button>
                </td>
        </tr>
        

        <tr class="rep">
            <td>
                <button class="rep1">
                Outstanding Receivable Collections
                </button>
            </td>
            <td>
                <button class="rep2">
                1.2 M
                </button>
            </td>
        </tr>


        
        <tr class="rep">
                <td>
                    <button class="rep1">
                    Payroll Expense YTD
                    </button>
                </td>
                <td>
                    <button class="rep2">
                    4.8 M
                    </button>
                </td>
        </tr>


        <tr class="rep">
            <td>
                <button class="rep1">
                Employee Expense Non Deductable YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                4.2 M
                </button>
            </td>
        </tr>


        <tr class="rep">
            <td>
                <button class="rep1">
                Management Expense YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                128 K
                </button>
            </td>
        </tr>

        <tr class="rep">
            <td>
                <button class="rep1">
                Operational Cost YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                68 K
                </button>
            </td>
        </tr>

    </table>
<form class="top-left" > 
    <table class="lt" align="left">
    <tr>
        <td>
            <router-link to="/dashpage"><button class="left">Dashboard</button></router-link>

        </td>
    </tr>
    <tr>
        <td>  
            <router-link to="/Ldbpage"> <button class="left">Load Data in Batch </button></router-link>
        </td>

    </tr>
    <tr>
        <td>
            <router-link to="/amdpage"><button class="left">Amend Details</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td> 
            <router-link to="/reportpage"><button class="left">Reporting Portal</button></router-link>
        
        </td>
    </tr>
 
    <tr>
        <td>
           <router-link to="/login"><button id="log">LogOut</button></router-link> 
           
   
        </td>
        
    </tr>

    </table>
  
    <div id="otpt">
      <router-view/>
    </div>

  

</form>  
    
 
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'dashpage'
    }
</script>

<style>
    
 table#rep {
    display: inline-table ;
    padding: 10px;
    font-size: medium;
    font-style: normal;
    border: 3px solid;
    border-color: black;
    border-radius: 10px;
    padding-right:0px;
    table-layout: auto;
    margin-top: 50px;
    margin-right: 50px;
    margin-bottom: 10px;
    background-color:hsla(0, 95%, 92%, 0.478);
    align-items: ce;
     font-family: sans-serif;
}
tr.rep {
    padding: 0px;
    font-family: sans-serif;
    
}
button.rep1 {
    background-color:hsla(0, 95%, 92%, 0.425);
    font-size: large;
    color: black;
    padding: 20px 20px;
    margin: 1px 5px ;
    border: solid hsla(0, 95%, 92%, 0.478);
    border-radius: 15px;
    cursor: pointer;
    width: 380px;
    opacity: 0.9px;
    text-align: left;
     font-family: sans-serif;
}
button.rep2 {
    background-color:hsla(0, 95%, 92%, 0.478);
    font-size: medium;
    color: #000000;
    padding: 20px 20px;
    margin: 1px 5px ;
    border: solid hsla(0, 95%, 92%, 0.478);
    border-radius: 15px;
    cursor: pointer;
    width: 100px;
     font-family: sans-serif;
    
}
h1.wel {
    margin-left:200px;

}

.snadicon {
   cursor:pointer;
}
button#log {
    background-color: rgb(234, 231, 231);
    height: 50px;
    font-size:medium;
    border: 10px;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9px;
    width: 200px;
    margin-top: 180px;
    margin-bottom: 15px;
    align-self: auto;
}
button.left {
    background-color: rgb(134, 255, 255);
    font-size: large;
    color: rgb(2, 2, 2);
    padding: 1px 20px;
    padding-bottom: 10px;
    margin: 1px 0px ;
    margin-bottom: 2px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(0, 0, 0);
    width: 200px;
    height: 80px;
    opacity: 0.9px;
     font-family: sans-serif;
}
.lt {
    display: inline-table ;
    padding-top: 20px;
    
    
}
form.left {
    width:100%;
    padding-top: 0;
    padding-right: 0px;
    padding-left: 25px;
    color: rgb(18, 18, 18);
    margin-top: 0px;
    background: white;
    display: inline-block; 
    margin-bottom: 15px;
    border-radius: 10px;
     font-family: sans-serif;
}
 
#otpt {
    margin-top: 50px;
    margin-left: 10px;
    border-left: 100%;
}
#profile {
    align-self: auto;
}
table#prof {
    padding-left: 20px;
    margin-left: 0px;
}


div#profi {
    margin-right: 100px;

}
</style>