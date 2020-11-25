<template>
  <div class="icons">
    <swiper :options="iconsOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      iconsOption: {
        pagination: ".swiper-pagination",
        // 禁止自动轮播
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/varibles';
@import '../assets/mixins.styl';

// 改变轮播图圆点的颜色
.icons >>> .swiper-pagination-bullet-active {
  background: rgba(0,175,190,.8);
}

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 56%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    height: 0;
    padding-bottom: 25%;
    width: 25%;
    float: left;
    overflow: hidden;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>