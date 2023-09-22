<template>
<div id="movie-list">
  <movie-item v-for='movie in FilteredMovies' :key= "movie.movie.Title" :movie = 'movie.movie' class='movie'><movie-item>
</div>
</template>

<script>
import genres from "../util/genres";
import MovieItem from "./MovieItem.vue"
export default{
 props:['Genre','Time','movies'],
 components:{MovieItem},
methods:{
 genreFilter(movie){
 let b = this.Genre.find(Genre=>movie.movie.Genre===Genre);
 return b;
  console.log(b);
     }
 },
 computed:{
 FilteredMovies(){
  if(this.Genre.length===0){
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
