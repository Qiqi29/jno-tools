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

</script>

<template>
    <div class="main_card result_card">

        <p class="card_title">{{ $t('imageToLabel.result_card.title_1') }}</p>
        <div class="result_box flex-x-y">
            <img v-if="imageUrl" :src="imageUrl" alt="">            
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
    // .color_list {
    //     width: 100%;
    //     margin: 16px 10px 0 10px;
    //     // height: 60px;
    //     display: flex;
    //     flex-wrap: wrap;
    //     .color_item {
    //         margin-right: 10px;
    //         margin-bottom: 10px;
    //         width: 32px;
    //         height: 32px;
    //         border-radius: 4px;
    //     }
    // }
}

@media (max-width: 900px) {
    .result_card {
        flex: none;
        height: 350px;
    }
}
</style>