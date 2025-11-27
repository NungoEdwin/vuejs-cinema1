<template>
<div v-bind:class="{'check-filter':true,active:checked}" v-on:click="checkFilter">
     <span class='checkbox'></span>
     <span class="check-filter-title"> {{title}}</span>
     </div>
</template>
<script>
export default{
 props:["title",'category'],
 methods:{
    checkFilter(){
        this.checked=!this.checked
        this.$emit('checkfilter',this.category,this.title,this.checked)
    }},
    data(){
     return{
         checked:false
        }
    }
    }
</script>
