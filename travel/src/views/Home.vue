<template>
  <div class="home" ref="home">
    <div class="wapper">
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommend from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
import axios from "axios";
import { mapState } from "vuex";

import Bscroll from 'better-scroll'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: '',
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("./json/data.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
    // 滑动
    this.scroll = new Bscroll(this.$refs.home);
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>