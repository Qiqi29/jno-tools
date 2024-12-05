<script setup>

</script>

<template>
    <div class="footer flex-y-x">
        <p>{{ $t('footer.text1') }}</p>
        <p>{{ $t('footer.text2') }}</p>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: 100px;
    width: 100%;
    height: 100px;
    background: #101010;
    border-top: 3px solid var(--color-bg-2);
    color: var(--color-text-5);
    font-size: 13px;
}
</style>