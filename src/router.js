import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Movies from './pages/movies/Movie.vue'
import Theater from './pages/theaters/Theater.vue'
import Profile from './pages/profile/Profile.vue'
import Inteater from './pages/movies/Intheater.vue'
import Comingsoon from './pages/movies/Comingsoon.vue'

const router=new Router({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'./movies'
        },
        {
            path:'/movies',
            component:Movies,
            children:[
                {
                    path:'intheater',
                    name:'intheater',
                    component:Inteater
                },
                {
                    path:'comingsoon',
                    name:'comingsoon',
                    component:Comingsoon
                }
            ]
        },
        {
            path:'/theater',
            component:Theater
        },
        {
            path:'/profile',
            component:Profile
        }
    ]
})

export default router