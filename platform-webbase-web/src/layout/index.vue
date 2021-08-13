<template>
  <div :class="classObj" class="mainapp-wrapper">
    <Navbar></Navbar>
    <CollapseBtn class="mainapp-collapse-btn-container" v-show="appRoutes.length"></CollapseBtn>
    <Sidebar class="mainapp-sidebar-container" v-show="appRoutes.length && sidebarOpenState"></Sidebar>
    <div class="mainapp-app-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, AppMain, Sidebar, CollapseBtn } from './components'
import variables from '@/styles/variables.scss'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar,
    CollapseBtn,
  },
  computed: {
    ...mapGetters([
      'appRoutes',
      'sidebarOpenState',
    ]),
    classObj() {
      return {
        noRoutes: !this.appRoutes.length,
        hideSidebar: !this.sidebarOpenState,
        openSidebar: this.sidebarOpenState,
      }
    },
    variables() {
      return variables
    },
  },
}
</script>
