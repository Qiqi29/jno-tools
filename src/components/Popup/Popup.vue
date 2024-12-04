<script setup>
import { ref, defineEmits } from 'vue'
import { hidePopup } from './index'

const props = defineProps({
    title: {
        type: String,
        default: "弹窗标题",
    },
    text: {
        type: String,
        default: "",
    },
})

// const emit = defineEmits(['close'])

const clickCloseButton = () => {
    hidePopup()
}

</script>

<template>
    <div class="qi-popup-box">
        
        <div class="popup">

            <!-- 顶部区域 -->
            <div class="top_box flex-x-y">
                <p class="title">{{ title }}</p>
                <div class="close_button flex-x-y" @click="clickCloseButton">X</div>
            </div>

            <!-- 内容区域 -->
            <div class="content" v-if="text" v-html="text">
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.qi-popup-box {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000060;
    z-index: 1000;

    .popup {
        position: fixed;
        top: 50%; left: 50%;
        padding: 14px 24px;
        transform: translate(-50%, -50%);
        width: calc(100% - 50px);
        max-width: 700px;
        border-radius: 10px;
        background: var(--color-bg-2);
        border: 1px solid var(--color-border);
    }

    .top_box {
        height: 40px;
        .title {
            color: var(--color-text-2);
            font-size: 20px;
            font-weight: bold;
        }
        .close_button {
            position: absolute;right: 20px;
            padding-top: 1px;
            width: 35px;
            height: 35px;
            border-radius: 4px;
            background: var(--color-bg-4);
            font-size: 24px;
            font-weight: bold;
            color: var(--color-text-3);
            user-select: none;
            cursor: pointer;
            &:hover {
                background: var(--color-hover);
            }
        }
    }

    .content {
        padding: 0 0 15px 0;
    }
}
</style>