<template>
  <div style="width: 100%">
    <ul class="nav nav-tabs" style="background-color: rgb(223, 181, 188)">
     <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a class="nav-link" :class="{active: tab === selected}" @click.prevent="setTab(tab)">
        {{tab}}
        </a>
     </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TabNav",
    props:{
        tabs:{
            type: Array,
            required:true,
        },
        selected:{
            type:String,
            required:true,
        }
    },
    methods:{
        setTab(tab){
            this.$emit('selected', tab);
        }
    }

}
</script>

<style>

</style>