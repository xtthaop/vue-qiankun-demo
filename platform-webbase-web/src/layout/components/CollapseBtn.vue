<template>
  <div class="mainapp-collapse-container">
    <div class="mainapp-menu-collapse-inner" @click="handleToggle">
      <div class="mainapp-menu-collapse-bg"></div>
      <div class="mainapp-menu-collapse">
        <i class="el-icon-arrow-left" v-if="sidebarOpenState"></i>
        <i class="el-icon-arrow-right" v-else></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CollapseBtn',
  computed: {
    ...mapGetters([
      'sidebarOpenState',
    ]),
  },
  methods: {
    handleToggle(){
      this.$store.dispatch('app/toggleMenu')
    }
  }
}
</script>

<style scoped lang="scss">
.mainapp-collapse-container{
  position: absolute;
  top: 50%;
  width: 12px;
  height: 66px;
  box-sizing: border-box;
  z-index: 3;

  .mainapp-menu-collapse-inner{
    position: relative;
    top: -50%;
    left: 0;
    width: 12px;
    height: 66px;
    box-sizing: border-box;
    overflow: hidden;

    .mainapp-menu-collapse-bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 66px;
      border-bottom: 8px solid transparent;
      border-right: none;
      border-left: 12px solid #EBEBEB;
      border-top: 8px solid transparent;
      box-sizing: border-box;
      transition: all 0.12s ease;
      -webkit-transition: all 0.12s ease;
    }

    .mainapp-menu-collapse{
      position: relative;
      left: 0;
      right: auto;
      height: 66px;
      cursor: pointer;

      i{
        position: absolute;
        top: 25px;
        left: -1px;
        color: #546478;
        font-weight: 500;
        transition: all 0.12s ease;
        -webkit-transition: all 0.12s ease;
      }
    }
  }
}
</style>
