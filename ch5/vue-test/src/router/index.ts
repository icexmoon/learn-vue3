import {createRouter,createWebHistory, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

// 创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes:[ // 路由规则 
        {
            name:'zhuye',
            path:'/home',
            component: Home
        },
        {
            name:'xinwen',
            path: '/news',
            component: News,
            children:[
                {
                    name: 'xiangqing',
                    path: 'detail',
                    component: Detail,
                    props(route){
                        return route.query
                    }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
})
// 暴露路由器
export default router