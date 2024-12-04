import { createVNode, render } from 'vue'
import toastView from './Toast.vue'

let timer = null
let container = null

export function showToast(message, time = 1500) {
    // 检查是否已创建容器
    container = document.querySelector(".toast-container")
    if (!container) {
        // 创建放置消息的容器
        container = document.createElement("div")
        container.setAttribute("class", "toast-container")
        document.querySelector("body").appendChild(container)
    } else {
        render(null, container)
    }

    // 创建Toast并挂载属性
    const VNode = createVNode(toastView, { 
        message,
    })

    // 渲染节点到指定位置
    render(VNode, container)

    // 延迟销毁
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, container)
    }, time)
}