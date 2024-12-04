<script setup>
import iconView from './Icon.vue'

import conf from '/src/App.config'
const props = defineProps({
    title: {
        type: String,
        default: conf.web.title,
    },
})
</script>

<template>
    <div class="topbar flex-x-between">

        <router-link to="/" class="logo flex-x">
            <img class="icon" src="@/assets/logo.png" alt="">
            <p class="title">{{ title }}</p>
        </router-link>

        <div class="nav_list flex-x">
            <a class="flex-x-y" href="https://www.simplerockets.com/" target="_blank">
                <span>JNO 官网</span>
            </a>
            <a class="flex-x-y" href="https://github.com/Qiqi29" target="_blank">
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
    padding: 6px 14px 6px 10px;
    border-radius: 4px;
    transition: all 0.15s;
    &:hover {
        background: #F0EFFF1A;
    }
    .icon {
        height: 34px;
        width: 34px;
    }
    .title {
        margin-left: 16px;
        color: var(--color-text-2);
        font-size: 16px;
        font-weight: bold;
    }
}

.nav_list {
    a {
        padding: 2px 12px 0 12px;
        margin-left: 2px;
        height: 36px;
        border-radius: 4px;
        color: var(--color-theme);
        font-weight: bold;
        fill: var(--color-theme);
        transition: all 0.15s;
        &:hover {
            background: var(--color-theme);
            color: #FFFFFF;
            fill: #FFFFFF;
        }
    }
}

</style>