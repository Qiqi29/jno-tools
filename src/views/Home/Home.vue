<script setup>
import { ref } from 'vue'

// 引入组件
import QTopbar from '@/components/Topbar.vue'
import QFooter from '@/components/Footer.vue'
import itemCard from '@/components/ItemCard.vue'
import teamView from './components/TeamView.vue'

// 引入本地图片
import image_label from '@/assets/card_image/image_label.png' 
import image_mfd from '@/assets/card_image/image_mfd.png' 






</script>

<template>
    <div class="home-page">

        <!-- 顶栏 -->
        <QTopbar :title="$t('web.title')"></QTopbar>
        
        <!-- 内容 -->
        <div class="container">
            
            <div class="hello_content flex-y">
                <p class="text">Juno: New Origins</p>
                <p class="title">{{ $t("home.title1") }}<span>{{ $t("home.title2") }}</span></p>
            </div>

            <div class="card_list">
                <itemCard link="/tool/imagetolabel" :title="$t('imageToLabel.title')" name="琦琦" :image="image_label"/>
                <!-- <itemCard link="/tool/imagetomfd" :title="$t('imageToMFD.title')" name="琦琦 / 所罗门老狗" :image="image_mfd"/> -->
                <itemCard :title="$t('tools.empty')" name="琦琦" image=""/>
                <itemCard :title="$t('tools.empty')" name="琦琦" image=""/>
                <itemCard :title="$t('tools.empty')" name="琦琦" image=""/>
            </div>

            <!-- 制作团队 -->
            <teamView></teamView>

        </div>

        <!-- 页脚 -->
        <QFooter></QFooter>

    </div>
</template>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    max-width: 1200px;
}

.hello_content {
    padding-top: 80px;
    width: 100%;
    .text {
        font-size: 24px;
        color: var(--color-text-2);
    }
    .title {
        font-size: 50px;
        font-weight: bold;
        color: var(--color-text-2);
        span {
            border-bottom: 3px solid var(--color-theme);    
            padding-bottom: 0px;
        }
    }
}


.card_list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 20px;
    padding: 0 30px;
    margin-top: 80px;
}
@media (max-width: 1000px) {
    .card_list {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 800px) {
    .card_list {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 500px) {
    .card_list {
        grid-template-columns: repeat(1, 1fr);
    }
}









@media (max-width: 800px) {
    .hello_content {
        padding-top: 50px;
        .text {
            font-size: 16px;
        }
        .title {
            font-size: 30px;
        }
    }
}

</style>