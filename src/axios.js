import axios from "axios";
//使用自定义配置新建一个 axios 实例
const service = axios.create({
    baseURL:"/api"
})

export default service