<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import sliderView from '@/components/Slider.vue'
import switchView from '@/components/Switch.vue'
import selectView from '@/components/Select.vue'
import uploadFile from '@/components/UploadFile.vue'

import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()
const emit = defineEmits(['change'])


// 使用 i18n 翻译文本
const transModeText = ref([
    'imageToLabel.edit.tranMode_off',
    'imageToLabel.edit.tranMode_auto',
    'imageToLabel.edit.tranMode_color',
])
const transModeList = computed(() => {
    return transModeText.value.map(str => t(str))
})


// 选择图片后调用
function handleUploadImage(image) {
    labelStore.imageData = image
    emit('change')
}

// 选项改变时调用
const handleItemChange = () => {
    emit('change')
}


</script>

<template>
    <div class="main_card edit_card">

        <p class="card_title">{{ $t('imageToLabel.edit.title_1') }}</p>
        <uploadFile accept="image/*" @change="handleUploadImage" :text="$t('imageToLabel.edit.select_image')"/>

        <p class="card_title">{{ $t('imageToLabel.edit.title_2') }}</p>
        <div class="card_content">

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">{{ $t('imageToLabel.edit.imgw') }}</p>
                    <p class="value">{{ labelStore.imageWidth }}</p>
                </div>
                <sliderView v-model="labelStore.imageWidth" @change="handleItemChange" :min="10" :max="400" :step="10"/>
            </div>

            <div class="card_tips">
                <p>{{ $t('imageToLabel.edit.imgw_tips') }}</p>
            </div>

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">{{ $t('imageToLabel.edit.colorNum') }}</p>
                    <p class="value">{{ labelStore.colorNum }}</p>
                </div>
                <sliderView v-model="labelStore.colorNum" @change="handleItemChange" :min="1" :max="10"/>
            </div>

            <div class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">{{ $t('imageToLabel.edit.tranValue') }}</p>
                    <p class="value">{{ labelStore.colorDetail }}</p>
                </div>
                <sliderView v-model="labelStore.colorDetail" @change="handleItemChange" :min="0" :max="200" :step="1"/>
            </div>

            <div v-if="labelStore.imageColors.length !== 0" class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">{{ $t('imageToLabel.edit.tranMode') }}</p>
                    <selectView v-model="labelStore.transMode" @change="handleItemChange" :value-list="transModeList"/>
                </div>
            </div>
            
            <div v-if="labelStore.transMode == 2" class="setting_item">
                <div class="content flex-x-between">
                    <p class="title">{{ $t('imageToLabel.edit.tranColor') }}</p>
                    <selectView v-model="labelStore.transColor" @change="handleItemChange" :value-list="labelStore.imageColors" :is-color="true"/>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.edit_card {
    margin-right: 16px;
    width: 280px;
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