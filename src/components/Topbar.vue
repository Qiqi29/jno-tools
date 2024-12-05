<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n"
const { locale } = useI18n()

import iconView from './Icon.vue'

import conf from '/src/App.config'
const props = defineProps({
    title: {
        type: String,
        default: conf.web.title,
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

        <router-link to="/" class="logo flex-x">
            <img class="icon" src="@/assets/logo.png" alt="">
            <p class="title">{{ title }}</p>
        </router-link>

        <div class="nav_list flex-x">
            <a class="item flex-x-y" href="https://www.simplerockets.com/" target="_blank">
                <span>{{ $t("topbar.jno") }}</span>
            </a>
            <div class="item flex-x-y" @mouseover="showMenu = true" @mouseleave="showMenu = false">
                <iconView icon="langurage"/>
                <div v-if="showMenu" class="menu">
                    <div class="menu_box">
                        <div class="menu_item" @click="changeLocale('zh')">简体中文</div>
                        <div class="menu_item" @click="changeLocale('en')">English</div>
                    </div>
                </div>
            </div>
            <a class="item flex-x-y" href="https://github.com/Qiqi29" target="_blank">
                <iconView icon="github"/>
            </a>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.topbar {
    position: sticky; top: 0; left: 0;
    height: 60px;
    padding: 0 10px;
    background: var(--color-bg);
    border-bottom: 3px solid var(--color-bg-2);
    z-index: 100;
}

.logo {
    padding: 6px 14px 6px 6px;
    border-radius: 4px;
    transition: all 0.15s;
    &:hover {
        background: #F0EFFF1A;
    }
    .icon {
        height: 30px;
        width: 30px;
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
        padding: 2px 10px 0 10px;
        margin-left: 2px;
        height: 36px;
        border-radius: 4px;
        color: var(--color-theme);
        font-weight: bold;
        fill: var(--color-theme);
        transition: all 0.15s;
        cursor: pointer;
        &:hover {
            background: var(--color-theme);
            color: #FFFFFF;
            fill: #FFFFFF;
        }
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

</style>