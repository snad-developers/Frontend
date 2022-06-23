<template>
    <h3>{{ title}}</h3>
    <ButtonPage colour="rgb(15, 6, 119)" text="Add Task" @sample-output="DisplayEmittedData"/>
    <ButtonPage colour="red" text="Delete Task" @sample-output="DisplayEmittedData"/>
    <ButtonPage colour="black" text="view Task"/>

    
    
</template>
<script>

import ButtonPage from "./ButtonPage";
export default{
    name : "ButtonParent",
    components: {
        ButtonPage
    },
    data(){
          return {
              title:"Page",
          };
      },
        methods:{
            DisplayEmittedData(event){
                console.log(event);
            },
           
        
        },
};
</script>
<style>
</style>
