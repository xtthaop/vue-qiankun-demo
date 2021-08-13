<template>
  <div 
    class="microapp-nav" 
    @mouseenter="handleShowMenu" 
    @mouseleave="handleHideMenu"
    @click="handleHideMenu"
    v-if="navShow"
  >
    <div class="hide-btn"></div>
    <div class="menu-container" v-show="menuShow">
      <div v-for="(item, index) in menuData" :key="index" class="menu-item">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return {
      navShow: false,
      menuShow: false,
      menuData: [
        { path: '/test1', title: '测试页面1' },
        { path: '/test2', title: '测试页面2' },
      ]
    }
  },
  created(){
    if(window.__POWERED_BY_QIANKUN__ || process.env == "production"){
      this.navShow = false
    }else{
      this.navShow = true
    }
  },
  methods: {
    handleShowMenu(){
      this.menuShow = true
    },
    handleHideMenu(){
      this.menuShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.hide-btn{
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
}

.menu-container{
  position: fixed;
  left: 0px;
  top: 0px;
  padding: 10px 20px;
  border-right: 1px solid #efefef;
  background: #fff;
  height: calc(100vh - 20px);
  overflow-y: scroll;
  z-index: 3000;

  .menu-item{
    margin: 10px 0;

    a{
      color: #333;
      text-decoration: none;

      &.router-link-exact-active{
        color: #409EFF;
      }
    }
  }
}
</style>
