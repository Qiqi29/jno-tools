import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

// 所有语言包
const messages = { zh, en }

// 从本地读取保存的语言
const savedLocale = localStorage.getItem('locale') || 'zh'

// 导出配置
export const i18n = createI18n({
    legacy: false,
    messages,
    locale: savedLocale
})