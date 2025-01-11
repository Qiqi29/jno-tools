<!-- 顶栏布局 -->
<script setup>
import iconView from '@/components/Icon.vue'
import MenuView from '@/components/Menu.vue'

import { useI18n } from "vue-i18n"
const { locale, t } = useI18n()

// 组件属性
const props = defineProps({
    title: {
        type: String,
        default: "标题",
    },
})


// 菜单状态
const showNavMenu = ref(false)
const showLangMenu = ref(false)

// 主菜单
const menuOptions = computed(() => [
    {
        label: t("topbar.jno"),
        key: "jno",
        link: "https://www.simplerockets.com/",
    },
    {
        label: t("topbar.language"),
        key: "language",
        icon: "langurage",
        children: [
            {
                label: "简体中文",
                key: "zh",
            },
            {
                label: "English",
                key: "en",
            },
        ],
    },
    {
        label: "Github",
        key: "github",
        icon: "github",
        link: "https://github.com/Qiqi29/jno-tools",
    },
])

// 语言菜单
const languageMenuOptions = ref([
    {
        label: "简体中文",
        key: "zh",
    },
    {
        label: "English",
        key: "en",
    },
])


// 菜单选择事件
const handleMenuSelect = (key) => {
    if (key === "zh" || key === "en") {
        handleLangMenuSelect(key)
    }
    if (key === "jno") {
        window.open("https://www.simplerockets.com/")
    }
    if (key === "github") {
        window.open("https://github.com/Qiqi29/jno-tools")
    }
}

// 语言菜单事件
const handleLangMenuSelect = (key) => {
    locale.value = key
    localStorage.setItem('locale', key)
}


// 监听窗口宽度变化
const onResize = () => {
    showNavMenu.value = false
}
onMounted(() => {
    window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
})

</script>

<template>
    <header class="topbar flex-x-between">

        <router-link to="/" class="logo_container flex-x">
            <img class="icon" src="@/assets/Logo.png" alt="">
            <p class="title">{{ title }}</p>
        </router-link>

        <!-- 右侧选项列表 -->
        <div class="nav_list flex-x">
            <a class="item nav_button flex-x-y" href="https://www.simplerockets.com/" target="_blank">
                <span class="text">{{ $t("topbar.jno") }}</span>
            </a>
            <div class="item nav_button flex-x-y" @mouseover="showLangMenu = true" @mouseleave="showLangMenu = false">
                <iconView icon="langurage"/>
                <span class="text">{{ $t("topbar.language") }}</span>
                <transition name="menuFade">
                    <div v-show="showLangMenu" class="menu">
                        <MenuView :options="languageMenuOptions" @select="handleLangMenuSelect"/>
                    </div>
                </transition>
            </div>
            <a class="item nav_button flex-x-y" href="https://github.com/Qiqi29/jno-tools" target="_blank">
                <iconView icon="github"/>
                <span class="text">Github</span>
            </a>
        </div>

        <!-- 菜单按钮（宽度低于800px时显示） -->
        <div class="nav_menu_btn nav_button flex-x-y" @click="showNavMenu = !showNavMenu">
            <iconView icon="menu" size="1.6em"/>
        </div>

        <!-- 窄屏幕菜单 -->
        <transition name="menuFade">
            <div v-show="showNavMenu" class="nav_menu" @click="showNavMenu = false">
                <MenuView :options="menuOptions" @select="handleMenuSelect" @click.stop=""/>
            </div>
        </transition>

    </header>
</template>

<style lang="scss" scoped>
.topbar {
    position: sticky; top: 0; left: 0;
    height: 60px;
    padding: 0 24px;
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
        font-size: 18px;
        font-weight: bold;
    }
}

.nav_button {
    padding: 1.5px 12px 0 12px;
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

.nav_list {
    .item {
        position: relative;
        margin-left: 2px;
    }
    .menu {
        position: absolute; top: 100%; right: 0;
        font-weight: lighter;
    }
}

.nav_menu_btn {
    display: none;
    user-select: none;
}

.nav_menu {
    position: fixed;
    top: 60px; left: 0; bottom: 0; right: 0;
    padding: 10px;
    height: calc(100vh - 60px);
    animation: showNavMenuAnim 0.3s ease both;
}


// 菜单动画
.menuFade-enter-active,
.menuFade-leave-active {
    transition: all 0.3s cubic-bezier(.15,.5,.2,1);
}
.menuFade-enter-from,
.menuFade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}


@keyframes showNavMenuAnim {
    0% {
        background: #0a0c0e00;
    }
    100% {
        background: #0a0c0e80;
    }
}


@media (max-width: 800px) {
    .topbar {
        padding: 0 12px;
    }
    .nav_list {
        display: none;
    }
    .nav_button {
        display: flex;
    }
}

</style>