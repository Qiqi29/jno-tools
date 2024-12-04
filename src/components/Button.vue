<script setup>
import { computed } from 'vue'
import iconView from './Icon.vue'

const props = defineProps({
    text: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "default",
    },
    icon: {
        type: String,
        default: "",
    }
})

const buttonClass = computed(() => [
    `qi-button__${props.type}`,
])

const emit = defineEmits(['click'])

// 按钮点击事件
const handleClick = (event) => {
    emit('click')
}
</script>

<template>
    <div class="qi-button flex-x-y" :class="buttonClass" @click="handleClick">
        <iconView v-if="icon" :icon="icon" size="1.3em"/>
        <span v-if="text">{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
.qi-button {
    padding-top: 1px;
    margin: 10px 0;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    text-shadow: 1px 1px 0 #00000060;
    transition: all 0.15s;
    user-select: none;
    cursor: pointer;
    .icon {
        fill: var(--color-text-3);
    }
}

.qi-button__default {
    color: var(--color-text-2);
    background: #2E353D;
    &:hover {
        background: #3D4955;
    }
    &:active {
        background: #2E353D;
    }
}

.qi-button__primary {
    color: var(--color-text-1);
    background: var(--color-theme);
    &:hover {
        background: var(--color-theme-h);
    }
    &:active {
        background: var(--color-theme-a);
    }
}
</style>