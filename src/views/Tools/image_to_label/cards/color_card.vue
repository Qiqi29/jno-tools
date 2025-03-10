<script setup>
import { onMounted, ref, computed } from 'vue'
import { imageToCode } from '../function'

import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()

import { useRouter } from 'vue-router'
const router = useRouter()

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { showToast } from '@/components/Toast'
import buttonView from '@/components/Button.vue'
import popupView from '@/components/Popup.vue'

const howToUsePopupRef = ref(null)
import howToUseComponent from '../popup/howToUse.vue'
const manualCopyPopupRef = ref(null)
import manualCopyComponent from '../popup/manualCopy.vue'



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


// 获取当前选中的颜色值
let colorValue = computed(() => {
    return labelStore.colorList[labelStore.activeColor]?.color.toUpperCase()
})


// 点击复制代码按钮
const buttonCopyCode = () => {
    // 把图像转换为代码
    labelStore.resultCode = imageToCode()
    if (!labelStore.resultCode) return

    // 复制代码到剪切板中
    if (navigator.clipboard) {
        navigator.clipboard.writeText(labelStore.resultCode)
        showToast(t('toast.copy'))
    } else {
        showToast(t('toast.copy_err'))
    }
}

// 点击手动复制按钮
const buttonManualCopy = () => {
    labelStore.resultCode = imageToCode()
    if (!labelStore.resultCode) return
    manualCopyPopupRef.value.show()
    // router.push('/tool/imagetolabel/copycode')
}

// 点击使用方法按钮
const buttonHelp = () => {
    howToUsePopupRef.value.show()
}

</script>

<template>
    <div class="main_card color_card">

        <p class="card_title">{{ $t('imageToLabel.color.title_1') }}</p>
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

            <div class="color_hex_text flex-x-y">
                <span>{{ colorValue }}</span>
            </div>

            <div class="edit_buttons">
                <buttonView type="default" icon="left" @click="clickColorButton(0)"/>
                <buttonView type="default" icon="right" @click="clickColorButton(1)"/>
            </div>

            <div class="card_tips">
                <p>{{ $t('imageToLabel.color.color_tips') }}</p>
            </div>
        </div>

        <p class="card_title">{{ $t('imageToLabel.color.title_2') }}</p>
        <div class="card_content export_buttons">
            <buttonView type="primary" :text="$t('imageToLabel.color.btn_copy')" @click="buttonCopyCode"/>
            <buttonView type="default" :text="$t('imageToLabel.color.btn_m_copy')" @click="buttonManualCopy"/>
            <buttonView type="default" :text="$t('imageToLabel.color.btn_help')" @click="buttonHelp"/>
        </div>

        <!-- 如何使用弹窗 -->
        <popupView ref="howToUsePopupRef" :title="$t('popup_howToUse.main_title')">
            <howToUseComponent />
        </popupView>
        
        <!-- 手动复制弹窗 -->
        <popupView ref="manualCopyPopupRef" :title="$t('popup_manualCopy.main_title')">
            <manualCopyComponent />
        </popupView>

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
                    -13px -13px 0 -11.5px var(--color-button-h),
                    13px -13px 0 -11.5px var(--color-button-h),
                    -13px 13px 0 -11.5px var(--color-button-h),
                    13px 13px 0 -11.5px var(--color-button-h);
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

    .color_hex_text {
        width: 100%;
        height: 36px;
        border-radius: 4px;
        background: var(--color-bg-3);
        color: var(--color-text-3);
        font-weight: bold;
        font-size: 16px;
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