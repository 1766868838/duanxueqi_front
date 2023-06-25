// 项目的入口
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
import 'virtual:windi.css'
app.mount('#app')
