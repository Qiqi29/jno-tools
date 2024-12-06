<script setup>
const props = defineProps({
    avatar: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "你的名字",
    },
    introduce: {
        type: String,
        default: "",
    }
})
</script>

<template>
    <div class="member_card flex-y">
        <img class="avatar" src="https://avatars.githubusercontent.com/u/112358908?v=4" alt="">
        <p class="name">{{ name }}</p>
        <p class="introduce">{{ introduce }}</p>
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
        margin-top: 12px;
        font-size: 20px;
        color: var(--color-text-3);
    }
    .introduce {
        margin-top: 6px;
        font-size: 14px;
        color: var(--color-text-4);
    }
}
</style>