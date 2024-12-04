<script setup>
import { onMounted, ref } from 'vue'
import { imageToCode } from '../function'

import iconView from '@/components/Icon.vue'
import buttonView from '@/components/Button.vue'
import { showToast } from '@/components/Toast'
import { showPopup, hidePopup } from '@/components/Popup'

import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()

import { useRouter } from 'vue-router'
const router = useRouter()



// 初始化颜色列表
function initColorList() {
    for (let i = 0; i < 25; i++) {
        labelStore.colorList.push({ id: i, color: "#000000"})
    }
}
onMounted(() => {
    if (labelStore.colorList.length === 0) {
        initColorList()
    }
})

// 点击颜色选项
const handleColorClick = (item, index) => {
    labelStore.activeColor = index
}

// 点击颜色移动按钮
const clickColorButton = (direction) => {
    const index = labelStore.activeColor
    if (direction === 0) {
        if (index > 0) {
            const item = labelStore.colorList.splice(index, 1)[0]   // 移除这个选项并保存下来
            labelStore.colorList.splice(index - 1, 0, item)         // 在上一个位置插入这个选项
            labelStore.activeColor -= 1
        }
    } else {
        if (index < labelStore.colorList.length - 1) {
            const item = labelStore.colorList.splice(index, 1)[0]
            labelStore.colorList.splice(index + 1, 0, item)
            labelStore.activeColor += 1
        }
    }
}


// 点击复制代码按钮
const buttonCopyCode = () => {
    // 把图像转换为代码
    labelStore.resultCode = imageToCode()
    if (!labelStore.resultCode) return

    // 复制代码到剪切板中
    if (navigator.clipboard) {
        navigator.clipboard.writeText(labelStore.resultCode)
        showToast("已复制代码")
    } else {
        showToast("复制失败，请手动复制")
    }
}

// 点击手动复制按钮
const buttonManualCopy = () => {
    labelStore.resultCode = imageToCode()
    if (!labelStore.resultCode) return
    router.push('/tool/imagetolabel/copycode')
}

// 点击使用方法按钮
const buttonHelp = () => {
    const content = `
        <p class="popup_title">1. 粘贴代码</p>
        <p class="popup_text">把复制的代码粘贴到 Lable 零件的输入框中。</p>

        <p class="popup_title">2. 设置 Label 零件的属性</p>
        <p class="popup_text">字体（Font）设置为 Future Earth。</p>
        <p class="popup_text">水平锚点（Horizontal Anchor）设置为 Left。</p>
        <p class="popup_text">垂直锚点（Vertical Anchor）设置为 Top。</p>
        <p class="popup_text">梯度（Gradient）设置为 Vertical。</p>
        
        <p class="popup_title">3. 调整图像大小</p>
        <p class="popup_text">在 TINKER PANEL 选项内通过 Part Scale（零件大小）调整图像的大小。</p>
        
        <p class="popup_title">小提示</p>
        <p class="popup_text">推荐使用清晰、对比度高、颜色较少的图像进行转换。</p>
    `
    showPopup("使用方法", content)
}

</script>

<template>
    <div class="main_card color_card">

        <p class="card_title">颜色编辑</p>
        <div class="color_box flex-y">
            <div class="color_list">
                <div 
                    v-for="(item, index) in labelStore.colorList" 
                    :key="index"
                    :class="{'color_item': true, 'active': index == labelStore.activeColor}"
                    :style="`background: ${item.color}`"
                    @click="handleColorClick(item, index)"
                ></div>
            </div>
        </div>

        <div class="card_content">

            <div class="edit_buttons">
                <buttonView type="default" icon="left" @click="clickColorButton(0)"/>
                <buttonView type="default" icon="right" @click="clickColorButton(1)"/>
            </div>

            <div class="card_tips">
                <p>这里的颜色顺序与游戏内一致，颜色不会保存在代码中，需要在游戏内对应位置修改颜色。</p>
            </div>
        </div>

        <p class="card_title">导出</p>
        <div class="card_content export_buttons">
            <buttonView type="primary" text="复制代码" @click="buttonCopyCode"/>
            <buttonView type="default" text="手动复制" @click="buttonManualCopy"/>
            <buttonView type="default" text="使用方法" @click="buttonHelp"/>
        </div>
        


    </div>
</template>

<style lang="scss" scoped>
.color_card {
    margin-left: 16px;
    width: 260px;

    .color_box {
        margin-top: 20px;
        margin-bottom: 10px;
        .color_list {
            display: grid;
            grid-template-columns: repeat(5, 32px);
            gap: 10px;
            .color_item {
                position: relative;
                width: 32px;
                height: 32px;
                border: 1px solid #1C2226;
                &:hover {
                    cursor: pointer;
                    box-shadow: 
                    -13px -13px 0 -11.5px var(--color-hover),
                    13px -13px 0 -11.5px var(--color-hover),
                    -13px 13px 0 -11.5px var(--color-hover),
                    13px 13px 0 -11.5px var(--color-hover);
                }
                &.active {
                    box-shadow: 
                    -13px -13px 0 -11.5px var(--color-theme),
                    13px -13px 0 -11.5px var(--color-theme),
                    -13px 13px 0 -11.5px var(--color-theme),
                    13px 13px 0 -11.5px var(--color-theme);
                }
            }
        }
    }

    .edit_buttons {
        display: flex;
        .qi-button:first-child {
            margin-right: 10px;
        }
    }

    .export_buttons {
        margin-top: 20px;
    }
}

@media (max-width: 900px) {
    .color_card {
        margin-left: 0;
        margin-top: 16px;
    }
}
</style>