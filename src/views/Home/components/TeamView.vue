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
                jno="https://www.simplerockets.com/u/TheQiqi"
                avatar="https://avatars.githubusercontent.com/u/112358908?v=4"
                bilibili="https://space.bilibili.com/401652755"
                github="https://github.com/Qiqi29"
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