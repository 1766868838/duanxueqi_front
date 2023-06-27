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
import Bmanage from '~/pages/Bmanage.vue'

import Person from '~/pages/Person.vue'

import Bbook from '~/pages/Bbooks.vue'
import Rbook from "~/pages/Rbook.vue"
import Librarian from "~/pages/librarian.vue"
import AddBook from "~/pages/addBook.vue"
import MInfo from "~/pages/mInfo.vue"
import mReader from "~/pages/mReader.vue"
import addReader from "~/pages/aReader.vue"
import mr from "~/pages/modifyReader.vue"
import sb from "~/pages/Sbooks.vue"
import AdminManage from "~/pages/AdminManage.vue"


//路由配置
const routes = [{
    path:"/",//根路径
    component:Login
},{
    path:"/Badmin",
    component:Badmin,
    children:[
        {   
            //借阅管理
            path:"/Badmin/bmanage",
            component:Bmanage
        },{
            //借页面
            path:"/Badmin/bbooks",
            component:Bbook
        },{
            //还书
            path:"/Badmin/Rbook",
            component:Rbook
        },{
            //图书管理
            path:"/Badmin/librarian",
            component:Librarian
        },{
            //添加图书
            path:"/Badmin/addBook",
            component:AddBook
        },{
            //修改图书信息
            path:"/Badmin/minfo",
            component:MInfo
        },{
            //读者管理
            path:"/Badmin/mReader",
            component:mReader
        },{
            //添加读者
            path:"/Badmin/aReader",
            component:addReader
        },{
            //修改读者信息
            path:"/Badmin/mr",
            component:mr
        },{
            //图书查询
            path:"/Badmin/sb",
            component:sb
        }
    ]
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
    component: NotFound 
},{
    //个人主页
    path:"/Person",
    component:Person
},,{
    //管理员管理界面
    path:"/AdminManage",
    component:AdminManage
}
]

//接受路由配置
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router