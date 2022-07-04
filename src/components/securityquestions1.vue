<template>
<div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    
   
  <form align="center">
                   <h1 >Security Questions</h1>
               <h3 >please answer security Quetions </h3>


    
        <lable>What is your favourite food/dish ?</lable><br>
        <input type="text" class="user" required id="fq" name="first" placeholder="Give your answer"><br>
        <br>
        <lable>Who is your childhood hero ?</lable><br>
        <input type="text" class="user" required id="fq" name="first" placeholder="Give your answer"><br>
        <br>
        <lable>What is the name of your favourite pet ?</lable><br>
        <input type="text" class="user" required id="fq" name="first" placeholder="Give your answer"><br>
        <br>
        <lable>In what city you were born ?</lable><br>
        <input type="text" class="user" required id="fq" name="first" placeholder="Give your answer"><br>
        <br>
        <lable>What is the name of your first school ?</lable><br>
        <input type="text" class="user" required id="fq" name="first" placeholder="Give your answer">
        <br>
        <br>
        <button class="sub">Submit</button>
  </form>

</template>
<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: 'SecurityPage',
}


</script>
<style scoped>
.sub{
    
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(120, 4, 4);
    color: white;
    display:inline-block;
    cursor: pointer;
    transition: 0.5s;
    font-family: sans-serif;
}
</style>
