
import Vue  from "vue";
import "./style.scss"
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
// import genre from './util/genres.js';
// import time from './util/times.js';

// const overview = createApp(Overview);
// overview.mount('#app')
new Vue({
el:'#app',
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
    return{ genre:[],
        time:[]
 } },
components:{
  MovieList,MovieFilter
},



})
