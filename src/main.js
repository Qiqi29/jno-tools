import { createApp } from 'vue'
import App from './App.vue'

// 引入全局样式文件
import 'nprogress/nprogress.css'
import '@/style/Color.css'
import '@/style/Flex.css'
import '@/style/Reset.css'
import '@/style/Style.scss'

import router from './router'               // 引入 router 路由
import { createPinia } from 'pinia'         // 引入 Pinia 状态管理库
import { i18n } from './langurage/i18n'     // 引入多语言配置

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
