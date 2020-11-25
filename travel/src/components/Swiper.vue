<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true, // 循环轮播
        speed: 400,
        autoplay: 2000,
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
// 改变轮播图圆点的颜色
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.50%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>