<template>
<div id="overview">
<div class="main">
<movie-list :Genra="genre" :Time="time" :movies='movies'></movie-list>
<movie-filter v-on:checkfilter='checkFilter'></movie-filter>
</div>
</div>
</template>
<script>
import "../style.scss"
import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';
export default{
components:{
MovieList,MovieFilter
},
methods:{
     checkFilter(category,title,checked){
         if(checked){
             this[category].push(title)
         }else{
           let index=  this[category].indexOf(title);
            console.log(index)
            if(index!=-1){
             this[category].splice(index,1);
            }

         }
     }
 },
 data(){
     return{
        genre:[],
         time:[],
         movies:[],

  } },
  created(){
    this.$http.get('/api').then(response=>{
      this.movies = response.data})
  }
}</script>
