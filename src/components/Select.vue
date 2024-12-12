<script setup>
import { ref, computed } from 'vue'
import iconView from '@/components/Icon.vue'
import { rgbToHex } from '@/utils/Tools'

const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    valueList: {
        type: Array,
        default: () => ['开启', '关闭'],
    },
    isColor: {
        type: Boolean,
        default: false,
    }
})
const emit = defineEmits(['update:modelValue', 'change'])

// 当前选项的位置
const count = ref(props.modelValue)

const handleChange = (mode) => {
    if (mode === 0) {
        count.value = count.value <= 0 ? props.valueList.length - 1 : count.value - 1
    } else {
        count.value = count.value >= props.valueList.length - 1 ? 0 : count.value + 1
    }
    emit('update:modelValue', count.value)
    emit('change')
}

</script>

<template>
    <div class="qi-select flex-x-between">
        
        <div class="button flex-x-y" @click="handleChange(0)">
            <iconView icon="left" size="1.4em"/>
        </div>

        <div class="value_text">
            <span v-if="!isColor" class="text">{{ valueList[modelValue] }}</span>
            <div v-else class="color" :style="{ backgroundColor: rgbToHex(valueList[modelValue]) }"></div>
        </div>

        <div class="button flex-x-y" @click="handleChange(1)">
            <iconView icon="right" size="1.4em"/>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.qi-select {
    width: 140px;
    color: #3D4955;
    user-select: none;
    .button {
        width: 20px;
        height: 20px;
        &:hover {
            cursor: pointer;
            color: var(--color-theme);
        }
        &:active {
            color: var(--color-theme-a);
        }
    }
    .value_text {
        font-size: 13px;
        .color {
            width: 50px;
            height: 16px;
            border-radius: 2px;
        }
    }
}
</style>