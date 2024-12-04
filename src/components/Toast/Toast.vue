<script setup>
import { ref } from 'vue'
import iconView from '../Icon.vue'

const props = defineProps({
    message: {
        type: String,
        default: "提示文本",
    },
    icon: {
        type: String,
        default: "",
    }
})
</script>

<template>
    <div class="qi-toast">
        <iconView v-if="icon" :icon="icon"/>
        <span>{{ message }}</span>
    </div>
</template>

<style lang="scss" scoped>
.qi-toast {
    padding: 12px 24px;
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    background-color: #000000C0;
    z-index: 100;
}
</style>