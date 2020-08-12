<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/f1a9be7a999cfb38a16303c124814f70.jpg?ver=1"
      />
      <div class="banner-info">
        <div class="banner-tittle">大量数十三点是的地方方法共同话题</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe635;</span>
          39
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
  data() {
    return {
      bannerImgs: [
        "https://imgs.qunarzz.com/vs_ceph_vs_tts/7c76f5a6-ed53-4e3f-8ca3-fc825627e141.jpg_r_390x260x95_82f6e0e8.jpg",
        "https://imgs.qunarzz.com/vs_ceph_vs_tts/5c9f3912-7c82-4f47-bbef-7a52b1eeadc2.jpg_r_390x260x95_b440e7c9.jpg",
      ],
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