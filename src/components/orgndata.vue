<template>
<div align= "center">
    <h2> Add Entity</h2>
    <select name="selection" id="selection">
   <option value="Select">Select</option>
    <option value="Averon Solutions"> Averon Solutions</option>
    <option value="SNAD">SNAD</option>
  </select>
  <br><br>
  <table>

      <tr>
          <td> <button> Add</button></td>

          <td> <input type="text" name="Entity Name" id="" value="ICICI Bank"></td>
           
      </tr>
      <tr>
          <td>
      <input align= "center" id ="Save" type="button" value="Save" ></td>
      
      </tr>
      </table>
</div>
<routerview/>
</template>
<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name :'orgndata',
}
</script>
<style>
#Save {
font-size:medium;
    width:100px;
     font-family: sans-serif;
}
</style>