<script setup>
import { ref } from 'vue'

// 引入组件
import QTopbar from '@/layout/Topbar.vue'
import QFooter from '@/components/Footer.vue'
import Tool_card from '@/components/Tool_card.vue'
import teamView from './components/TeamView.vue'

// 引入本地图片
import image_label from '@/assets/card_image/image_label.png' 
import image_carft from '@/assets/card_image/image_carft.png' 
import image_mfd from '@/assets/card_image/image_mfd.png' 
import image_vizzy from '@/assets/card_image/image_vizzy.png' 


</script>

<template>
    <div class="home-page">

        <!-- 顶栏 -->
        <QTopbar :title="$t('web.title')"></QTopbar>
        
        <!-- 内容 -->
        <div class="container">
            
            <div class="hello_content flex-y">
                <p class="text">Juno: New Origins</p>
                <p class="title" v-html="$t('home.mainTitle')"></p>
            </div>

            <div class="card_list">
                <Tool_card link="/tool/imagetolabel" :title="$t('imageToLabel.title')" name="琦琦" :image="image_label"/>
                <Tool_card link="/tool/carfteditor" :title="$t('carftEditor.title')" name="琦琦 / JasonCaesar" :image="image_carft"/>
                <Tool_card link="https://www.yuque.com/yuqueyonghuslrsu6/kd8bhu" blank :title="$t('cnDoc.title')" name="琦琦 / 所罗门老狗" :image="image_vizzy"/>
                <!-- <Tool_card link="/tool/imagetomfd" :title="$t('imageToMFD.title')" name="琦琦" :image="image_mfd"/> -->
                <!-- <Tool_card :title="$t('tools.empty')" name="---" image=""/> -->
                <Tool_card :title="$t('tools.empty')" name="---" image=""/>
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
        :deep(span) {
            border-bottom: 3px solid var(--color-theme);    
            padding-bottom: 0px;
        }
    }
}
@media (max-width: 800px) {
    .hello_content {
        padding-top: 60px;
        .text {
            font-size: 18px;
        }
        .title {
            font-size: 30px;
            span {
                border-bottom-width: 2px;
            }
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
</style>