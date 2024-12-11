<script setup>
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()

</script>

<template>
    <div class="content">
        <textarea v-model="labelStore.resultCode"></textarea>       
    </div>
</template>

<style lang="scss" scoped>
.content {
    padding-top: 10px;
}
textarea {
    resize: none;
    width: 100%;
    height: 550px;
    padding: 10px 12px;
    border-radius: 6px;
    background-color: var(--color-bg);
    color: var(--color-text-2);
    font-size: 12px;
    // font-family: 'Courier New', Courier, monospace;
}
</style>