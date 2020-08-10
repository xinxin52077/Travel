<template>
  <div class="header">
    <!-- 左边 -->
    <div class="header-left">返回</div>

    <!-- 中间输入框 -->
    <div class="header-input">
      输入城市/景点/游玩主题
    </div>

    <!-- 右边 -->
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4
  color: #fff
  .header-left
    width: .64rem
    float: left
  .header-input
    flex: 1
    background: #fff
    border-radius: .1rem
    margin-top: .12rem
    height: .64rem
    margin-left: .2rem
    color: #ccc
    line-height: .64rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
</style>
