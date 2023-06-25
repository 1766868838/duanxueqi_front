import{
    createRouter,//创建路由
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'
import Badmin from '~/pages/Badmin.vue'
import Sadmin from '~/pages/Sadmin.vue'
import Reader from '~/pages/Reader.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'

//路由配置
const routes = [{
    path:"/",//根路径
    component:Login
},{
    path:"/Badmin",
    component:Badmin
},{
    path:"/Sadmin",
    component:Sadmin
},{
    path:"/Reader",
    component:Reader
}, {
    // path:"/login",
    // component:Login
},{ 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound },
]

//接受路由配置
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router