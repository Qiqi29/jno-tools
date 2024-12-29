<!-- 顶栏布局 -->
<script setup>
import iconView from '../components/Icon.vue'

import { useI18n } from "vue-i18n"
const { locale } = useI18n()

// 组件属性
const props = defineProps({
    title: {
        type: String,
        default: "标题",
    },
})

// 语言菜单状态
const showMenu = ref(false)

// 点击菜单项，切换语言，并保存语言到本地存储
const changeLocale = (lang) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
}

</script>

<template>
    <div class="topbar flex-x-between">

        <router-link to="/" class="logo_container flex-x">
            <img class="icon" src="@/assets/Logo.png" alt="">
            <p class="title">{{ title }}</p>
        </router-link>

        <div class="nav_list flex-x">
            <a class="item nav_button flex-x-y" href="https://www.simplerockets.com/" target="_blank">
                <span class="text">{{ $t("topbar.jno") }}</span>
            </a>
            <div class="item nav_button flex-x-y" @mouseover="showMenu = true" @mouseleave="showMenu = false">
                <iconView icon="langurage"/>
                <span class="text">{{ $t("topbar.language") }}</span>
                <div v-if="showMenu" class="menu">
                    <div class="menu_box">
                        <div class="menu_item" @click="changeLocale('zh')">简体中文</div>
                        <div class="menu_item" @click="changeLocale('en')">English</div>
                    </div>
                </div>
            </div>
            <a class="item nav_button flex-x-y" href="https://github.com/Qiqi29/jno-tools" target="_blank">
                <iconView icon="github"/>
                <span class="text">Github</span>
            </a>
        </div>

        <div class="nav_menu_btn nav_button flex-x-y">
            <iconView icon="menu" size="1.6em"/>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.topbar {
    position: sticky; top: 0; left: 0;
    height: 60px;
    padding: 0 12px;
    background-image: radial-gradient(var(--color-bg-a) 1px, var(--color-bg) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(8px);
    border-bottom: 3px solid var(--color-bg-2);
    z-index: 100;
}

.logo_container {
    padding: 6px 12px 6px 8px;
    border-radius: 6px;
    transition: all 0.15s;
    &:hover {
        background: var(--color-hover);
    }
    .icon {
        height: 28px;
        width: 28px;
    }
    .title {
        margin-left: 14px;
        color: var(--color-text-2);
        font-size: 15px;
        font-weight: bold;
    }
}

.nav_list {
    .item {
        position: relative;
        
        margin-left: 2px;
    }
    .menu {
        position: absolute; top: 100%; right: 0;
        font-weight: lighter;
        .menu_box {
            padding: 6px;
            margin-top: 4px;
            min-width: 160px;
            border-radius: 8px;
            border: 1px solid var(--color-bg-3);
            background: var(--color-bg-2);
            color: var(--color-text-3);
            box-shadow: 0 5px 15px #00000020;
            animation: showMenuAnim 0.3s cubic-bezier(.15,.5,.2,1) both;
            overflow: hidden;
            .menu_item {
                padding: 10px 12px;
                border-radius: 4px;
                &:hover {
                    color: var(--color-theme);
                    background: var(--color-bg-3);
                }
                &:not(:last-child) {
                    border-bottom: 1px solid var(--color-bg-3);
                }
            }
        }
    }
}

.nav_menu_btn {
    display: none;
}

.nav_button {
    padding: 2px 12px 0 12px;
    height: 36px;
    border-radius: 5px;
    color: var(--color-theme);
    font-weight: bold;
    transition: all 0.15s;
    cursor: pointer;
    &:has(.icon) .text {
        margin-left: 4px;
    }
    &:hover {
        background: var(--color-theme);
        color: #FFFFFF;
        fill: #FFFFFF;
    }
    &:active {
        background: var(--color-theme-a);
    }
}


@keyframes showMenuAnim {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}


@media (max-width: 800px) {
    .nav_list {
        display: none;
    }
    .nav_button {
        display: flex;
    }
}

</style>