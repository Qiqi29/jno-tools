<script setup>
import iconView from '@/components/Icon.vue'

</script>

<template>
    <div class="error-page-404 flex-y">

        <p class="title">404</p>

        <p class="text"><span>{{ $t('error.text1') }}</span>{{ $t('error.text2') }}🚀</p>

        <a href="/" class="back_button flex-x-y">
            <iconView icon="boom" size="2.4em"/>
        </a>
        
    </div>
</template>

<style lang="scss" scoped>
.error-page-404 {
    padding-top: 60px;
    color: var(--color-text-2);
    .title {
        color: var(--color-bg);
        font-size: 100px;
        font-weight: bold;
        text-shadow: 
        0 2px 0 var(--color-theme),
        2px 0 0 var(--color-theme),
        0 -2px 0 var(--color-theme),
        -2px 0 0 var(--color-theme),
        2px 0 0 var(--color-theme);
    }
    .text {
        font-size: 20px;
        font-weight: bold;
        span {
            color: var(--color-theme);
        }
    }
    .back_button {
        margin-top: 40px;
        width: 60px;
        height: 50px;
        border-radius: 6px;
        background: #FF9A31;
        color: #FFFFFF;
        transition: all 0.15s;
        &:hover {
            background: #e78822;
        }
    }
}
</style>