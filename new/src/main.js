import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Overview from  './components/Overview.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Overview,name:'overview'}
    ]
})

createApp(Overview).use(router).mount('#app')
