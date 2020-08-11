<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li 
      class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
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
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
      margin-top: 0.16rem;
      line-height: 0.44rem;
    }
  }
}
</style>