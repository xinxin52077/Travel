<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
        <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "../components/Banner";
import DetailHeader from "../components/DetailHeader";
import DetailList from '../components/DetailList';
export default {
  name: "Detail",
  data () {
    return {
      list: [{
          title: '成人票',
          children: [{
              title: '成人三观',
              children: [{
                  title: '222222222'
              }]
          },{
              title: '成人2444',
              children: [{
                  title: '333333333'
              }]
          },]
      },{
          title: '学生票'
      },{
          title: '儿童票'
      },{
          title: '特惠票'
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>