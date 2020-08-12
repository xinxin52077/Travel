<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../common/gallary/gallary";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose () {
        // 当画廊被点击会被自动关闭
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
  },
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    display: flex;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      margin-top: 0.14rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>