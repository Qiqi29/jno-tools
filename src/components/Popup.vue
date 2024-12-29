<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: "弹窗标题",
    },
})

const isShow = ref(false)
const isShowPopup = ref(false)

function show() {
    isShow.value = true
}

function hide() {
    isShow.value = false
}

defineExpose({
    show,
})
</script>

<template>
    <transition name="fade-bg">
        <div class="popup-bg" v-show="isShow" @click="hide">
            
            <transition name="fade-popup">
                <div class="popup" v-show="isShow" @click.stop="">
                    <div class="top_box flex-x-y">
                        <p class="title">{{ title }}</p>
                        <div class="close_button flex-x-y" @click="hide">X</div>
                    </div>
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            </transition>
            
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.popup-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000060;
    z-index: 1000;

    .popup {
        position: fixed; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        padding: 14px 20px 16px 20px;
        width: calc(100% - 40px);
        max-width: 700px;
        border-radius: 10px;
        background: var(--color-bg-2);
        border: 1px solid var(--color-border);
    }

    .top_box {
        height: 40px;
        .title {
            color: var(--color-text-2);
            font-size: 18px;
            font-weight: bold;
        }
        .close_button {
            position: absolute; right: 20px;
            width: 32px;
            height: 32px;
            border-radius: 4px;
            background: var(--color-bg-4);
            font-size: 22px;
            font-weight: bold;
            color: var(--color-text-3);
            user-select: none;
            cursor: pointer;
            &:hover {
                background: var(--color-button-h);
            }
        }
    }
}

.fade-bg-enter-active, 
.fade-bg-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.fade-bg-enter-from, 
.fade-bg-leave-to {
    opacity: 0;
}

.fade-popup-enter-active, 
.fade-popup-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-popup-enter-from, .fade-popup-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9) !important;
}
.fade-popup-enter-to, .fade-popup-leave-from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.0) !important;
}
</style>