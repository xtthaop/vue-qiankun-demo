<template>
  <div class="mainweb-navbar">
    <div class="mainweb-navbar-left">
      <div class="mainweb-title" @click="$router.push({ name: 'Home' })">
        vue-qiankun-demo
      </div>
      <div class="mainweb-navigation">
        <span class="mainweb-navigation-item" @click="$store.dispatch('app/openMenu')">
          <AppLink to="/app/microapp/web/test1">微应用</AppLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from './Sidebar/Link'

export default {
  name: 'Navbar',
  components: { AppLink },
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.mainweb-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
  z-index: 1002;

  .mainweb-navbar-left {
    display: flex;
    align-items: center;

    .mainweb-title {
      padding: 0 20px;
      font-size: 22px;
      font-weight: 600;
      white-space: nowrap;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
      cursor: pointer;
    }

    .mainweb-navigation {
      padding: 0 20px;

      .mainweb-navigation-item {
        font-size: 16px;
        font-weight: 300;
        cursor: pointer;

        &:hover {
          color: #409EFF;
        }
      }
    }
  }
}
</style>
