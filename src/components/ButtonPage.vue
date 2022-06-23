<template>
<button :style="{ background: colour}" @click="onClick">{{text}}</button>
</template>
<script>
    export default {
        name :"ButtonPage", 
    
        props :{
            colour: String,
            text : String,
        },
        methods:{
            onClick(){
                this.$emit( "sample-output", {name :"rohini",email:"124@gmail.com"});

            },
        },
    }; 

</script>
<style>
button{
 padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
    font-family: sans-serif;
    transition: 0.5s;
}

</style>