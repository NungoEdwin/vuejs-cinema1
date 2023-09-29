
import Vue  from "vue";
//import "./style.scss"
import OverView from './components/Overview.vue'
import VueResource from 'vue-resource';

import moment from "moment-timezone";
import router from 'vue-router'
moment.tz.setDefault('UTC')
Vue.use(VueResource)
Object.defineProperty(Vue.prototype,'$moment',{get(){return this.$root.moment}})
// const overview = createApp(Overview);
// overview.mount('#app')
Vue.use(router);
const Router=new router({
  routes:[
    {path:'/',component:OverView,name:'home'}
  ]

})

new Vue({
el:'#app',
data(){
    return{
        moment
 } },
components:{
  OverView
},
Router



})
