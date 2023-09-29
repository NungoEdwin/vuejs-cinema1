<template>
<div id="movie-list" >

<div v-if="FilteredMovies.length">
  <movie-item v-for='movie in FilteredMovies' :time ='Time' :key= "movie.movie.Title" :movie = 'movie.movie' :sessions='movie.sessions' class='movie'><movie-item>
</div>
<div v-else-if="movies.length" class="no-results">
  No Results
</div>
<div v-else class="no-results">
  Loading..
</div>

</div>
</template>

<script>
import genres from "../util/genres";
import MovieItem from "./MovieItem.vue"
export default{
 props:['Genra','Time','movies'],
 components:{MovieItem},
methods:{
 genreFilter(movie){
 let moviegenres=movie.movie.Genre.split(",")
 let matched = true;
 //weird if i dont use variable matched n use bool straight it doesnt filter
 this.Genra.forEach(genre=>{
   if(moviegenres.indexOf(genre) == -1){
    return matched = false;
   }
 });
 return matched;
     },
     sessionTimeFilter(session){
     if(!this.$moment(session.time).isSame(this.day,'day')){
     return false
     }
      else if(this.Time.length == 2 || this.Time.length == 0){
       return true
      }
      else if(this.Time[0] == 'After 6pm'){
      return this.$moment(session.time).hour() >= 18
      }
      else{
      return this.$moment(session.time).hour() <= 18
      }
      }
 },
 computed:{
 FilteredMovies(){
  if(this.Genra.length===0 && this.Time.length ===0){
     return this.movies;
    }
  else{
         let e;
    return e=this.movies.filter(movie=>this.genreFilter(movie)).filter(movie=>movie.sessions.find(session=> this.sessionTimeFilter(session)));
      }


            }

        }

        }
</script>
