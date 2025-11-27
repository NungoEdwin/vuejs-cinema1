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
  <!-- <div class="movie-sessions">
   <div v-for='session in filteredsessions()' class="session-time-wrapper">
  <div class="session-time">{{formatsession(session.time)}}</div>
  </div>
  </div>  -->

</div> 
</div>



</template>
<script>
export default{
props:['movie','sessions','time'],
methods:{
formatsession (session){
return this.$moment(session).format('h:mm A')

},
sessionTimeFilter(session){
if(!this.$moment(session.time).isSame(this.day,'day')){
return false
}
 else if(this.time.length == 2 || this.time.length == 0){
  return true
 }
 else if(this.time[0] == 'After 6pm'){
 let a =this.$moment(session.time).hour() >= 18
 console.log(a)
 return a;
 }
 else{
 return this.$moment(session.time).hour() <= 18
 }
 },
 filteredsessions(){
  return this.sessions.filter(session=> this.sessionTimeFilter(session))//find not used as it brings only first instance not the array as in filter()

  }

}
}

</script>
