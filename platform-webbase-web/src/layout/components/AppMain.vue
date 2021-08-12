<template>
  <section class="mainapp-app-main">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped lang="scss">
.mainapp-app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  padding-top: 50px;
  position: relative;
  overflow: hidden;
}
</style>
