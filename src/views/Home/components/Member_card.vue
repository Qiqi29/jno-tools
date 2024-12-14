<script setup>
import iconView from '@/components/Icon.vue'

const props = defineProps({
    name: {
        type: String,
        default: "你的名字",
    },
    introduce: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    jno: {
        type: String,
        default: "",
    },
    bilibili: {
        type: String,
        default: "",
    },
    github: {
        type: String,
        default: "",
    },
    youtube: {
        type: String,
        default: "",
    },
})
</script>

<template>
    <div class="member_card flex-y">
        <img class="avatar" :src="avatar" alt="">
        <p class="name">{{ name }}</p>
        <p class="introduce">{{ introduce }}</p>
        <div class="social_links">
            <a v-if="jno" :href="jno" target="_blank">
                <iconView icon="rocket" size="1.5em"/>
            </a>
            <a v-if="bilibili" :href="bilibili" target="_blank">
                <iconView icon="bilibili" size="1.5em"/>
            </a>
            <a v-if="github" :href="github" target="_blank">
                <iconView icon="github_fill" size="1.5em"/>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.member_card {
    width: 100%;
    border-radius: 10px;
    padding: 20px 20px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid var(--color-bg-2);
    }
    .name {
        margin-top: 14px;
        font-size: 20px;
        color: var(--color-text-3);
    }
    .introduce {
        margin-top: 4px;
        font-size: 14px;
        color: var(--color-text-4);
    }
    .social_links {
        margin-top: 16px;
        a {
            color: var(--color-text-5);
            transition: all 0.1s;
            &:hover {
                color: var(--color-theme);
            }
            &:not(:last-child) {
                margin-right: 14px;
            }
        }
    }
}
</style>