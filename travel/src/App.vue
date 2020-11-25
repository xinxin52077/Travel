<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>