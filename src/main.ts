import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HomeVue from './page/Home.vue'
// import SkillVue from './page/Skills.vue'
import VueRouter from 'vue-router'


const routes = [
    {path: '/', 
    component: App, 
    children: [
        {path: '*',
        component: HomeVue},
        // {path: 'skills',
        // component: SkillVue
        // },
    ]}
]

const router =  new VueRouter(
    {
        routes: routes
    }
)

const app = createApp({router})




app.mount('#app')
