// 项目的入口
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



// createApp(App).mount('#app')
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
import 'virtual:windi.css'
app.mount('#app')

