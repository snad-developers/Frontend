<template>
  <div id="top">
<img width="100" height="100" src="@/assets/snadicon.png" alt="" align="left" id="top">
<div id="profi" align="right">
<img width="60" height="60" src="@/assets/profile.png" alt="" id="profile" align="right">

    <table align="right" id="prof">
        <tr><td><label>Lahari Kolipara</label></td></tr>
        <tr><td><label>Admin</label></td></tr>
    </table>
    <h1> Page reached</h1>
</div>
</div>
<form class="top-left"> 
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
        name: 'reportpage',
    }
</script>
<style scoped>
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
     font-family: sans-serif;
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
     font-family: sans-serif;
    
    
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