<template>
  <div class="banner">
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
</template>

<script>
export default {
  name: "DetailBanner",
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