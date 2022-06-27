<template>
<div align= "center">
    <h2> Add Entity</h2>
    <select name="selection" id="selection">
   <option value="Select">Choose Entity</option>
    <option value="Averon Solutions"> Averon Solutions</option>
    <option value="SNAD">SNAD</option>
  </select>
  <br><br>
 
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