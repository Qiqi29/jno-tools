import { createApp } from 'vue'
import App from './App.vue'

// 全局样式文件
import 'nprogress/nprogress.css'
import '@/style/Color.css'
import '@/style/Flex.css'
import '@/style/Reset.css'
import '@/style/Style.scss'

import router from './router'               // router 路由
import { createPinia } from 'pinia'         // Pinia 状态管理库
import { i18n } from './langurage/i18n'     // 多语言配置
import 'virtual:svg-icons-register'         // SVG 图标注册器

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
