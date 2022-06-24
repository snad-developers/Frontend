<template>
    <h1>{{userid}}</h1>
    <h1>hello</h1>
</template>

<script>

``
    export default {
        name:'viewDetails',
        return:{
            userid:"",
        },
        created(){
            this.userid=this.$route.params.data
        }
    }

</script>

<style>


</style>