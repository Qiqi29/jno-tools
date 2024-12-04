<script setup>
import { ref } from 'vue'
import { imageToPixel } from './function'
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()


// 引入组件
import topbar from '@/components/Topbar.vue'
import editCard from './components/edit_card.vue'
import resultCard from './components/result_card.vue'
import colorCard from './components/color_card.vue'

// 绑定组件引用
const result_card = ref(null)




// 开始转换
const handleStartConvert = () => {
    if (labelStore.imageData == null) return
    
    // 创建Image对象，储存图像数据
    const img = new Image()
    img.src = labelStore.imageData
    img.onload = function() {
        // 图片像素化
        const pixelImage = imageToPixel(img)
        // 更新图像数据
        labelStore.newImageData = pixelImage.newCanvas
    }
}


</script>

<template>
    <div class="imagetolabel-page">
    
        <!-- 顶栏 -->
        <topbar title="图片转 Label"></topbar>
        
        <!-- 内容区域 -->
        <div class="container">

            <!-- 编辑卡片 -->
            <editCard @change="handleStartConvert"/>

            <!-- 预览卡片 -->
            <resultCard ref="result_card"/>

            <!-- 颜色卡片 -->
            <colorCard />

        </div>
    
    </div>
</template>    
    
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    padding: 16px;
    height: calc(100vh - 60px);
}



@media (max-width: 900px) {
    .container {
        flex-direction: column;
        width: 100%;
        height: auto;
    }
    .main_card {
        width: 100%;
    }
}
</style>