<script setup>
import iconView from '@/components/Icon.vue'

const props = defineProps({
    options: {
        type: Array,
        default: [],
    },
})

// 选项点击事件
const emit = defineEmits(['select'])
const handleSelect = (key) => {
    emit('select', key)
}



</script>

<template>
    <div class="qi-menu">
        <div class="menu_item" v-for="item in options" :key="item.key" @click="handleSelect(item.key)">
            <div class="menu_item_title flex-x">
                <iconView v-show="item.icon" :icon="item.icon" size="1.4em"/>
                <span class="text">{{ item.label }}</span>
            </div>
            <div v-show="item.children" class="menu_item_content">
                <div class="menu_item_children" v-for="item in item.children" :key="item.key" @click.stop="handleSelect(item.key)">
                    <span class="text">{{ item.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.qi-menu {
    padding: 6px;
    margin-top: 4px;
    min-width: 160px;
    border-radius: 10px;
    border: 1px solid var(--color-bg-3);
    background: var(--color-bg-2);
    color: var(--color-text-3);
    box-shadow: 0 5px 15px #00000020;
    animation: showMenuAnim 0.3s cubic-bezier(.15,.5,.2,1) both;
    overflow: hidden;
    .menu_item {
        &:not(:last-child) {
            border-bottom: 1px solid var(--color-bg-3);
        }
        .menu_item_title {
            padding: 10px 12px;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                color: var(--color-theme);
                background: var(--color-bg-3);
            }
            .icon {
                margin-right: 6px;
            }
            .text {
                margin-top: 1px;
            }
        }
        .menu_item_content {
            padding-bottom: 5px;
            .menu_item_children {
                padding: 6px 12px 6px 38px;
                cursor: pointer;
                &:hover {
                    color: var(--color-theme);
                }
            }
        }
    }
}
</style>