<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "../components/Banner";
import DetailHeader from "../components/DetailHeader";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    // DetailList
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>