<template>
  <div class="header">
    <!-- 左边 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>

    <!-- 中间输入框 -->
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>

    <!-- 右边 -->
    <router-link to="/city" href="#">
      <div class="header-right" @click="handClick">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    // 使用vuex映射到city
    ...mapState(['city'])
  },
  methods: {
    handClick() {
      console.log("aaaa");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    color: #ccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff

    .arrow-icon {
      font-size: 0.24rem;
      margit-left: -0.04rem;
    }
  }
}
</style>
