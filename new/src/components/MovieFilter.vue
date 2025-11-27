<template>
<div id=movie-filter>
  <h2>Time Filter</h2>
<div class="filter-group">
<check-filter1 v-for="time in times" category = 'time' v-bind:title="time" v-on:checkfilter="checkFilter"></check-filter1>
</div>
    <h2>Movie Filter</h2>
 <div class="filter-group">
 <check-filter1 v-for="genre in  genres" category = 'genre' v-bind:title="genre" v-on:checkfilter="checkFilter"></check-filter1>
 </div>
</div>
</template>
<script>
import genres from "../util/genres";
import times from "../util/times";
import CheckFilter1 from "./CheckFilter.vue";
export default{
components:{
CheckFilter1},
  data(){
   return{
  genres,
  times
}},
methods:{
 checkFilter(category,title,checked){
// console.log(title)
this.$emit('checkfilter',category,title,checked)
     }
},


        }
</script>
