<script setup>
import { useLabelDataStore } from '@/stores/label_data'
const labelStore = useLabelDataStore()

import topbar from '@/components/Topbar.vue'

</script>

<template>
    <div class="copyCode-page">

        <topbar :title="$t('topbar.manual_copy')"></topbar>

        <div class="container">
            <textarea v-model="labelStore.resultCode"></textarea>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 20px;
    textarea {
        resize: none;
        width: 100%;
        height: 550px;
        padding: 10px 12px;
        border-radius: 10px;
        background-color: var(--color-bg-2);
        color: var(--color-text-2);
        font-size: 12px;
        font-family: 'Courier New', Courier, monospace;
    }
}
</style>