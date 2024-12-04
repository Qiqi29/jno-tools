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

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
