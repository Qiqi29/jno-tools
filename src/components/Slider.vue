<script setup>
import { computed } from 'vue'
import { mapRange } from '@/utils/Tools'

// 组件属性
const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    min: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    step: {
        type: Number,
        default: 1,
    },
})

const emit = defineEmits([
    'update:modelValue', 
    'change',
    'touchup',
])


// 滑条改变后调用
const handleInput = (event) => {
    const value = parseInt(event.target.value, 10)
    emit('update:modelValue', value)
    emit('change')
}

// 松开滑条后调用
const handleTouchUp = (event) => {
    emit('touchup')
}

// 计算滑条进度
const progress = computed(() => {
    return mapRange(props.modelValue, props.min, props.max, 0, 100)
})
</script>

<template>
    <div class="qi-slider">
        <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
            :value="modelValue"
            :style="`background-size: ${progress}% 100%`"
            @input="handleInput"
            @mouseup="handleTouchUp"
            @touchend="handleTouchUp"
        />
    </div>
</template>

<style lang="scss" scoped>
.qi-slider {
    input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 6px;
        border-radius: 10px;
        background: -webkit-linear-gradient(var(--color-theme), var(--color-theme)) no-repeat #2E3741; 
        background-size: 50% 100%;
        cursor: pointer;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background: var(--color-theme);
            box-shadow: 0 0 0 1px #00000080;
            user-select: none;
        }
    }
}
</style>