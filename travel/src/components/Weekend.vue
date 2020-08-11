<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0004",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
        {
          id: "0005",
          imgUrl:
            "https://img1.qunarzz.com/travel/d4/1705/29/de3961c4cb3f3bb5.jpg_r_480x360x95_a03685f0.jpg",
          title: "清远黄腾",
          desc: "清远黄腾峡刺激漂流、CS、赠www送保险1日游",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/mixins';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>