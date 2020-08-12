<template>
  <div class="detail">
    <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "../components/Banner";
import DetailHeader from "../components/DetailHeader";
import DetailList from "../components/DetailList";
import axios from "axios";

export default {
  name: "Detail", // 递归组件、取消某个页面的缓存
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>