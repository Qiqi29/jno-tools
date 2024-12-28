<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useCarftDataStore } from '@/stores/carft_data'
const carftStore = useCarftDataStore()
import { modifyCarftXml } from './functon'

import topbar from '@/components/Topbar.vue'
import uploadFile from '@/components/UploadFile.vue'
import iconView from '@/components/Icon.vue'
import buttonView from '@/components/Button.vue'
import sliderView from '@/components/Slider.vue'



// 编辑工具列表
const activeTool = ref(0)
const toolList = [
    { name: '添加颜色格', icon: 'color' },
    { name: '作品缩放', icon: 'size' },
]


// 选择文件后调用
function handleUploadCarft(carft) {
    carftStore.carftData = carft
}

// 点击导出存档按钮
const exportCarft = () => {
    modifyCarftXml()
}

// 点击重置所有设置按钮
const resetSettings = () => {
    carftStore.reset()
}

onBeforeUnmount(() => {
    carftStore.reset(true)
})
</script>

<template>
    <div class="sr2ToolKit-page">

        <!-- 顶栏 -->
        <topbar :title="$t('carftEditor.title')"></topbar>

        <!-- 内容区域 -->
        <div class="container">
            
            <!-- 作品卡片 -->
            <div class="main_card carft_card">
                <p class="card_title">作品存档</p>
                <uploadFile accept=".xml" @change="handleUploadCarft" text="点击选择存档，或拖拽到此处"/>

                <p class="card_title">导出</p>
                <div class="card_content card_buttons">
                    <buttonView type="default" text="重置所有设置" @click="resetSettings"/>
                    <buttonView type="primary" text="保存存档" @click="exportCarft"/>
                </div>
            </div>

            <!-- 选项卡片 -->
            <div class="main_card tool_card">
                <p class="card_title">选择工具</p>
                <div class="tool_list">

                    <div class="tool_item flex-x" :class="{'active': activeTool == 0}" @click="activeTool = 0">
                        <iconView :icon="toolList[0].icon" size="1.7em"/>
                        <p class="name">{{ toolList[0].name }}</p>
                        <div v-if="carftStore.colorNum !== 0" class="edited_tips">已编辑</div>
                    </div>

                    <div class="tool_item flex-x" :class="{'active': activeTool == 1}" @click="activeTool = 1">
                        <iconView :icon="toolList[1].icon" size="1.7em"/>
                        <p class="name">{{ toolList[1].name }}</p>
                    </div>

                </div>
            </div>

            <!-- 编辑卡片 -->
            <div class="main_card edit_card">
                <p class="card_title">{{ toolList[activeTool].name }}</p>
                <div class="edit_content">
                    
                    <!-- 添加颜色格 -->
                    <div v-if="activeTool == 0">
                        <div class="setting_item">
                            <div class="content flex-x-between">
                                <p class="title">颜色格数量</p>
                                <p class="value">{{ carftStore.colorNum }}</p>
                            </div>
                            <sliderView v-model="carftStore.colorNum" :min="0" :max="25"/>
                        </div>
                        <div class="card_tips">
                            <p>游戏最多支持 50 个颜色格，因此最多只能增加 25 个，多余的不会生效。</p>
                        </div>
                    </div>

                    <!-- 作品缩放 -->
                    <div v-if="activeTool == 1">
                        <p>正在制作中...</p>
                    </div>

                </div>
            </div>
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

.carft_card {
    margin-right: 16px;
    width: 280px;
}

.tool_card {
    margin-right: 16px;
    width: 280px;
    .tool_list {
        padding: 5px 5px 0 5px;
        color: var(--color-text-2);
        .tool_item {
            position: relative;
            padding: 8px 12px;
            border-radius: 6px;
            margin-bottom: 10px;
            transition: all 0.15s;
            user-select: none;
            cursor: pointer;
            &:hover {
                background: var(--color-bg-3);
            }
            &.active {
                background: var(--color-theme-alpha);
                color: var(--color-theme);
            }
            .name {
                margin-left: 10px;
                margin-top: 1px;
            }
            .edited_tips {
                padding: 1.5px 10px 1px 10px;
                position: absolute; right: 10px;
                background: var(--color-theme);
                border-radius: 50px;
                font-size: 13px;
                color: var(--color-bg-2);
            }
        }
    }
}

.edit_card {
    flex: 1;
    .edit_content {
        max-width: 400px;
        padding: 16px 20px 25px 20px;
    }
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
    .carft_card {
        margin-right: 0;
        margin-bottom: 16px;
    }
    .tool_card {
        margin-right: 0;
        margin-bottom: 16px;
    }
}
</style>