<template>
<div>
<div class='movie-col-left'>
<img :src='movie.Poster'>
</div>
<div class='movie-col-right'>
  <div class = 'movie-title'>
  <h2>{{movie.Title}}</h2>
  <span class = 'movie-rating'>{{movie.Rated}}</span>
  </div>
  <div class="movie-sessions">
  <div v-for='session in sessions' class="session-time-wrapper">
  <div class="session-time">{{formatsession(session.time)}}</div>
  </div>
  </div>

</div>
</div>
</div>


</template>
<script>
export default{
props:['movie','sessions'],
methods:{
formatsession (session){
return this.$moment(session).format('h:mm A')

}
  }


}

</script>
