
import Vue  from "vue";
import "./style.scss"
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import VueResource from 'vue-resource';
import moment from "moment-timezone";
moment.tz.setDefault('UTC')
Vue.use(VueResource)
Object.defineProperty(Vue.prototype,'$moment',{get(){return this.$root.moment}})
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
        time:[],
        movies:[],
        moment
 } },
components:{
  MovieList,MovieFilter
},
created(){
  this.$http.get('/api').then(response=>{
    this.movies = response.data

  })
}



})
