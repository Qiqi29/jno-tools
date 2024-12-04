import { createVNode, render } from 'vue'
import popupView from './Popup.vue'

let container = null

// 显示弹窗
export function showPopup(title, text) {
    // 检查是否已创建容器
    container = document.querySelector(".popup-container")
    if (!container) {
        container = document.createElement("div")
        container.setAttribute("class", "popup-container")
        document.querySelector("body").appendChild(container)
    } else {
        render(null, container)
    }

    // 创建Popup并挂载属性
    const VNode = createVNode(popupView, { 
        title,
        text
    })

    // 渲染节点到指定位置
    render(VNode, container)
}

// 隐藏弹窗
export function hidePopup() {
    render(null, container)
}