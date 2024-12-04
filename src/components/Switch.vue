<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'

// 组件属性
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
})
// 组件事件
const emit = defineEmits(['update:modelValue', 'change'])


// 状态
const isChecked = ref(props.modelValue)

// 开关更改事件
const handleChange = (event) => {
    emit('update:modelValue', isChecked.value)
    emit('change')
}

</script>

<template>
    <div class="qi-switch">
        <label class="switch-label">
            <input 
                type="checkbox"
                v-model="isChecked"
                :checked="modelValue"
                @change="handleChange"
            />
            <div class="slider">
                <div class="slider-button"></div>
            </div>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.qi-switch {
    position: relative;
    --switch-w: 40px;
    --switch-h: 20px;
    width: var(--switch-w);
    height: var(--switch-h);
    .slider {
        width: var(--switch-w);
        height: var(--switch-h);
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: var(--color-bg-3);
        cursor: pointer;
    }
    .slider-button {
        position: absolute;
        top: 50%; left: 2px;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background: #525761;
        transition: all 0.1s;
    }
    input {
       display: none;
    }
    input:checked + .slider .slider-button {
        background: var(--color-theme);
        left: calc(100% - 18px);
    }
}
</style>