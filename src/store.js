import {defineStore} from 'pinia'
import { ref } from 'vue'

export  const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            // 用户信息
            userInfo: {},
            //卡号
            card_num:'',
            //密码
            password:'',
            //身份
            identity:'',
            //个人主页用户信息
            user_inf:'',
            //个人借阅记录
            borrow_data:[],
            //所有图书
            my_books:[],
            //可借阅书籍
            canBorrow:[],
            //当前修改书籍
            currentBook:[],
            //当前修改读者
            currentReader:[],
            //当前管理员
            currentManager:[],
            item:[]
        };
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'login_user', // key的名称
                storage: localStorage, // 存储的位置，默认为 sessionStorage
                // paths: ['username'] // 可以选择哪些进入local存储，默认是全部进去存储
            }
        ]
    },

    getters: {},
    actions: {
        setCardNum(str) {
            this.card_num = str;
        },
        setPassword(str) {
            this.password = str;
        },
        setIdentity(str) {
            this.identity = str;
        },
        setUserInf_nickname(data) {
            this.user_inf=data;
        },
        setUserInf_nickname(str){
            this.user_inf.nickname=data;
        }
    }
});