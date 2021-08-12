<template>
  <div class="mainapp-wrapper">
    <Navbar></Navbar>
    <Sidebar class="mainweb-sidebar-container" v-show="appRoutes.length && sidebarOpenState"></Sidebar>
    <div class="mainweb-app-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, AppMain, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar,
  },
  computed: {
    ...mapGetters([
      'appRoutes',
      'sidebarOpenState',
    ]),
  },
}
</script>
