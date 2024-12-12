<script setup>
import { ref, computed, onUpdated, watch } from 'vue'
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()

const inputText = ref('')
const textArray = ref([])

// 如果转换结果代码更改，重置输入框
watch(() => labelStore.resultCode, () => {
    inputText.value = ''
    textArray.value = []
})

// 计算属性：文本字符数量
const textCount = computed(() => {
    return inputText.value.length
})

// 输入框改变
const handleInputChange = () => {
    textArray.value = splitString(labelStore.resultCode, textCount.value)
}

// 分割字符串，按指定长度分为数组
function splitString(str, length) {
    const result = []
    let startIndex = 0

    while (startIndex < str.length) {
        const endIndex = startIndex + length
        result.push(str.substring(startIndex, endIndex))
        startIndex = endIndex
    }

    return result
}

</script>

<template>
    <div class="content">
        <p class="popup_title">完整代码</p>
        <textarea v-model="labelStore.resultCode"></textarea>       
        
        <p class="popup_title">手机剪切板有限制？</p>
        <p class="popup_text">把上面的代码复制后粘贴到输入框内↓</p>
        <div class="input_box flex-x">
            <input type="text" v-model="inputText" @input="handleInputChange">
            <div class="text_conut text_show flex-x-y">{{ textCount }}</div>
        </div>
        
        <div v-if="textArray.length !== 0">
            <p class="popup_title">分段复制</p>
            <p class="popup_text">请按顺序复制到 Label 零件中。</p>
            <div class="input_list">
                <div class="input_box flex-x" v-for="(text, index) in textArray" :key="index">
                    <div class="input_num text_show flex-x-y">{{ index + 1 }}</div>
                    <input type="text" :value="text">
                </div>                
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.content {
    textarea, input {
        resize: none;
        width: 100%;
        padding: 10px 12px;
        border-radius: 5px;
        background-color: var(--color-bg);
        color: var(--color-text-2);
        font-size: 12px;
    }
    textarea {
        height: 100px;
    }
    .input_box {
        margin-top: 6px;
        height: 30px;
        input {
            height: 100%;
        }
        .text_show {
            padding: 1px 10px 0 10px;
            height: 100%;
            border-radius: 5px;
            color: var(--color-text-3);
            background: var(--color-bg-3);
        }
        .text_conut {
            margin-left: 6px;
        }
        .input_num {
            margin-right: 6px;
        }
    }
    .input_list {
        max-height: 240px;
        overflow: auto;
    }
}
</style>