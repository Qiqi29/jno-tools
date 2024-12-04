<script setup>
import sliderView from '@/components/Slider.vue'
import switchView from '@/components/Switch.vue'
import selectView from '@/components/Select.vue'

import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()
const emit = defineEmits(['change'])




// 选择图片事件
function handleInputChange(event) {
    const files = event.target.files
    if (files.length > 0) {
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = function(e) {
            labelStore.imageData = e.target.result
            emit('change')
        }
    }
}


const handleItemChange = () => {
    emit('change')
}


</script>

<template>
    <div class="main_card edit_card">

        <p class="card_title">原始图片</p>
        <label>
            <input type="file" accept="image/*" @change="handleInputChange">
            <div class="upload_image_box flex-x-y">
                <p v-if="!labelStore.imageData">点击选择图片</p>
                <img v-if="labelStore.imageData" :src="labelStore.imageData" alt="">
            </div>
        </label>

        <p class="card_title">参数设置</p>
        <div class="card_content">

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">图像宽度</p>
                    <p class="value">{{ labelStore.imageWidth }}</p>
                </div>
                <sliderView v-model="labelStore.imageWidth" @change="handleItemChange" :min="10" :max="400" :step="10"/>
            </div>

            <div class="card_tips">
                <p>越宽越清晰，转换后的数据也越大。Lable 零件有字符数量限制，大概在 20000 字符之内。
                </p>
            </div>

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">颜色数量</p>
                    <p class="value">{{ labelStore.colorNum }}</p>
                </div>
                <sliderView v-model="labelStore.colorNum" @change="handleItemChange" :min="1" :max="10"/>
            </div>

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">透明精细度</p>
                    <p class="value">{{ labelStore.colorDetail }}</p>
                </div>
                <sliderView v-model="labelStore.colorDetail" @change="handleItemChange" :min="0" :max="200" :step="1"/>
            </div>

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">透明模式</p>
                    <selectView v-model="labelStore.transMode" @change="handleItemChange" :value-list="labelStore.transModeList"/>
                </div>
            </div>
            
            <div v-if="labelStore.transMode == 2" class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">透明颜色</p>
                    <selectView v-model="labelStore.transColor" @change="handleItemChange" :value-list="labelStore.imageColors" :is-color="true"/>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.edit_card {
    margin-right: 16px;
    width: 260px;
}

.upload_image_box {
    padding: 10px;
    margin-bottom: 16px;
    width: 100%;
    height: 120px;
    border-radius: 8px;
    border: 2px dashed var(--color-border);
    background: var(--color-bg);
    color: var(--color-text-4);
    transition: all 0.15s;
    &:hover {
        cursor: pointer;
        border-color: var(--color-theme);
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.color_input {
    width: 60px;
    height: 24px;
}


@media (max-width: 900px) {
    .edit_card {
        margin-right: 0;
        margin-bottom: 16px;
    }
}
</style>