<template>
<div id="movie-list">
  <div v-for='movie in FilteredMovies' :key= "movie.title" class='movie'>{{movie.title}}</div>
</div>
</template>

<script>
import genres from "../util/genres";
export default{
 props:['Genre','Time'],

 data(){
    return {
     movies:[
    {title:'Pulp Fiction',genre:genres.CRIME},
    {title:'Home Alone',genre:genres.COMEDY},
    {title:'Austin Powers',genre:genres.COMEDY}
                ]
 };
},
methods:{
 genreFilter(movie){
 let b = this.Genre.find(Genre=>movie.genre===Genre);
 return b;
  console.log(b);
     }
 },
 computed:{
 FilteredMovies(){
  if(this.Genre.length===0){
     return this.movies;
    }else{
         let e;
    return e=this.movies.filter(this.genreFilter);
                }


            }

        }

        }
</script>
