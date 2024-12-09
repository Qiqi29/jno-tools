<script setup>
import iconView from './Icon.vue'


</script>

<template>
    <div class="footer flex-x">
        <div class="left_box">
            <p class="web_title">JNO Toolset</p>
            <div class="text flex-x">
                <iconView icon="mit"/>
                <span>本网站根据 <a href="https://opensource.org/license/MIT" target="_blank">MIT 许可证</a> 发布。</span>
            </div>
            <div class="text flex-x">
                <iconView icon="copyright"/>
                <span>版权所有 2024 - 至今，由 Qiqi 用 ♡ 制作。</span>
            </div>
        </div>
        <div class="right_box">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    padding: 0 50px;
    margin-top: 100px;
    width: 100%;
    height: 200px;
    background: #101214;
    border-top: 3px solid var(--color-bg-2);
    color: var(--color-text-5);
    font-size: 13px;
}
.web_title {
    font-size: 16px;
    color: var(--color-text-4);
}
.text {
    margin-top: 8px;
    .icon {
        margin-right: 6px;
        margin-bottom: 1px;
    }
    a {
        color: var(--color-text-5);
        text-decoration: underline;
        text-underline-offset: 2px;
    }
}
</style>