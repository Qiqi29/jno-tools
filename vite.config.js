import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入 SVG 图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"

// 自动导入 Vue 函数
import AutoImport from 'unplugin-auto-import/vite'


export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [],
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(__dirname, 'src/assets/svg_icons')], 
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    
    // 项目的基本路径，部署到 Github 中的路径
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
