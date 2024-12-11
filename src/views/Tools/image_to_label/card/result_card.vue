<script setup>
import { ref, computed, defineExpose, onUpdated } from 'vue'
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()
import { rgbToHex } from '@/utils/Tools'

// 图像数据改变时更新显示的图像
const imageUrl = computed(() => {
    if (labelStore.newImageData === null) return
    return labelStore.newImageData.toDataURL()
})

const handleClickImg = (event) => {
    // let x = event.offsetX
    // let y = event.offsetY

    // const canvas = labelStore.newImageData
    // const ctx = canvas.getContext('2d')
    // const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    // const data = imgData.data
    
    // let index = (y * canvas.width + x) * 4

    // console.log(rgbToHex([data[index], data[index + 1], data[index + 2]]))
}

</script>

<template>
    <div class="main_card result_card">

        <p class="card_title">{{ $t('imageToLabel.result.title_1') }}</p>
        <div class="result_box flex-x-y">
            <img v-if="imageUrl" :src="imageUrl" @click="handleClickImg" alt="">            
        </div>

    </div>
</template>

<style lang="scss" scoped>
.result_card {
    flex: 1;
    display: flex;
    flex-direction: column;
    .result_box {
        flex: 1;
        padding: 10px;
        border-radius: 6px;
        background: var(--color-bg);
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            image-rendering: pixelated;
            object-fit: contain;
        }
    }
}

@media (max-width: 900px) {
    .result_card {
        flex: none;
        height: 350px;
    }
}
</style>