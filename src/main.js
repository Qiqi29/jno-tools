import { createApp } from 'vue'
import App from './App.vue'

// 引入样式文件
import 'nprogress/nprogress.css'
import '@/style/Color.css'
import '@/style/Flex.css'
import '@/style/Reset.css'
import '@/style/Style.scss'

import router from './router'               // 引入 router 路由
import { createPinia } from 'pinia'         // 引入 Pinia 状态管理库

// 定义语言包
import zh from '@/langurage/zh'
import en from '@/langurage/en'
const messages = { zh, en }

// 从本地读取保存的语言
const savedLocale = localStorage.getItem('locale') || 'zh'

// 创建 i18n 对象
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    legacy: false,
    messages,
    locale: savedLocale
})


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
