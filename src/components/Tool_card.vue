<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

const props = defineProps({
    link: {
        type: String,
        default: "/",
    },
    blank: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "卡片标题",
    },
    name: {
        type: String,
        default: "作者",
    },
    image: {
        type: String,
        default: "",
    },
})

const openPage = () => {
    if (props.blank) {
        window.open(props.link)
    } else {
        router.push(props.link)
    }
}
</script>

<template>
    <div class="tool_card" @click="openPage">
        <div class="tool_image">
            <div class="image">
                <img :src="image"  alt="">
            </div>
        </div>
        <div class="content">
            <p class="title">{{ title }}</p>
            <p class="name">{{ name }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tool_card {
    width: 100%;
    border-radius: 12px;
    background: var(--color-bg-2);
    color: var(--color-text-2);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: translateY(-6px);
    }
    .tool_image {
        width: 100%;
        height: 260px;
        padding: 10px;
        .image {
            width: 100%;
            height: 100%;
            background: var(--color-bg);
            border-radius: 6px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                // object-fit: cover;
            }
        }
    }
    .content {
        padding: 5px 14px 12px 14px;
        .title {
            font-size: 18px;
        }
        .name {
            margin-top: 5px;
            font-size: 14px;
            color: var(--color-theme)
        }
    }
}
</style>