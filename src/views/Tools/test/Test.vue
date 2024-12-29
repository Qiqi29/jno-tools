<script setup>
import { ref } from 'vue'
import axios from 'axios'

import QTopbar from '@/layout/Topbar.vue'
import buttonView from '@/components/Button.vue'

const headleRequest = async () => {
    
}

</script>

<template>
    <div class="test-page">
        
        <QTopbar title="测试"></QTopbar>
        
        <div class="container">

            <buttonView type="primary" text="按钮" @click="headleRequest"/>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 20px;
}

.qi-button {
    width: 200px;
}
</style>