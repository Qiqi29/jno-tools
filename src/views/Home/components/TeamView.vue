<script setup>
import Member_card from './Member_card.vue'

</script>

<template>
    <div class="team_card">

        <div class="main_title">
            <p>{{ $t('home.team_title') }}</p>
        </div>

        <div class="card_list">
            <Member_card 
                name="琦琦" 
                introduce="我们的目标是星辰大海" 
                avatar="https://img.picgo.net/2024/12/14/2921809d8ae9b27884.jpeg"
                jno="https://www.simplerockets.com/u/TheQiqi"
                bilibili="https://space.bilibili.com/401652755"
                github="https://github.com/Qiqi29"
            />

            <Member_card 
                name="所罗门老狗" 
                introduce="屑狗" 
                avatar="https://img.picgo.net/2024/12/14/YF-70043c16ae9f3f23fd2.png"
                bilibili="https://space.bilibili.com/176089527"
            />
        </div>

    </div>
</template>

<style lang="scss" scoped>
.team_card {
    margin-top: 120px;
    padding: 0 30px;
}
.main_title {
    font-size: 26px;
    font-weight: bold;
    color: var(--color-text-3);
    text-align: center;
}
.card_list {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 10px;
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