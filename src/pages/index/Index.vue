<template>
  <div id="index-container">
    <header>猫眼电影</header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
      <van-tabbar 
        v-model="active" 
        active-color="#f03d37" 
        inactive-color="#696969"
        route>
        <van-tabbar-item name="movies" replace to="/movies">
          <span>电影</span>
          <template #icon="props">
            <!-- <img :src="props.active ? icon.home.active : icon.home.inactive" /> -->
            <svg  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <g :fill="props.active ? '#f03d37' : '#696969'" fill-rule="evenodd">
                <path
                  d="M24.994 47c-.71 0-1.422-.034-2.136-.102C12.445 45.913 4.14 37.645 3.11 27.24c-.657-6.63 1.65-13.115 6.332-17.796 4.68-4.68 11.162-6.992 17.796-6.333 10.36 1.027 18.624 9.29 19.65 19.65.592 5.984-1.192 11.796-5.022 16.365-.162.193-.158.463.007.63l3.425 3.424c.586.584.586 1.534 0 2.12-.586.586-1.535.586-2.12 0l-3.426-3.425c-1.274-1.273-1.353-3.284-.185-4.677 3.307-3.946 4.847-8.97 4.335-14.142-.886-8.942-8.018-16.074-16.96-16.96-5.732-.562-11.336 1.426-15.38 5.47-4.042 4.042-6.034 9.647-5.467 15.378.89 8.98 8.058 16.117 17.045 16.968 3.867.37 7.68-.417 11.03-2.267.725-.4 1.637-.138 2.037.588.4.725.137 1.638-.588 2.038-3.26 1.8-6.896 2.73-10.626 2.73"
                /><path d="M28 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M28 34c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M34 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3M16 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3"
                />
              </g>
            </svg>
          </template>
        </van-tabbar-item>
        <van-tabbar-item name="theater" replace to="/theater">
          <span>影院</span>
          <template #icon="props">
            <!-- <img :src="props.active ? icon.home.active : icon.home.inactive" /> -->
            <svg  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <g :fill="props.active ? '#f03d37' : '#696969'" fill-rule="evenodd">
                <path d="M7 30.423v8.965C7 40.828 8.27 42 9.833 42h30.334C41.73 42 43 40.828 43 39.388v-8.965c-2.492-.64-4.333-2.828-4.333-5.423 0-2.596 1.84-4.785 4.333-5.424V10.61C43 9.17 41.73 8 40.167 8H9.833C8.27 8 7 9.17 7 10.61v8.966c2.492.64 4.333 2.828 4.333 5.424 0 2.595-1.84 4.785-4.333 5.423M40.167 45H9.833C6.617 45 4 42.483 4 39.388V29.11c0-.828.67-1.5 1.5-1.5 1.562 0 2.833-1.17 2.833-2.61s-1.27-2.612-2.833-2.612c-.83 0-1.5-.67-1.5-1.5V10.61C4 7.518 6.617 5 9.833 5h30.334C43.384 5 46 7.517 46 10.61V20.89c0 .83-.672 1.5-1.5 1.5-1.562 0-2.833 1.172-2.833 2.612 0 1.44 1.27 2.61 2.833 2.61.828 0 1.5.672 1.5 1.5V39.39C46 42.483 43.384 45 40.167 45"></path>
              </g>
            </svg>
          </template>
        </van-tabbar-item>
        <van-tabbar-item name="profile" replace to="/profile">
          <span>我的</span>
          <template #icon="props">
            <!-- <img :src="props.active ? icon.home.active : icon.home.inactive" /> -->
            <svg  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <g :fill="props.active ? '#f03d37' : '#696969'" fill-rule="evenodd">
                <path d="M19.916 35.913c-.014-.016-.02-.036-.033-.05-.314-.32-.737-.455-1.153-.432C13.586 33.066 10 27.9 10 21.908 10 13.687 16.728 7 25 7c8.27 0 15 6.687 15 14.907 0 8.22-6.73 14.906-15 14.906-1.787 0-3.493-.328-5.084-.9zm14.502 1.225C39.558 33.98 43 28.343 43 21.908 43 12.032 34.925 4 25 4S7 12.033 7 21.907c0 6.657 3.68 12.466 9.113 15.552l-6.086 5.97c-.59.58-.6 1.53-.02 2.12.294.3.682.45 1.07.45.38 0 .76-.143 1.052-.43l6.916-6.785c1.867.654 3.865 1.028 5.954 1.028 2.324 0 4.54-.455 6.58-1.256l7.15 7.014c.292.287.672.43 1.05.43.39 0 .78-.15 1.072-.45.58-.59.57-1.54-.02-2.12l-6.414-6.292z"></path>
              </g>
            </svg>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: "movies",
    };
  },

  methods: {
    
  },
};
</script>

<style lang="stylus" scoped>
#index-container 
  display: flex;
  flex-direction: column;
  height: 100%;

  header 
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    background: #e54847;
    font-size: 0.18rem;
    color: #fff;

  main 
    flex: 1;
    background: #fff;
  
  footer 
    height: 0.5rem;

    svg 
        width .25rem
        height .25rem
</style>