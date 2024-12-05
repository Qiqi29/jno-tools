import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    // 项目的基本路径，部署到 Github 中的项目名
    base: '/jno-tools-web/',
    // 开发服务器配置
    server: {
        host: '0.0.0.0',  // 允许通过IP访问网站
        port: 5174,       // 开发服务器端口号
        open: false,      // 是否自动打开浏览器
    },
    // 别名解析配置
    resolve: {
        alias: {
            '@': '/src'
        }
    },
})
