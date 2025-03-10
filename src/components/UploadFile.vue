<script setup>
import { ref, computed } from 'vue'
import iconView from '@/components/Icon.vue'

import xmlIcon from '@/assets/svg_icons/xml_icon.svg'

const props = defineProps({
    text: {
        type: String,
        default: "点击选择文件，或拖拽到此处",
    },
    accept: {
        type: String,
        default: "image/*",
    },
})

const emit = defineEmits(['change'])


const hasFile = ref(false)
const isDragging = ref(false)
const imageData = ref('')
const xmlData = ref({
    name: '',
    size: '',
    data: '',
})

// 选择文件事件
function handleInputChange(event) {
    const files = event.target.files
    handleFiles(files)
}

// 拖拽文件事件
function handleDragOver(event) {
    event.preventDefault()
    isDragging.value = true
}
function handleDragLeave(event) {
    event.preventDefault()
    isDragging.value = false
}
function handleDrop(event) {
    event.preventDefault()
    isDragging.value = false
    const files = event.dataTransfer.files
    handleFiles(files)
}

// 处理文件
function handleFiles(files) {
    if (files.length > 0) {
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = function(e) {

            const fileExtension = files[0].name.split('.').pop().toLowerCase()
            if (props.accept === '.xml' && fileExtension === 'xml') {
                xmlData.value.name = files[0].name.split('.').slice(0, -1).join('.')
                xmlData.value.size = files[0].size
                xmlData.value.data = e.target.result
                hasFile.value = true
                emit('change', xmlData.value)
            }

            const hasImage = files[0].type.startsWith('image/')
            if (props.accept === 'image/*' && hasImage) {
                imageData.value = e.target.result
                hasFile.value = true
                emit('change', e.target.result)
            }

        }
    }
}

</script>

<template>
    <label @dragover="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop">
        <input type="file" :accept="accept" @change="handleInputChange">
        <div class="uploadFile flex-x-y" :class="{ 'draging': isDragging }">
            
            <!-- 提示文本 -->
            <div v-if="!hasFile" class="tipsText flex-y">
                <iconView icon="upload" size="2em"/>
                <div class="text" v-html="text"></div>
            </div>

            <!-- 图片预览 -->
            <img v-if="hasFile && accept === 'image/*'" :src="imageData" alt="">
            
            <!-- XML预览 -->
            <div v-if="hasFile && accept === '.xml'" class="xmlData flex-x">
                <img class="xmlIcon" :src="xmlIcon" alt="">
                <p class="xmlName">{{ xmlData.name }}.xml</p>
            </div>

        </div>
    </label>
</template>

<style lang="scss" scoped>
.uploadFile {
    padding: 10px;
    margin-bottom: 16px;
    width: 100%;
    height: 120px;
    border-radius: 8px;
    border: 2px dashed transparent;
    background: var(--color-bg);
    transition: all 0.15s;
    &:hover {
        cursor: pointer;
        border-color: var(--color-theme);
    }
    &.draging {
        border-color: var(--color-theme);
    }
    .tipsText {
        color: var(--color-text-4);
        .icon {
            color: var(--color-text-5);
        }
        .text {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;
            white-space: pre;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .xmlData {
        padding: 0 15px 0 5px;
        .xmlIcon {
            width: 36px;
            height: 36px;
        }
        .xmlName {
            margin: 4px 0 0 10px;
        }
    }
}
</style>