<template>
    <div class="movie-container">
        <nav>
            <ul>
                <li>
                    北京
                    <!-- <van-icon tag="span" name="arrow-down" /> -->
                    <!-- <span class="yo-ico">&#xf033;</span> -->
                    <span class="yo-ico"></span>
                </li>
                <li>
                    <ul>
                        <li class="active">正在热映</li>
                        <li>即将上映</li>
                    </ul>
                </li>
                <li>
                    <van-icon tag="span" name="search" color="#e54847" size=".25rem"/>
                </li>
            </ul>
        </nav>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "~styles/border.styl";
// @font-face {
//   font-family: 'my-icon';
//   src: url('./my-icon.ttf') format('truetype');
// }
// .my-icon {
//   font-family: 'my-icon';
// }
// .my-icon-extra::before {
//   content: '\e626';
// }
div.movie-container
    nav 
        height .44rem
        >ul 
            height 100%
            display flex
            padding 0 .15rem
            border1px(0 0 1px 0)
            >li
                &:nth-child(1)
                    flex 1
                    padding-left .15rem
                    font-size .15rem
                    display flex
                    align-items center
                    color #666
                    span 
                        font-size 
                        &::after
                            content '\f033'
                &:nth-child(2)
                    flex 3
                    ul 
                        display flex
                        li 
                            flex 1
                            padding 0 .1rem
                            line-height .44rem
                            text-align center
                            color #666
                            margin 0 .1rem
                            font-weight 700
                            &.active
                                border-bottom 1px solid #f03d37
                                height .44rem
                                color #f03d37
                &:nth-child(3)
                    flex 1
                    display flex
                    justify-content flex-end
                    align-items center 

</style>