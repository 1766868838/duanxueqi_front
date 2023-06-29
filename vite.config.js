import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from "path"//nodejs的内置模块

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")//路径设置别名
    }
  },
  server: {
    port: 8089,
    proxy: {
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/dev':{
        target:'http://192.168.43.176:8081',
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/dev/,''),
      }
    }
  },
  plugins: [vue(), WindiCSS()],
})
