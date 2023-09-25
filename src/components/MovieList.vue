<template>
<div>
<div id="movie-list" v-if="FilteredMovies.length">
  <movie-item v-for='movie in FilteredMovies' :key= "movie.movie.Title" :movie = 'movie.movie' class='movie'><movie-item>
</div>
<div v-else-if="movies.length">
<h2>No Results</h2></div>
<div v-else>
<h2>Loading</h2>
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
     }
 },
 computed:{
 FilteredMovies(){
  if(this.Genra.length===0){
     return this.movies;
    }
  else{
         let e;
    return e=this.movies.filter(this.genreFilter);
      }


            }

        }

        }
</script>
