import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/homes',
        component:() => import('../views/home/Home.vue')
    },
    {
        path:'/login',
        component:() => import('../views/userCenter/Login/Login.vue')
    },
    {
        path:'/active',
        component:() => import('../views/act/ActivityDetail.vue')
    },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router;