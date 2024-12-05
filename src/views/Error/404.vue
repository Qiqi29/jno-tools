<script setup>

</script>

<template>
    <div class="error-page-404 flex-y">

        <p class="title">404</p>

        <p class="text"><span>{{ $t('error.text1') }}</span>{{ $t('error.text2') }}🚀</p>

        <router-link to="/" class="back_button flex-x-y">
            <svg class="icon" width="2em" height="2em"><use xlink:href="#icon-boom"></use></svg>
        </router-link>
        
    </div>
</template>

<style lang="scss" scoped>
.error-page-404 {
    padding-top: 60px;
    color: var(--color-text-2);
    .title {
        font-size: 100px;
        font-weight: bold;
        color: var(--color-bg);
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
        width: 100px;
        height: 40px;
        border-radius: 4px;
        background: #FF9A31;
        transition: all 0.15s;
        &:hover {
            background: #e78822;
        }
        .icon {
            fill: #FFFFFF;
        }
    }
}
</style>